'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import staticWorks from '@/data/works.json'
import GalleryLightbox from '@/components/GalleryLightbox'
import { getWork, type Work } from '@/lib/supabase'

function WorkDetailContent() {
  const searchParams = useSearchParams()
  const workId = searchParams.get('id')
  const [work, setWork] = useState<Work | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadWork() {
      if (!workId) {
        setLoading(false)
        return
      }

      try {
        const { data, error } = await getWork(workId)
        if (error) {
          console.error('Failed to load work from Supabase:', error)
        } else if (data) {
          setWork(data)
        }
      } catch (e) {
        console.error('Failed to load work from Supabase:', e)
      } finally {
        setLoading(false)
      }
    }

    loadWork()
  }, [workId])

  if (loading) {
    return (
      <main>
        <Navigation />
        <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 w-48 bg-gray-200 mx-auto mb-4"></div>
              <div className="h-4 w-32 bg-gray-200 mx-auto"></div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (!work) {
    return (
      <main>
        <Navigation />
        <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl mb-4">Work Not Found</h1>
            <p className="text-muted mb-8">The work you are looking for does not exist.</p>
            <Link href="/works" className="btn-primary px-6 py-3 text-sm font-medium">
              Back to Works
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-heroBg text-heroText">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link href="/works" className="text-sm text-white/60 hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Works
          </Link>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/60 mb-4">{work.category}</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">{work.title}</h1>
          <p className="text-xl text-white/70 max-w-2xl">{work.description}</p>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="aspect-[16/9] bg-surface overflow-hidden cursor-pointer">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 border-t border-borderLight">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl md:text-4xl mb-8">About the Project</h2>
              <p className="text-secondary text-lg leading-relaxed mb-8">{work.fullDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <div className="flex flex-wrap gap-3">
                {work.services.map((service, index) => (
                  <span key={index} className="px-4 py-2 bg-surface text-sm">{service}</span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">Client</p>
                  <p className="font-semibold">{work.client}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">Year</p>
                  <p className="font-semibold">{work.year}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">Category</p>
                  <p className="font-semibold">{work.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl mb-12">Project Gallery</h2>
          <GalleryLightbox 
            images={work.gallery}
            className="grid md:grid-cols-3 gap-6"
          />
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-xs text-muted uppercase tracking-wider mb-4">Next Project</p>
          <Link href="/works" className="font-heading text-3xl md:text-4xl hover:text-muted transition-colors">
            View All Works
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function WorkDetailPage() {
  return (
    <Suspense fallback={
      <main>
        <Navigation />
        <section className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 w-48 bg-gray-200 mx-auto mb-4"></div>
              <div className="h-4 w-32 bg-gray-200 mx-auto"></div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    }>
      <WorkDetailContent />
    </Suspense>
  )
}
