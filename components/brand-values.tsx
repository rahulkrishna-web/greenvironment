"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Sustainability with Integrity",
    description: "Every solution supports environmental stewardship with measurable outcomes.",
    iconSrc: "/brand-value-icons/1-sustainability-with-integrity.gif",
  },
  {
    title: "Transparency in Action",
    description: "Clear, accessible data for stakeholders across the organisational chain.",
    iconSrc: "/brand-value-icons/2-transparency-in-action.gif",
  },
  {
    title: "Partnerships for Change",
    description: "Partnering with clients, academia, and communities for long-term change.",
    iconSrc: "/brand-value-icons/3-partnershipsfor-change.gif",
  },
  {
    title: "Measurable by Impact",
    description: "Success measured in resources saved, not promises made.",
    iconSrc: "/brand-value-icons/4-measurable-by-impact.gif",
  },
];

const baseCard =
  "group relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-6 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.65)] backdrop-blur";

export const BrandValues = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#014446] via-[#02696b] to-[#014446] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(10,184,201,0.28),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(245,142,34,0.22),transparent_34%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0ab8c9]/50 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
            Brand Values
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl text-white">Brand Pillars / Values</h2>
          <p className="max-w-3xl text-lg text-white/80">
            Principles that guide how we partner, operate, and measure impact.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map(({ title, description, iconSrc }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.5, ease: "easeOut" }}
              className={baseCard}
            >
              <div className="relative flex flex-col gap-4">
                <div className="h-16 w-16 sm:h-[60px] sm:w-[60px] overflow-hidden rounded-xl bg-white">
                  <Image
                    src={iconSrc}
                    alt={`${title} icon`}
                    width={120}
                    height={120}
                    className="h-full w-full object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold leading-tight text-white">{title}</h3>
                <p className="text-sm sm:text-base text-white/80">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
