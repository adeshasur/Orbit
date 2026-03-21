import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to get started?",
      answer: "Most teams are up and running within 15 minutes. Simply connect your tools, let our AI analyze your workflow, and start seeing insights immediately. No technical expertise required."
    },
    {
      question: "What integrations do you support?",
      answer: "We support 50+ popular tools including Slack, Notion, Salesforce, HubSpot, Jira, GitHub, Google Workspace, Microsoft 365, and many more. We also offer custom API integrations for enterprise needs."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're SOC 2 Type II certified, GDPR compliant, and use 256-bit AES encryption. Your data is stored in SSAE 18 compliant data centers and we never share your data with third parties."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked. We offer a 14-day money-back guarantee on all paid plans, no strings attached."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes! Our Enterprise plan includes custom AI models, SSO/SAML authentication, dedicated account management, self-hosted options, and tailored reporting. Contact our sales team for a custom quote."
    },
    {
      question: "How does the AI actually work?",
      answer: "Our AI analyzes patterns in your team's workflows, identifies inefficiencies, and provides actionable recommendations. Over time, it learns your preferences and automates repetitive tasks while keeping you in full control."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orbitAccent/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orbitAccent text-sm font-bold uppercase tracking-widest mb-4 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Got questions? We've got answers. If you don't find what you need, reach out to our team.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-orbitAccent hover:underline font-medium"
          >
            <MessageCircle size={18} />
            Chat with our team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
