"use client";

import { motion, useMotionValue, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { whatWeDoPillars, type Pillar } from "./what-we-do-immersive";

const SectionLabel = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
    {label}
  </div>
);

export const WhatWeDoGradientRail = () => (
  <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.2),transparent_35%),radial-gradient(circle_at_60%_75%,rgba(59,130,246,0.25),transparent_40%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3 text-center">
          <SectionLabel label="What we do option two" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet.</h2>
          <p className="text-base text-white/70">Consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</p>
        </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="relative grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDoPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
              className="group relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-5 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                  {pillar.icon}
                </div>
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-white/60">
                  0{idx + 1}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="text-sm text-white/70">{pillar.description}</p>
              </div>
              <motion.span
                aria-hidden
                className="absolute -inset-px rounded-2xl border border-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(120deg, rgba(34,211,238,0.35), rgba(16,185,129,0.3))` }}
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const WhatWeDoEditorialBlocks = () => (
  <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black py-24 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_85%_60%,rgba(14,165,233,0.2),transparent_28%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-3 text-left">
          <SectionLabel label="What we do option three" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="max-w-3xl text-lg text-white/70">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
        </div>

      <div className="grid gap-6 md:grid-cols-2">
        {whatWeDoPillars.map((pillar, idx) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.55, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.25),transparent_40%)] opacity-70 transition duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                  {pillar.icon}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  {idx + 1}/5
                </div>
              </div>
              <h3 className="text-2xl font-semibold leading-tight">{pillar.title}</h3>
              <p className="text-base text-white/70">{pillar.description}</p>
              <div className="mt-4 flex items-center gap-3 text-sm text-emerald-200">
                <span className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                Designed for multi-site orchestration.
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export const WhatWeDoMonoTimeline = () => (
  <section className="relative isolate overflow-hidden bg-white py-24 text-slate-900">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(2,132,199,0.1),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.08),transparent_35%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3 text-center">
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-600">
            What we do option four
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet.</h2>
          <p className="max-w-3xl text-base text-slate-700 md:self-center">Nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
        </div>

      <div className="relative border-l border-slate-200/80 pl-8">
        <div className="absolute left-[-1px] top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-transparent" />
        <div className="flex flex-col gap-8">
          {whatWeDoPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
              className="relative rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)]"
            >
              <div className="absolute left-[-23px] top-6 grid h-12 w-12 place-items-center rounded-full border border-white bg-gradient-to-br from-cyan-100 via-white to-emerald-100 text-slate-800 shadow-sm ring-1 ring-slate-200">
                {pillar.icon}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Step {idx + 1}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-700">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const WhatWeDoHoloCarousel = () => {
  const tilt = useMotionValue(0);
  const skew = useTransform(tilt, [-1, 1], [-6, 6]);
  const glowShift = useTransform(tilt, [-1, 1], ["-10%", "10%"]);

  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950 py-24 text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        tilt.set(x);
      }}
      onMouseLeave={() => tilt.set(0)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.25),transparent_38%)]" />
      <motion.div
        aria-hidden
        className="absolute inset-x-[-20%] top-12 h-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-3xl"
        style={{ x: glowShift, skewX: skew }}
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3 text-center">
          <SectionLabel label="What we do option five" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="text-base text-white/70">Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-4 py-6 backdrop-blur">
          <motion.div
            aria-hidden
            className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-b from-white/10 via-cyan-200/5 to-transparent blur-[80px]"
            animate={{ x: ["0%", "20%", "-10%"], opacity: [0.2, 0.45, 0.25] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whatWeDoPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                style={{ skewY: skew }}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.55, ease: "easeOut" }}
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/15 via-white/8 to-white/0 p-5 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white shadow-inner shadow-white/10">
                    {pillar.icon}
                  </div>
                  <motion.span
                    className="text-xs font-mono text-white/60"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {idx + 1}/5
                  </motion.span>
                </div>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="text-sm text-white/70">{pillar.description}</p>
                <motion.div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cyan-300/15 via-transparent to-transparent"
                  animate={{ opacity: [0.2, 0.55, 0.2], y: [4, -6, 4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-px rounded-2xl border border-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeDoAuroraCascade = () => (
  <section className="relative isolate overflow-hidden bg-slate-900 py-24 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_10%_60%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(236,72,153,0.18),transparent_32%)]" />
    <motion.div
      aria-hidden
      className="absolute inset-0"
      animate={{ backgroundPosition: ["0% 0%", "100% 50%", "0% 100%"], opacity: [0.35, 0.6, 0.35] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(34,211,238,0.12), rgba(16,185,129,0.1), rgba(59,130,246,0.12))",
        backgroundSize: "200% 200%",
      }}
    />
    <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
      <div className="flex flex-col gap-3 text-left">
        <SectionLabel label="What we do option six" />
        <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet.</h2>
        <p className="max-w-3xl text-lg text-white/70">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.</p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.8)]">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(255,255,255,0.08), rgba(59,130,246,0.12), rgba(16,185,129,0.12), rgba(255,255,255,0.08))",
            backgroundSize: "250% 250%",
          }}
        />
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whatWeDoPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.07, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6"
            >
              <motion.div
                aria-hidden
                className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-b from-cyan-300/10 via-emerald-200/10 to-transparent blur-[60px]"
                animate={{ x: ["0%", "30%", "-10%"], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
              />
              <div className="relative flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white shadow-inner shadow-white/10">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight">{pillar.title}</h3>
                  <p className="text-sm text-white/70">{pillar.description}</p>
                </div>
              </div>
              <motion.div
                aria-hidden
                className="mt-5 h-[2px] w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                animate={{ scaleX: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-px rounded-2xl border border-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const WhatWeDoScrollRail = () => {
  const railRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const xSecondary = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);
  const smoothX = useSpring(x, { stiffness: 120, damping: 30, mass: 0.4 });
  const smoothX2 = useSpring(xSecondary, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section ref={railRef} className="relative isolate overflow-hidden bg-white py-24 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_38%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-3 text-left">
          <SectionLabel label="What we do option seven" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet.</h2>
          <p className="max-w-3xl text-lg text-slate-700">Excepteur sint occaecat cupidatat non proident sunt in culpa qui.</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_30px_120px_-70px_rgba(15,23,42,0.6)]">
          <motion.div
            aria-hidden
            className="absolute left-[-10%] top-8 h-32 w-[140%] bg-gradient-to-r from-cyan-100 via-white to-emerald-100 blur-3xl"
            style={{ x: smoothX2 }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-4 left-[-15%] h-24 w-[160%] bg-gradient-to-r from-slate-200 via-white to-slate-100 blur-2xl"
            style={{ x: smoothX }}
          />
          <div className="relative flex flex-col gap-6">
            <motion.div className="flex gap-4" style={{ x: smoothX }}>
              {whatWeDoPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="min-w-[260px] flex-1 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_15px_50px_-30px_rgba(15,23,42,0.5)]"
                >
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-800">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{pillar.description}</p>
                </div>
              ))}
            </motion.div>
            <motion.div className="flex gap-4" style={{ x: smoothX2 }}>
              {whatWeDoPillars.map((pillar) => (
                <div
                  key={`${pillar.title}-shadow`}
                  className="min-w-[220px] flex-1 rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-700 shadow-[0_10px_40px_-32px_rgba(15,23,42,0.4)]"
                >
                  {pillar.description}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeDoScrollStacks = () => {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const translate = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const translateUp = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 26, mass: 0.4 });
  const smoothTranslate = useSpring(translate, { stiffness: 100, damping: 26, mass: 0.4 });
  const smoothTranslateUp = useSpring(translateUp, { stiffness: 100, damping: 26, mass: 0.4 });
  const rotateValue = useTransform(smoothRotate, (v) => `${v}deg`);
  const rotateValueInverse = useTransform(smoothRotate, (v) => `${-v}deg`);

  return (
    <section ref={stackRef} className="relative isolate overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.16),transparent_35%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-3 text-left">
          <SectionLabel label="What we do option eight" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet.</h2>
          <p className="max-w-3xl text-lg text-white/70">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2">
          {whatWeDoPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              style={{
                rotate: idx % 2 === 0 ? rotateValue : rotateValueInverse,
                x: idx % 2 === 0 ? smoothTranslate : smoothTranslateUp,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)]"
            >
              <motion.div
                aria-hidden
                className="absolute inset-0"
                animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(16,185,129,0.14), rgba(59,130,246,0.14))",
                }}
              />
              <div className="relative flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white shadow-inner shadow-white/10">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight">{pillar.title}</h3>
                  <p className="text-sm text-white/70">{pillar.description}</p>
                </div>
              </div>
              <motion.div
                aria-hidden
                className="mt-5 h-[2px] w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                animate={{ scaleX: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-px rounded-3xl border border-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function WhatWeDoOptions() {
  return (
    <>
      <WhatWeDoGradientRail />
      <WhatWeDoEditorialBlocks />
      <WhatWeDoMonoTimeline />
      <WhatWeDoHoloCarousel />
      <WhatWeDoAuroraCascade />
      <WhatWeDoScrollRail />
      <WhatWeDoScrollStacks />
    </>
  );
}
