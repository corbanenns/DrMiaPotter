import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendContactFormEmail, sendConfirmationEmail } from "./email";

// Contact form schema for validation
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  consultationType: z.enum(["phone", "in-person", "video"]),
  preferredTime: z.string().optional(),
  urgency: z.string().optional(),
  concerns: z.string().min(10, "Please provide more details about your health concerns"),
  referralSource: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the submission for tracking
      console.log("New consultation request:", {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        phone: validatedData.phone,
        consultationType: validatedData.consultationType,
        timestamp: new Date().toISOString()
      });

      // Send email to Dr. Potter
      const emailSent = await sendContactFormEmail(validatedData);
      
      if (!emailSent) {
        throw new Error("Failed to send notification email");
      }

      // Send confirmation email to patient
      await sendConfirmationEmail(validatedData);

      // Send success response
      res.status(200).json({
        success: true,
        message: "Consultation request received. We'll contact you within 24 hours.",
        referenceId: `GIH-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      });

    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof z.ZodError) {
        // Validation error
        res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        // Server error
        res.status(500).json({
          success: false,
          message: "We're experiencing technical difficulties. Please call us directly at (503) 856-2488."
        });
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "Grow Integrative Health Website"
    });
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
