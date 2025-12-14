"use client";

import { motion } from "framer-motion";

interface VideoSectionProps {
  src: string;
}

export const VideoSection = ({ src }: VideoSectionProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-white text-white">
      <div className="relative w-full py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 space-y-8 text-slate-900 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Real Time AI based reporting</h2>
            <p className="text-lg text-muted-foreground">
              Cutting edge Digital twin technology for your infrastructure
            </p>
            <p className="text-muted-foreground">
              Build a digital replica of your various building environment systems - water, energy, protection - to monitor their
              health, get ahead of issues before they occur and get AI assisted real time solutions during adverse events.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-none sm:rounded-3xl border border-white/10 bg-black"
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
      </div>
    </section>
  );
};
