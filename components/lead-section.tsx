"use client";

import LogoMarquee from "@/components/logo-marquee";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const LeadSection = () => {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/og-image.jpg"
        src="https://res.cloudinary.com/rahulkrishna/video/upload/v1765106802/ge/Flow.mp4"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex max-w-(--breakpoint-xl) flex-col items-center gap-6 px-4 py-20 sm:gap-8 sm:px-6 lg:py-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur"
        >
          Flow-forward impact
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-3xl text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Intelligent water intelligence for cleaner, safer, resilient cities.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-sm sm:text-lg text-white/85"
        >
          Monitor, predict, and optimize water and energy usage with live insights
          and automated actions that help you save resources and protect the
          planet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4"
        >
          <Button
            size="lg"
            className="w-full rounded-full bg-white text-slate-900 hover:bg-slate-100 sm:w-auto"
          >
            Explore platform <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-full border-white/50 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
          >
            See how it works
          </Button>
        </motion.div>

        <div className="w-full max-w-5xl">
          <LogoMarquee />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[-1px] text-background">
        <svg
          className="h-24 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            initial={{ d: "M0,32 C360,128 1060,-32 1440,26 L1440,120 L0,120 Z" }}
            animate={{ d: [
              "M0,32 C360,128 1060,-32 1440,26 L1440,120 L0,120 Z",
              "M0,12 C420,104 980,8 1440,68 L1440,120 L0,120 Z",
              "M0,44 C380,136 1100,-44 1440,18 L1440,120 L0,120 Z",
            ] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="fill-current"
          />
        </svg>
      </div>
    </section>
  );
};

export default LeadSection;
