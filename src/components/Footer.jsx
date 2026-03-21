import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-gray-400">
        <div className="flex flex-col items-center md:items-start gap-4 max-w-sm">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orbitAccent flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            Orbit
          </div>
          <p className="text-sm leading-relaxed md:text-left">The modern standard for AI-driven workflow automation. Trusted by thousands of teams worldwide to scale intelligently.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-bold text-white text-base">Product</h4>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="font-bold text-white text-base">Support</h4>
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </div>
          <div className="flex flex-col gap-4 text-sm justify-self-center md:justify-self-end col-span-2 md:col-span-1">
            <h4 className="font-bold text-white text-base">Company</h4>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center mt-20 gap-8">
        <div className="flex gap-8">
          <a href="#" className="p-3 rounded-full hover:bg-white/5 hover:text-white transition-colors"><Facebook size={24} /></a>
          <a href="#" className="p-3 rounded-full hover:bg-white/5 hover:text-white transition-colors"><Twitter size={24} /></a>
          <a href="#" className="p-3 rounded-full hover:bg-white/5 hover:text-white transition-colors"><Instagram size={24} /></a>
          <a href="#" className="p-3 rounded-full hover:bg-white/5 hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="p-3 rounded-full hover:bg-white/5 hover:text-white transition-colors"><Github size={24} /></a>
        </div>
        <p className="text-sm opacity-50">&copy; {new Date().getFullYear()} Orbit AI Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
