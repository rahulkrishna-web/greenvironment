"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const LeadSectionNeural = () => {
  return (
    <section className="relative isolate flex min-h-[95vh] w-full items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/og-image.jpg"
          src="https://res.cloudinary.com/rahulkrishna/video/upload/v1766206173/ge/banner_animation_workfile.mp4"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/30" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[55px] text-balance">
            Intelligent Water & Energy Management Powered by AI & IoT
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-base font-medium text-white/90 sm:text-xl lg:text-2xl text-balance"
        >
          Transform how your utilities operate with real-time intelligence,
          predictive analytics, and automated optimization—delivering measurable
          efficiency, resilience, and sustainability.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-sm uppercase tracking-widest text-emerald-300/90 font-semibold"
        >
          Real-time monitoring | Predictive insights | Proven ROI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-emerald-500 text-white hover:bg-emerald-600 border-none px-8 py-6 text-lg font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
          >
            <Link href="/contact">
              Schedule a consultation <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-[-1px] z-20 text-background">
        <svg
          className="h-16 w-full sm:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            initial={{ d: "M0,32 C360,128 1060,-32 1440,26 L1440,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,32 C360,128 1060,-32 1440,26 L1440,120 L0,120 Z",
                "M0,12 C420,104 980,8 1440,68 L1440,120 L0,120 Z",
                "M0,44 C380,136 1100,-44 1440,18 L1440,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="fill-current"
          />
        </svg>
      </div>
    </section>
  );
};

export default LeadSectionNeural;
