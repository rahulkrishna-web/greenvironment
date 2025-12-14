"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ServiceCard = {
  title: string;
  description: string;
  image?: string;
};

const services: ServiceCard[] = [
  {
    title: "Real-time plant oversight",
    description: "Multi-parameter sensing, anomaly flags, and uptime alerts tuned for operators on shift.",
    image: "/placeholder.svg",
  },
  {
    title: "Dosing & quality automation",
    description: "ORP-based dosing, reuse quality gates, and closed-loop control with transparent logs.",
  },
  {
    title: "Distribution & reuse control",
    description: "Smart valves, reuse routing, and flow balancing to move more water without downtime.",
    image: "/placeholder.svg",
  },
  {
    title: "Energy optimized pumping",
    description: "Pump scheduling and load shifting that respect process constraints while cutting power draw.",
  },
  {
    title: "Regulatory-ready reporting",
    description: "Audit-ready reports, discharge validation, and evidence trails for every compliance check.",
    image: "/placeholder.svg",
  },
  {
    title: "Field-first deployments",
    description: "Playbooks, training, and rollout sequencing designed with site teams to avoid disruption.",
  },
];

const fades = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

const ServicesShowcase = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-primary/10 bg-gradient-to-br from-white via-emerald-50 to-sky-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_45%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.14),transparent_40%)]" aria-hidden />
      <div className="relative max-w-(--breakpoint-xl) mx-auto px-6 py-16 lg:py-20 space-y-10">
        <motion.div className="space-y-3 text-center" {...fades} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What we deliver</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Services built for reliability and proof
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A mix of automation, oversight, and reporting so every site stays compliant, efficient, and audit-ready.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-slate-900 text-white shadow-[0_22px_80px_-50px_rgba(15,23,42,0.65)] transition-transform duration-500 ease-out hover:-translate-y-1"
              {...fades}
              transition={{ duration: 0.55, delay: idx * 0.03 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900" />
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={idx < 2}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/55" aria-hidden />

              <div className="relative flex h-full min-h-[220px] flex-col justify-end">
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full translate-y-[55%] rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 transition-all duration-500 ease-out group-hover:translate-y-0">
                    <div className="flex h-full flex-col justify-end gap-3 p-6 transition-all duration-500 ease-out group-hover:justify-center group-hover:gap-4">
                      <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                      <p className="text-sm text-white/85 opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
