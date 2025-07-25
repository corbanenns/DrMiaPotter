import { Brain, Heart, Scale, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConditionsTreated() {
  const conditions = [
    {
      icon: Brain,
      title: "Mental/Emotional Health",
      items: ["ADHD & Focus Issues", "Anxiety & Depression", "Sleep Disorders", "Trauma & PTSD"]
    },
    {
      icon: Heart,
      title: "Digestive Disorders",
      items: ["IBS & IBD", "Food Sensitivities", "SIBO & Gut Dysbiosis", "Reflux & Gastroparesis"]
    },
    {
      icon: Scale,
      title: "Hormonal Balance",
      items: ["Thyroid Disorders", "Adrenal Fatigue", "Reproductive Health", "Menopause Support"]
    },
    {
      icon: Shield,
      title: "Autoimmune Conditions",
      items: ["Hashimoto's Thyroiditis", "Rheumatoid Arthritis", "Lupus & MS", "Inflammatory Conditions"]
    }
  ];

  return (
    <section id="conditions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
            Conditions We Treat
          </h2>
          <p className="text-xl text-stone-medium max-w-3xl mx-auto">
            Specializing in complex cases where mental/emotional and physical symptoms intertwine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, index) => (
            <div 
              key={index}
              className="bg-cream-soft rounded-lg p-6 border border-stone-light hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <div className="bg-sage-warm/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <condition.icon className="w-8 h-8 text-sage-warm" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-slate-deep mb-3">
                  {condition.title}
                </h3>
                <ul className="text-stone-medium space-y-1 text-sm">
                  {condition.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-3 rounded-full font-semibold"
            onClick={() => window.open('/conditions-treated', '_self')}
          >
            View All Conditions We Treat
          </Button>
        </div>
      </div>
    </section>
  );
}
