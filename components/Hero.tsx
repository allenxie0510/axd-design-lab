export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-heroBg text-heroText pt-16">
      <div className="max-w-[1400px] mx-auto px-6 text-center py-20">
        <div className="animate-fade-in">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/60 mb-8">
            Innovation & Experience Partner
          </p>
        </div>
        <h1 className="animate-fade-in delay-100 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
          Make your<br />mark
        </h1>
        <p className="animate-fade-in delay-200 text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          AXD Design Lab is your transformation and experience partner. Our global team of experts blends strategy, creativity, data, AI, and technology to drive progress for humanity and the planet.
        </p>
        <div className="animate-fade-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/works"
            className="bg-white text-black px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Explore Works
          </a>
          <a
            href="/#contact"
            className="border border-white text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            Start Project
          </a>
        </div>
      </div>
    </section>
  )
}
