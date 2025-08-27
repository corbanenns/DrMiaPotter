import { GraduationCap, Award, Brain } from "lucide-react";
import drPotterHeadshot from "@assets/DrMiaPotterHeadShot_1753483233551.jpg";

export default function AboutDrPotter() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-cream-soft to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep">
              Meet Dr. Potter
            </h2>
            <p className="text-lg text-stone-medium leading-relaxed">
              "I believe in walking alongside people on their health journey, empowering them to understand their bodies and make informed choices. Through my unique combination of LENS neurofeedback and naturopathic medicine, I help patients uncover their innate healing capacity."
            </p>

            <div className="bg-white rounded-lg p-6 border border-stone-light">
              <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-4">
                Credentials & Training
              </h3>
              <ul className="space-y-2 text-stone-medium">
                <li className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-sage-warm mt-1 flex-shrink-0" />
                  <span>Doctor of Naturopathic Medicine, NCNM (2012)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-sage-warm mt-1 flex-shrink-0" />
                  <span>BS Nutritional Science, UC Berkeley (1999)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-sage-warm mt-1 flex-shrink-0" />
                  <span>Certificate Biblical Studies, Multnomah University (2002)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-sage-warm mt-1 flex-shrink-0" />
                  <span>Oregon License #1959</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-sage-warm mt-1 flex-shrink-0" />
                  <span>Specialized LENS Training & Trauma Release Certification</span>
                </li>
              </ul>
            </div>

            <div className="bg-sage-warm/10 rounded-lg p-6 border border-sage-warm/20">
              <h3 className="font-playfair text-lg font-semibold text-slate-deep mb-2">
                What Makes Dr. Potter Different
              </h3>
              <ul className="space-y-1 text-stone-medium text-sm">
                <li>• Full hour appointments for new patients</li>
                <li>• Treats ages 1 through adults</li>
                <li>• 12 years combining LENS with naturopathic medicine</li>
                <li>• Addresses 4 layers: physical, mental, spiritual, energetic</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src={drPotterHeadshot}
              alt="Dr. Camella (Mia) Potter, ND"
              className="w-full rounded-2xl shadow-xl"
            />

            {/* Quote overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-lg p-4 shadow-lg">
              <p className="text-slate-deep font-medium italic text-sm">
                "When patients understand their bodies and feel empowered in their healing journey, lasting transformation becomes possible."
              </p>
              <div className="text-right mt-2">
                <span className="text-sage-warm font-semibold">- Dr. Mia Potter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
