import { motion } from 'framer-motion';
import { Check, Zap, Star, Shield } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "19" : "29",
      desc: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "10,000 AI requests/month",
        "Basic analytics dashboard",
        "Email support",
        "7-day data retention"
      ],
      highlight: false
    },
    {
      name: "Pro",
      price: isAnnual ? "79" : "99",
      desc: "For growing businesses that need more",
      features: [
        "Unlimited team members",
        "100,000 AI requests/month",
        "Advanced analytics & reports",
        "Priority support (24/7)",
        "90-day data retention",
        "Custom integrations",
        "API access"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For organizations with advanced needs",
      features: [
        "Everything in Pro",
        "Unlimited AI requests",
        "Custom AI model training",
        "Dedicated account manager",
        "SSO & advanced security",
        "99.99% SLA guarantee",
        "Self-hosted option"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative bg-orbitDark overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Star size={12} className="text-purple-400" />
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Simple, Transparent <span className="bg-gradient-to-r from-purple-400 to-orbitAccent bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Choose the perfect plan for your scale. Start for free, upgrade when you need to.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/10 p-1 flex items-center transition-all cursor-pointer hover:border-orbitAccent/50"
            >
              <div className="absolute inset-0 bg-orbitAccent/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
              <motion.div 
                className="w-5 h-5 rounded-full bg-orbitAccent shadow-lg z-10"
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annually</span>
              <span className="bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md border border-green-500/20 animate-pulse">Save 20%</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-[2rem] p-8 md:p-10 transition-all duration-300 w-full ${
                p.highlight 
                ? 'bg-gradient-to-b from-[#161d30] to-[#111626] border border-orbitAccent/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] md:scale-105 z-10' 
                : 'bg-[#111622]/80 backdrop-blur-sm border border-white/[0.05] hover:border-white/10 opacity-90 hover:opacity-100 shadow-xl'
              }`}
            >
              {/* Optional glowing top border for highlight */}
              {p.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-orbitAccent to-transparent"></div>
              )}

              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orbitAccent to-purple-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-orbitAccent/20">
                  <Zap size={12} fill="currentColor" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-3 ${p.highlight ? 'text-white' : 'text-gray-200'}`}>{p.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-white/10 relative">
                <div className="flex items-baseline gap-1">
                  {p.price !== 'Custom' && <span className={`text-2xl font-bold mr-0.5 ${p.highlight ? 'text-white/60' : 'text-gray-500'}`}>$</span>}
                  <span className={`text-5xl font-black ${p.highlight ? 'text-white' : 'text-gray-200'}`}>{p.price}</span>
                  {p.price !== 'Custom' && <span className="text-gray-500 font-medium tracking-wide">/ mo</span>}
                </div>
                {p.highlight && <div className="absolute bottom-[-1px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-orbitAccent to-transparent"></div>}
              </div>
              
              <ul className="space-y-4 mb-10">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-0.5 ${p.highlight ? 'bg-orbitAccent/20 text-orbitAccent' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-gray-300 transition-colors'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${p.highlight ? 'text-gray-200' : 'text-gray-400'} font-medium`}>{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all ${
                p.highlight 
                ? 'bg-orbitAccent hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95' 
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 active:scale-95'
              }`}>
                {p.highlight ? 'Start 14-Day Free Trial' : 'Get Started Now'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-[#111622]/50 px-4 py-2 rounded-full border border-white/5 shadow-inner">
            <Shield size={14} className="text-gray-400" />
            Secure payment processing via Stripe. Cancel anytime.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
