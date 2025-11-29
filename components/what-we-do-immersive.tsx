"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, Waves, ShieldCheck, Gauge, Workflow } from "lucide-react";
import { useMemo } from "react";

type Pillar = {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
};

const pillars: Pillar[] = [
  {
    title: "Predictive water intelligence",
    description:
      "AI-led monitoring that anticipates leaks, contamination, and stress points before they hit your ops.",
    icon: <Gauge className="h-5 w-5" />,
    accent: "from-emerald-400/80 via-cyan-400/70 to-sky-500/80",
  },
  {
    title: "Autonomous response loops",
    description:
      "Closed-loop automations that trigger alerts, valves, and energy reroutes with human-in-the-loop overrides.",
    icon: <Workflow className="h-5 w-5" />,
    accent: "from-amber-300/80 via-orange-400/70 to-rose-400/80",
  },
  {
    title: "Safety & compliance baked-in",
    description:
      "Live QA, audit trails, and resilient governance that keep every site secure and regulation-ready.",
    icon: <ShieldCheck className="h-5 w-5" />,
    accent: "from-emerald-200/70 via-green-300/70 to-lime-300/70",
  },
  {
    title: "Immersive situational clarity",
    description:
      "Unified dashboards, 3D-style mapping, and narrative alerts to move from data to action instantly.",
    icon: <Sparkles className="h-5 w-5" />,
    accent: "from-indigo-400/70 via-violet-400/70 to-blue-400/80",
  },
  {
    title: "Circular resource stewardship",
    description:
      "Optimize reuse, recycling, and zero-loss initiatives with quantified impact across every asset.",
    icon: <Waves className="h-5 w-5" />,
    accent: "from-teal-300/70 via-cyan-300/70 to-blue-300/70",
  },
];

const GlowOrbs = () => (
  <>
    <motion.div
      aria-hidden
      className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-[120px]"
      animate={{ x: [0, 20, -10, 0], y: [0, -10, 15, 0], opacity: [0.35, 0.5, 0.4, 0.35] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      aria-hidden
      className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-400/25 blur-[120px]"
      animate={{ x: [0, -18, 12, 0], y: [0, 20, -12, 0], opacity: [0.3, 0.45, 0.35, 0.3] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

function AnimatedCard({
  title,
  description,
  icon,
  accent,
  index,
}: Pillar & { index: number }) {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useTransform(tiltY, [-50, 50], [6, -6]);
  const rotateY = useTransform(tiltX, [-50, 50], [-6, 6]);

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.015 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#01686d] via-[#018a90] to-[#00a9b5] p-[1px] shadow-[0_20px_60px_-28px_rgba(0,0,0,0.8)]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          tiltX.set(e.clientX - rect.left - rect.width / 2);
          tiltY.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={resetTilt}
      >
        <div className="relative z-10 flex h-full flex-col gap-4 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/0 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 text-white">
            <span
              className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${accent} text-slate-900 shadow-lg shadow-emerald-900/20`}
            >
              {icon}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold leading-tight text-white">
              {title}
            </h3>
            <p className="text-sm text-white/70">{description}</p>
          </div>
          <motion.div
            className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ scaleX: [1, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-cyan-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

const MovingBeams = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      aria-hidden
      className="absolute -left-1/3 top-0 h-[200%] w-1/2 rotate-12 bg-gradient-to-b from-emerald-400/8 via-cyan-300/4 to-transparent blur-[60px]"
      animate={{ x: ["-10%", "15%", "-5%"], opacity: [0.12, 0.28, 0.14] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      aria-hidden
      className="absolute left-[10%] top-[-30%] h-[180%] w-[35%] rotate-[22deg] bg-gradient-to-b from-white/6 via-emerald-200/8 to-transparent blur-[70px]"
      animate={{ x: ["0%", "12%", "-6%"], opacity: [0.08, 0.22, 0.1] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      aria-hidden
      className="absolute right-[-20%] top-[-10%] h-[180%] w-[40%] rotate-[-18deg] bg-gradient-to-b from-cyan-300/10 via-emerald-200/8 to-transparent blur-[70px]"
      animate={{ x: ["5%", "-8%", "3%"], opacity: [0.1, 0.24, 0.12] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

type AuroraProps = {
  mouseX: ReturnType<typeof useMotionValue>;
  mouseY: ReturnType<typeof useMotionValue>;
};

const AnimatedTexture = ({ mouseX, mouseY }: AuroraProps) => {
  const driftX = useTransform(mouseX, (v) => v * 80);
  const driftY = useTransform(mouseY, (v) => v * 60);
  const driftX2 = useTransform(mouseX, (v) => v * 50);
  const driftY2 = useTransform(mouseY, (v) => v * 40);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply opacity-100"
      style={{
        maskImage: "radial-gradient(75% 75% at 50% 50%, black 60%, transparent 95%)",
        WebkitMaskImage: "radial-gradient(75% 75% at 50% 50%, black 60%, transparent 95%)",
      }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,140,66,0.7) 0, transparent 30%), radial-gradient(circle at 82% 6%, rgba(236,72,153,0.75) 0, transparent 28%), radial-gradient(circle at 42% 78%, rgba(244,114,182,0.68) 0, transparent 30%)",
          backgroundSize: "220% 220%",
          backgroundPosition: "50% 50%",
          x: driftX,
          y: driftY,
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -2, 0], opacity: [0.7, 0.95, 0.75] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.24) 0, transparent 34%), radial-gradient(circle at 70% 60%, rgba(255,179,102,0.3) 0, transparent 32%)",
          backgroundSize: "200% 200%",
          backgroundPosition: "50% 50%",
          x: driftX2,
          y: driftY2,
        }}
        animate={{ x: ["-4%", "8%", "-3%"], y: ["4%", "-6%", "2%"], opacity: [0.55, 0.8, 0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const FloatingOrb = ({ className }: { className: string }) => (
  <motion.div
    initial={{ scale: 0.75, opacity: 0 }}
    whileInView={{ scale: [0.9, 1.05, 0.95, 1], opacity: 1, rotate: [0, 20, -15, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    viewport={{ amount: 0.3 }}
    className={`pointer-events-none absolute z-0 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,213,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,117,176,0.3),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(1,104,109,0.22),transparent_55%)] blur-[6px] ${className}`}
    style={{
      boxShadow:
        "0 0 50px rgba(1,104,109,0.25), 0 0 90px rgba(255,117,176,0.2), inset 0 0 60px rgba(255,255,255,0.18)",
    }}
  />
);

const GradientGrid = () => {
  const grid = useMemo(
    () =>
      new Array(20).fill(0).map((_, i) => (
        <motion.span
          key={i}
          className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 3 + i * 0.02, repeat: Infinity, ease: "easeInOut" }}
        />
      )),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-x-12 top-16 hidden grid-cols-1 gap-6 opacity-60 sm:grid">
      {grid}
    </div>
  );
};

const WhatWeDoImmersive = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-24 text-slate-900"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }}
    >
      <GlowOrbs />
      <MovingBeams />
      <AnimatedTexture mouseX={mouseX} mouseY={mouseY} />
      <FloatingOrb className="right-6 top-10 md:right-16 md:top-14" />
      <FloatingOrb className="left-4 bottom-8 md:left-12 md:bottom-12" />
      <GradientGrid />

      <div className="relative mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-12 px-6">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-slate-200 bg-slate-100/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 backdrop-blur md:self-start">
            What we do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-slate-900">
            High-fidelity water intelligence crafted for future-ready cities.
          </h2>
          <p className="max-w-3xl text-base text-slate-700 md:text-lg">
            Layered observability, adaptive automations, and cinematic clarity that make
            sustainability decisions obvious, fast, and deeply human.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <AnimatedCard key={pillar.title} {...pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoImmersive;
