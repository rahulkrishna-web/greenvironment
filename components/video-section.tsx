"use client";

import { motion } from "framer-motion";

interface VideoSectionProps {
  src: string;
}

export const VideoSection = ({ src }: VideoSectionProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-white text-white">
      <div className="relative w-full py-12">
        <div className="mx-auto max-w-7xl px-0 sm:px-6">
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
