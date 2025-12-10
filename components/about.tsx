"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pillars = [
  {
    title: "Evidence-based water intelligence",
    body: "Real-time sensing across intake, treatment, and reuse—grounded in regulatory-ready data you can act on.",
  },
  {
    title: "Zero-disruption deployments",
    body: "Site-first playbooks that layer onto existing infra, so operations stay online while we modernize them.",
  },
  {
    title: "Automation with accountability",
    body: "Closed-loop controls for dosing, quality, and distribution with transparent logs, alerts, and audits.",
  },
];

const metrics = [
  { label: "Years operating", value: 12, suffix: "+" },
  { label: "Water savings", value: 40, suffix: "%", hint: "Typical range 22–40%" },
  { label: "Campuses monitored", value: 150, suffix: "+" },
  { label: "Cities served", value: 18, suffix: "" },
];

const approach = [
  "Baseline every site—map flows, quality, and risk to target the fastest wins.",
  "Instrument the network with multi-parameter sensing and secure data uplinks.",
  "Automate treatment & reuse with ORP-based dosing and quality gates.",
  "Operationalize insights with alerts, reports, and playbooks for local teams.",
];

const proofList = [
  "Real-time compliance reports for STP/WTP and discharge.",
  "ORP-driven dosing automation with transparent logs.",
  "Alerts for tankers, flow anomalies, and reuse quality gates.",
  "24/7 monitoring with site-first rollout to avoid downtime.",
];

const fades = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const About = () => {
  return (
    <div className="flex flex-col justify-center py-16 lg:py-20 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-20">
      {/* Intro */}
      <motion.section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center" {...fades} transition={{ duration: 0.65 }}>
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About Greenvironment
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Building resilient water systems for cities, campuses, and enterprises.
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We combine IoT sensing, AI-powered analytics, and on-site automation to drought-proof facilities,
              reclaim more water, and cut operating costs without disrupting daily work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full" size="lg">
              Talk to our team
            </Button>
            <Button variant="outline" className="rounded-full" size="lg">
              See case studies
            </Button>
          </div>
        </div>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-white to-primary/5 shadow-sm">
          <CardContent className="p-6 sm:p-8 grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                className="rounded-xl border border-primary/15 bg-white/80 p-4"
                {...fades}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="text-sm uppercase tracking-[0.14em] text-primary">{metric.label}</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900 flex items-baseline gap-2">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                  {metric.hint && <span className="text-xs text-muted-foreground font-medium">{metric.hint}</span>}
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.section>

      {/* Pillars */}
      <section className="space-y-8">
        <motion.div className="space-y-3" {...fades} transition={{ duration: 0.5 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How we operate</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our pillars</h2>
          <p className="text-muted-foreground max-w-2xl">
            Every deployment blends data fidelity, operational uptime, and accountable automation—so sustainability and savings move together.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div key={pillar.title} {...fades} transition={{ duration: 0.55, delay: idx * 0.05 }}>
              <Card className="border-primary/15 bg-white/80 backdrop-blur shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach steps */}
      <section className="space-y-8">
        <motion.div className="space-y-3" {...fades} transition={{ duration: 0.5 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our method</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">From baseline to automation</h2>
          <p className="text-muted-foreground max-w-3xl">
            We partner closely with facilities teams to sequence improvements—delivering quick wins while building durable, automated controls.
          </p>
        </motion.div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {approach.map((step, idx) => (
            <motion.div key={step} {...fades} transition={{ duration: 0.55, delay: idx * 0.05 }}>
              <Card className="border-primary/15 bg-white/80 backdrop-blur shadow-sm">
                <CardContent className="p-5 flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    <CountUp value={idx + 1} duration={0.6} />
                  </div>
                  <p className="text-slate-800">{step}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proof and CTA */}
      <motion.section
        className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] items-center rounded-3xl bg-gradient-to-br from-primary/25 via-slate-950 to-slate-900 text-white p-8 sm:p-10"
        {...fades}
        transition={{ duration: 0.65 }}
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
            Proof, not promises
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
            Live savings, quality compliance, and reuse gains you can show your board.
          </h3>
          <p className="text-white/80 max-w-3xl">
            We deliver dashboards, alerts, and audit-ready reports—so sustainability, ops, and finance teams stay aligned on outcomes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
              Explore case studies
            </Button>
            <Button variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10">
              Book a walkthrough
            </Button>
          </div>
        </div>
        <Card className="border-white/15 bg-white/5 backdrop-blur shadow-lg">
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {proofList.map((item, idx) => (
                <motion.div key={item} className="flex gap-3" {...fades} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                  <Check className="h-5 w-5 text-primary-200" />
                  <p className="text-white/90">{item}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default About;
