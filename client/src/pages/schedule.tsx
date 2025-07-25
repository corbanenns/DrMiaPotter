import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    document.title = "Schedule Appointment - Dr. Camella Potter, ND | Grow Integrative Health";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Schedule your appointment with Dr. Mia Potter at Grow Integrative Health. Book online for naturopathic medicine and LENS neurofeedback sessions in Redmond, Oregon.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream-soft">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-br from-cream-soft to-sage-warm/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-slate-deep mb-4">
              Schedule Your Appointment
            </h1>
            <p className="text-xl text-slate-deep/80 max-w-2xl mx-auto leading-relaxed">
              Book your consultation with Dr. Mia Potter for personalized naturopathic care and LENS neurofeedback
            </p>
          </div>
        </div>
      </section>

      {/* Scheduling iframe */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-stone-light overflow-hidden">
            <iframe 
              src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=a2d6a993b2622575204eeff34893597eec0d3e9b3ccb5d680f83f065de5b1c119fac109f10b85efd5e710cdf68223997&wmode=opaque" 
              width="100%" 
              height="1000"
              style={{ overflow: 'hidden' }}
              frameBorder="0"
              title="Schedule Appointment with Dr. Potter"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
              <h3 className="text-xl font-semibold text-sage-warm mb-4">New Patients</h3>
              <p className="text-slate-deep/90 mb-4">
                First-time patients should schedule a comprehensive initial consultation. This 60-minute appointment 
                allows Dr. Potter to thoroughly assess your health history and develop a personalized treatment plan.
              </p>
              <p className="text-slate-deep/90">
                Please complete your intake forms 24 hours before your visit for the most effective appointment.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-light">
              <h3 className="text-xl font-semibold text-sage-warm mb-4">Follow-up Visits</h3>
              <p className="text-slate-deep/90 mb-4">
                Returning patients can book 30-45 minute follow-up appointments to monitor progress, 
                adjust treatments, and continue your healing journey.
              </p>
              <p className="text-slate-deep/90">
                LENS neurofeedback sessions and specific treatment appointments are also available.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center bg-sage-warm/5 rounded-2xl p-6 border border-sage-warm/20">
            <h3 className="text-xl font-semibold text-sage-warm mb-4">Need Help Scheduling?</h3>
            <p className="text-slate-deep/90 mb-4">
              If you have questions about scheduling or need assistance, please don't hesitate to contact our office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:(503) 856-2488"
                className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Call (503) 856-2488
              </a>
              <button
                onClick={() => window.open('/contact', '_self')}
                className="border-2 border-sage-warm text-sage-warm hover:bg-sage-warm hover:text-slate-deep px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}