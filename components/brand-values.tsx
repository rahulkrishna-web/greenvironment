"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    icon: "/brand-value-icons/1-sustainability-with-integrity.gif",
    title: "Sustainability with Integrity",
    description: "Every solution advances environmental stewardship with measurable outcomes.",
  },
  {
    icon: "/brand-value-icons/2-transparency-in-action.gif",
    title: "Transparency in Action",
    description: "Clear, accessible data for stakeholders across the operational chain.",
  },
  {
    icon: "/brand-value-icons/3-partnershipsfor-change.gif",
    title: "Partnerships for Change",
    description: "We co-create with clients, academia, and communities for long-term impact.",
  },
  {
    icon: "/brand-value-icons/4-measurable-by-impact.gif",
    title: "Measured by Impact",
    description: "Success measured in resources saved and resilience gained, not promises.",
  },
];

const fades = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export const BrandValues = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 space-y-10">
        <motion.div className="text-center space-y-3" {...fades} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Brand pillars</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Principles that guide how we operate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How we partner, deliver, and measure impact across every engagement.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              className="group rounded-2xl bg-white transition-shadow p-6 flex flex-col items-center text-center gap-4"
              {...fades}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image
                src={value.icon}
                alt={value.title}
                fill
                className="object-cover"
                sizes="96px"
                priority={idx === 0}
                unoptimized
              />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
