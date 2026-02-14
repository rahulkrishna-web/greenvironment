"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ServiceCard = {
  title: string;
  description: string;
  image?: string;
};

const services: ServiceCard[] = [
  {
    title: "Water management",
    description:
      "Real-time smart sensors, digital twin simulation of the assets, historical performance to make the right resource consumption decisions.",
    image: "/services/water-management.jpg",
  },
  {
    title: "Energy Management",
    description:
      "Power up with the data needed to anticipate power outages, store the right backup energy, close power leaks, stay on top of electrical safety and create a smaller carbon footprint for your building.",
    image: "/services/energy-management.jpg",
  },
  {
    title: "Air quality management",
    description:
      "Indoor air pollution can be up to five times higher than outdoor. Air quality management systems so good that people get to breathe fresher air indoors.",
    image: "/services/air-quality-management.jpg",
  },
  {
    title: "Heating & Cooling Systems Management",
    description:
      "Filtration, ventilation and thermal comfort without breaking the bank with our real-time sensor updates, historical performance data and AI augmented facility management systems.",
    image: "/services/heating-cooling-systems.jpg",
  },
  {
    title: "Environmental Compliance (ESG) Management",
    description:
      "ESG compliance and reporting is a key business driver of this decade. Break down company siloes to find, manage and report governance, social, and environmental data with our purpose built ESG compliance system.",
    image: "/services/esg.jpg",
  },
  {
    title: "Sustainability / Green Building Management",
    description:
      "Run green facilities that minimize non-renewable resource consumption, eliminate or minimize the use of toxic materials and take only the resources they need with our sustainability and green building management.",
    image: "/services/green-building-management.jpg",
  },
];

const fades = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

const ServicesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden border-y border-primary/10 bg-gradient-to-br from-white via-emerald-50 to-sky-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_45%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.14),transparent_40%)]" aria-hidden />
      <div className="relative max-w-(--breakpoint-xl) mx-auto px-6 py-16 lg:py-20 space-y-10">
        <motion.div className="space-y-3 text-center" {...fades} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What we deliver</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Solutions built for reliability and proof
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A mix of automation, oversight, and reporting so every site stays compliant, efficient, and audit-ready.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
            <motion.div
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/60 bg-slate-900 text-white shadow-[0_22px_80px_-50px_rgba(15,23,42,0.65)] transition-transform duration-500 ease-out hover:-translate-y-1"
              {...fades}
              transition={{ duration: 0.55, delay: idx * 0.03 }}
              onClick={() => setActiveIndex(isActive ? null : idx)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900" />
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={idx < 2}
                  unoptimized
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/55" aria-hidden />

              <div className="relative flex h-full min-h-[220px] flex-col justify-end">
                <div className="absolute inset-0 flex items-end">
                  <div
                    className={[
                      "w-full rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 transition-all duration-500 ease-out",
                      isActive ? "translate-y-0" : "translate-y-[55%] md:group-hover:translate-y-0",
                    ].join(" ")}
                  >
                    <div className="flex h-full flex-col justify-end gap-3 p-6 transition-all duration-500 ease-out md:group-hover:justify-center md:group-hover:gap-4">
                      <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                      <p
                        className={[
                          "text-sm text-white/85 transition-all duration-300 ease-out",
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0",
                        ].join(" ")}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
