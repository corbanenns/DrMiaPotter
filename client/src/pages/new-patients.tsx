import { useState } from "react";
import { Clock, FileText, DollarSign, Shield, CheckCircle, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewPatients() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const appointmentProcess = [
    {
      step: "1",
      title: "Schedule Your Consultation",
      description: "Call (458) 219-8915 or use our online form to schedule your free 15-minute consultation.",
      details: "During this brief call, we'll discuss your health concerns and determine if our approach is right for you."
    },
    {
      step: "2",
      title: "Complete Intake Forms",
      description: "Fill out comprehensive health history forms before your first appointment.",
      details: "These forms help Dr. Potter understand your complete health picture and prepare for your visit."
    },
    {
      step: "3",
      title: "Initial Appointment",
      description: "Your first visit is 60-90 minutes with Dr. Potter for a thorough evaluation.",
      details: "We'll review your health history, discuss your goals, and begin developing your personalized treatment plan."
    },
    {
      step: "4",
      title: "Treatment Plan",
      description: "Receive your customized treatment protocol combining LENS and naturopathic medicine.",
      details: "Your plan may include LENS sessions, nutritional recommendations, supplements, and lifestyle modifications."
    }
  ];

  const whatToBring = [
    "List of current medications and supplements",
    "Recent lab results (if available)",
    "Medical records relevant to your condition",
    "Insurance cards",
    "Form of payment",
    "List of questions or concerns"
  ];

  const investmentOptions = [
    {
      service: "Free Consultation",
      duration: "15 minutes",
      price: "Complimentary",
      description: "Phone or video consultation to discuss your needs and our approach",
      included: ["Health concern discussion", "Treatment approach overview", "Questions answered"]
    },
    {
      service: "Initial Appointment",
      duration: "60-90 minutes",
      price: "$350",
      description: "Comprehensive evaluation with Dr. Potter",
      included: ["Complete health history", "Physical examination", "Treatment plan development", "Initial recommendations"]
    },
    {
      service: "LENS Neurofeedback",
      duration: "45 minutes",
      price: "$120 per session",
      description: "Individual LENS neurofeedback sessions",
      included: ["Brain mapping assessment", "LENS session", "Progress tracking", "Session notes"]
    },
    {
      service: "Follow-up Visits",
      duration: "30-45 minutes", 
      price: "$200",
      description: "Ongoing care and treatment adjustments",
      included: ["Progress evaluation", "Treatment modifications", "Continued support", "Lab review if needed"]
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-soft to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-slate-deep mb-6">
              Welcome New Patients
            </h1>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto leading-relaxed">
              Starting your healing journey with Dr. Potter is simple. Here's everything you need to know 
              about your first visit and what to expect from our comprehensive approach to health.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              Your journey to optimal health begins with understanding and personalized care
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {appointmentProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-sage-warm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-slate-deep">{step.step}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-medium mb-4">{step.description}</p>
                <div className="bg-cream-soft rounded-lg p-4 border border-stone-light">
                  <p className="text-sm text-stone-medium">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Appointment Details */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl font-bold text-slate-deep">
                Your First Appointment
              </h2>
              <p className="text-lg text-stone-medium leading-relaxed">
                Unlike rushed conventional appointments, Dr. Potter dedicates a full 60-90 minutes 
                to truly understand your health story and develop a personalized treatment plan.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-sage-warm/20 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-sage-warm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">Comprehensive Health History</h3>
                    <p className="text-stone-medium">We'll discuss your current concerns, past medical history, 
                    family history, lifestyle factors, and health goals in detail.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sage-warm/20 p-3 rounded-full">
                    <FileText className="w-6 h-6 text-sage-warm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">Physical Examination</h3>
                    <p className="text-stone-medium">Thorough physical exam including vital signs, 
                    neurological assessment, and any specialized testing as needed.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sage-warm/20 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-sage-warm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">Personalized Treatment Plan</h3>
                    <p className="text-stone-medium">Based on your unique situation, we'll develop 
                    an integrated plan combining LENS neurofeedback with naturopathic treatments.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-light">
              <h3 className="font-playfair text-2xl font-semibold text-slate-deep mb-6">
                What to Bring
              </h3>
              <ul className="space-y-3">
                {whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-sage-warm mt-0.5 flex-shrink-0" />
                    <span className="text-stone-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-sage-warm/10 rounded-lg border border-sage-warm/20">
                <h4 className="font-semibold text-slate-deep mb-2">Important Note:</h4>
                <p className="text-sm text-stone-medium">
                  Please arrive 15 minutes early to complete any remaining paperwork. 
                  If you need to cancel or reschedule, please give us 24 hours notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms & Preparation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Forms & Preparation
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              To make the most of your appointment time, please complete these forms before your visit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-stone-light">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-slate-deep flex items-center">
                  <FileText className="w-6 h-6 text-sage-warm mr-3" />
                  Health History Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-medium mb-4">
                  Comprehensive questionnaire about your medical history, current symptoms, and health goals.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Form
                </Button>
              </CardContent>
            </Card>

            <Card className="border-stone-light">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-slate-deep flex items-center">
                  <Shield className="w-6 h-6 text-sage-warm mr-3" />
                  HIPAA & Consent Forms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-medium mb-4">
                  Privacy notices and treatment consent forms required for all new patients.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Forms
                </Button>
              </CardContent>
            </Card>

            <Card className="border-stone-light">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-slate-deep flex items-center">
                  <DollarSign className="w-6 h-6 text-sage-warm mr-3" />
                  Financial Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-medium mb-4">
                  Information about our payment policies, insurance, and payment options.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Policy
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-stone-medium mb-4">
              Need help with forms or have questions? We're here to help.
            </p>
            <Button 
              variant="outline"
              className="border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (458) 219-8915
            </Button>
          </div>
        </div>
      </section>

      {/* Investment & Insurance */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Investment in Your Health
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              Transparent pricing for comprehensive care. We believe in providing value through 
              personalized attention and effective treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentOptions.map((option, index) => (
              <Card key={index} className="border-stone-light hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-playfair text-xl text-slate-deep mb-2">
                        {option.service}
                      </CardTitle>
                      <p className="text-stone-medium">{option.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-playfair text-2xl font-bold text-sage-warm">
                        {option.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-medium mb-4">{option.description}</p>
                  <div>
                    <h4 className="font-semibold text-slate-deep mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {option.included.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-sage-warm flex-shrink-0" />
                          <span className="text-stone-medium text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-stone-light">
            <h3 className="font-playfair text-2xl font-semibold text-slate-deep mb-6 text-center">
              Insurance & Payment Options
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-deep mb-4">Insurance Coverage</h4>
                <div className="space-y-3 text-stone-medium">
                  <p>
                    • We are not in-network with insurance companies but provide superbills for possible reimbursement
                  </p>
                  <p>
                    • Many patients use HSA/FSA accounts for payment
                  </p>
                  <p>
                    • Some insurance plans cover naturopathic care - check with your provider
                  </p>
                  <p>
                    • LENS neurofeedback may be covered under mental health benefits
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-deep mb-4">Payment Methods</h4>
                <div className="space-y-3 text-stone-medium">
                  <p>• Cash, check, or credit card accepted</p>
                  <p>• HSA/FSA cards welcome</p>
                  <p>• Payment plans available for longer treatment protocols</p>
                  <p>• Payment due at time of service</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-sage-warm/10 rounded-lg border border-sage-warm/20">
              <p className="text-stone-medium text-sm">
                <strong>Investment Perspective:</strong> While our services require an upfront investment, 
                many patients find that addressing root causes leads to long-term savings on medications, 
                specialists, and ongoing health issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-stone-medium">
              Common questions from new patients
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does treatment typically take?",
                answer: "Treatment length varies by individual and condition. Many patients see improvements within 4-6 weeks, with optimal results often achieved in 3-6 months. Some conditions may require longer treatment."
              },
              {
                question: "Is LENS neurofeedback safe for children?",
                answer: "Yes, LENS is completely safe for children 6 years and older. It's non-invasive, comfortable, and children typically enjoy the sessions. Many parents see remarkable improvements in their children's focus, behavior, and emotional regulation."
              },
              {
                question: "Can I continue seeing my other doctors?",
                answer: "Absolutely! We work collaboratively with your existing healthcare team. Our approach complements conventional medicine and we encourage coordination of care for optimal results."
              },
              {
                question: "What if I don't see improvements?",
                answer: "We monitor progress closely and adjust treatment as needed. If you're not seeing the improvements we expect, we'll modify your protocol. Our goal is your success, and we're committed to finding what works for you."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-stone-light">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleSection(`faq-${index}`)}
                >
                  <CardTitle className="font-playfair text-lg text-slate-deep flex justify-between items-center">
                    {faq.question}
                    <span className="text-sage-warm">
                      {expandedSection === `faq-${index}` ? '−' : '+'}
                    </span>
                  </CardTitle>
                </CardHeader>
                {expandedSection === `faq-${index}` && (
                  <CardContent>
                    <p className="text-stone-medium">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sage-warm/10 to-cream-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-slate-deep mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-stone-medium mb-8">
            Take the first step toward optimal health. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep px-8 py-3 rounded-full font-semibold text-lg"
            >
              Call (458) 219-8915
            </Button>
          </div>
          <p className="text-sm text-stone-medium mt-4">
            Free consultation • No obligation • HIPAA compliant
          </p>
        </div>
      </section>
    </div>
  );
}
