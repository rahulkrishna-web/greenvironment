"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const packets = [
  { top: "16%", rotate: 0, duration: 10, delay: 0 },
  { top: "28%", rotate: 0, duration: 11, delay: 1.2 },
  { top: "40%", rotate: 0, duration: 9.5, delay: 0.7 },
  { top: "52%", rotate: 0, duration: 10.5, delay: 1.8 },
  { top: "64%", rotate: 0, duration: 11.5, delay: 0.5 },
  { top: "76%", rotate: 0, duration: 12, delay: 1.6 },
  { top: "88%", rotate: 0, duration: 9.8, delay: 2.4 },
];

const LeadSectionNeural = () => {
  return (
    <section className="relative isolate flex min-h-[95vh] items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,255,191,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(135,206,255,0.16),transparent_40%)]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-65"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="pcbStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(126,255,191,0.35)" />
              <stop offset="50%" stopColor="rgba(135,206,255,0.7)" />
              <stop offset="100%" stopColor="rgba(126,255,191,0.35)" />
            </linearGradient>
            <radialGradient id="pcbNode" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(135,206,255,0.9)" />
              <stop offset="60%" stopColor="rgba(135,206,255,0.5)" />
              <stop offset="100%" stopColor="rgba(135,206,255,0.1)" />
            </radialGradient>
          </defs>

          {/* PCB grid traces */}
          {Array.from({ length: 9 }).map((_, row) => {
            const y = 80 + row * 90;
            return (
              <line
                key={`row-${row}`}
                x1="-40"
                y1={y}
                x2="1520"
                y2={y}
                stroke="url(#pcbStroke)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="14 10"
              />
            );
          })}
          {Array.from({ length: 7 }).map((_, col) => {
            const x = 120 + col * 200;
            return (
              <line
                key={`col-${col}`}
                x1={x}
                y1="40"
                x2={x}
                y2="860"
                stroke="url(#pcbStroke)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray="10 14"
              />
            );
          })}

          {/* Component nodes */}
          {[
            [180, 140],
            [420, 260],
            [720, 180],
            [980, 320],
            [260, 520],
            [540, 620],
            [860, 540],
            [1120, 700],
            [360, 780],
            [680, 820],
          ].map(([x, y], i) => (
            <g key={`node-${i}`}>
              <rect
                x={x - 10}
                y={y - 10}
                width="20"
                height="20"
                rx="5"
                ry="5"
                fill="url(#pcbNode)"
                stroke="rgba(126,255,191,0.6)"
                strokeWidth="1"
              />
              <circle cx={x} cy={y} r="4" fill="rgba(255,255,255,0.9)" />
            </g>
          ))}
        </svg>
        {packets.map((packet, idx) => (
          <div
            key={idx}
            className="absolute left-[-15%] w-[130%]"
            style={{
              top: packet.top,
              transform: `rotate(${packet.rotate}deg)`,
            }}
            aria-hidden
          >
            <span
              className="block h-[3px] w-16 rounded-full bg-gradient-to-r from-white via-white/70 to-transparent blur-[1px] shadow-[0_0_12px_2px_rgba(255,255,255,0.4)]"
              style={{
                animation: `packet-slide ${packet.duration}s linear infinite`,
                animationDelay: `${packet.delay}s`,
              }}
            />
          </div>
        ))}
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
            animate={{
              d: [
                "M0,32 C360,128 1060,-32 1440,26 L1440,120 L0,120 Z",
                "M0,12 C420,104 980,8 1440,68 L1440,120 L0,120 Z",
                "M0,44 C380,136 1100,-44 1440,18 L1440,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="fill-current"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes packet-slide {
          0% {
            transform: translateX(-20%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(120%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadSectionNeural;
