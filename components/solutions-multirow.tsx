"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    id: "water",
    title: "Water Intelligence",
    description: "Comprehensive monitoring and optimization of water systems across treatment, storage, distribution, and reuse.",
    features: [
      "Real-time water flow and consumption monitoring",
      "Leak detection and loss reduction",
      "Water quality and performance analytics",
      "Optimization of reuse and treatment operations"
    ],
    image: "/solutions/water_intelligence.png",
    imageAlt: "Smart water management digital twin illustration",
    reverse: false
  },
  {
    id: "energy",
    title: "Energy Intelligence",
    description: "Advanced analytics and monitoring for energy-intensive systems and infrastructure.",
    features: [
      "Energy consumption monitoring and benchmarking",
      "Performance optimization for pumps, HVAC, and utilities",
      "Predictive maintenance insights",
      "Emissions and efficiency tracking"
    ],
    image: "/solutions/energy_intelligence.png",
    imageAlt: "Intelligent building energy management illustration",
    reverse: true
  },
  {
    id: "platform",
    title: "Unified Intelligence Platform",
    description: "A single, secure platform combining water and energy data for holistic operational intelligence.",
    features: [
      "Cloud-based dashboards and analytics",
      "AI-driven alerts and recommendations",
      "Integration with existing systems",
      "Scalable for single sites or multi-site portfolios"
    ],
    image: "/solutions/unified_platform.png",
    imageAlt: "Unified intelligence dashboard command center illustration",
    reverse: false
  }
];

const fades = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7 }
};

export default function SolutionsMultirow() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50/50">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-sky-100/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative mx-auto px-6">
        <motion.div 
          className="max-w-3xl mb-16 lg:mb-24 mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Solutions built for <span className="text-primary italic">reliability</span> and proof
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A mix of automation, oversight, and reporting so every site stays compliant, efficient, and audit-ready.
          </p>
        </motion.div>

        <div className="space-y-32">
          {solutions.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Side */}
              <motion.div 
                className="flex-1 relative group"
                {...fades}
                transition={{ ...fades.transition, delay: 0.1 }}
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-60 mix-blend-overlay group-hover:opacity-100 transition-opacity" />
                   <Image 
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                className="flex-1 space-y-8"
                {...fades}
                transition={{ ...fades.transition, delay: 0.2 }}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <ul className="grid gap-4">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
