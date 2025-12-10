"use client";

import { CountUp } from "@/components/ui/count-up";
import { motion } from "framer-motion";

const process = [
  {
    title: "Assess & baseline",
    body: "Map flows, quality, and energy dependencies to identify immediate savings and compliance gaps.",
  },
  {
    title: "Instrument & connect",
    body: "Deploy multi-parameter sensing, secure data uplinks, and validation for tankers and discharge.",
  },
  {
    title: "Automate & optimize",
    body: "ORP-driven dosing, pump scheduling, and flow balancing to stabilize quality and increase reuse.",
  },
  {
    title: "Operate & prove",
    body: "Dashboards, alerts, and audit-ready reports that keep ops, sustainability, and finance aligned.",
  },
];

const fades = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export const ServicesProcess = () => {
  return (
    <section className="max-w-(--breakpoint-xl) mx-auto w-full px-6 py-16 lg:py-20">
      <motion.div className="space-y-3 text-center" {...fades} transition={{ duration: 0.6 }}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How we work</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">A service model built around uptime</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We sequence improvements to avoid downtime—delivering quick wins first, then layering automation and reporting.
        </p>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {process.map((item, idx) => (
          <motion.div
            key={item.title}
            className="rounded-2xl border border-primary/20 bg-white/80 backdrop-blur p-6 shadow-sm flex gap-4 items-start"
            {...fades}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
              <CountUp value={idx + 1} duration={0.6} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-muted-foreground">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
