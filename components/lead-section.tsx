"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import NetworkGridBg from "@/components/network-grid-bg";

const LeadSection = () => {
  return (
    <section className="relative isolate flex min-h-[95vh] items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,255,191,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(135,206,255,0.16),transparent_40%)]" />
        <NetworkGridBg className="opacity-50" tint="rgba(15,159,149,0.4)" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-(--breakpoint-xl) flex-col lg:flex-row items-center justify-between gap-10 px-4 pt-16 pb-12 sm:gap-12 sm:px-6 lg:pt-28 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full max-w-xl order-1 lg:order-2"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-white/15 bg-black/40">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/og-image.jpg"
              src="https://res.cloudinary.com/rahulkrishna/video/upload/v1765106802/ge/Flow.mp4"
              controls
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10 pointer-events-none" />
          </div>
        </motion.div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
          >
            Intelligent water intelligence for cleaner, safer, resilient cities.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-2xl text-sm sm:text-lg text-white/85"
          >
            Monitor, predict, and optimize water and energy usage with live insights and automated actions that help you save resources and protect the planet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex w-full max-w-md flex-col items-center lg:items-start justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4"
          >
            <Button
              size="lg"
              className="w-full rounded-full bg-white text-slate-900 hover:bg-slate-100 sm:w-auto lg:w-auto"
            >
              Explore platform <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-full border-white/50 bg-white/10 text-white hover:bg-white/15 sm:w-auto lg:w-auto"
            >
              See how it works
            </Button>
          </motion.div>
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
