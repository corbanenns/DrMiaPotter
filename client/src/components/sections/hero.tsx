import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-cream-soft to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-slate-deep leading-tight">
              Feel Like{" "}
              <span className="text-sage-warm">Yourself</span>{" "}
              Again
            </h1>
            <p className="text-xl text-stone-medium leading-relaxed">
              When your sleep, energy, and digestion improve, everything else follows.{" "}
              <strong>12 Years</strong> helping Oregonians GROW: Gain Resources for Optimal Wellness.
            </p>
            <div className="bg-white/80 rounded-lg p-6 border border-stone-light">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-playfair text-2xl font-bold text-sage-warm">12+</div>
                  <div className="text-sm text-stone-medium">Years Experience</div>
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-sage-warm">Ages 6+</div>
                  <div className="text-sm text-stone-medium">Patients Treated</div>
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-sage-warm">Unique</div>
                  <div className="text-sm text-stone-medium">LENS + Naturopathic</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-3 rounded-full font-semibold text-lg"
                onClick={() => window.open('/schedule', '_self')}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep px-8 py-3 rounded-full font-semibold text-lg"
                onClick={() => window.open('/my-approach', '_self')}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.squarespace-cdn.com/content/v1/64dbd1caf434c33e14dc2954/634eb764-05f3-4a5a-b13c-f117e2bc2655/Screenshot+2023-09-01+at+9.14.41+PM.png?format=2500w"
                alt="Dr. Camella (Mia) Potter, ND"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-warm/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage-warm/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
