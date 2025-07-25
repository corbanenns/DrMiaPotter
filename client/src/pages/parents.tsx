import { Users, Heart, Lightbulb, Shield, Check, Star, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Parents() {
  const parentConcerns = [
    {
      concern: "My child can't focus or sit still in school",
      solution: "LENS neurofeedback gently trains the brain for better attention and self-regulation without medication side effects."
    },
    {
      concern: "Constant meltdowns and emotional outbursts",
      solution: "We address underlying nervous system dysregulation that often causes emotional volatility in children."
    },
    {
      concern: "Sleep problems affecting the whole family",
      solution: "Natural approaches to reset sleep-wake cycles and create healthy sleep patterns for growing brains."
    },
    {
      concern: "Digestive issues and food sensitivities",
      solution: "Gut healing protocols designed specifically for children's developing digestive systems."
    }
  ];

  const successStories = [
    {
      age: "8-year-old boy",
      condition: "ADHD",
      result: "Dramatic improvement in focus and school performance after 3 months. Family stress significantly reduced.",
      parent: "Sarah M."
    },
    {
      age: "10-year-old girl", 
      condition: "Anxiety",
      result: "Sleeping through the night and participating confidently in activities she previously avoided.",
      parent: "Jennifer K."
    },
    {
      age: "12-year-old boy",
      condition: "Behavioral Issues",
      result: "Better emotional regulation and improved relationships with siblings and peers.",
      parent: "Mike R."
    }
  ];

  const treatmentBenefits = [
    "No medication side effects or long-term dependency",
    "Gentle, non-invasive approach suitable for sensitive children",
    "Addresses root causes rather than masking symptoms", 
    "Supports healthy brain development during critical years",
    "Improves family dynamics and reduces household stress",
    "Builds lifelong skills for emotional regulation and focus"
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-soft to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-slate-deep mb-6">
              For Parents: Your Child's Struggles Don't Define Their Future
            </h1>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto leading-relaxed">
              Specialized natural care for children with ADHD, anxiety, and behavioral challenges. 
              No judgment, just solutions that work with your child's developing nervous system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              "I've Tried Everything..."
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              We hear this from parents daily. You're not alone, and there is hope. Here's how we address common concerns:
            </p>
          </div>

          <div className="space-y-8">
            {parentConcerns.map((item, index) => (
              <div key={index} className="bg-cream-soft rounded-lg p-8 border border-stone-light">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-3">
                      "{item.concern}"
                    </h3>
                    <p className="text-stone-medium italic">- Common parent concern</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-sage-warm/20">
                    <h4 className="font-semibold text-slate-deep mb-2">Our Solution:</h4>
                    <p className="text-stone-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Why Our Approach Works for Children
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              Children's brains are incredibly adaptable. Our gentle methods work with this natural neuroplasticity to create lasting positive changes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold text-slate-deep">
                The Science Behind Our Success
              </h3>
              <p className="text-lg text-stone-medium">
                LENS neurofeedback works by providing gentle feedback to the brain, allowing it to recognize and 
                correct inefficient patterns. For children, whose brains are still developing, this process is 
                often faster and more effective than in adults.
              </p>
              
              <div className="bg-white rounded-lg p-6 border border-stone-light">
                <h4 className="font-semibold text-slate-deep mb-4">Treatment Benefits for Children:</h4>
                <ul className="space-y-2">
                  {treatmentBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-sage-warm mt-0.5 flex-shrink-0" />
                      <span className="text-stone-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sage-warm/10 to-sage-warm/20 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Brain className="w-16 h-16 text-sage-warm mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-slate-deep">
                  Safe & Gentle for Growing Minds
                </h3>
              </div>
              <ul className="space-y-3 text-stone-medium">
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-sage-warm flex-shrink-0" />
                  <span>FDA-approved technology with extensive safety record</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-sage-warm flex-shrink-0" />
                  <span>Comfortable sessions that children typically enjoy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-sage-warm flex-shrink-0" />
                  <span>Family-centered approach involving parents throughout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Real Stories from Real Families
            </h2>
            <p className="text-xl text-stone-medium">
              See how other families have found hope and healing through our approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-cream-soft rounded-lg p-6 border border-stone-light">
                <div className="mb-4">
                  <div className="flex text-sage-warm mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-slate-deep mb-2">
                    {story.age} - {story.condition}
                  </h3>
                  <p className="text-stone-medium italic mb-4">
                    "{story.result}"
                  </p>
                  <div className="text-slate-deep font-semibold">- {story.parent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              What to Expect: Your Child's Journey
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              Every child is unique, but here's what most families experience during treatment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "Week 1-2",
                title: "Getting Comfortable",
                description: "Your child becomes familiar with the gentle LENS process. Most children find it relaxing and enjoyable."
              },
              {
                phase: "Week 3-6",
                title: "Early Changes",
                description: "You may notice improvements in sleep, mood, or behavior. Some children show changes quickly, others more gradually."
              },
              {
                phase: "Week 7-12",
                title: "Significant Progress",
                description: "Most families see substantial improvements in target areas like focus, emotional regulation, or sleep patterns."
              },
              {
                phase: "Week 13+",
                title: "Lasting Results",
                description: "Continued progress and maintenance of gains. Many children continue to improve even after treatment ends."
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-stone-light text-center">
                <div className="bg-sage-warm/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-playfair text-lg font-bold text-sage-warm">{index + 1}</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-slate-deep mb-2">
                  {phase.phase}
                </h3>
                <h4 className="font-semibold text-slate-deep mb-3">{phase.title}</h4>
                <p className="text-stone-medium text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sage-warm/10 to-cream-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-slate-deep mb-4">
            Ready to Give Your Child the Support They Deserve?
          </h2>
          <p className="text-xl text-stone-medium mb-8">
            Schedule a free 15-minute parent consultation to discuss your child's specific needs 
            and learn how our approach can help your family find peace and healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Schedule Parent Consultation
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
