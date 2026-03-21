import { motion } from 'framer-motion';
import { BarChart3, Database, MessageSquare, Zap, Target, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Smart Analytics',
      desc: 'Advanced data insights that help you make better decisions faster.',
      icon: <BarChart3 className="text-blue-400" size={32} />,
      className: 'md:col-span-2'
    },
    {
      title: 'Auto-reporting',
      desc: 'Let our AI handle the heavy lifting of generating reports.',
      icon: <Database className="text-purple-400" size={32} />,
      className: 'md:col-span-1'
    },
    {
      title: 'AI Chatbot',
      desc: 'Seamless interaction with our intuitive AI support bot.',
      icon: <MessageSquare className="text-emerald-400" size={32} />,
      className: 'md:col-span-1'
    },
    {
      title: 'Global Outreach',
      desc: 'Expand your reach across regions effortlessly with local AI adaptation.',
      icon: <Globe className="text-indigo-400" size={32} />,
      className: 'md:col-span-1'
    },
    {
      title: 'Goal Oriented',
      desc: 'Set goals and let our AI optimize your workflow to hit benchmarks consistently.',
      icon: <Target className="text-rose-400" size={32} />,
      className: 'md:col-span-1'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orbitAccent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Powered by Next-Gen AI</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Modern tools for modern teams. Achieve more with less effort using the power of neural automation.</p>
        </div>

        {/* Features Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start gap-4 backdrop-blur-sm group hover:bg-white/[0.07] transition-all duration-300 ${f.className}`}
            >
              <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mt-4">{f.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
