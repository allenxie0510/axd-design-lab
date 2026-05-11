'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import works from '@/data/works.json'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('works')
  const [worksList, setWorksList] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('axd_works')
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          console.error('Failed to parse saved works:', e)
        }
      }
    }
    return works
  })
  const [editingWork, setEditingWork] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = (work: any) => {
    setEditingWork({ ...work })
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (editingWork) {
      let updated
      if (editingWork.id.startsWith('new-')) {
        // Generate a clean ID for new works
        const cleanId = editingWork.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') || `work-${Date.now()}`
        const newWork = { ...editingWork, id: cleanId }
        updated = [...worksList, newWork]
      } else {
        updated = worksList.map((w: any) =>
          w.id === editingWork.id ? editingWork : w
        )
      }
      setWorksList(updated)
      
      // Save to localStorage for persistence
      localStorage.setItem('axd_works', JSON.stringify(updated))
      
      setIsModalOpen(false)
      setEditingWork(null)
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this work?')) {
      const updated = worksList.filter((w: any) => w.id !== id)
      setWorksList(updated)
      localStorage.setItem('axd_works', JSON.stringify(updated))
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

  const addGalleryImage = () => {
    if (editingWork) {
      setEditingWork({
        ...editingWork,
        gallery: [...editingWork.gallery, '']
      })
    }
  }

  const updateGalleryImage = (index: number, value: string) => {
    if (editingWork) {
      const newGallery = [...editingWork.gallery]
      newGallery[index] = value
      setEditingWork({
        ...editingWork,
        gallery: newGallery
      })
    }
  }

  const removeGalleryImage = (index: number) => {
    if (editingWork) {
      setEditingWork({
        ...editingWork,
        gallery: editingWork.gallery.filter((_: string, i: number) => i !== index)
      })
    }
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
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted">Gallery</th>
                    <th className="text-right py-4 px-4 text-xs uppercase tracking-wider text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {worksList.map((work: any) => (
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
                      <td className="py-4 px-4 text-sm">{work.gallery?.length || 0} images</td>
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
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto">
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
                  <label className="block text-xs uppercase tracking-wider text-muted mb-2">Cover Image URL</label>
                  <input
                    type="text"
                    value={editingWork.image}
                    onChange={(e) => setEditingWork({ ...editingWork, image: e.target.value })}
                    className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                  />
                  {editingWork.image && (
                    <img src={editingWork.image} alt="Preview" className="mt-2 w-32 h-20 object-cover" />
                  )}
                </div>

                {/* Gallery Images */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-xs uppercase tracking-wider text-muted">Gallery Images</label>
                    <button
                      onClick={addGalleryImage}
                      className="text-sm text-secondary hover:text-primary flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                      </svg>
                      Add Image
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {editingWork.gallery?.map((image: string, index: number) => (
                      <div key={index} className="flex gap-3 items-start">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={image}
                            onChange={(e) => updateGalleryImage(index, e.target.value)}
                            placeholder={`Image URL ${index + 1}`}
                            className="w-full border border-border px-4 py-3 focus:outline-none focus:border-black"
                          />
                          {image && (
                            <img src={image} alt={`Gallery ${index + 1}`} className="mt-2 w-24 h-16 object-cover" />
                          )}
                        </div>
                        <button
                          onClick={() => removeGalleryImage(index)}
                          className="text-red-600 hover:text-red-800 p-2"
                          title="Remove image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  {(!editingWork.gallery || editingWork.gallery.length === 0) && (
                    <p className="text-sm text-muted text-center py-4">No gallery images yet. Click "Add Image" to add some.</p>
                  )}
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
