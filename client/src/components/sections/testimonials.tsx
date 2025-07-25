import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Camella (Mia) Potter is a fabulous provider. She takes time to listen to your concerns and is always willing to work with you to find out what makes your conditions better. She always goes above and beyond to make sure you understand what is causing your concern, always willing to take extra time to get you additional info and always makes you feel like your needs are important no matter how small or big they may be.",
      age: ""
    },
    {
      rating: 5,
      text: "Mia is a great asset to the medical field and brings a breath of fresh air to an industry that doesn't always have answers or seem caring. I would recommend her to anyone looking for a provider that cares about their patients.",
      age: "35 yo"
    },
    {
      rating: 5,
      text: "Just a few words about a wonderful lady. Dr. Potter has been my doctor for two and a half years now and I would recommend her to anyone. She always has a smile and great disposition, good advice and answers to your problems, never talks down to you, always treating you as an equal. She has touched my life.",
      age: "64 yo"
    },
    {
      rating: 5,
      text: "Dr. Mia Potter has been my doctor for quite a while now. She is amazing, caring, attentive and thorough. She is always continuing to find new ways to help me feel better physically and mentally. She is hands down one of the best physicians I have had, EVER. I would follow her for my care anywhere she may go.",
      age: "35 yo"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sage-warm/5 to-cream-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-stone-medium">
            Real experiences from real patients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                {testimonial.age && (
                  <div className="text-stone-medium text-sm">{testimonial.age}</div>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
