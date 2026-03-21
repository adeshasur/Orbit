import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      features: ["Up to 5 Projects", "Basic AI Insights", "Standard Support", "Email Alerts"],
      highlight: false
    },
    {
      name: "Pro",
      price: "$99",
      features: ["Unlimited Projects", "Full AI Analytics", "Priority Support", "Real-time Dashboards", "Advanced Customization"],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["SSO & Security", "Custom AI Models", "Dedicated Manager", "Self-hosted Options", "Tailored Reporting"],
      highlight: false
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
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-orbitDark">
      {/* Background glow for Pricing section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orbitAccent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Choose Your Plan</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto text-center leading-relaxed">
            Scalable plans for teams of any size. Upgrade at any time and get more powerful AI at your fingertips.
          </p>
        </div>

        {/* Pricing Table Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl flex flex-col items-center gap-6 relative transition-all duration-300 ${
                p.highlight 
                ? 'bg-orbitDark border-orbitAccent/50 border-2 scale-105 shadow-[0_0_60px_rgba(59,130,246,0.25)] z-10' 
                : 'bg-white/5 border border-white/10 hover:bg-white/[0.08]'
              }`}
            >
              {p.highlight && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-orbitAccent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-white">{p.price}</span>
                  {p.price !== 'Custom' && <span className="text-gray-400 text-lg">/mo</span>}
                </div>
              </div>
              <ul className="w-full space-y-4 my-6 text-left border-t border-white/10 pt-8 flex-grow">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-orbitAccent flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  p.highlight 
                  ? 'bg-orbitAccent text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose {p.name}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
