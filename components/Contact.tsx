'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-40 bg-heroBg text-heroText">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/60 mb-4">Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">Ready to make<br />your mark?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">As your transformation and experience partner, our global team is ready to help.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We will contact you soon.'); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Name</label>
                <input type="text" className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Project Type</label>
              <select className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors">
                <option className="text-black">Brand Design</option>
                <option className="text-black">UI/UX Design</option>
                <option className="text-black">Motion Design</option>
                <option className="text-black">Design System</option>
                <option className="text-black">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black py-4 text-sm font-medium tracking-widest uppercase hover:bg-white/90 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
