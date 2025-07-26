import { useEffect } from "react";
import drPotterBW from "@assets/DrMiaPotter2_1753484664519.avif";

export default function MyApproach() {
  useEffect(() => {
    document.title = "My Personal Approach to Healing - Dr. Camella Potter, ND | Grow Integrative Health";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dr. Mia Potter shares her personal philosophy on integrative healing, combining LENS neurofeedback with naturopathic medicine to help patients find lasting wellness solutions.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream-soft">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-soft to-sage-warm/10 pt-[28px] pb-[28px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-[1px] mb-[1px]">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-slate-deep mb-6">
              A Personal Message from Dr. Mia Potter
            </h1>
            <p className="text-xl text-slate-deep/80 max-w-3xl mx-auto leading-relaxed">
              What it really means to walk alongside you on your healing journey
            </p>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 pt-[36px] pb-[36px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-light">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-slate-deep/90 leading-relaxed mb-6">
                    After 12 years in practice, I've learned that true healing happens when we address not just what's wrong, 
                    but what's right—your strengths, resources, and innate healing capacity. When I say I "walk alongside people 
                    on their health journey," I mean something very specific.
                  </p>
                  <p className="text-lg text-slate-deep/90 leading-relaxed">
                    I don't just diagnose and treat—I empower, encourage, and equip you to live a healthier life. This means 
                    celebrating improvements in your sleep and energy, providing support when you face setbacks, and adjusting 
                    our treatment plan as we learn what works best for you.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={drPotterBW}
                    alt="Dr. Camella (Mia) Potter, ND"
                    className="w-full rounded-xl shadow-lg grayscale"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* What Makes My Approach Different */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-8">
              What Makes My Approach Different
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
                <h3 className="text-xl font-semibold text-sage-warm mb-4">Beyond Traditional Naturopathy</h3>
                <p className="text-slate-deep/90 leading-relaxed">Many functional medicine doctors focus primarily on physical symptoms. I combine advanced neurofeedback training with naturopathic medicine, addressing both nervous system regulation and foundational physical imbalances simultaneously.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
                <h3 className="text-xl font-semibold text-sage-warm mb-4">More Than Conventional Medicine</h3>
                <p className="text-slate-deep/90 leading-relaxed">
                  You get time, comprehensive assessment, and natural alternatives to pharmaceuticals. I spend 
                  a full hour with new patients and never let insurance dictate our treatment approach.
                </p>
              </div>
            </div>
          </div>

          {/* The Four Layers of Healing */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-8">
              The Four Layers I Address
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
                <h3 className="text-xl font-semibold text-sage-warm mb-3">Physical Layer</h3>
                <p className="text-slate-deep/90">
                  Digestion, hormones, environmental exposures, and nutritional imbalances that affect every aspect of your health.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
                <h3 className="text-xl font-semibold text-sage-warm mb-3">Mental/Emotional Layer</h3>
                <p className="text-slate-deep/90">
                  Anxiety, depression, trauma responses, and emotional patterns that impact physical wellbeing.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
                <h3 className="text-xl font-semibold text-sage-warm mb-3">Energetic Layer</h3>
                <p className="text-slate-deep/90">
                  Nervous system regulation through LENS neurofeedback, helping your brain function optimally.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
                <h3 className="text-xl font-semibold text-sage-warm mb-3">Spiritual Layer</h3>
                <p className="text-slate-deep/90">
                  Finding meaning, connection, and purpose in your healing journey and life.
                </p>
              </div>
            </div>
          </div>

          {/* My Definition of Success */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-8">
              How I Define Success
            </h2>
            
            <div className="bg-sage-warm/5 rounded-2xl p-8 border border-sage-warm/20">
              <p className="text-lg text-slate-deep/90 leading-relaxed mb-6">
                Success isn't just the absence of disease—it's having the energy, clarity, and resilience to pursue 
                what matters most to you. It's when your body systems work harmoniously so you can focus on living 
                your purpose rather than managing symptoms.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-sage-warm mb-3">Patients Consistently Report:</h4>
                  <ul className="space-y-2 text-slate-deep/90">
                    <li>• Improved sleep quality</li>
                    <li>• Increased energy levels</li>
                    <li>• Better digestion</li>
                    <li>• Enhanced emotional resilience</li>
                    <li>• Reduced anxiety and depression</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sage-warm mb-3">What They Say:</h4>
                  <ul className="space-y-2 text-slate-deep/90 italic">
                    <li>"Dr. Potter really listens and understands the whole picture."</li>
                    <li>"I finally have energy again."</li>
                    <li>"My child is like a different person—calmer and happier."</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* My Treatment Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-8">
              My Treatment Philosophy
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-light">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-sage-warm mb-3">You Are the Expert on Your Body</h3>
                  <p className="text-slate-deep/90 leading-relaxed">
                    I equip you with knowledge about your condition, teach you to recognize your body's signals, 
                    and provide tools you can use at home. True empowerment comes when you understand why we're 
                    using specific treatments and how your choices support your healing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-sage-warm mb-3">Quality Over Quantity</h3>
                  <p className="text-slate-deep/90 leading-relaxed">
                    An hour for new patients and 30-45 minutes for follow-ups allows for thorough assessment 
                    and meaningful therapeutic relationships. Rushing through appointments serves no one well.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-sage-warm mb-3">Integrative, Not Alternative</h3>
                  <p className="text-slate-deep/90 leading-relaxed">
                    I'm not anti-conventional medicine—I believe in using the best of all approaches. I work 
                    closely with other healthcare providers when needed and maintain relationships with 
                    conventional providers for appropriate referrals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who I Work Best With */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-8">
              Who I Work Best With
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
                <h3 className="text-xl font-semibold text-sage-warm mb-4">You're a Great Fit If:</h3>
                <ul className="space-y-2 text-slate-deep/90">
                  <li>• You want to understand the "why" behind treatments</li>
                  <li>• You're willing to make lifestyle changes</li>
                  <li>• You prefer natural alternatives or additions to conventional care</li>
                  <li>• You want a doctor who spends time with you</li>
                  <li>• You're ready to take an active role in your healing</li>
                </ul>
              </div>
              
              <div className="bg-sage-warm/5 rounded-2xl p-6 border border-sage-warm/20">
                <h3 className="text-xl font-semibold text-sage-warm mb-4">I Excel With:</h3>
                <ul className="space-y-2 text-slate-deep/90">
                  <li>• Complex cases where mental/emotional and physical symptoms intertwine</li>
                  <li>• Patients who've "tried everything" but haven't addressed the nervous system</li>
                  <li>• Children and teenagers (I address the whole family system)</li>
                  <li>• Those seeking lasting solutions, not quick fixes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-slate-deep mb-8">
              What to Expect in That Crucial First Hour
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-light">
              <p className="text-lg text-slate-deep/90 leading-relaxed mb-6">
                We explore not just what's wrong, but what's right—your strengths, resources, and healing capacity. 
                I listen to your story, help you understand the connections between your symptoms, and begin mapping 
                out a personalized treatment plan.
              </p>
              
              <p className="text-lg text-slate-deep/90 leading-relaxed mb-6">You'll leave with hope, understanding, and clear next steps. Most patients notice initial improvements in energy or sleep within 2-4 weeks, with significant changes typically occurring at 3-6 months.</p>
              
              <div className="bg-sage-warm/10 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-sage-warm mb-3">Before Your First Visit:</h4>
                <ul className="space-y-2 text-slate-deep/90">
                  <li>• Complete intake forms thoroughly</li>
                  <li>• Bring current supplements and medications</li>
                  <li>• List all previous treatments you've tried</li>
                  <li>• Prepare questions about your health goals</li>
                  <li>• Come with an open mind about addressing multiple aspects of your health</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-sage-warm/10 to-sage-warm/5 rounded-2xl p-8 border border-sage-warm/20">
              <h2 className="text-2xl font-playfair font-bold text-slate-deep mb-4">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-lg text-slate-deep/90 mb-6 max-w-2xl mx-auto">
                I'm here to partner with you in your healing journey. Bring your questions, your hopes, and your 
                willingness to try a different approach. Together, we'll help you GROW toward optimal wellness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => window.open('/contact', '_self')}
                  className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-8 py-3 rounded-full font-semibold text-lg transition-colors"
                >
                  Schedule Free Consultation
                </button>
                <button
                  onClick={() => window.open('/new-patients', '_self')}
                  className="border-2 border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep px-8 py-3 rounded-full font-semibold text-lg transition-colors"
                >
                  Learn About New Patients
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}