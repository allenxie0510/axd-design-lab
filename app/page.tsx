import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Works />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
