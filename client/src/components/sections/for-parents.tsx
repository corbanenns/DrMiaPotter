import { Users, Heart, Lightbulb, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ForParents() {
  const childConditions = [
    "ADHD & Focus Issues",
    "Anxiety & Worry", 
    "Sleep Problems",
    "Behavioral Challenges",
    "Digestive Issues",
    "Emotional Regulation",
    "Learning Difficulties",
    "Sensory Processing"
  ];

  return (
    <section id="parents" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
            For Parents: Your Child's Struggles Don't Define Their Future
          </h2>
          <p className="text-xl text-stone-medium max-w-3xl mx-auto">
            Specialized natural care for children with ADHD, anxiety, and behavioral challenges.
            No judgment, just solutions that work with your child's developing nervous system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-sage-warm/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 text-sage-warm" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-3">Ages 6 & Up</h3>
            <p className="text-stone-medium">
              Gentle, age-appropriate treatments that support healthy development while addressing current challenges.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-sage-warm/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-8 h-8 text-sage-warm" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-3">No Judgment</h3>
            <p className="text-stone-medium">
              A safe, supportive environment where both you and your child feel heard and understood.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-sage-warm/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-sage-warm" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-3">Real Solutions</h3>
            <p className="text-stone-medium">
              Evidence-based natural approaches that address root causes rather than masking symptoms.
            </p>
          </div>
        </div>

        <div className="bg-cream-soft rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-slate-deep mb-4">
                Common Childhood Conditions We Address
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-stone-medium">
                  {childConditions.slice(0, 4).map((condition, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-sage-warm flex-shrink-0" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-stone-medium">
                  {childConditions.slice(4).map((condition, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-sage-warm flex-shrink-0" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-4 rounded-full font-semibold text-lg"
              >
                Schedule Parent Consultation
              </Button>
              <p className="text-sm text-stone-medium mt-3">
                Free 15-minute consultation to discuss your child's needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
