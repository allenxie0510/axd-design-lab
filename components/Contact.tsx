'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Design',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // 使用 Formspree - 请替换 YOUR_FORM_ID 为你的真实表单 ID
      // 获取方式：登录 https://formspree.io → 创建表单 → 复制 ID
      const FORMSPREE_ID = 'YOUR_FORM_ID' // ← 替换这里，例如：'xnqevjdr'
      
      if (FORMSPREE_ID === 'YOUR_FORM_ID') {
        // 如果没有配置 FormspREE，使用 mailto 方案
        const subject = encodeURIComponent(`[AXD Design Lab] New Message from ${formData.name}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Project Type: ${formData.projectType}\n\n` +
          `Message:\n${formData.message}`
        )
        window.location.href = `mailto:136068736@qq.com?subject=${subject}&body=${body}`
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          projectType: 'Brand Design',
          message: ''
        })
        return
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          projectType: 'Brand Design',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-32 lg:py-40 bg-heroBg text-heroText">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/60 mb-4">Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">Ready to make<br />your mark?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">As your transformation and experience partner, our global team is ready to help.</p>
        </div>
        <div className="max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading mb-4">Message Sent!</h3>
              <p className="text-white/70 mb-8">Thank you for reaching out. We will get back to you within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-sm font-medium tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option className="text-black" value="Brand Design">Brand Design</option>
                  <option className="text-black" value="UI/UX Design">UI/UX Design</option>
                  <option className="text-black" value="Motion Design">Motion Design</option>
                  <option className="text-black" value="Design System">Design System</option>
                  <option className="text-black" value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-white text-black py-4 text-sm font-medium tracking-widest uppercase hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
