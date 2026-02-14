"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
 
import World from "@react-map/world";

// Coordinate adjustments for the standard World map projection used by @react-map/world
// Note: These need to be manually tuned based on the SVG projection.
const locations = [
  { 
    id: "india", 
    x: 67, 
    y: 58, 
    label: "India", 
    status: "active",
    title: "India Operations",
    year: "Active",
    description: "Headquarters & R&D. Delivering intelligent water and energy solutions."
  },
  { 
    id: "gcc", 
    x: 56, 
    y: 45, 
    label: "GCC", 
    status: "active",
    title: "GCC Region",
    year: "Active",
    description: "Strategic operations for large-scale infrastructure and smart city projects."
  },
  { 
    id: "americas", 
    x: 18, 
    y: 36, 
    label: "Americas", 
    status: "planned",
    year: "2026",
    title: "Americas Expansion",
    description: "Upcoming expansion to serve North & South American markets."
  },
  { 
    id: "asia", 
    x: 79, 
    y: 39, 
    label: "Asia", 
    status: "planned",
    year: "2026",
    title: "Asia Markets",
    description: "Extending operations to broader Asian markets."
  },
  { 
    id: "europe", 
    x: 49, 
    y: 29, 
    label: "Europe & UK", 
    status: "future",
    year: "2027",
    title: "Europe & UK",
    description: "Future expansion focusing on EU sustainability regulations."
  },
  { 
    id: "australasia", 
    x: 85, 
    y: 75, 
    label: "Australasia", 
    status: "future",
    year: "2027",
    title: "Australasia",
    description: "Bringing resilient water management systems to the region."
  },
];


export const RealMapView = () => {
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Global Expansion Roadmap</h2>
           <p className="text-slate-600">
             Phased global growth with governance and precision.
           </p>
        </div>

        <div className="relative w-full aspect-[1.8/1] max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden group/map">
             
             {/* 
                World Map (Base) from @react-map/world 
                We use a container to scale the SVG to fit.
                We can't easily style internal paths of this library component usually, 
                so we rely on props if available or CSS targeting if possible.
                Assuming standard props for now.
             */}
             <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <World 
                    type="select-single"
                    size={1100} // Large enough to fill based on container aspect ratio
                    mapColor="#e2e8f0" 
                    strokeColor="#cbd5e1" 
                    strokeWidth={1}
                    hoverColor="#e2e8f0" // Disable hover highlighting for base map generally to avoid distraction
                />
             </div>



            {/* Interactive Dots */}
            {locations.map((loc) => {
                 const isActive = loc.status === 'active';
                 const colorClass = isActive ? 'bg-emerald-600' : (loc.status === 'planned' ? 'bg-sky-500' : 'bg-slate-500');
                 const ringClass = isActive ? 'ring-emerald-600/30' : (loc.status === 'planned' ? 'ring-sky-500/30' : 'ring-slate-500/30');

                 // Hide the specific India dot since we have the big green map? 
                 // No, keep the dot for consistency and interactivity hub.
                 
                 return (
                    <div 
                        key={loc.id}
                        className="absolute z-30"
                        style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                        onMouseEnter={() => setHoveredLocation(loc.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                    >
                        {/* Pulse Effect for Active Regions */}
                        {isActive && (
                            <div className={`absolute -inset-4 rounded-full border border-emerald-500/30 opacity-0 animate-ping`} />
                        )}
                        
                        {/* The Dot */}
                        <div className={`relative z-10 w-3 h-3 md:w-4 md:h-4 rounded-full ${colorClass} shadow-lg ring-4 ${ringClass} cursor-pointer transition-transform duration-300 hover:scale-125`} />

                        {/* Label */}
                         <div className={`absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 transition-colors bg-white/50 backdrop-blur-sm px-2 py-0.5 rounded-full cursor-pointer pointer-events-none`}>
                             {loc.label}
                         </div>

                        {/* Info Card (Hover) */}
                        <AnimatePresence>
                            {hoveredLocation === loc.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-50 left-1/2 -translate-x-1/2 top-8 w-64 md:w-72 bg-white rounded-xl shadow-2xl p-4 border border-slate-100 text-left pointer-events-none max-w-[90vw]"
                                    style={{ 
                                      position: 'absolute',
                                      transform: 'translateX(-50%)',
                                      ...(loc.x > 80 ? { left: 'auto', right: '0', transform: 'none' } : {}),
                                      ...(loc.x < 20 ? { left: '0', right: 'auto', transform: 'none' } : {})
                                    }} 
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider text-white ${colorClass}`}>
                                            {loc.year || "Active"}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{loc.title}</h4>
                                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                        {loc.description}
                                    </p>
                                    
                                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-slate-100 transform rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                 )
            })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-700">Active Operations</span>
            </div>
            <div className="flex items-center gap-3">
                 <span className="h-3 w-3 rounded-full bg-sky-500 ring-4 ring-sky-500/20"></span>
                 <span className="text-sm font-medium text-slate-700">Planned (2026)</span>
            </div>
            <div className="flex items-center gap-3">
                 <span className="h-3 w-3 rounded-full bg-slate-500 ring-4 ring-slate-500/20"></span>
                 <span className="text-sm font-medium text-slate-700">Future (2027)</span>
            </div>
        </div>
      </div>
    </section>
  );
};
