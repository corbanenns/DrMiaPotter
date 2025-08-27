import { useEffect } from "react";
import { Brain, Heart, Zap, Shield, Flower, Baby, Stethoscope, Users } from "lucide-react";

export default function ConditionsTreated() {
  useEffect(() => {
    document.title = "Conditions We Treat - Dr. Camella Potter, ND | Grow Integrative Health";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dr. Mia Potter treats complex conditions through whole-person naturopathic care and LENS neurofeedback. Specializing in mental health, digestive issues, autoimmune conditions, and more.');
    }
  }, []);

  const conditionCategories = [
    {
      icon: Brain,
      title: "Mental & Emotional Wellness",
      description: "Addressing the root causes behind anxiety, depression, and emotional imbalances through nervous system support and naturopathic care.",
      conditions: [
        "Anxiety and panic disorders",
        "Depression and mood disorders", 
        "ADHD and attention difficulties",
        "PTSD and trauma responses",
        "Sleep disorders and insomnia",
        "Stress-related conditions",
        "Emotional regulation challenges",
        "Brain fog and cognitive issues"
      ],
      approach: "I use LENS neurofeedback to help regulate your nervous system while addressing underlying nutritional deficiencies, hormone imbalances, and lifestyle factors that affect mental health."
    },
    {
      icon: Heart,
      title: "Digestive Health",
      description: "Healing the gut-brain connection and restoring digestive function through targeted natural therapies.",
      conditions: [
        "IBS and digestive disorders",
        "Food sensitivities and allergies",
        "Leaky gut syndrome",
        "SIBO and bacterial overgrowth",
        "Acid reflux and GERD",
        "Inflammatory bowel conditions",
        "Chronic constipation or diarrhea",
        "Bloating and gas"
      ],
      approach: "I address digestive issues by identifying food triggers, supporting gut microbiome health, and treating the stress component that often drives digestive symptoms."
    },
    {
      icon: Shield,
      title: "Autoimmune Conditions",
      description: "Supporting immune system balance and reducing inflammation through comprehensive natural approaches.",
      conditions: [
        "Hashimoto's thyroiditis",
        "Rheumatoid arthritis",
        "Multiple sclerosis",
        "Ulcerative colitis/Crohn's",
        "Celiac disease",
        "Psoriasis and eczema",
        "Fibromyalgia",
        "Chronic fatigue syndrome"
      ],
      approach: "My approach focuses on identifying triggers, reducing systemic inflammation, supporting detoxification, and helping your immune system find balance rather than attacking itself."
    },
    {
      icon: Flower,
      title: "Hormonal Balance",
      description: "Restoring hormonal harmony through natural therapies that address root causes, not just symptoms.",
      conditions: [
        "Thyroid disorders",
        "Adrenal fatigue",
        "Menstrual irregularities",
        "PCOS and fertility issues",
        "Menopausal symptoms",
        "PMS and hormonal mood swings",
        "Low energy and metabolism issues",
        "Sleep disruptions from hormones"
      ],
      approach: "I use comprehensive testing to understand your unique hormonal patterns and support balance through targeted nutrition, botanicals, and stress management techniques."
    },
    {
      icon: Baby,
      title: "Pediatric & Family Care",
      description: "Gentle, effective treatment for children and adolescents, addressing the whole family system.",
      conditions: [
        "ADHD and behavioral challenges",
        "Anxiety in children and teens",
        "Sleep issues and night terrors",
        "Digestive problems in kids",
        "Recurrent infections",
        "Mood and emotional regulation",
        "Learning difficulties",
        "Sensory processing issues"
      ],
      approach: "I work with the entire family system, using age-appropriate LENS neurofeedback and gentle naturopathic treatments to help children thrive emotionally and physically."
    },
    {
      icon: Zap,
      title: "Neurological Conditions",
      description: "Supporting brain health and nervous system function through specialized neurofeedback and naturopathic care.",
      conditions: [
        "Traumatic brain injury",
        "Concussion recovery",
        "Migraines and headaches",
        "Seizure disorders",
        "Memory and cognitive decline",
        "Neuropathy",
        "Dizziness and vertigo",
        "Movement disorders"
      ],
      approach: "LENS neurofeedback helps optimize brain function while I address nutritional deficiencies, inflammation, and other factors that impact neurological health."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-soft">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-soft to-sage-warm/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-slate-deep mb-6">
              Conditions We Treat
            </h1>
            <p className="text-xl text-slate-deep/80 max-w-3xl mx-auto leading-relaxed">
              Complex health conditions require more than symptom management—they need a doctor who sees the whole person and addresses root causes
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-warm/5 rounded-2xl p-8 border border-sage-warm/20 mb-16">
            <div className="text-center mb-8">
              <Stethoscope className="w-12 h-12 text-sage-warm mx-auto mb-4" />
              <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-4">
                My Approach to Complex Conditions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-sage-warm mb-4">Beyond Symptom Management</h3>
                <p className="text-slate-deep/90 leading-relaxed">
                  I don't just treat your diagnosis—I treat you as a whole person. Many conditions that seem separate are actually 
                  interconnected through your nervous system, gut health, hormone balance, and stress response.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-warm mb-4">Root Cause Medicine</h3>
                <p className="text-slate-deep/90 leading-relaxed">
                  Rather than masking symptoms, I work to identify and address underlying imbalances. This approach often leads 
                  to improvements in multiple areas of health simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {conditionCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-stone-light">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="bg-sage-warm/20 p-3 rounded-full mr-4">
                        <category.icon className="w-6 h-6 text-sage-warm" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-slate-deep">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-slate-deep/80 leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="bg-sage-warm/5 rounded-lg p-4 border border-sage-warm/20">
                      <h4 className="font-semibold text-sage-warm mb-2">My Approach:</h4>
                      <p className="text-sm text-slate-deep/90 leading-relaxed">
                        {category.approach}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-slate-deep mb-4">Conditions I Treat in This Category:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.conditions.map((condition, conditionIndex) => (
                        <div 
                          key={conditionIndex}
                          className="flex items-center p-3 bg-cream-soft rounded-lg border border-stone-light/50"
                        >
                          <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-slate-deep/90">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work Best With */}
      <section className="py-16 bg-gradient-to-br from-sage-warm/5 to-cream-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-sage-warm mx-auto mb-4" />
            <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-6">
              Who I Work Best With
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
              <h3 className="text-xl font-semibold text-sage-warm mb-4">You're a Great Fit If You:</h3>
              <ul className="space-y-3 text-slate-deep/90">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Have complex, chronic conditions that haven't responded well to conventional treatment alone</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Experience symptoms that seem interconnected across multiple body systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Want to understand the "why" behind your symptoms, not just manage them</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Are willing to make lifestyle changes to support your healing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Prefer natural approaches or want to complement conventional care</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-sage-warm/5 rounded-2xl p-6 border border-sage-warm/20">
              <h3 className="text-xl font-semibold text-sage-warm mb-4">I Excel With Cases Where:</h3>
              <ul className="space-y-3 text-slate-deep/90">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Mental/emotional and physical symptoms are intertwined</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Stress and trauma are contributing to physical illness</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>The nervous system needs regulation for healing to occur</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Multiple specialists haven't provided a complete picture</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sage-warm rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Families need support for children with complex needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-slate-deep text-center mb-12">
            What to Expect in Your Treatment Journey
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-warm text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-warm mb-2">Comprehensive Assessment</h3>
                  <p className="text-slate-deep/90 leading-relaxed">
                    We'll spend a full hour exploring your health history, symptoms, lifestyle, and goals. I'll help you 
                    understand the connections between seemingly unrelated symptoms and identify root causes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-warm text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-warm mb-2">Personalized Treatment Plan</h3>
                  <p className="text-slate-deep/90 leading-relaxed">
                    Based on your unique needs, I'll create a treatment plan that may include LENS neurofeedback, 
                    botanical medicines, nutritional support, lifestyle modifications, and stress management techniques.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-warm text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-warm mb-2">Ongoing Support & Adjustment</h3>
                  <p className="text-slate-deep/90 leading-relaxed">
                    Healing is a journey, not a destination. I'll monitor your progress, adjust treatments as needed, 
                    and provide education and tools so you can take an active role in your health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sage-warm/10 to-sage-warm/5 rounded-2xl p-8 border border-sage-warm/20 text-center">
            <h2 className="text-2xl font-playfair font-bold text-slate-deep mb-4">
              Ready to Address Your Health Holistically?
            </h2>
            <p className="text-lg text-slate-deep/90 mb-6 max-w-2xl mx-auto">
              Don't let complex conditions define your life. Let's work together to uncover root causes 
              and create a path toward lasting wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('/schedule', '_self')}
                className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={() => window.open('/my-approach', '_self')}
                className="border-2 border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                Learn About My Approach
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}