import { Brain, Heart, Scale, Shield, Users, Zap, Activity, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Conditions() {
  const conditionCategories = [
    {
      icon: Brain,
      title: "Mental & Emotional Health",
      description: "Comprehensive approach to neurological and psychological wellness",
      conditions: [
        {
          name: "ADHD & Focus Issues",
          symptoms: ["Difficulty concentrating", "Hyperactivity", "Impulsiveness", "Executive function challenges"],
          approach: "LENS neurofeedback combined with nutritional support and lifestyle modifications to optimize brain function and focus."
        },
        {
          name: "Anxiety & Depression",
          symptoms: ["Persistent worry", "Mood swings", "Fatigue", "Sleep disturbances"],
          approach: "Integrated treatment addressing neurotransmitter balance, stress response, and underlying physiological factors."
        },
        {
          name: "Sleep Disorders",
          symptoms: ["Difficulty falling asleep", "Frequent waking", "Non-restorative sleep", "Daytime fatigue"],
          approach: "LENS therapy to regulate sleep-wake cycles plus natural sleep hygiene and hormone optimization."
        },
        {
          name: "Trauma & PTSD",
          symptoms: ["Flashbacks", "Hypervigilance", "Emotional numbing", "Physical tension"],
          approach: "Gentle LENS neurofeedback to calm the nervous system combined with trauma-informed naturopathic care."
        }
      ]
    },
    {
      icon: Heart,
      title: "Digestive Health",
      description: "Healing the gut to restore overall health and vitality",
      conditions: [
        {
          name: "IBS & IBD",
          symptoms: ["Abdominal pain", "Bloating", "Irregular bowel movements", "Food sensitivities"],
          approach: "Comprehensive gut healing protocol including dietary modifications, probiotics, and anti-inflammatory herbs."
        },
        {
          name: "SIBO & Gut Dysbiosis",
          symptoms: ["Bloating after meals", "Gas", "Nutrient deficiencies", "Fatigue"],
          approach: "Targeted antimicrobial protocols, gut barrier repair, and microbiome restoration."
        },
        {
          name: "Food Sensitivities",
          symptoms: ["Digestive upset", "Skin issues", "Brain fog", "Joint pain"],
          approach: "Elimination diets, food sensitivity testing, and gut healing to reduce reactivity."
        },
        {
          name: "Reflux & Gastroparesis",
          symptoms: ["Heartburn", "Nausea", "Early satiety", "Stomach pain"],
          approach: "Natural approaches to improve stomach acid production and motility."
        }
      ]
    },
    {
      icon: Scale,
      title: "Hormonal Balance",
      description: "Restoring optimal hormone function for energy and vitality",
      conditions: [
        {
          name: "Thyroid Disorders",
          symptoms: ["Fatigue", "Weight changes", "Hair loss", "Constipation"],
          approach: "Comprehensive thyroid testing and natural thyroid support including T3/T4 optimization."
        },
        {
          name: "Adrenal Fatigue",
          symptoms: ["Chronic fatigue", "Stress sensitivity", "Sleep issues", "Cravings"],
          approach: "Adrenal support through adaptogenic herbs, stress management, and lifestyle modifications."
        },
        {
          name: "Reproductive Health",
          symptoms: ["Irregular cycles", "PMS", "Fertility challenges", "PCOS"],
          approach: "Natural hormone balancing through nutrition, herbs, and stress management."
        },
        {
          name: "Menopause Support",
          symptoms: ["Hot flashes", "Night sweats", "Mood changes", "Sleep disturbances"],
          approach: "Natural hormone replacement and symptom management for smooth transitions."
        }
      ]
    },
    {
      icon: Shield,
      title: "Autoimmune Conditions",
      description: "Calming immune system overactivity through natural approaches",
      conditions: [
        {
          name: "Hashimoto's Thyroiditis",
          symptoms: ["Fatigue", "Weight gain", "Brain fog", "Cold intolerance"],
          approach: "Anti-inflammatory protocols, gut healing, and natural thyroid support."
        },
        {
          name: "Rheumatoid Arthritis",
          symptoms: ["Joint pain", "Stiffness", "Swelling", "Fatigue"],
          approach: "Natural anti-inflammatory approaches and immune system modulation."
        },
        {
          name: "Lupus Support",
          symptoms: ["Fatigue", "Joint pain", "Skin rashes", "Organ involvement"],
          approach: "Gentle immune support and symptom management through natural therapies."
        },
        {
          name: "Multiple Sclerosis",
          symptoms: ["Neurological symptoms", "Fatigue", "Cognitive issues", "Mobility challenges"],
          approach: "LENS neurofeedback for neuroplasticity plus anti-inflammatory nutrition."
        }
      ]
    }
  ];

  const pediatricConditions = [
    "ADHD & Learning Difficulties",
    "Developmental Delays", 
    "Anxiety & Behavioral Issues",
    "Sleep Problems",
    "Digestive Issues",
    "Sensory Processing Disorders",
    "Emotional Regulation Challenges",
    "Academic Performance Issues"
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-soft to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-slate-deep mb-6">
              Conditions We Treat
            </h1>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto leading-relaxed">Specialized care for complex health conditions through comprehensive whole-person assessment and treatment. We address your entire system and underlying root causes, not just isolated symptoms.</p>
          </div>
        </div>
      </section>
      {/* Main Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {conditionCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="bg-sage-warm/20 p-4 rounded-full">
                      <category.icon className="w-8 h-8 text-sage-warm" />
                    </div>
                    <h2 className="font-playfair text-3xl font-bold text-slate-deep">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-lg text-stone-medium max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.conditions.map((condition, conditionIndex) => (
                    <div key={conditionIndex} className="bg-cream-soft rounded-lg p-6 border border-stone-light hover:shadow-lg transition-shadow duration-300 stagger-item">
                      <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-4">
                        {condition.name}
                      </h3>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-deep mb-2">Common Symptoms:</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-stone-medium">
                          {condition.symptoms.map((symptom, symptomIndex) => (
                            <li key={symptomIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-sage-warm rounded-full flex-shrink-0"></div>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded p-4 border border-stone-light">
                        <h4 className="font-semibold text-slate-deep mb-2">Our Approach:</h4>
                        <p className="text-sm text-stone-medium">{condition.approach}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pediatric Section */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-sage-warm/20 p-4 rounded-full">
                <Users className="w-8 h-8 text-sage-warm" />
              </div>
              <h2 className="font-playfair text-3xl font-bold text-slate-deep">
                Pediatric Conditions (Ages 1+)
              </h2>
            </div>
            <p className="text-lg text-stone-medium max-w-2xl mx-auto">
              Gentle, age-appropriate treatments that support healthy development while addressing current challenges.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-stone-light">
            <h3 className="font-playfair text-2xl font-semibold text-slate-deep mb-6 text-center">
              Specialized Pediatric Care
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {pediatricConditions.map((condition, index) => (
                <div key={index} className="bg-cream-soft rounded-lg p-4 text-center">
                  <span className="text-sm text-slate-deep font-medium">{condition}</span>
                </div>
              ))}
            </div>

            <div className="bg-sage-warm/10 rounded-lg p-6 border border-sage-warm/20">
              <h4 className="font-playfair text-lg font-semibold text-slate-deep mb-3">
                Why Parents Choose Our Approach
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-stone-medium">
                <div>
                  <strong className="text-slate-deep">Gentle & Non-invasive:</strong> LENS neurofeedback is completely safe and comfortable for children
                </div>
                <div>
                  <strong className="text-slate-deep">Natural Solutions:</strong> Address root causes without harsh medications or side effects
                </div>
                <div>
                  <strong className="text-slate-deep">Family-Centered:</strong> We work with the whole family to create lasting positive changes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Treatment Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Our Integrated Treatment Approach
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              Every condition is treated through our unique four-layer healing methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Neurological",
                description: "LENS neurofeedback to optimize brain function and nervous system regulation"
              },
              {
                icon: Activity,
                title: "Physical", 
                description: "Naturopathic medicine addressing nutrition, hormones, and body systems"
              },
              {
                icon: Heart,
                title: "Emotional",
                description: "Support for mental health, stress management, and emotional well-being"
              },
              {
                icon: Leaf,
                title: "Energetic",
                description: "Holistic approaches to restore overall vitality and life force"
              }
            ].map((layer, index) => (
              <div key={index} className="text-center">
                <div className="bg-sage-warm/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <layer.icon className="w-8 h-8 text-sage-warm" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-3">
                  {layer.title}
                </h3>
                <p className="text-stone-medium">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sage-warm/10 to-cream-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-slate-deep mb-4">
            Don't See Your Condition Listed?
          </h2>
          <p className="text-xl text-stone-medium mb-8">
            We treat many conditions not listed here. Our integrative approach often helps 
            with complex cases where other treatments have fallen short.
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
