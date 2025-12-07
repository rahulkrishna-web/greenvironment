"use client";

import { motion } from "framer-motion";

export const OneLiner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white py-12 text-center">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-[#02696b] leading-tight"
        >
          Together, we design the resilient, low-carbon environments that tomorrow demands.
        </motion.h2>
      </div>
    </section>
  );
};
