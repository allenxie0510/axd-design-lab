import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="font-display text-6xl md:text-8xl mb-4">404</h1>
          <p className="text-secondary text-lg mb-8">Page not found</p>
          <Link href="/" className="btn-primary px-8 py-4 text-sm font-medium tracking-widest uppercase">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
