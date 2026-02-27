"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

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

export const AboutCta = () => {
  return (
    <div className="flex flex-col justify-center pb-16 lg:pb-20 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto">
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
            <Link href="/case-studies">
              <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-colors">
                Explore case studies
              </Button>
            </Link>
          </div>
        </div>
        <Card className="border-white/15 bg-white/5 backdrop-blur shadow-lg">
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {proofList.map((item, idx) => (
                <motion.div key={item} className="flex gap-3" {...fades} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                  <Check className="h-5 w-5 text-primary-200 shrink-0" />
                  <p className="text-white/90 text-sm sm:text-base">{item}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};
