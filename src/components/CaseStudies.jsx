import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: "TechFlow Inc.",
      industry: "SaaS / Technology",
      challenge: "Scaled from 10 to 200 employees but workflows became chaotic with too many disconnected tools.",
      results: [
        { icon: <TrendingUp size={18} />, value: "340%", label: "Productivity Boost" },
        { icon: <Clock size={18} />, value: "15hrs", label: "Saved Weekly" },
        { icon: <Users size={18} />, value: "98%", label: "Team Adoption" }
      ],
      quote: "Orbit became our single source of truth. What used to take 3 different tools now happens automatically."
    },
    {
      company: "CloudScale",
      industry: "Cloud Infrastructure",
      challenge: "Customer success team spending 60% of time on manual reporting instead of helping customers.",
      results: [
        { icon: <TrendingUp size={18} />, value: "2.5x", label: "Faster Response" },
        { icon: <Clock size={18} />, value: "20hrs", label: "Saved Weekly" },
        { icon: <Users size={18} />, value: "45%", label: "CSAT Increase" }
      ],
      quote: "Our CS team now focuses on what matters - building relationships. The AI handles the rest."
    },
    {
      company: "DevOps Pro",
      industry: "DevOps / Consulting",
      challenge: "Managing reports across 50+ client projects with inconsistent formats and delayed delivery.",
      results: [
        { icon: <TrendingUp size={18} />, value: "500%", label: "Faster Delivery" },
        { icon: <Clock size={18} />, value: "40hrs", label: "Saved Monthly" },
        { icon: <Users size={18} />, value: "$2M", label: "New ARR" }
      ],
      quote: "We closed 3 enterprise deals directly because of our new reporting capabilities."
    }
  ];

  return (
    <section id="case-studies" className="py-32 px-6 relative overflow-hidden bg-black/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-orbitAccent text-sm font-bold uppercase tracking-widest mb-4 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Proven Results, Real Impact</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">See how leading companies transformed their operations with Orbit AI.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                <div className="text-xs text-orbitAccent font-bold uppercase tracking-wider mb-2">{c.industry}</div>
                <h3 className="text-2xl font-bold text-white">{c.company}</h3>
              </div>

              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-3 font-semibold">The Challenge</p>
                <p className="text-gray-300 leading-relaxed">{c.challenge}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-white/10">
                {c.results.map((r, j) => (
                  <div key={j} className="text-center">
                    <div className="text-orbitAccent mb-2 flex justify-center">{r.icon}</div>
                    <div className="text-xl font-black text-white">{r.value}</div>
                    <div className="text-xs text-gray-500">{r.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="text-gray-300 italic mb-6 flex-grow">"{c.quote}"</blockquote>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-orbitAccent hover:underline font-medium"
              >
                Read Full Story <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all"
          >
            See All Case Studies <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
