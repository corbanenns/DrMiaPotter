import { GraduationCap, Award, Brain, Heart, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-soft to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-slate-deep mb-6">
              About Dr. Camella (Mia) Potter, ND
            </h1>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto leading-relaxed">
              Combining 12 years of expertise in naturopathic medicine with advanced LENS neurofeedback 
              to provide comprehensive, personalized healing for patients throughout Central Oregon.
            </p>
          </div>
        </div>
      </section>
      {/* Detailed About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-slate-deep">
                A Personal Approach to Healing
              </h2>
              <p className="text-lg text-stone-medium leading-relaxed">
                "I believe in walking alongside people on their health journey, empowering them to understand 
                their bodies and make informed choices. Through my unique combination of LENS neurofeedback 
                and naturopathic medicine, I help patients uncover their innate healing capacity."
              </p>
              <p className="text-lg text-stone-medium leading-relaxed">
                My practice is built on the foundation that true healing addresses not just symptoms, but the 
                whole person - physical, mental, emotional, spiritual, and energetic layers. This comprehensive 
                approach allows me to treat complex cases where conventional medicine has fallen short.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/64dbd1caf434c33e14dc2954/634eb764-05f3-4a5a-b13c-f117e2bc2655/Screenshot+2023-09-01+at+9.14.41+PM.png?format=2500w"
                alt="Dr. Camella (Mia) Potter, ND"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Credentials Section */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Education & Credentials
            </h2>
            <p className="text-xl text-stone-medium">
              Rigorous training in both traditional and innovative healing modalities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-stone-light">
              <h3 className="font-playfair text-2xl font-semibold text-slate-deep mb-6">
                Academic Background
              </h3>
              <ul className="space-y-4 text-stone-medium">
                <li className="flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-sage-warm mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-deep">Doctor of Naturopathic Medicine</div>
                    <div>National College of Natural Medicine (NCNM), 2012</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-sage-warm mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-deep">BS Nutritional Science</div>
                    <div>University of California, Berkeley, 1999</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-sage-warm mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-deep">Certificate Biblical Studies</div>
                    <div>Multnomah University, 2002</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-stone-light">
              <h3 className="font-playfair text-2xl font-semibold text-slate-deep mb-6">
                Licenses & Certifications
              </h3>
              <ul className="space-y-4 text-stone-medium">
                <li className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-sage-warm mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-deep">Oregon Naturopathic License</div>
                    <div>License #1959, Current and Active</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-sage-warm mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-deep">LENS Neurofeedback Certification</div>
                    <div>Advanced training in Low Energy Neurofeedback System</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-sage-warm mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-deep">Trauma Release Educated</div>
                    <div>Specialized training in trauma-informed care</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
              Treatment Philosophy
            </h2>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto">
              Addressing the root causes of illness through a comprehensive, patient-centered approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold text-slate-deep">
                What Makes My Practice Different
              </h3>
              <ul className="space-y-4">
                {[
                  "Full hour appointments for comprehensive evaluation",
                  "Treats patients from age 6 through adults",
                  "Only practitioner in Central Oregon combining LENS with naturopathic medicine",
                  "Addresses physical, mental, spiritual, and energetic layers",
                  "Personalized treatment plans based on individual needs",
                  "Focus on empowering patients with knowledge and tools"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-sage-warm mt-1 flex-shrink-0" />
                    <span className="text-stone-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sage-warm/10 rounded-lg p-8 border border-sage-warm/20">
              <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-4">
                Why I Became a Naturopathic Doctor
              </h3>
              <p className="text-stone-medium mb-4">
                After completing my degree in nutritional science at UC Berkeley, I witnessed firsthand 
                the limitations of conventional approaches to complex health issues. I was drawn to 
                naturopathic medicine because it honors the body's innate wisdom to heal.
              </p>
              <p className="text-stone-medium">
                The addition of LENS neurofeedback to my practice has been transformative, allowing me 
                to address neurological patterns that often underlie chronic health conditions. This 
                unique combination gives me tools that no other practitioner in our region offers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
