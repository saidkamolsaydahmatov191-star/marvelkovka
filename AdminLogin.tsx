import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { LogIn } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(username, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-dark border border-white/10 rounded-lg p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <LogIn className="w-8 h-8 text-gold mr-2" />
            <h1 className="text-2xl font-serif text-white">Admin Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded p-4">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-white/60 text-sm mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold hover:bg-gold/80 text-black font-semibold py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-white/40 text-xs text-center mt-6">
            Demo credentials: admin / admin123
          </p>
        </div>
      </div>
    </div>
  );
}
