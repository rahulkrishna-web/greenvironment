"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const testimonials = [
  {
    quote: "We saw measurable reuse gains in weeks, not months.",
    name: "Ananya Rao",
    title: "Head of Sustainability",
    company: "Urban Campuses Group",
  },
  {
    quote: "Audit-ready reporting became a non-event for our team.",
    name: "Michael Lee",
    title: "Compliance Director",
    company: "Metro Water Authority",
  },
  {
    quote: "Automation stabilized quality and cut tanker costs.",
    name: "Priya Sharma",
    title: "Operations Lead",
    company: "City Facilities Network",
  },
  {
    quote: "Downtime dropped while compliance confidence went up.",
    name: "James Carter",
    title: "Plant Manager",
    company: "Coastal Utilities",
  },
  {
    quote: "The live dashboards finally got ops and finance aligned.",
    name: "Sara Ibrahim",
    title: "VP, Operations",
    company: "Evergreen Enterprises",
  },
  {
    quote: "We now catch anomalies before they become outages.",
    name: "Rahul Mehta",
    title: "Reliability Engineer",
    company: "Campus Services Co.",
  },
  {
    quote: "Deployment was fast and didn’t disrupt daily work.",
    name: "Emily Nguyen",
    title: "Program Manager",
    company: "Civic Waterworks",
  },
  {
    quote: "Our campuses reuse more water with less manual effort.",
    name: "Victor Chen",
    title: "Sustainability Officer",
    company: "University Systems",
  },
];

const CaseStudyHero = () => {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => testimonials, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative mt-6 lg:mt-16 w-full overflow-hidden border-b border-accent bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,255,191,0.22),transparent_45%)]" />
      </div>
          <div className="relative max-w-(--breakpoint-xl) w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-y-6 gap-x-12 px-6 py-16 lg:py-20">
        <div className="max-w-2xl space-y-6">
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

        <div className="relative lg:max-w-lg xl:max-w-xl w-full">
          <div className="relative aspect-square overflow-hidden rounded-[28px] p-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center text-lg sm:text-xl font-semibold text-white/90 leading-relaxed space-y-3"
              >
                <p className="text-white/90">“{items[index].quote}”</p>
                <div className="space-y-1 text-sm text-white/80">
                  <div className="font-semibold text-white">{items[index].name}</div>
                  <div className="text-white/75">
                    {items[index].title}, {items[index].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
