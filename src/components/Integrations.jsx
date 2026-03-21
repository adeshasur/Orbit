import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
    { name: "Slack", icon: ( <path d="M6,15a2,2,0,1,0,0,4H8V17H6Zm0-4a2,2,0,1,0,0,4H8V11H6Zm4,0a2,2,0,1,0,0,4h2V11H10Zm4,0a2,2,0,1,0,0,4h2V11H14ZM6,7a2,2,0,1,0,0,4H8V7H6Zm4,0a2,2,0,1,0,0,4h2V7H10Zm4,0a2,2,0,1,0,0,4h2V7H14Zm4,0a2,2,0,1,0,0,4h2V7H18Zm0,4a2,2,0,1,0,0,4h2V11H18Zm0,4a2,2,0,1,0,0,4h2V15H18Z" /> ), color: "#4A154B" },
    { name: "Notion", icon: ( <path d="M4 4v16h16V4H4zm14 14h-2v-8.5l-3 8.5h-2L8 9.5V18H6V6h3l4 8.5L16 6h2v12z" /> ), color: "#FFFFFF" }, // Notion often white in dark mode
    { name: "Salesforce", icon: ( <path d="M12.14 8.5C11.39 8.5 10.73 8.78 10.22 9.23C9.9 7.91 8.73 6.94 7.31 6.94C6.27 6.94 5.34 7.45 4.77 8.24C4.19 7.82 3.48 7.57 2.7 7.57C1.21 7.57 0 8.78 0 10.27C0 11.76 1.21 12.97 2.7 12.97H12.14C13.72 12.97 15 11.69 15 10.11S13.72 7.25 12.14 7.25C11.79 7.25 11.45 7.32 11.14 7.43C11.45 7.73 11.72 8.08 11.93 8.48" /> ), color: "#00A1E0" },
    { name: "HubSpot", icon: ( <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 12.5c-.2-.1-.4-.2-.6-.2-.3 0-.6.1-.8.3-.3.3-.5.7-.5 1.1 0 .4.2.8.5 1.1.2.2.5.3.8.3.3 0 .6-.1.8-.3s.4-.6.4-1c0-.5-.1-1-.4-1.3zm1.1-3.6c-.3-.3-.8-.5-1.3-.5-.5 0-.9.2-1.3.5-.3.3-.5.7-.5 1.2 0 .5.2.9.5 1.2.3.3.8.5 1.3.5s.9-.2 1.3-.5c.3-.3.5-.7.5-1.2h0c0-.5-.2-.9-.5-1.2z" /> ), color: "#FF7A59" },
    { name: "Jira", icon: ( <path d="M11.5 2C11.5 2 7 6.5 7 11.5S11.5 21 11.5 21H21V2H11.5ZM10 11.5C10 10.12 11.12 9 12.5 9S15 10.12 15 11.5 13.88 14 12.5 14 10 12.88 10 11.5Z" /> ), color: "#0052CC" },
    { name: "GitHub", icon: ( <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.7-2.8 5.6-5.5 6 .5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A12 12 0 0 0 12 .3" /> ), color: "#FFFFFF" },
    { name: "Google", icon: ( <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /> ), color: "#4285F4" },
    { name: "Linear", icon: ( <path d="M12 2L2 7l10 5 10-5-10-5zm0 20l-10-5 10-5 10 5-10 5z" /> ), color: "#5E6AD2" },
    { name: "Figma", icon: ( <path d="M8.5 2C6.57 2 5 3.57 5 5.5s1.57 3.5 3.5 3.5H12V2H8.5zM12 9v7h3.5c1.93 0 3.5-1.57 3.5-3.5S17.43 9 15.5 9H12zm-3.5 0C6.57 9 5 10.57 5 12.5S6.57 16 8.5 16H12V9H8.5zm3.5 7v3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5H12zM8.5 16C6.57 16 5 17.57 5 19.5S6.57 23 8.5 23s3.5-1.57 3.5-3.5V16H8.5z" /> ), color: "#F24E1E" },
    { name: "Asana", icon: ( <path d="M12 2L2 7l10 5 10-5-10-5zm0 10.5L2 17.5l10 5 10-5-10-5z" /> ), color: "#F06560" },
    { name: "Trello", icon: ( <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7V7h2v10zm4 0h-2V7h2v10zm4-4h-2V7h2v6z" /> ), color: "#0079BF" },
    { name: "Zoom", icon: ( <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 14h-4v-4h4v4zm0-6h-4V6h4v4z" /> ), color: "#2D8CFF" },
  ];

  return (
    <section id="integrations" className="py-24 px-6 relative bg-orbitDark overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orbitAccent/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orbitAccent/10 border border-orbitAccent/20 text-orbitAccent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-orbitAccent animate-pulse"></div>
            Integrations
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Seamlessly <span className="bg-gradient-to-r from-orbitAccent to-blue-400 bg-clip-text text-transparent">Integrated</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Orbit talks to the tools you already use, pulling all your data together into one powerful dashboard.
          </p>
        </motion.div>

        {/* Integration Cloud/Grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 justify-items-center">
            {integrations.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.03, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative w-full aspect-square max-w-[150px] rounded-[2.5rem] bg-[#111622]/80 backdrop-blur-sm border border-white/[0.03] flex flex-col items-center justify-center p-5 cursor-pointer hover:bg-[#161b2a] transition-all duration-300"
              >
                {/* Floating Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at center, ${app.color}15 0%, transparent 70%)`,
                    boxShadow: `0 0 30px -10px ${app.color}20`
                  }}
                ></div>
                
                {/* Icon Container */}
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center mb-3 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${app.color}10 0%, ${app.color}25 100%)`,
                    boxShadow: `inset 0 0 20px ${app.color}10`
                  }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" 
                    fill={app.color}
                  >
                    {app.icon}
                  </svg>
                </div>
                
                <span className="text-[10px] md:text-xs font-semibold text-gray-500 group-hover:text-white/90 uppercase tracking-widest transition-colors relative z-10">
                  {app.name}
                </span>

                {/* Corner detail */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-orbitAccent transition-colors"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Subtle masking gradients */}
          <div className="absolute -inset-x-20 inset-y-0 bg-gradient-to-r from-orbitDark via-transparent to-orbitDark pointer-events-none opacity-40"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="text-gray-500 text-sm mb-8 font-medium italic">"Orbit is the glue that held our 20+ tool stack together."</p>
          <button className="relative group px-10 py-4 bg-orbitAccent text-white rounded-2xl font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Explore All 100+ App Connections
            <div className="absolute inset-0 rounded-2xl bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
