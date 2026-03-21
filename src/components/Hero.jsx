import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 text-orbitAccent px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          ✨ New: Version 2.0 is live!
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-6 max-w-4xl"
        >
          Automate Your Workflow with AI
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl px-4"
        >
          Empower your team with advanced AI insights, automated reporting, and smart chatbots. Everything you need to scale your business effortlessly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 mb-20 w-full justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orbitAccent text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
          >
            Start for Free
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/10 transition-all"
          >
            <Play size={20} fill="white" /> Watch Demo
          </motion.button>
        </motion.div>

        {/* Mockup Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-5xl group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orbitAccent/50 to-purple-600/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-2">
            <img src="/images/dashboard.png" alt="AI Dashboard Mockup" className="w-full h-full rounded-xl object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
