"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function ScrollFocusTextSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const sentence = "FOUNDED IN 2012, FOR A CLEAN EARTH AND SAFE LIFE.";
  const words = sentence.split(" ");

  return (
    <section ref={ref} className="min-h-[100vh] bg-white text-gray-500">
      <div className="sticky top-50 flex">
        <div className="text-6xl md:text-6xl font-light font-semibold leading-tight max-w-3xl text-left flex flex-wrap gap-x-3 gap-y-1">
          {words.map((word, i) => (
            <Word
              key={i}
              index={i}
              total={words.length}
              scrollYProgress={scrollYProgress}
            >
              {word}
            </Word>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  index,
  total,
  scrollYProgress,
}: {
  children: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>; // <-- proper type
}) {
  // Each word activates progressively as we scroll
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [start, end], [0.6, 1]);
  const color = useTransform(scrollYProgress, [start, end], ["#999", "#f7901e"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="transition-colors duration-300"
    >
      {children}
    </motion.span>
  );
}
