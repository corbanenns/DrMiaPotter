import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consultationType: string;
  preferredTime?: string;
  concerns: string;
  referralSource?: string;
}

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
New Consultation Request - Grow Integrative Health

Patient Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Preferred Consultation Type: ${formData.consultationType}
- Preferred Time: ${formData.preferredTime || 'Not specified'}
- How they heard about us: ${formData.referralSource || 'Not specified'}

Health Concerns:
${formData.concerns}

---
This message was sent through the Grow Integrative Health website contact form.
Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
`;

    const msg = {
      to: 'drmiapotter@gmail.com',
      from: 'noreply@growintegrativehealth.com', // This should be a verified sender in SendGrid
      subject: `New Consultation Request - ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    };

    await sgMail.send(msg);
    console.log('Contact form email sent successfully to Dr. Potter');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendConfirmationEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const confirmationContent = `
Dear ${formData.firstName},

Thank you for requesting a consultation with Dr. Camella (Mia) Potter, ND at Grow Integrative Health.

We have received your request and will contact you within 24 hours to schedule your complimentary 15-minute consultation.

What to expect next:
• A team member will call you at ${formData.phone} to schedule your consultation
• We'll discuss your health concerns and determine the best approach for your care
• All communications are HIPAA-compliant and confidential

If you have any urgent questions, please call us at (503) 856-2488.

Best regards,
The Grow Integrative Health Team

---
This is an automated confirmation. Please do not reply to this email.
If you need to make changes to your request, please call us directly.
`;

    const msg = {
      to: formData.email,
      from: 'noreply@growintegrativehealth.com',
      subject: 'Consultation Request Confirmed - Grow Integrative Health',
      text: confirmationContent,
      html: confirmationContent.replace(/\n/g, '<br>')
    };

    await sgMail.send(msg);
    console.log('Confirmation email sent to patient');
    return true;
  } catch (error) {
    console.error('SendGrid confirmation email error:', error);
    return false;
  }
}