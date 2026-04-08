"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-48 lg:pb-32 bg-[#022c2d] text-white overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,184,201,0.15),transparent_40%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0ab8c9]/5 to-transparent skew-x-12 transform origin-right" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#0ab8c9]/30 bg-[#0ab8c9]/10"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#0ab8c9] text-[#0ab8c9]" />
            ))}
            <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0ab8c9]">
              Trusted by 500+ Clients
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            What Our <span className="text-[#0ab8c9]">Partners</span> Say
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Real stories of impact, efficiency, and sustainability from industries across the globe. We don't just provide solutions; we build lasting legacy partnerships.
          </motion.p>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-10" />
    </section>
  );
};

export default TestimonialsHero;
