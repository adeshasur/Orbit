import { motion } from 'framer-motion';
import { Users, Clock, Star, CheckCircle, Shield, Lock } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { value: "10,000+", label: "Active Teams", icon: <Users size={22} /> },
    { value: "99.9%", label: "Uptime SLA", icon: <Clock size={22} /> },
    { value: "4.9/5", label: "Customer Rating", icon: <Star size={22} /> },
    { value: "50M+", label: "Tasks Automated", icon: <CheckCircle size={22} /> }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0d1424] to-orbitDark border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Trusted by Industry Leaders</h3>
          <p className="text-gray-400">Join thousands of companies automating their workflows with Orbit</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <Shield size={18} className="text-green-400" />
            <span className="text-gray-300 text-sm font-medium">SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <Lock size={18} className="text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <CheckCircle size={18} className="text-purple-400" />
            <span className="text-gray-300 text-sm font-medium">256-bit Encryption</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
