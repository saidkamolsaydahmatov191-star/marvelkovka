import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Bosh sahifa', id: 'home' },
    { label: 'Haqida', id: 'about' },
    { label: 'Katalog', id: 'gallery' },
    { label: 'Jamoa', id: 'team' },
    { label: 'Aloqa', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-serif text-gold">Marvel Kovka</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                className="text-white/60 hover:text-gold cursor-pointer transition-colors"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                className="block text-white/60 hover:text-gold cursor-pointer transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}