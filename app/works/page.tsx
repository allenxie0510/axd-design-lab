'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import staticWorks from '@/data/works.json'
import { getWorks, type Work } from '@/lib/supabase'

export default function WorksPage() {
  const [works, setWorks] = useState<Work[]>(staticWorks)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadWorks() {
      try {
        const data = await getWorks()
        if (data && data.length > 0) {
          setWorks(data)
        }
      } catch (e) {
        console.error('Failed to load works from Supabase:', e)
      } finally {
        setLoading(false)
      }
    }

    loadWorks()
  }, [])

  return (
    <main>
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-heroBg text-heroText">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/60 mb-4">Portfolio</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl">Selected Works</h1>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staticWorks.map((work) => (
                <div key={work.id} className="aspect-[4/3] bg-surface animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work) => (
                <Link href={`/works/detail?id=${work.id}`} key={work.id} className="work-card group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-surface">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="work-image w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-2">{work.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-muted text-sm">{work.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
