import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Shield, Zap, BarChart3, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-orbitDark">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-orbitAccent/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djI2aC0ydi0yNmgteHYyaDJoMTRMMzYgMzR6TTI2IDM2djI0aC0ydi0yNEgyNHYtMmgxM3YybC05IDIwc3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col relative z-20"
          >
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#1A1F2E]/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-10 w-fit hover:border-orbitAccent/50 transition-colors shadow-lg shadow-orbitAccent/5 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orbitAccent/20">
                <Sparkles size={12} className="text-orbitAccent group-hover:animate-pulse" />
              </div>
              <span className="text-xs font-semibold text-gray-300 tracking-wide">Introducing Orbit AI 2.0</span>
              <ChevronRight size={14} className="text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-1" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-[-0.02em]">
              <span className="text-white drop-shadow-lg">Automate Your </span>
              <br className="hidden sm:block" />
              <div className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-orbitAccent to-purple-600 blur-2xl opacity-30"></span>
                <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-orbitAccent bg-clip-text text-transparent">Entire Workflow</span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
              Stop doing manual work. Let our AI connect your tools, analyze your data, and execute tasks while you focus on scaling.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-14">
              <button className="relative group bg-orbitAccent hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start Building Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </button>
              
              <button className="group flex items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] text-white px-8 py-4 rounded-2xl font-semibold border border-white/10 transition-all backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-white/20">
                  <Play size={16} fill="currentColor" className="ml-1" />
                </div>
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium">
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield size={14} className="text-green-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap size={14} className="text-yellow-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">Setup in Minutes</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 size={14} className="text-blue-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">Cancel Anytime</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:ml-auto w-full max-w-[600px]"
          >
            {/* Soft backdrop for the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orbitAccent/30 via-purple-500/30 to-blue-500/30 rounded-[2.5rem] blur-xl opacity-50 block" />
            
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d121f] shadow-2xl p-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Orbit Dashboard Platform" 
                className="w-full h-auto rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-90"
              />
              
              {/* Floating UI Elements over image */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[#151a28]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">System Health</div>
                  <div className="text-xl font-bold text-white flex items-center gap-2">
                    Online <span className="text-sm text-green-400 font-medium bg-green-400/10 px-2 py-0.5 rounded-md">99.9%</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-[#151a28]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-orbitAccent/20 flex items-center justify-center">
                    <Zap size={14} className="text-orbitAccent" />
                  </div>
                  <div className="text-sm font-semibold text-white">Tasks Automated</div>
                </div>
                <div className="text-2xl font-black text-orbitAccent">12,480+</div>
              </motion.div>
              
              {/* Inner subtle gradient overlay to blend image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-40 z-10 pointer-events-none rounded-[1.5rem]"></div>
            </div>
          </motion.div>
        </div>

        {/* Brand Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 pt-10 border-t border-white/5 flex flex-col items-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 text-center">Powering modern teams at</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Stripe', 'Notion', 'Slack', 'Linear', 'Loom'].map((brand) => (
               <div key={brand} className="text-xl md:text-2xl font-black text-white hover:text-orbitAccent transition-colors cursor-default">
                 {brand}
               </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom fade out */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orbitDark to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
