'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import staticWorks from '@/data/works.json'
import { getWorks, type Work } from '@/lib/supabase'

export default function Works() {
  const [works, setWorks] = useState<Work[]>(staticWorks)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadWorks() {
      try {
        const { data, error } = await getWorks()
        if (error) {
          console.error('Failed to load works from Supabase:', error)
        } else if (data && data.length > 0) {
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

  if (loading) {
    return (
      <section id="works" className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">Selected Works</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">Portfolio</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticWorks.map((work) => (
              <div key={work.id} className="aspect-[4/3] bg-surface animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="works" className="py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">Selected Works</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">Portfolio</h2>
          </div>
          <Link href="/works" className="mt-6 md:mt-0 text-sm text-secondary hover:text-primary transition-colors link-underline flex items-center gap-2">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>

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
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-muted text-sm">{work.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
