export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Welcome to<br />the pond</h2>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Founded in 2016, AXD Design Lab is a digital experience design studio. We believe great design is not just visual beautification, but an effective tool for solving problems and delivering value.
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Our team of senior designers, strategists, and technical experts is dedicated to combining AI with creative design to create unique competitive advantages for clients.
            </p>
            <a href="/#contact" className="btn-primary px-6 py-3 text-sm font-medium inline-block">Contact Us</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop"
                  alt="Design work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] bg-white overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=500&fit=crop"
                  alt="Creative work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[3/4] bg-white overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop"
                  alt="UI design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
                  alt="Brand design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
