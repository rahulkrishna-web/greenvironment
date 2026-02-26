"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Settings2 
} from "lucide-react";

const alignmentFeatures = [
  {
    title: "ISO Standard Support",
    description: "Supports ISO-based environmental and energy management systems (ISO 14001, ISO 50001).",
    icon: ShieldCheck,
  },
  {
    title: "Auditable Data",
    description: "Enables transparent and auditable ESG performance data for stakeholders and regulators.",
    icon: BarChart3,
  },
  {
    title: "Sustainability Reporting",
    description: "Facilitates sustainability reporting and disclosures based on global frameworks.",
    icon: FileText,
  },
  {
    title: "Reliable Governance",
    description: "Strengthens governance through reliable operational intelligence and automated oversight.",
    icon: Settings2,
  },
];

const fades = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 }
};

export default function ESGAlignment() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50/50 overflow-hidden">
      {/* Subtle Bottom-Right Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16 lg:mb-24">
          <motion.div 
            className="flex-1 space-y-6 text-center lg:text-left"
            {...fades}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-primary text-sm font-medium border border-emerald-100 mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Compliance & Standards
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              ESG & <span className="text-primary">Standards Alignment</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Greenenvironment solutions are designed to support organizations in achieving their environmental and governance objectives.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {alignmentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 group"
              {...fades}
              transition={{ ...fades.transition, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-primary ring-1 ring-emerald-100 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <feature.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
