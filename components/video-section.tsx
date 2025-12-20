"use client";

import { motion } from "framer-motion";

interface VideoSectionProps {
  src: string;
}

export const VideoSection = ({ src }: VideoSectionProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#012f30] via-primary to-[#02696b] text-white">
      <div className="relative w-full pt-12">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 space-y-8 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Real Time AI-Based Reporting</h2>
            <p className="text-lg text-white/85">
              Cutting edge Digital twin technology for your infrastructure
            </p>
            <p className="text-white/75">
              Build a digital replica of your various building environment systems - water, energy, protection - to monitor their
              health, get ahead of issues before they occur and get AI-Assisted real time solutions during adverse events.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mt-8 overflow-hidden rounded-none border-y border-white/10 bg-black"
        >
          <div className="aspect-video w-full bg-black">
            <video
              className="h-full w-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/og-image.jpg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
