export default function Testimonials() {
  const testimonials = [
    {
      initial: "L",
      name: "Li Ming",
      role: "CEO, Nova Tech",
      quote: "AXD completely transformed our brand image. The new visual identity perfectly conveys our tech innovation positioning."
    },
    {
      initial: "W",
      name: "Wang Fang",
      role: "Product Director, FinFlow",
      quote: "The app interface designed by AXD increased our user retention by 40%. Truly user-centered design thinking."
    },
    {
      initial: "Z",
      name: "Zhang Wei",
      role: "Director, Pulse Festival",
      quote: "The visual system AXD designed perfectly captured the energy and atmosphere of our music festival."
    }
  ]

  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">Client Voices</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-semibold">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-secondary leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
