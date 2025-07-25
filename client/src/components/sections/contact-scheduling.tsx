import { useState } from "react";
import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactScheduling() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consultationType: "",
    concerns: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Consultation Request Sent",
          description: "We'll contact you within 24 hours to schedule your free consultation.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          consultationType: "",
          concerns: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please call us directly at (458) 219-8915.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-stone-medium">
            Schedule your free consultation today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-cream-soft rounded-lg p-8 border border-stone-light">
              <h3 className="font-playfair text-2xl font-bold text-slate-deep mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-sage-warm/20 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-sage-warm" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-deep">Phone</div>
                    <a 
                      href="tel:4582198915" 
                      className="text-stone-medium hover:text-sage-warm transition-colors"
                    >
                      (458) 219-8915
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-sage-warm/20 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-sage-warm" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-deep">Location</div>
                    <div className="text-stone-medium">
                      1655 SW Highland Ave, Suite 5<br />
                      Redmond, OR 97756<br />
                      <span className="text-sm">(Next to Redmond Wellness)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-sage-warm/20 p-3 rounded-full">
                    <Clock className="w-5 h-5 text-sage-warm" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-deep">Hours</div>
                    <div className="text-stone-medium">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Weekend & Evening appointments available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sage-warm/10 rounded-lg p-6 border border-sage-warm/20">
              <h3 className="font-playfair text-lg font-semibold text-slate-deep mb-3">
                New Patient Special
              </h3>
              <p className="text-stone-medium mb-4">
                Free 15-minute consultation to discuss your health goals and determine if our approach is right for you.
              </p>
              <ul className="text-stone-medium space-y-1 text-sm">
                <li>• No obligation consultation</li>
                <li>• Discuss your health concerns</li>
                <li>• Learn about our unique approach</li>
                <li>• Get questions answered</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-cream-soft rounded-lg p-8 border border-stone-light">
              <h3 className="font-playfair text-2xl font-bold text-slate-deep mb-6">
                Schedule Your Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-stone-medium font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-2 border-stone-light focus:border-sage-warm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-stone-medium font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-2 border-stone-light focus:border-sage-warm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-stone-medium font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2 border-stone-light focus:border-sage-warm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-stone-medium font-medium">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 border-stone-light focus:border-sage-warm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label className="text-stone-medium font-medium">
                    Preferred Consultation Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("consultationType", value)}>
                    <SelectTrigger className="mt-2 border-stone-light focus:border-sage-warm">
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone Consultation</SelectItem>
                      <SelectItem value="in-person">In-Person Consultation</SelectItem>
                      <SelectItem value="video">Video Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="concerns" className="text-stone-medium font-medium">
                    Brief Description of Health Concerns
                  </Label>
                  <Textarea
                    id="concerns"
                    rows={4}
                    value={formData.concerns}
                    onChange={(e) => handleInputChange("concerns", e.target.value)}
                    className="mt-2 border-stone-light focus:border-sage-warm"
                    placeholder="Please briefly describe what brought you to seek natural healthcare..."
                  />
                </div>

                <div className="text-sm text-stone-medium bg-white p-4 rounded border">
                  <Shield className="w-4 h-4 text-sage-warm mr-2 inline" />
                  Your information is protected by HIPAA and will never be shared with third parties.
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage-warm text-slate-deep hover:bg-sage-warm/90 py-4 rounded-lg font-semibold text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
