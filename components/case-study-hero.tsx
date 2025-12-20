"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
type Testimonial = {
  quote: string;
  name: string;
  title?: string;
  company?: string;
};
import testimonials from "@/content/testimonials.json";

const CaseStudyHero = () => {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => testimonials as Testimonial[], []);

  useEffect(() => {
    if (!items.length) return;
    setIndex(0);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative mt-6 lg:mt-16 w-full overflow-hidden border-b border-accent bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,255,191,0.22),transparent_45%)]" />
      </div>
      <div className="relative max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-6 gap-x-12 px-6 py-16 lg:py-14">
        <div className="order-1 lg:order-none max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Case Studies
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight">
              Proof that resilient water intelligence pays for itself
            </h1>
            <p className="text-base sm:text-lg text-white/80">
              Explore how cities, campuses, and enterprises deploy Greenvironment to drought-proof operations, reuse more water, and drive measurable cost savings—without disrupting day-to-day work.
            </p>
          </div>
        </div>

        {items.length > 0 && (
          <div className="order-2 lg:order-none relative lg:max-w-lg xl:max-w-xl w-full">
            <div className="relative aspect-square overflow-hidden rounded-[28px] p-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-center text-base sm:text-lg font-normal text-white/90 leading-relaxed space-y-3"
                >
                  <p className="text-white/90">"{(items[index] ?? items[0]).quote}"</p>
                  <div className="space-y-1 text-sm text-white/80">
                    <div className="font-semibold text-white">{(items[index] ?? items[0]).name}</div>
                    {(((items[index] ?? items[0]).title) || ((items[index] ?? items[0]).company)) && (
                      <div className="text-white/75">
                        {[
                          (items[index] ?? items[0]).title,
                          (items[index] ?? items[0]).company,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyHero;
