export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Deep dive into brand, users, and business goals"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Define design direction and visual language"
    },
    {
      number: "03",
      title: "Design",
      description: "Iterate, prototype, and refine visuals"
    },
    {
      number: "04",
      title: "Deliver",
      description: "Complete assets, guidelines, and support"
    }
  ]

  return (
    <section id="process" className="py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">Our Process</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">How We Work</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">A systematic approach to delivering exceptional results</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-border mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
