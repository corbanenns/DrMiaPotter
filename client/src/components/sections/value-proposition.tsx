import { Brain, Leaf, Heart, CheckCircle } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
            The Only Practitioner in Central Oregon
          </h2>
          <p className="text-xl text-stone-medium max-w-3xl mx-auto">
            Combining advanced LENS neurofeedback with comprehensive naturopathic medicine.
            Dr. Potter addresses both the nervous system and physical imbalances simultaneously for faster, lasting results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-cream-soft rounded-lg p-6 border border-stone-light">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-warm/20 p-3 rounded-full">
                  <Brain className="w-6 h-6 text-sage-warm" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-2">
                    LENS Neurofeedback
                  </h3>
                  <p className="text-stone-medium">
                    Non-invasive brain training that helps optimize nervous system function for better focus, sleep, and emotional regulation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cream-soft rounded-lg p-6 border border-stone-light">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-warm/20 p-3 rounded-full">
                  <Leaf className="w-6 h-6 text-sage-warm" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-2">
                    Naturopathic Medicine
                  </h3>
                  <p className="text-stone-medium">
                    Evidence-based natural therapies addressing nutrition, hormones, digestion, and immune function.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cream-soft rounded-lg p-6 border border-stone-light">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-warm/20 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-sage-warm" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-2">
                    Holistic Integration
                  </h3>
                  <p className="text-stone-medium">
                    Treating physical, mental/emotional, spiritual, and energetic layers simultaneously.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-sage-warm/10 to-sage-warm/20 rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-slate-deep mb-4">
                Patient Outcomes
              </h3>
              <div className="space-y-4">
                {[
                  "Better Sleep Quality",
                  "Increased Energy Levels",
                  "Improved Digestion",
                  "Enhanced Focus & Clarity",
                  "Emotional Balance"
                ].map((outcome, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-sage-warm" />
                    <span className="text-slate-deep font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
