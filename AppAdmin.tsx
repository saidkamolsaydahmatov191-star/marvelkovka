import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-gold"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
}

function AdminApp() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
          {/* Add your main app routes here later */}
          <Route path="/" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
