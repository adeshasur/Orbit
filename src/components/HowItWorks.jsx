import { motion } from 'framer-motion';
import { Link2, Brain, BarChart2, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Connect Your Tools",
      desc: "Link your favorite apps in one click. Slack, Notion, Salesforce, and 50+ more integrations available.",
      icon: <Link2 size={24} />
    },
    {
      num: "02",
      title: "AI Learns Your Workflow",
      desc: "Our intelligent AI analyzes your processes, identifies patterns, and learns your team's unique needs.",
      icon: <Brain size={24} />
    },
    {
      num: "03",
      title: "Get Actionable Insights",
      desc: "Receive real-time dashboards, automated reports, and smart recommendations tailored to your goals.",
      icon: <BarChart2 size={24} />
    },
    {
      num: "04",
      title: "Scale Effortlessly",
      desc: "Watch productivity soar as Orbit handles the busy work while you focus on what matters most.",
      icon: <Rocket size={24} />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 relative bg-orbitDark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Get Started in <span className="bg-gradient-to-r from-blue-400 to-orbitAccent bg-clip-text text-transparent">Minutes</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            No complex setup or coding required. Most teams integrate Orbit and see value within 15 minutes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Glowing Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-white/5">
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-orbitAccent to-transparent origin-left relative shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]"></div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Glowing Number Backdrop */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-7xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">
                  {step.num}
                </div>

                {/* Icon Container with Hover Effect */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#111622] border border-white/10 flex items-center justify-center text-white mb-8 shadow-xl group-hover:border-orbitAccent/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-orbitAccent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative z-20 text-gray-400 group-hover:text-orbitAccent transition-colors">
                    {step.icon}
                  </div>
                  
                  {/* Glowing dot for active state feel */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-orbitDark"></div>
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-orbitAccent/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full border border-orbitDark bg-orbitAccent opacity-0 group-hover:opacity-100 transition-all"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] relative z-10 group-hover:text-gray-300 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#111622]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-xl hover:bg-[#161d2d] transition-colors cursor-pointer group">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-orbitDark flex items-center justify-center text-[10px] font-bold text-white">AR</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-orbitDark flex items-center justify-center text-[10px] font-bold text-white">JD</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-orbitDark flex items-center justify-center text-[10px] font-bold text-white">SM</div>
            </div>
            <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              <strong className="text-white font-semibold">2,847 teams</strong> started this week
            </span>
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
