export default function GrowPhilosophy() {
  const philosophyPoints = [
    {
      letter: "G",
      title: "Gentle",
      description: "Non-invasive therapies that work with your body's natural healing capacity"
    },
    {
      letter: "R",
      title: "Root Cause",
      description: "Addressing underlying imbalances rather than just symptoms"
    },
    {
      letter: "O",
      title: "Optimal",
      description: "Achieving your highest level of health and vitality"
    },
    {
      letter: "W",
      title: "Wellness",
      description: "Empowering you with knowledge and tools for lasting health"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cream-soft to-sage-warm/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-slate-deep mb-4">
            The GROW Philosophy
          </h2>
          <p className="text-xl text-stone-medium max-w-2xl mx-auto">
            Gain Resources for Optimal Wellness through a comprehensive approach to healing
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {philosophyPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="font-playfair text-2xl font-bold text-sage-warm">
                  {point.letter}
                </span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slate-deep mb-2">
                {point.title}
              </h3>
              <p className="text-stone-medium">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
