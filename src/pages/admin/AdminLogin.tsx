import { useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-gold mb-2">Marvel Kovka</h1>
          <p className="text-white/60">Admin Panel</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && <div className="text-red-400 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold/80 text-black px-4 py-2 rounded font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}