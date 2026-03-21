import { motion } from 'framer-motion';
import { Brain, BarChart3, MessageSquare, Globe, Zap, Shield, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      desc: 'Get real-time insights powered by advanced machine learning. Predict trends before they happen.',
      icon: <BarChart3 size={24} />,
      color: 'blue'
    },
    {
      title: 'Smart Automation',
      desc: 'Automate repetitive tasks and workflows with intelligent AI that learns your preferences.',
      icon: <Zap size={24} />,
      color: 'purple'
    },
    {
      title: 'Natural Language AI',
      desc: 'Chat with your data using natural language. No technical skills required.',
      icon: <MessageSquare size={24} />,
      color: 'green'
    },
    {
      title: 'Global Scale',
      desc: 'Deploy worldwide with multi-region support and local compliance built-in.',
      icon: <Globe size={24} />,
      color: 'indigo'
    }
  ];

  const highlights = [
    {
      title: 'Learn Your Patterns',
      desc: 'Our AI adapts to your unique workflow over time.',
      icon: <Brain size={20} />
    },
    {
      title: 'Enterprise Security',
      desc: 'SOC 2 Type II certified with end-to-end encryption.',
      icon: <Shield size={20} />
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative bg-orbitDark overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
            Core Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Everything You Need to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Scale</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From smart automation to predictive analytics, Orbit gives your team superpowers to achieve more in less time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[2rem] bg-[#111622]/80 backdrop-blur-sm border border-white/[0.05] hover:border-blue-500/30 transition-all duration-300 overflow-hidden shadow-xl"
            >
              {/* Hover Glow Inside Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center relative z-10 shadow-lg ${
                f.color === 'blue' ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/20' :
                f.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/10 text-purple-400 border border-purple-500/20' :
                f.color === 'green' ? 'bg-gradient-to-br from-green-500/20 to-green-600/10 text-green-400 border border-green-500/20' :
                'bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 text-indigo-400 border border-indigo-500/20'
              }`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] p-10 md:p-14 lg:p-16 overflow-hidden border border-white/10 group"
        >
          {/* Animated Gradient Background for CTA */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-[#0B0F19] z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] z-0"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Transform <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Your Workflow?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed font-light">
                Join 10,000+ teams already using Orbit to automate their work, reduce errors, and scale faster than ever before.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-orbitDark hover:bg-gray-100 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Start Free Trial <ArrowRight size={18} />
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="p-6 rounded-3xl bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-500/20 to-transparent flex items-center justify-center mb-5 border border-blue-500/20 shadow-inner">
                    <div className="text-blue-400">{h.icon}</div>
                  </div>
                  <h4 className="text-lg text-white font-bold mb-2">{h.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
