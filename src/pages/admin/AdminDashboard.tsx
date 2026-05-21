import { useEffect, useState } from 'react';
import { BarChart3, FileText, FolderOpen } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  category: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [stats, setStats] = useState({
    totalContents: 0,
    categories: 0,
    lastUpdated: '-'
  });

  useEffect(() => {
    const saved = localStorage.getItem('adminContents');
    if (saved) {
      const parsedContents = JSON.parse(saved);
      setContents(parsedContents);

      setStats({
        totalContents: parsedContents.length,
        categories: new Set(parsedContents.map((c: ContentItem) => c.category)).size,
        lastUpdated: parsedContents.length > 0
          ? new Date(parsedContents[0].createdAt).toLocaleDateString('uz-UZ')
          : '-'
      });
    }
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-serif text-white">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm mb-2">Total Contents</p>
              <p className="text-4xl font-serif text-gold">{stats.totalContents}</p>
            </div>
            <FileText className="w-12 h-12 text-gold/30" />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm mb-2">Categories</p>
              <p className="text-4xl font-serif text-gold">{stats.categories}</p>
            </div>
            <FolderOpen className="w-12 h-12 text-gold/30" />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm mb-2">Last Updated</p>
              <p className="text-xl font-semibold text-white">{stats.lastUpdated}</p>
            </div>
            <BarChart3 className="w-12 h-12 text-gold/30" />
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-serif text-white mb-4">Recent Contents</h3>
        {contents.length === 0 ? (
          <p className="text-white/60">No content yet</p>
        ) : (
          <div className="space-y-3">
            {contents.slice(0, 5).map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-white/5 rounded">
                <div>
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-white/40 text-sm">{item.category}</p>
                </div>
                <span className="text-white/60 text-sm">
                  {new Date(item.createdAt).toLocaleDateString('uz-UZ')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}