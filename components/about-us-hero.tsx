"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import NetworkGridBg from "@/components/network-grid-bg";

const fades = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const AboutUsHero = () => {
  return (
    <div className="relative w-full overflow-hidden border-b border-accent bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-white">
      <NetworkGridBg className="opacity-70" tint="rgba(15,159,149,0.45)" />
      <div className="relative max-w-(--breakpoint-xl) w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-y-8 gap-x-12 px-6 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <motion.div className="max-w-xl space-y-6" {...fades} transition={{ duration: 0.7 }}>
          <Badge variant="outline" className="rounded-full border-white/40 text-white/90 bg-white/10 uppercase tracking-[0.18em]">
            About
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight">
              About Greenvironment
            </h1>
            <p className="max-w-[60ch] xs:text-lg text-white/85">
              Greenvironment is a global water & environmental sustainability company delivering integrated IoT- and AI-driven
              real-time monitoring solutions for water and energy management across buildings and businesses.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative lg:max-w-lg xl:max-w-xl w-full bg-primary/15 ring-1 ring-white/10 rounded-2xl overflow-hidden"
          {...fades}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Image
            src="/about-lead.jpg"
            width={1200}
            height={900}
            alt="Team and operations"
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/5" aria-hidden />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsHero;
