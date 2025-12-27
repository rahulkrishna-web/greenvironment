"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { motion } from "framer-motion";
import { Check, Navigation, Radar, Sparkles, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";
import { ValuePropositionSection } from "@/components/what-we-do-options";

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
  { label: "Clients", value: 300, suffix: "+" },
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

const proofList = [
  "Real-time compliance reports for STP/WTP and discharge.",
  "ORP-driven dosing automation with transparent logs.",
  "Alerts for tankers, flow anomalies, and reuse quality gates.",
  "24/7 monitoring with site-first rollout to avoid downtime.",
];

const teamMembers = [
  { name: "Sridharan Nair", role: "Chairman & Director", image: "sridharan-nair-chairman-director.jpg" },
  { name: "Anoop Nambiar", role: "Director", image: "anoop-nambiar-director.gif" },
  { name: "Mohan Raj Makkuni", role: "Director & Co-Chief Executive Officer", image: "mohan-raj-makkuni-director-co-chief-executive-officer.jpg" },
  { name: "Varun Sridharan", role: "Chief Executive Officer", image: "varun-sridharan-chief-executive-officer.png" },
  { name: "Srikumar Gopinath", role: "Chief Financial Officer", image: "srikumar-gopinath-chief-financial-officer.jpeg" },
  { name: "Pallavi Krishnakumar", role: "Head - Finance & Business", image: "pallavi-krishnakumar-head-finance-business.jpg" },
  { name: "John Paul", role: "Head - Technology", image: "john-paul-head-technology.jpg" },
  { name: "Bhagyashree Rath", role: "Vice President - Business Operations", image: "bhagyashree-rath-vice-president-business-operations.png" },
  { name: "Esther Mary", role: "Head - Product Management", image: "esther-mary-head-product-management.jpeg" },
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

      <div className="mt-12 px-6 sm:px-6 md:px-0">
        <ValuePropositionSection />
      </div>

      {/* Our Team */}
      {false && (
        <section className="mt-16 space-y-8">
          <motion.div className="space-y-3 text-center" {...fades} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">The people building resilient water systems</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Field engineers, analysts, and program leads who keep every deployment on-track and audit-ready.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                className="rounded-2xl border border-primary/15 bg-white/80 backdrop-blur shadow-sm overflow-hidden"
                {...fades}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
              >
                <div className="aspect-[4/5] relative bg-gradient-to-br from-emerald-200/40 via-white to-sky-100/40">
                  <Image
                    src={`/team/${member.image}`}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

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

      {/* Proof and CTA */}
      <motion.section
        className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] items-center rounded-3xl bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white p-8 sm:p-10"
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
