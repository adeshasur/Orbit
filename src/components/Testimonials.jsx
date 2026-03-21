import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "CEO at TechFlow",
      text: "Orbit has completely redefined our internal workflows. The AI insights are scary accurate!",
    },
    {
      name: "Sarah Chen",
      role: "Product Manager at CloudScale",
      text: "The best SaaS platform I've used in years. It's incredibly fast and the UX is top-tier.",
    },
    {
      name: "Marcus Thorne",
      role: "Engineering Lead at DevOps Pro",
      text: "Integration was seamless. We saved over 15 hours of manual reporting every single week.",
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by Innovators</h2>
          
          {/* Company Logos Placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-20 pointer-events-none select-none">
            <span className="text-2xl font-black text-white px-2">Microsoft</span>
            <span className="text-2xl font-black text-white px-2">Amazon</span>
            <span className="text-2xl font-black text-white px-2">Salesforce</span>
            <span className="text-2xl font-black text-white px-2">Stripe</span>
            <span className="text-2xl font-black text-white px-2">GitHub</span>
          </div>
        </div>

        {/* Review Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 pb-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start gap-4 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 text-orange-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white text-lg leading-relaxed italic mb-4">"{r.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-orbitAccent/20 flex items-center justify-center text-orbitAccent">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{r.name}</h4>
                  <p className="text-gray-400 text-sm whitespace-nowrap">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
