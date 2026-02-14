"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, MapPin } from "lucide-react";

const phases = [
  {
    year: "Today",
    title: "Current Operations",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconColor: "text-emerald-600",
    description: " delivering intelligent water and energy management solutions across commercial, industrial, and infrastructure sectors.",
    regions: ["India", "GCC (Gulf Cooperation Council)"]
  },
  {
    year: "2026",
    title: "Planned Expansion",
    bg: "bg-white",
    border: "border-slate-200",
    iconColor: "text-sky-600",
    description: "Extending minimal footprint to broader Asian markets and supporting growing demand in the Americas.",
    regions: ["Americas", "Asia"]
  },
  {
    year: "2027",
    title: "Future Expansion",
    bg: "bg-white",
    border: "border-slate-200",
    iconColor: "text-slate-600",
    description: "Establishing presence for regulatory-aligned sustainability solutions in Europe and Australasia.",
    regions: ["Europe & United Kingdom", "Australasia"]
  }
];

export const CardsView = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
                <h2 className="text-3xl font-bold text-slate-900">Regional Expansion Strategy</h2>
                <p className="text-slate-500 mt-2 max-w-xl">
                    A phased growth plan designed for regulatory readiness and service excellence.
                </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-emerald-700">
                View Full Roadmap <ArrowRight className="w-4 h-4" />
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`rounded-2xl p-8 border ${phase.border} ${phase.bg} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm border border-slate-100 ${phase.iconColor}`}>
                    <Globe2 className="w-6 h-6" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${phase.year === 'Today' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                    {phase.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {phase.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-100/50">
                {phase.regions.map((region) => (
                    <div key={region} className="flex items-center gap-2 text-sm font-medium text-slate-800">
                        <MapPin className={`w-4 h-4 ${phase.iconColor}`} />
                        {region}
                    </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
