import { motion } from 'framer-motion';
import { Mail, Sparkles, Send } from 'lucide-react';
import { useState } from 'react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Simulate API call
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 relative bg-orbitDark overflow-hidden">
      {/* Background radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orbitAccent/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#111622] to-[#0B0F19] rounded-[3rem] p-10 md:p-20 text-center border border-white/10 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orbitAccent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbitAccent/10 border border-orbitAccent/20 text-orbitAccent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Sparkles size={12} className="text-orbitAccent" />
            Join the Revolution
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Ready to Take the <br/>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orbitAccent bg-clip-text text-transparent">Next Orbit?</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Be among the first to experience Orbit 2.0. Limited spots available for our private beta program.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-400 group-focus-within:text-orbitAccent transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email" 
                  required
                  className="w-full bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.08] text-white border border-white/10 focus:border-orbitAccent/50 rounded-2xl py-4 pl-14 pr-6 text-base outline-none transition-all placeholder:text-gray-600 shadow-inner block"
                />
              </div>
              <button 
                type="submit"
                className="group w-full sm:w-auto bg-orbitAccent hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-95 whitespace-nowrap"
              >
                Join Waitlist
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-2xl max-w-md mx-auto"
            >
              <div className="font-bold text-lg mb-1">Awesome! You're on the list.</div>
              <div className="text-sm opacity-80">We'll reach out to your email shortly. Welcome to the future.</div>
            </motion.div>
          )}

          <div className="mt-8 text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            1,200+ waiting in line
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
