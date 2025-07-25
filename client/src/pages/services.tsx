import { Brain, Leaf, Heart, Activity, Beaker, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const mainServices = [
    {
      icon: Brain,
      title: "LENS Neurofeedback",
      description: "Low Energy Neurofeedback System that gently optimizes brain function",
      details: [
        "Non-invasive brain training technology",
        "Helps with ADHD, anxiety, trauma, and sleep issues",
        "Suitable for ages 1 and up",
        "Minimal side effects",
        "Typically 10-20 sessions for optimal results"
      ],
      process: "During LENS sessions, small sensors are placed on your scalp to read brainwave patterns. The system then provides gentle feedback to encourage optimal brain function. Most patients find sessions relaxing and may notice improvements in focus, sleep, and emotional regulation."
    },
    {
      icon: Leaf,
      title: "Naturopathic Medicine",
      description: "Comprehensive natural medicine addressing root causes of illness",
      details: [
        "Detailed health history and physical examination",
        "Functional laboratory testing",
        "Nutritional counseling and supplementation",
        "Herbal medicine prescriptions",
        "Lifestyle and stress management guidance"
      ],
      process: "Your first visit includes a comprehensive 60-90 minute consultation covering your complete health history, current symptoms, and health goals. We'll develop a personalized treatment plan using natural therapies to restore your body's optimal function."
    }
  ];

  const specializedServices = [
    {
      icon: Heart,
      title: "Digestive Health",
      description: "Comprehensive approach to gut health and digestive disorders",
      conditions: ["IBS & IBD", "SIBO", "Food sensitivities", "Reflux", "Gastroparesis"]
    },
    {
      icon: Activity,
      title: "Hormone Balance",
      description: "Natural hormone optimization for men and women",
      conditions: ["Thyroid disorders", "Adrenal fatigue", "Reproductive health", "Menopause support"]
    },
    {
      icon: Beaker,
      title: "Autoimmune Support",
      description: "Natural approaches to autoimmune conditions",
      conditions: ["Hashimoto's", "Rheumatoid arthritis", "Lupus", "MS support"]
    },
    {
      icon: Zap,
      title: "Mental/Emotional Health",
      description: "Integrative approach to mental wellness",
      conditions: ["Anxiety & depression", "ADHD", "Trauma & PTSD", "Sleep disorders"]
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-soft to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-slate-deep mb-6">
              Our Services
            </h1>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto leading-relaxed">
              Comprehensive natural healthcare combining the latest in neurofeedback technology 
              with time-tested naturopathic medicine principles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-sage-warm/20 p-4 rounded-full">
                      <service.icon className="w-8 h-8 text-sage-warm" />
                    </div>
                    <h2 className="font-playfair text-3xl font-bold text-slate-deep">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-stone-medium leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-cream-soft rounded-lg p-6 border border-stone-light">
                    <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-4">
                      What to Expect
                    </h3>
                    <p className="text-stone-medium mb-4">{service.process}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-sage-warm rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-stone-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-sage-warm/10 to-sage-warm/20 rounded-2xl p-8 text-center">
                    <service.icon className="w-24 h-24 text-sage-warm mx-auto mb-6" />
                    <h3 className="font-playfair text-2xl font-bold text-slate-deep mb-4">
                      Schedule a {service.title} Session
                    </h3>
                    <p className="text-stone-medium mb-6">
                      Ready to experience the benefits of {service.title.toLowerCase()}? 
                      Book your consultation today.
                    </p>
                    <Button className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-3 rounded-full font-semibold">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Specialized Treatment Areas
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              Targeted approaches for specific health conditions using our integrated methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-stone-light hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-sage-warm/20 p-3 rounded-full">
                    <service.icon className="w-6 h-6 text-sage-warm" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-deep">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-stone-medium mb-6">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-slate-deep mb-3">Conditions We Treat:</h4>
                  <ul className="space-y-1">
                    {service.conditions.map((condition, conditionIndex) => (
                      <li key={conditionIndex} className="text-stone-medium text-sm">
                        • {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Your Treatment Journey
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              A step-by-step approach to achieving optimal health and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Comprehensive 60-90 minute evaluation of your health history and current concerns"
              },
              {
                step: "2", 
                title: "Assessment & Testing",
                description: "Functional lab testing and LENS brain mapping to identify underlying imbalances"
              },
              {
                step: "3",
                title: "Personalized Plan",
                description: "Custom treatment protocol combining LENS sessions with naturopathic therapies"
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Regular follow-ups to monitor progress and adjust treatment as needed"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-sage-warm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-slate-deep">{step.step}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-medium">{step.description}</p>
              </div>
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
            Schedule your free 15-minute consultation to learn how our integrated approach 
            can help you achieve optimal health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-3 rounded-full font-semibold text-lg"
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
        </div>
      </section>
    </div>
  );
}
