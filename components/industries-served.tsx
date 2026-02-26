"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  GraduationCap, 
  Hotel, 
  Factory, 
  Zap, 
  Building 
} from "lucide-react";

const industries = [
  {
    title: "Commercial and mixed-use developments",
    icon: Building2,
  },
  {
    title: "Campuses and institutional facilities",
    icon: GraduationCap,
  },
  {
    title: "Hospitality and real estate portfolios",
    icon: Hotel,
  },
  {
    title: "Industrial and manufacturing facilities",
    icon: Factory,
  },
  {
    title: "Utilities and infrastructure operators",
    icon: Zap,
  },
  {
    title: "Smart cities and large-scale developments",
    icon: Building,
  },
];

const fades = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
};

export default function IndustriesServed() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-16 lg:mb-20">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          {...fades}
        >
          Industries We Serve
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-primary mx-auto rounded-full"
          {...fades}
          transition={{ ...fades.transition, delay: 0.1 }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group"
              {...fades}
              transition={{ ...fades.transition, delay: index * 0.05 + 0.2 }}
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-emerald-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
