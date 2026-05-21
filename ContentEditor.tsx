import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  createdAt: string;
}

export default function ContentEditor() {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'portfolio',
    image: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('adminContents');
    if (saved) {
      setContents(JSON.parse(saved));
    }
  }, []);

  const saveContents = (newContents: ContentItem[]) => {
    setContents(newContents);
    localStorage.setItem('adminContents', JSON.stringify(newContents));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const updated = contents.map(c =>
        c.id === editingId
          ? { ...c, ...formData, createdAt: new Date().toISOString() }
          : c
      );
      saveContents(updated);
      setEditingId(null);
    } else {
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif text-white">Content Editor</h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            <Plus size={20} />
            Add Content
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-serif text-white mb-4">
            {editingId ? 'Edit Content' : 'Add New Content'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-gold"
              required
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-gold"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold"
              >
                <option value="portfolio">Portfolio</option>
                <option value="gallery">Gallery</option>
                <option value="team">Team</option>
                <option value="services">Services</option>
              </select>
              <input
                type="url"
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-gold hover:bg-gold/90 text-black px-4 py-2 rounded font-semibold transition-colors"
              >
                {editingId ? 'Update' : 'Add'}
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
        </div>
      )}

      {/* Contents List */}
      <div className="space-y-3">
        {contents.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
            <p className="text-white/60">No content yet. Create your first content!</p>
          </div>
        ) : (
          contents.map((content) => (
            <div key={content.id} className="bg-white/5 border border-white/10 rounded p-4 flex justify-between items-start">
              <div className="flex-1">
                <h4 className="text-white font-semibold">{content.title}</h4>
                <p className="text-white/60 text-sm line-clamp-2">{content.description}</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-gold/20 text-gold text-xs px-2 py-1 rounded">{content.category}</span>
                  <span className="text-white/40 text-xs">
                    {new Date(content.createdAt).toLocaleDateString('uz-UZ')}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(content)}
                  className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded transition-colors"
                >
                  <Edit2 size={18} className="text-blue-400" />
                </button>
                <button
                  onClick={() => handleDelete(content.id)}
                  className="bg-red-500/20 hover:bg-red-500/30 p-2 rounded transition-colors"
                >
                  <Trash2 size={18} className="text-red-400" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}