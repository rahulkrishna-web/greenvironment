"use client";

import { motion } from "framer-motion";

const locations = [
  { id: "india", x: 67, y: 52, label: "India (Active)", status: "active" },
  { id: "gcc", x: 57, y: 50, label: "GCC (Active)", status: "active" },
  { id: "americas", x: 25, y: 35, label: "Americas (2026)", status: "planned" },
  { id: "asia", x: 78, y: 45, label: "Asia (2026)", status: "planned" },
  { id: "europe", x: 50, y: 30, label: "Europe & UK (2027)", status: "future" },
  { id: "australasia", x: 85, y: 75, label: "Australasia (2027)", status: "future" },
];

export const MapView = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-(--breakpoint-xl) mx-auto relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Global Reach & Expansion</h2>
          <p className="text-slate-400">
            Greenvironment is expanding its regional presence in a phased and structured manner.
          </p>
        </div>

        {/* Abstract World Map Container */}
        <div className="relative aspect-[2/1] w-full max-w-5xl mx-auto bg-slate-800/50 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Abstract Continents (Simplified Shapes) */}
           <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             {/* Americas */}
             <path d="M10,10 Q30,10 35,30 T25,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
             {/* Eurasia/Africa */}
             <path d="M45,15 Q60,10 75,20 T65,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
             {/* Australia */}
             <path d="M80,65 Q90,65 90,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
           </svg>


          {/* Location Markers */}
          {locations.map((loc, idx) => {
            const color = loc.status === 'active' ? 'bg-emerald-500' : loc.status === 'planned' ? 'bg-sky-500' : 'bg-slate-500';
            const ringColor = loc.status === 'active' ? 'border-emerald-500' : loc.status === 'planned' ? 'border-sky-500' : 'border-slate-500';
            
            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="absolute flex flex-col items-center gap-2"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              >
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${color} shadow-[0_0_15px_rgba(16,185,129,0.6)]`} />
                  <div className={`absolute -inset-1 rounded-full border ${ringColor} opacity-50 animate-ping`} />
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded bg-slate-950/80 border border-white/10 backdrop-blur-sm whitespace-nowrap ${loc.status === 'active' ? 'text-emerald-400' : 'text-white/70'}`}>
                  {loc.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Key/Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" /> Active Operations
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-500" /> Planned (2026)
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-500" /> Future (2027)
            </div>
        </div>
      </div>
    </section>
  );
};
