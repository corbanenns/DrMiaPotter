import { Phone, CreditCard, DollarSign } from "lucide-react";

export default function Billing() {
  const services = [
    {
      service: "Initial Appointment",
      duration: "60 minutes",
      price: "$320",
      description: "Comprehensive evaluation with Dr. Potter"
    },
    {
      service: "LENS Neurofeedback",
      duration: "30 minutes",
      price: "$140 per session",
      description: "Individual LENS neurofeedback sessions"
    },
    {
      service: "LENS Package",
      duration: "5 sessions",
      price: "$550 (Save $150)",
      description: "Package of 5 LENS neurofeedback sessions"
    },
    {
      service: "Follow-up Visits (30-40 min)",
      duration: "30-40 minutes",
      price: "$185",
      description: "Ongoing care and treatment adjustments"
    },
    {
      service: "Follow-up Visits (45-60 min)",
      duration: "45-60 minutes",
      price: "$231",
      description: "Extended follow-up appointments"
    },
    {
      service: "Free Consultation",
      duration: "Phone or Video",
      price: "Complimentary",
      description: "Initial consultation to discuss your needs"
    }
  ];

  const insurances = [
    "Aetna",
    "EMBS",
    "First Choice",
    "Moda",
    "Pacific Source"
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-soft to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-slate-deep mb-6">
              Billing & Insurance
            </h1>
            <p className="text-xl text-stone-medium max-w-3xl mx-auto leading-relaxed">
              Transparent pricing and flexible payment options to make naturopathic and neurofeedback care accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Contact & Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Biller Contact */}
            <div className="bg-cream-soft rounded-lg p-8 border border-stone-light">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-6 h-6 text-sage-warm" />
                <h3 className="font-playfair text-xl font-bold text-slate-deep">
                  Billing Support
                </h3>
              </div>
              <p className="text-stone-medium mb-4">
                Have questions about our fees or need to discuss payment options?
              </p>
              <a
                href="tel:9712088915"
                className="text-sage-warm hover:text-sage-warm/80 font-semibold text-lg"
              >
                (971) 208-8915
              </a>
            </div>

            {/* Time of Service Rates */}
            <div className="bg-cream-soft rounded-lg p-8 border border-stone-light">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6 text-sage-warm" />
                <h3 className="font-playfair text-xl font-bold text-slate-deep">
                  Time of Service Rates
                </h3>
              </div>
              <p className="text-stone-medium">
                All prices listed are our standard time of service rates. Ask about package discounts and payment plans.
              </p>
            </div>

            {/* Insurance */}
            <div className="bg-cream-soft rounded-lg p-8 border border-stone-light">
              <div className="flex items-center space-x-3 mb-4">
                <CreditCard className="w-6 h-6 text-sage-warm" />
                <h3 className="font-playfair text-xl font-bold text-slate-deep">
                  Insurance Accepted
                </h3>
              </div>
              <p className="text-stone-medium text-sm">
                We are in-network with Aetna, EMBS, First Choice, Moda and Pacific Source. Contact your insurance company to verify coverage. See insurance verification form under new patients tab.
              </p>
            </div>
          </div>

          {/* Office Visit Rates */}
          <div className="bg-white rounded-lg border border-stone-light overflow-hidden">
            <div className="bg-sage-warm/10 p-6 border-b border-stone-light">
              <h2 className="font-playfair text-3xl font-bold text-slate-deep">
                Office Visit Rates
              </h2>
              <p className="text-stone-medium mt-2">
                All prices are for cash patients. Insurance reimbursement rates may vary.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-cream-soft border-b border-stone-light">
                    <th className="px-6 py-4 text-left font-semibold text-slate-deep">Service</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-deep">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-deep">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="border-b border-stone-light hover:bg-cream-soft/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-deep">{service.service}</div>
                        <div className="text-sm text-stone-medium">{service.description}</div>
                      </td>
                      <td className="px-6 py-4 text-stone-medium">{service.duration}</td>
                      <td className="px-6 py-4 font-semibold text-sage-warm">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Insurances Accepted */}
      <section className="py-16 bg-cream-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-slate-deep mb-4">
              In-Network Insurances
            </h2>
            <p className="text-lg text-stone-medium">
              We accept the following insurance plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {insurances.map((insurance, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-stone-light text-center">
                <p className="font-semibold text-slate-deep">{insurance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

