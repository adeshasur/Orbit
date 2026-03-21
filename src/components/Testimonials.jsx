import { motion } from 'framer-motion';
import { Star, User, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "CEO at TechFlow",
      text: "Orbit has completely redefined our internal workflows. The AI insights are scary accurate!",
      image: "AR"
    },
    {
      name: "Sarah Chen",
      role: "Product Manager at CloudScale",
      text: "The best SaaS platform I've used in years. It's incredibly fast and the UX is top-tier.",
      image: "SC"
    },
    {
      name: "Marcus Thorne",
      role: "Engineering Lead at DevOps Pro",
      text: "Integration was seamless. We saved over 15 hours of manual reporting every single week.",
      image: "MT"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative bg-orbitDark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Star size={12} className="text-green-400" />
            Customer Success
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Innovators</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the teams that are already building the future with Orbit.
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-[#111622]/80 backdrop-blur-md border border-white/[0.05] hover:border-white/10 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <Quote size={40} className="text-white/5 absolute top-6 right-8 rotate-180" />

              <div className="flex gap-1 text-yellow-500 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">"{r.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-white font-bold tracking-wider shadow-inner">
                  {r.image}
                </div>
                <div>
                  <h4 className="text-white font-bold">{r.name}</h4>
                  <p className="text-orbitAccent text-sm">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
