"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const phases = [
  {
    year: "Current",
    title: "Active Operations",
    regions: [
      {
        name: "India",
        description: "Intelligent water and energy management solutions across commercial, industrial, and infrastructure sectors."
      },
      {
        name: "GCC (Gulf Cooperation Council)",
        description: "Large-scale systems for water- and energy-intensive infrastructure and smart city initiatives."
      }
    ],
    status: "active",
    color: "bg-emerald-700",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-700"
  },
  {
    year: "2026",
    title: "Planned Expansion",
    regions: [
      { name: "Americas", description: "Planned expansion to support growing demand for sustainable infrastructure." },
      { name: "Asia (Additional Markets)", description: "Extending minimal footprint to broader Asian markets." }
    ],
    status: "planned",
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500"
  },
  {
    year: "2027",
    title: "Future Expansion",
    regions: [
      { name: "Europe & United Kingdom", description: "Establishing presence for regulatory-aligned sustainability solutions." },
      { name: "Australasia", description: "Bringing resilient water management systems to the region." }
    ],
    status: "future",
    color: "bg-emerald-300",
    textColor: "text-emerald-300",
    borderColor: "border-emerald-300"
  }
];

export const TimelineView = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Expansion Roadmap</h2>
          <p className="text-slate-600">
            Greenvironment’s global expansion follows a phased, governance-led approach to ensure consistent service quality, regulatory readiness, and long-term partnership capability.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-200 hidden md:block rounded-full opacity-30" />

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative pt-4 md:pt-16"
              >
                {/* Timeline Node */}
                <div className={`absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white border-4 ${phase.borderColor} shadow-sm z-10`}>
                    <span className={`font-bold ${phase.textColor}`}>{phase.year}</span>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full hover:shadow-md transition-shadow">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${phase.color}`}>
                        {phase.status === 'active' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {phase.title}
                    </div>
                    
                    <div className="space-y-6">
                        {phase.regions.map((region) => (
                            <div key={region.name} className="border-l-2 border-slate-100 pl-4">
                                <h4 className="font-semibold text-slate-900">{region.name}</h4>
                                <p className="text-sm text-slate-500 mt-1">{region.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
