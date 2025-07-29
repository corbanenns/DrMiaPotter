import { useState } from "react";
import { Phone, MapPin, Clock, Shield, Car, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredTime: "",
    concerns: "",
    referralSource: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const submitToFormspree = async () => {
    const formData_encoded = new FormData();
    formData_encoded.append('firstName', formData.firstName);
    formData_encoded.append('lastName', formData.lastName);
    formData_encoded.append('email', formData.email);
    formData_encoded.append('phone', formData.phone);
    formData_encoded.append('consultationType', formData.consultationType);
    formData_encoded.append('preferredTime', formData.preferredTime || 'Not specified');
    formData_encoded.append('concerns', formData.concerns);
    formData_encoded.append('referralSource', formData.referralSource || 'Not specified');
    formData_encoded.append('_subject', `New Consultation Request - ${formData.firstName} ${formData.lastName}`);

    const response = await fetch("https://formspree.io/f/mblkydaw", {
      method: "POST",
      body: formData_encoded,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Formspree failed: ${response.status}`);
    }
    return response;
  };

  const submitToEmailJS = async () => {
    // @ts-ignore - EmailJS is loaded via script tag
    if (typeof emailjs === 'undefined') {
      throw new Error('EmailJS not loaded');
    }

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      consultation_type: formData.consultationType,
      preferred_time: formData.preferredTime || 'Not specified',
      concerns: formData.concerns,
      referral_source: formData.referralSource || 'Not specified',
      to_email: 'drmiapotter@gmail.com'
    };

    // @ts-ignore
    return emailjs.send('service_contact', 'template_contact', templateParams, 'YOUR_PUBLIC_KEY');
  };

  const submitToWeb3Forms = async () => {
    const formData_encoded = new FormData();
    formData_encoded.append('access_key', 'c8b5e4a2-8f3d-4e7b-9c1a-5d6f8e9a2b3c'); // Web3Forms access key
    formData_encoded.append('name', `${formData.firstName} ${formData.lastName}`);
    formData_encoded.append('email', formData.email);
    formData_encoded.append('phone', formData.phone);
    formData_encoded.append('consultation_type', formData.consultationType);
    formData_encoded.append('preferred_time', formData.preferredTime || 'Not specified');
    formData_encoded.append('concerns', formData.concerns);
    formData_encoded.append('referral_source', formData.referralSource || 'Not specified');
    formData_encoded.append('subject', `New Consultation Request - ${formData.firstName} ${formData.lastName}`);
    formData_encoded.append('botcheck', ''); // Honeypot spam protection

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData_encoded
    });

    if (!response.ok) {
      throw new Error(`Web3Forms failed: ${response.status}`);
    }
    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("🚀 CONTACT FORM SUBMISSION STARTED - v2.0");
    console.log("Form data:", formData);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.consultationType || !formData.concerns) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Try multiple services in order of preference
    const services = [
      { name: 'Formspree', submit: submitToFormspree },
      { name: 'Web3Forms', submit: submitToWeb3Forms },
      { name: 'EmailJS', submit: submitToEmailJS }
    ];

    let lastError = null;
    let success = false;

    for (const service of services) {
      try {
        console.log(`Attempting to submit via ${service.name}...`);
        await service.submit();
        console.log(`✅ Success with ${service.name}`);
        success = true;
        break;
      } catch (error) {
        console.error(`❌ ${service.name} failed:`, error);
        lastError = error;
        continue;
      }
    }

    if (success) {
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
        preferredTime: "",
        concerns: "",
        referralSource: ""
      });
    } else {
      console.error("All form submission services failed:", lastError);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please call us directly at (503) 856-2488.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const officeHours = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "Closed" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-soft to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-slate-deep mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto leading-relaxed">
              Ready to take the first step toward optimal health? We're here to answer your questions 
              and help you begin your healing journey with Dr. Potter.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-stone-light">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-slate-deep">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sage-warm/20 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-sage-warm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-deep mb-1">Phone</h3>
                      <a 
                        href="tel:5038562488" 
                        className="text-stone-medium hover:text-sage-warm transition-colors text-lg"
                      >
                        (503) 856-2488
                      </a>
                      <p className="text-sm text-stone-medium mt-1">
                        Call for immediate assistance or to schedule your appointment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-sage-warm/20 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-sage-warm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-deep mb-1">Billing Department</h3>
                      <a 
                        href="tel:9712088915" 
                        className="text-stone-medium hover:text-sage-warm transition-colors text-lg"
                      >
                        (971) 208-8915
                      </a>
                      <p className="text-sm text-stone-medium mt-1">
                        For billing questions and payment assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-sage-warm/20 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-sage-warm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-deep mb-1">Location</h3>
                      <div className="text-stone-medium">
                        1655 SW Highland Ave, Suite 5<br />
                        Redmond, OR 97756
                      </div>
                      <p className="text-sm text-stone-medium mt-1">
                        Located next to Redmond Wellness, convenient parking available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-sage-warm/20 p-3 rounded-full">
                      <Car className="w-6 h-6 text-sage-warm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-deep mb-1">Directions</h3>
                      <p className="text-stone-medium text-sm">Easy access from Highway 97. Free parking on-site. Look for the suite next to Redmond Wellness.</p>
                      <Button 
                        variant="link" 
                        className="text-sage-warm p-0 h-auto mt-2"
                        onClick={() => window.open('https://maps.google.com/?q=1655+SW+Highland+Ave,+Suite+5,+Redmond,+OR+97756', '_blank')}
                      >
                        Get Directions →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-stone-light">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slate-deep flex items-center">
                    <Clock className="w-6 h-6 text-sage-warm mr-3" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="font-medium text-slate-deep">{schedule.day}</span>
                        <span className="text-stone-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                </CardContent>
              </Card>

              {/* Billing & Payment */}
              <Card className="border-stone-light bg-sage-warm/5">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slate-deep flex items-center">
                    <DollarSign className="w-6 h-6 text-sage-warm mr-3" />
                    Billing & Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-medium mb-3">
                    <strong>Log into your ChaRM patient portal</strong> to view and pay any open invoices securely online.
                  </p>
                  <p className="text-stone-medium mb-3">
                    For billing questions or payment assistance, contact our billing department at{" "}
                    <a href="tel:9712088915" className="text-sage-warm hover:underline font-medium">
                      (971) 208-8915
                    </a>
                  </p>
                  <p className="text-stone-medium text-sm">
                    Payment is due at time of service. We accept cash, check, credit cards, and HSA/FSA cards.
                  </p>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-stone-light bg-cream-soft">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slate-deep flex items-center">
                    <Shield className="w-6 h-6 text-sage-warm mr-3" />
                    After Hours & Emergencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-medium mb-3">
                    For medical emergencies, please call 911 or go to your nearest emergency room.
                  </p>
                  <p className="text-stone-medium">For health questions outside office hours, message Dr. Potter through the patient portal. Voicemail messages will be returned within two business days. </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <Card className="border-stone-light">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-slate-deep">
                    Schedule Your Free Consultation
                  </CardTitle>
                  <p className="text-stone-medium">Complete this form and we'll contact you within 48 hours to schedule your complimentary 15-minute consultation.</p>
                </CardHeader>
                <CardContent>
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
                        Email Address *
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
                        Phone Number *
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-stone-medium font-medium">
                          Preferred Consultation Type *
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
                        <Label className="text-stone-medium font-medium">
                          Preferred Time of Day
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger className="mt-2 border-stone-light focus:border-sage-warm">
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (After 5 PM)</SelectItem>
                            <SelectItem value="weekend">Weekend</SelectItem>
                            <SelectItem value="flexible">I'm Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-stone-medium font-medium">
                        How did you hear about us?
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("referralSource", value)}>
                        <SelectTrigger className="mt-2 border-stone-light focus:border-sage-warm">
                          <SelectValue placeholder="Select referral source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral">Doctor Referral</SelectItem>
                          <SelectItem value="friend">Friend/Family</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="website">Other Website</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="concerns" className="text-stone-medium font-medium">
                        Brief Description of Health Concerns *
                      </Label>
                      <Textarea
                        id="concerns"
                        rows={4}
                        required
                        value={formData.concerns}
                        onChange={(e) => handleInputChange("concerns", e.target.value)}
                        className="mt-2 border-stone-light focus:border-sage-warm"
                        placeholder="Please briefly describe your main health concerns and what brought you to seek natural healthcare. This helps Dr. Potter prepare for your consultation."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sage-warm text-slate-deep hover:bg-sage-warm/90 py-4 rounded-lg font-semibold text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
                    </Button>

                    <p className="text-center text-sm text-stone-medium">
                      Or call us directly at{" "}
                      <a href="tel:5038562488" className="text-sage-warm hover:underline font-medium">
                        (503) 856-2488
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-slate-deep mb-4">
              Find Us in Redmond
            </h2>
            <p className="text-lg text-stone-medium">
              Conveniently located in the heart of Central Oregon
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-stone-light">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-4">
                  Easy to Find, Easy to Access
                </h3>
                <div className="space-y-4 text-stone-medium">
                  <p>
                    Our office is conveniently located on SW Highland Avenue, next to Redmond Wellness. 
                    We're easily accessible from Highway 97 and offer free on-site parking.
                  </p>
                  <div className="bg-sage-warm/10 rounded-lg p-4 border border-sage-warm/20">
                    <h4 className="font-semibold text-slate-deep mb-2">Landmarks & Directions:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Next to Redmond Wellness</li>
                      <li>• 5 minutes from downtown Redmond</li>
                      <li>• Wheelchair accessible</li>
                      <li>• Free parking available</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-light/30 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-stone-medium">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-sage-warm" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">1655 SW Highland Ave, Suite 5</p>
                  <p className="text-sm">Redmond, OR 97756</p>
                  <Button 
                    variant="outline"
                    className="mt-4 border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep"
                    onClick={() => window.open('https://maps.google.com/?q=1655+SW+Highland+Ave,+Suite+5,+Redmond,+OR+97756', '_blank')}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sage-warm/10 to-cream-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-slate-deep mb-4">
            Questions? We're Here to Help
          </h2>
          <p className="text-xl text-stone-medium mb-8">
            Don't hesitate to reach out. Dr. Potter and her team are committed to providing 
            exceptional care and support throughout your healing journey.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-4 rounded-full font-semibold text-lg"
              onClick={() => window.location.href = 'tel:5038562488'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (503) 856-2488
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
