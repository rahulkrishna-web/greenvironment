"use client";

import { motion } from "framer-motion";
import { whatWeDoPillars } from "./what-we-do-immersive";

interface EditorialSectionProps {
  label: string;
  title: string;
  description: string;
}

const SectionLabel = ({ label }: { label: string }) => (
  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0ab8c9]/40 bg-[#0ab8c9]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#02696b]">
    {label}
  </div>
);

const EditorialSection = ({ label, title, description }: EditorialSectionProps) => (
  <section className="relative isolate overflow-hidden bg-white py-24 text-[#02696b]">
    <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-3 text-left"
      >
        <SectionLabel label={label} />
        <h2 className="text-3xl font-semibold sm:text-4xl text-[#02696b]">{title}</h2>
        <p className="max-w-3xl text-lg text-slate-700">{description}</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {whatWeDoPillars.map((pillar, idx) => (
          <motion.article
            key={pillar.title}
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
              <h3 className="text-2xl font-semibold leading-tight text-[#02696b]">{pillar.title}</h3>
              <p className="text-base text-slate-700">{pillar.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export const WhatWeDoEditorialBlocks = () => (
  <EditorialSection
    label="What we do"
    title="What we do"
    description="We design and orchestrate climate-positive experiences, products, and campaigns that move your business forward."
  />
);

export const ValuePropositionSection = () => (
  <EditorialSection
    label="Value Proposition"
    title="Why partners choose Greenvironment"
    description="Proof points that show how our strategy-to-execution model delivers measurable sustainability outcomes with speed."
  />
);

export default function WhatWeDoOptions() {
  return <WhatWeDoEditorialBlocks />;
}
