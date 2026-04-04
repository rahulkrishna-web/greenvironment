import React from "react";
import { motion } from "framer-motion";

const PartnersHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-48 lg:pb-32 bg-[#022c2d] text-white overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#0ab8c9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#0ab8c9]/30 bg-[#0ab8c9]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0ab8c9]"
          >
            Client Portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Partners Across <span className="text-[#0ab8c9]">Sectors</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Collaborating with 175+ industry leaders to deliver sustainable water and waste management solutions across Residential, Commercial, and Industrial landscapes.
          </motion.p>
        </div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0ab8c9 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      </div>
    </section>
  );
};

export default PartnersHero;
