import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const HeroPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('orbit-popup-seen');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('orbit-popup-seen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for signing up! Check your email for early access.');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-gradient-to-b from-gray-900 to-black border border-white/20 rounded-3xl p-8 relative shadow-2xl">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orbitAccent to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <Sparkles size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Get 3 Months Free</h3>
                <p className="text-gray-400 mb-6">Join the waitlist and get exclusive early access pricing. Limited spots available.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your work email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orbitAccent transition-colors"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-orbitAccent hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-white font-bold py-4 rounded-xl transition-all"
                  >
                    Claim Your Spot
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">No credit card required. Cancel anytime.</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HeroPopup;
