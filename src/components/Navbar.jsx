import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 text-2xl font-black text-white group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-orbitAccent to-blue-600 flex items-center justify-center overflow-hidden shadow-lg shadow-orbitAccent/20 group-hover:shadow-orbitAccent/40 transition-shadow">
            <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-700"></div>
            <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
          </div>
          <span className="tracking-tight">Orbit</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 bg-[#111622]/50 px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-semibold tracking-wide transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orbitAccent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a 
            href="#waitlist"
            className="group relative bg-white/5 hover:bg-orbitAccent text-white px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide flex items-center gap-2 border border-white/10 hover:border-orbitAccent transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <Zap size={16} className="text-orbitAccent group-hover:text-white transition-colors animate-pulse" /> 
            Join Waitlist
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0d121f]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white text-xl font-bold tracking-tight transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#waitlist" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-orbitAccent to-blue-500 text-white px-6 py-4 rounded-xl font-bold text-center mt-4 shadow-lg shadow-orbitAccent/20 flex items-center justify-center gap-2">
             <Zap size={18} /> Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
