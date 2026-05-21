import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
