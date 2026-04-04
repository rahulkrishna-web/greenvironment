"use client";

import { motion } from "framer-motion";
import { whatWeDoPillars } from "./what-we-do-immersive";

interface EditorialSectionProps {
  label: string;
  title: string;
  description: string;
  conclusion?: string;
}

const SectionLabel = ({ label }: { label: string }) => (
  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0ab8c9]/40 bg-[#0ab8c9]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#02696b]">
    {label}
  </div>
);

const EditorialSection = ({ label, title, description, conclusion }: EditorialSectionProps) => (
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
        <h2 className="text-4xl font-bold sm:text-5xl text-[#02696b] tracking-tight mt-4">{title}</h2>
        <p className="max-w-3xl text-xl text-slate-700 leading-relaxed font-medium">{description}</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whatWeDoPillars.map((pillar, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/30 p-8 hover:shadow-xl hover:border-[#0ab8c9]/20 transition-all duration-500"
          >
            <div className="relative flex items-center gap-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0ab8c9]/10 text-[#02696b] group-hover:bg-[#02696b] group-hover:text-white transition-colors duration-500">
                {pillar.icon}
              </div>
              <p className="text-lg text-slate-700 leading-snug font-semibold">{pillar.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {conclusion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl border-t border-slate-100 pt-12"
        >
          <p className="text-xl font-medium text-[#02696b] leading-relaxed italic">
            {conclusion}
          </p>
        </motion.div>
      )}
    </div>
  </section>
);

export const WhatWeDoEditorialBlocks = () => (
  <EditorialSection
    label="What we do"
    title="What We Do"
    description="We build AI-powered solutions that help businesses manage and improve their sustainability in a practical, results-driven way. Our systems enable you to:"
    conclusion="The result is a simpler, smarter approach to sustainability—one that delivers real impact, improves efficiency, ensures compliance, and drives measurable ROI."
  />
);

export const ValuePropositionSection = () => (
  <EditorialSection
    label="Value Proposition"
    title="Why Greenvironment"
    description="Proof points that show how our strategy-to-execution model delivers measurable sustainability outcomes with speed."
  />
);

export default function WhatWeDoOptions() {
  return <WhatWeDoEditorialBlocks />;
}
