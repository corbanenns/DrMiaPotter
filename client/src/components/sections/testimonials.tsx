import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "After 3 months with Dr. Potter, my son's ADHD symptoms improved dramatically. He's sleeping better, focusing in school, and the whole family is less stressed.",
      author: "Sarah M.",
      role: "Parent of 8-year-old patient"
    },
    {
      rating: 5,
      text: "I had tried everything for my digestive issues. Dr. Potter's combination approach finally gave me my life back. I feel like myself again.",
      author: "Michael R.",
      role: "Adult patient, digestive issues"
    },
    {
      rating: 5,
      text: "The LENS therapy has been life-changing for my anxiety. Dr. Potter truly listens and creates personalized treatment plans that work.",
      author: "Jennifer L.",
      role: "Adult patient, anxiety"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sage-warm/5 to-cream-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
            Patient Success Stories
          </h2>
          <p className="text-xl text-stone-medium">
            Real transformations from real people
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg border border-stone-light"
            >
              <div className="mb-4">
                <div className="flex text-sage-warm mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-medium italic mb-4">
                  "{testimonial.text}"
                </p>
                <div className="text-slate-deep font-semibold">- {testimonial.author}</div>
                <div className="text-stone-medium text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-2 border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep px-8 py-3 rounded-full font-semibold"
          >
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
}
