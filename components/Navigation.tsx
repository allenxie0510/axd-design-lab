'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 nav-blur border-b border-borderLight">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-tight">AXD</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/works" className="text-sm text-secondary hover:text-primary transition-colors link-underline">Works</Link>
            <Link href="/#services" className="text-sm text-secondary hover:text-primary transition-colors link-underline">Services</Link>
            <Link href="/#process" className="text-sm text-secondary hover:text-primary transition-colors link-underline">Process</Link>
            <Link href="/#about" className="text-sm text-secondary hover:text-primary transition-colors link-underline">About</Link>
            <Link href="/#contact" className="btn-primary px-6 py-2.5 text-xs font-medium tracking-widest uppercase">Contact</Link>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-primary p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-white border-l border-border z-50 p-8 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-secondary hover:text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div className="flex flex-col gap-8 mt-16">
          <Link href="/works" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-primary">Works</Link>
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-primary">Services</Link>
          <Link href="/#process" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-primary">Process</Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-primary">About</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary px-6 py-3 text-sm font-medium text-center mt-4">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
