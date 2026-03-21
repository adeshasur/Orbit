import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] pt-24 pb-12 px-6 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 text-2xl font-black text-white mb-6 group inline-flex">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-orbitAccent to-blue-600 flex items-center justify-center overflow-hidden shadow-lg shadow-orbitAccent/20 group-hover:shadow-orbitAccent/40 transition-shadow">
                <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
              </div>
              <span className="tracking-tight">Orbit</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              The AI-powered workflow automation platform designed to make your team 10x more productive. Build, automate, and scale with ease.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-orbitAccent flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-orbitAccent transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group">
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-orbitAccent flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-orbitAccent transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group">
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-orbitAccent flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-orbitAccent transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Product</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#features" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-orbitAccent opacity-0 hover:opacity-100 transition-opacity"></span> Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-orbitAccent opacity-0 hover:opacity-100 transition-opacity"></span> Pricing</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-orbitAccent opacity-0 hover:opacity-100 transition-opacity"></span> How it Works</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-orbitAccent opacity-0 hover:opacity-100 transition-opacity"></span> Integrations</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-orbitAccent opacity-0 hover:opacity-100 transition-opacity"></span> Changelog</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span> Documentation</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span> Help Center</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span> API Reference</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span> Community</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span> Blog</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div className="flex items-start gap-3 text-gray-400">
                <Mail size={16} className="mt-0.5 text-blue-400" />
                <a href="mailto:hello@orbit.ai" className="hover:text-white transition-colors">hello@orbit.ai</a>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Phone size={16} className="mt-0.5 text-green-400" />
                <span className="hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 mt-2">
                <MapPin size={16} className="mt-0.5 text-purple-400 flex-shrink-0" />
                <span className="leading-relaxed">100 Innovation Drive<br/>San Francisco, CA 94103</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Orbit AI Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
