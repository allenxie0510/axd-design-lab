'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import works from '@/data/works.json'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('works')
  const [worksList, setWorksList] = useState(works)
  const [editingWork, setEditingWork] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = (work: any) => {
    setEditingWork({ ...work })
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (editingWork) {
      const updated = worksList.map((w) =>
        w.id === editingWork.id ? editingWork : w
      )
      setWorksList(updated)
      setIsModalOpen(false)
      setEditingWork(null)
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this work?')) {
      setWorksList(worksList.filter((w) => w.id !== id))
    }
  }

  const handleAdd = () => {
    const newWork = {
      id: `new-${Date.now()}`,
      title: 'New Work',
      category: 'Brand Identity',
      description: 'Description',
      fullDescription: 'Full description',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop',
      gallery: [],
      services: [],
      year: '2024',
      client: 'Client Name',
      link: '#',
    }
    setEditingWork(newWork)
    setIsModalOpen(true)
  }

  return (
    <main>
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl">Admin Dashboard</h1>
              <p className="text-muted mt-2">Manage your website content</p>
            </div>
            <button
              onClick={handleAdd}
              className="btn-primary px-6 py-3 text-sm font-medium"
            >
              Add New Work
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-border mb-8">
            <button
              onClick={() => setActiveTab('works')}
              className={`pb-4 text-sm font-medium ${
                activeTab === 'works'
                  ? 'border-b-2 border-black'
                  : 'text-muted'
              }`}
            >
              Works ({worksList.length})
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`pb-4 text-sm font-medium ${
                activeTab === 'settings'
                  ? 'border-b-2 border-black'
                  : 'text-muted'
              }`}
            >
              Settings
            </button>
          </div>

          {/* Works Table */}
          {activeTab === 'works' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted">Image</th>
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted">Title</th>
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted">Category</th>
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted">Client</th>
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted">Year</th>
                    <th className="text-right py-4 px-4 text-xs uppercase tracking-wider text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {worksList.map((work) => (
                    <tr key={work.id} className="border-b border-borderLight hover:bg-surface transition-colors">
                      <td className="py-4 px-4">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-16 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4 px-4 font-medium">{work.title}</td>
                      <td className="py-4 px-4 text-sm text-muted">{work.category}</td>
                      <td className="py-4 px-4 text-sm">{work.client}</td>
                      <td className="py-4 px-4 text-sm">{work.year}</td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => handleEdit(work)}
                          className="text-sm text-secondary hover:text-primary mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(work.id)}
                          className="text-sm text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                    Site Title
                  </label>
                  <input
                    type="text"
                    defaultValue="AXD Design Lab"
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                    Site Description
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Your transformation and experience partner"
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="hello@axdlab.com"
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>
                <button className="btn-primary px-6 py-3 text-sm font-medium">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Edit Modal */}
      {isModalOpen && editingWork && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-2xl">
                  {editingWork.id.startsWith('new-') ? 'Add New Work' : 'Edit Work'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted hover:text-primary"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Title</label>
                  <input
                    type="text"
                    value={editingWork.title}
                    onChange={(e) => setEditingWork({ ...editingWork, title: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Category</label>
                  <input
                    type="text"
                    value={editingWork.category}
                    onChange={(e) => setEditingWork({ ...editingWork, category: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Description</label>
                  <input
                    type="text"
                    value={editingWork.description}
                    onChange={(e) => setEditingWork({ ...editingWork, description: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Full Description</label>
                  <textarea
                    rows={4}
                    value={editingWork.fullDescription}
                    onChange={(e) => setEditingWork({ ...editingWork, fullDescription: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Client</label>
                  <input
                    type="text"
                    value={editingWork.client}
                    onChange={(e) => setEditingWork({ ...editingWork, client: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Year</label>
                  <input
                    type="text"
                    value={editingWork.year}
                    onChange={(e) => setEditingWork({ ...editingWork, year: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Image URL</label>
                  <input
                    type="text"
                    value={editingWork.image}
                    onChange={(e) => setEditingWork({ ...editingWork, image: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="btn-primary px-6 py-3 text-sm font-medium"
                  >
                    Save Work
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="btn-secondary px-6 py-3 text-sm font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
