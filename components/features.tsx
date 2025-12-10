"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { motion } from "framer-motion";
import { BadgeCheck, Droplets, Gauge, ShieldCheck, Waves, Zap } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "End-to-end water visibility",
    description: "Continuous sensing from intake to reuse with live quality gates, tanker validation, and automated alerts.",
  },
  {
    icon: Gauge,
    title: "Optimization playbooks",
    description: "Baseline, benchmark, and tune STP/WTP performance to lift reuse rates and cut freshwater demand.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance you can show",
    description: "Regulatory-ready reports with audit trails, dosing logs, and discharge quality evidence.",
  },
  {
    icon: Zap,
    title: "Automation with controls",
    description: "ORP-driven dosing, pump sequencing, and flow balancing to stabilize quality without downtime.",
  },
  {
    icon: Waves,
    title: "Resilient reuse",
    description: "Safely route treated water for flushing, cooling, and landscaping with sensor-backed safeguards.",
  },
  {
    icon: BadgeCheck,
    title: "Uptime-first deployment",
    description: "Phased rollouts that layer onto existing infrastructure so daily operations stay online.",
  },
];

const fades = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const Features = () => {
  return (
    <div id="features" className="max-w-(--breakpoint-xl) mx-auto w-full py-16 lg:py-20 px-6">
      <motion.div
        className="text-center max-w-3xl mx-auto space-y-3"
        {...fades}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What we deliver</p>
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Services built for water resilience</h2>
        <p className="text-muted-foreground">
          From baseline assessments to automated treatment and reuse, we align sustainability, ops, and finance around measurable outcomes.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            {...fades}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
          >
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-white to-primary/5 shadow-sm">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-slate-900">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
