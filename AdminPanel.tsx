import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { LogOut, Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  createdAt: string;
}

export default function AdminPanel() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'portfolio',
    image: ''
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('adminContents');
    if (saved) {
      setContents(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  const saveContents = (newContents: ContentItem[]) => {
    setContents(newContents);
    localStorage.setItem('adminContents', JSON.stringify(newContents));
  };

  const handleAddContent = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      // Update existing
      const updated = contents.map(c =>
        c.id === editingId
          ? { ...c, ...formData, createdAt: new Date().toISOString() }
          : c
      );
      saveContents(updated);
      setEditingId(null);
    } else {
      // Add new
      const newContent: ContentItem = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      saveContents([newContent, ...contents]);
    }
    setFormData({ title: '', description: '', category: 'portfolio', image: '' });
    setShowForm(false);
  };

  const handleEdit = (content: ContentItem) => {
    setFormData({
      title: content.title,
      description: content.description,
      category: content.category,
      image: content.image || ''
    });
    setEditingId(content.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Bu elementni o\'chirishni xohlaysizmi?')) {
      saveContents(contents.filter(c => c.id !== id));
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <div className="bg-black border-b border-white/10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-serif">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 px-4 py-2 rounded transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded p-6">
            <p className="text-white/60 text-sm mb-2">Total Contents</p>
            <p className="text-4xl font-serif text-gold">{contents.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded p-6">
            <p className="text-white/60 text-sm mb-2">Last Updated</p>
            <p className="text-lg text-white">
              {contents.length > 0
                ? new Date(contents[0].createdAt).toLocaleDateString('uz-UZ')
                : 'N/A'}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded p-6">
            <p className="text-white/60 text-sm mb-2">Categories</p>
            <p className="text-lg text-white">
              {new Set(contents.map(c => c.category)).size}
            </p>
          </div>
        </div>

        {/* Add/Edit Form */}
        <div className="bg-white/5 border border-white/10 rounded p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif">
              {showForm ? (editingId ? 'Edit Content' : 'Add New Content') : 'Content Management'}
            </h2>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-gold hover:bg-gold/80 text-black px-4 py-2 rounded font-semibold transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Content
              </button>
            )}
          </div>

          {showForm && (
            <form onSubmit={handleAddContent} className="space-y-4">
              <div>
                <label className="block text-white/60 text-sm mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Content title"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Content description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="portfolio">Portfolio</option>
                    <option value="gallery">Gallery</option>
                    <option value="team">Team</option>
                    <option value="services">Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Image URL</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gold hover:bg-gold/80 text-black px-4 py-2 rounded font-semibold transition-colors"
                >
                  {editingId ? 'Update' : 'Add'} Content
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setFormData({ title: '', description: '', category: 'portfolio', image: '' });
                  }}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contents List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif mb-6">All Contents</h2>
          {contents.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
              <p className="text-white/60">No content yet. Create your first content!</p>
            </div>
          ) : (
            contents.map((content) => (
              <div
                key={content.id}
                className="bg-white/5 border border-white/10 rounded p-6 flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{content.title}</h3>
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">{content.description}</p>
                  <div className="flex gap-4 text-xs">
                    <span className="bg-gold/20 text-gold px-3 py-1 rounded">{content.category}</span>
                    <span className="text-white/40">
                      {new Date(content.createdAt).toLocaleDateString('uz-UZ')}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(content)}
                    className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 p-2 rounded transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-blue-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(content.id)}
                    className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 p-2 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
