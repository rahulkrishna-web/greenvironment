"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const fades = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

type Tile = {
  id: string;
  title: string;
  image: string;
  version?: number;
};

const tilePool: Tile[] = [
  { id: "oversight", title: "Live plant oversight", image: "/placeholder.svg" },
  { id: "quality", title: "Quality automation", image: "/placeholder.svg" },
  { id: "reuse", title: "Reuse routing", image: "/placeholder.svg" },
  { id: "reporting", title: "Audit-ready reporting", image: "/placeholder.svg" },
  { id: "alerts", title: "Anomaly alerts", image: "/placeholder.svg" },
  { id: "energy", title: "Energy-optimized pumps", image: "/placeholder.svg" },
  { id: "compliance", title: "Compliance dashboards", image: "/placeholder.svg" },
];

const ServicesHero = () => {
  const initialTiles = useMemo(
    () =>
      tilePool
        .slice(0, 4)
        .map((tile, idx) => ({ ...tile, version: idx })),
    []
  );
  const [tiles, setTiles] = useState<Tile[]>(initialTiles);

  useEffect(() => {
    const interval = setInterval(() => {
      setTiles((prev) => {
        const targetIndex = Math.floor(Math.random() * prev.length);
        const currentIds = new Set(prev.map((t) => t.id));
        const available = tilePool.filter(
          (t) => t.id !== prev[targetIndex].id && !currentIds.has(t.id)
        );
        const fallback = tilePool.filter((t) => t.id !== prev[targetIndex].id);
        const pool = available.length ? available : fallback.length ? fallback : [prev[targetIndex]];
        const next = pool[Math.floor(Math.random() * pool.length)] ?? prev[targetIndex];
        const updated = [...prev];
        updated[targetIndex] = { ...next, version: (prev[targetIndex].version ?? 0) + 1 };
        return updated;
      });
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-6 lg:mt-16 w-full overflow-hidden border-b border-accent bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,255,191,0.22),transparent_45%)]" />
      </div>
      <div className="relative max-w-(--breakpoint-xl) w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-y-6 gap-x-12 px-6 py-16 lg:py-20">
        <motion.div className="max-w-2xl space-y-6" {...fades} transition={{ duration: 0.7 }}>
          <Badge variant="outline" className="rounded-full border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Services
          </Badge>
          <div className="space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight">
              Service model built around uptime and proof
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl">
              See how we design, deploy, and operate water and sustainability programs—combining sensing, automation, and reporting so every site stays resilient and audit-ready.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative lg:max-w-xl xl:max-w-2xl w-full"
          {...fades}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-[28px] bg-gradient-to-br from-emerald-500/20 via-emerald-300/10 to-white/5 ring-1 ring-white/10 p-4">
            <div className="grid grid-cols-2 gap-3">
              {tiles.map((tile) => (
                <motion.div
                  key={`${tile.id}-${tile.version}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left text-white/90 backdrop-blur aspect-square"
                >
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(min-width: 1024px) 200px, 160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full px-4 py-3 text-sm font-semibold">
                      {tile.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHero;
