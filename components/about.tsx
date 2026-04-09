"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { motion } from "framer-motion";
import { 
  Check, Navigation, Radar, Sparkles, ShieldCheck, 
  Activity, Gauge, Workflow, Waves, ArrowRight, ArrowDown 
} from "lucide-react";
import Link from "next/link";
import { MissionVision } from "@/components/mission-vision";

const whyGreenvironmentPillars = [
  {
    title: "Predictive water intelligence",
    body: "AI-led monitoring that anticipates leaks, contamination, and stress points before they hit your ops.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Autonomous response loops",
    body: "Closed-loop automations that trigger alerts, valves, and energy reroutes with human-in-the-loop overrides.",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: "Safety & compliance baked-in",
    body: "Live QA, audit trails, and resilient governance that keep every site secure and regulation-ready.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Immersive situational clarity",
    body: "Unified dashboards, 3D-style mapping, and narrative alerts to move from data to action instantly.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Circular resource stewardship",
    body: "Optimize reuse, recycling, and zero-loss initiatives with quantified impact across every asset.",
    icon: <Waves className="h-5 w-5" />,
  },
  {
    title: "Digital twins & AI response",
    body: "Virtual replicas of every site with AI-assist to simulate, validate, and respond faster when conditions change.",
    icon: <Activity className="h-5 w-5" />,
  },
];

const metrics = [
  { label: "Years operating", value: 12, suffix: "+" },
  { label: "Water savings", value: 40, suffix: "%", hint: "Typical range 22–40%" },
  { label: "Projects Completed", value: 400, suffix: "+" },
  { label: "Clients", value: 175, suffix: "+" },
];

const approach = [
  {
    title: "Baseline every site",
    description: "Map flows, quality, and risk to target the fastest wins.",
    icon: <Navigation className="h-5 w-5" />,
  },
  {
    title: "Instrument the network",
    description: "Deploy multi-parameter sensing with secure data uplinks.",
    icon: <Radar className="h-5 w-5" />,
  },
  {
    title: "Automate treatment & reuse",
    description: "ORP-based dosing, quality gates, and smart routing.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Operationalize insights",
    description: "Alerts, reports, and playbooks for local teams to act fast.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const teamMembers = [
  { name: "Sridharan Nair", role: "Chairman and Director", image: "Sridharan Nair - Chairman & Director -4.webp" },
  { name: "Varun Sridharan", role: "Co-CEO and Director", image: "varun_srid.jpeg" },
  { name: "Mohanraj Makkuni", role: "Co-CEO and Director", image: "Mohanraj Makkuni.webp" },
  { name: "Anoop Nambiar", role: "Director", image: "Anoop Nambiar.webp" },
];

const fades = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const SectionLabel = ({ label }: { label: string }) => (
  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0ab8c9]/40 bg-[#0ab8c9]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#02696b]">
    {label}
  </div>
);

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
              We combine IoT sensing, AI-powered analytics, and on-site automation to drought-proof facilities, reclaim more water, and cut operating costs without disrupting daily work.
            </p>
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

      <MissionVision />

      {/* Why Greenvironment - Isolated Revert to 1017501 Style */}
      <section className="relative isolate overflow-hidden bg-white py-12 text-[#02696b]">
        <div className="relative mx-auto flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 text-left"
          >
            <SectionLabel label="Value Proposition" />
            <h2 className="text-3xl font-semibold sm:text-4xl text-[#02696b] mt-4">Why Greenvironment</h2>
            <p className="max-w-3xl text-lg text-slate-700 leading-relaxed font-medium">
              Proof points that show how our strategy-to-execution model delivers measurable sustainability outcomes with speed.
            </p>
          </motion.div>

          {/* Grid changed to md:grid-cols-2 as per 1017501 */}
          <div className="grid gap-6 md:grid-cols-2">
            {whyGreenvironmentPillars.map((pillar, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-[#0ab8c9]/25 bg-gradient-to-br from-white via-[#e6f7f8] to-white p-6 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,142,34,0.18),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(10,184,201,0.2),transparent_44%)] opacity-70 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#02696b]/10 text-[#02696b] ring-1 ring-[#02696b]/20">
                      {pillar.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold leading-tight text-[#02696b]">{pillar.title}</h3>
                    <p className="text-base text-slate-700 leading-relaxed font-medium">{pillar.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mt-16 space-y-8">
        <motion.div className="space-y-3 text-center" {...fades} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our Team</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="rounded-2xl border border-primary/15 bg-white/80 backdrop-blur shadow-sm overflow-hidden"
              {...fades}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
            >
              <div className="aspect-[4/5] relative bg-gradient-to-br from-emerald-200/40 via-white to-sky-100/40 overflow-hidden">
                <motion.div 
                  className="h-full w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={`/team/${member.image}`}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    unoptimized
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-4 text-center space-y-1">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
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
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
          {approach.map((step, idx) => (
            <React.Fragment key={step.title}>
              <motion.div
                className="flex flex-col items-center text-center gap-3"
                {...fades}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  {step.icon}
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">{step.title}</span>
                <span className="text-slate-800 max-w-xs">{step.description}</span>
              </motion.div>

              {idx < approach.length - 1 && (
                <div className="flex items-center justify-center self-center lg:translate-y-[10px]">
                  <div className="hidden lg:flex items-center self-center">
                    <svg width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 8 H80"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        className="text-primary/60"
                      />
                      <path
                        d="M78 4 L84 8 L78 12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary/70"
                      />
                    </svg>
                  </div>
                  <div className="lg:hidden flex flex-col items-center self-center gap-1">
                    <svg width="16" height="72" viewBox="0 0 16 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0 V60"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        className="text-primary/60"
                      />
                      <path
                        d="M4 56 L8 64 L12 56"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary/70"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
