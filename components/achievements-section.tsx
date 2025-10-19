"use client";

import React, { useEffect, useRef, useState, ReactElement } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";

// Types
interface AchievementItem {
  id: number;
  icon: string;
  title: string;
  target: number;
  suffix?: string;
}

interface AchievementsSectionProps {
  items?: AchievementItem[];
  className?: string;
}

export default function AchievementsSection({
  items = [
    { id: 1, icon: "Briefcase", title: "Projects", target: 120, suffix: "+" },
    { id: 2, icon: "CheckBadge", title: "Clients", target: 85, suffix: "+" },
    { id: 3, icon: "Heart", title: "Awards", target: 12, suffix: "" },
  ],
  className = "",
}: AchievementsSectionProps) {
  return (
    <section className={`bg-(--primary) text-white py-12 sm:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Our achievements</h2>
          <p className="mt-2">A quick look at what we&apos;ve done.</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-3">
          {items.map((it) => (
            <AchievementCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IconFor(name: string): ReactElement {
  switch (name) {
    case "Briefcase":
      return <IconBriefcase />;
    case "CheckBadge":
      return <IconCheckBadge />;
    case "Heart":
      return <IconHeart />;
    default:
      return <IconBriefcase />;
  }
}

function AchievementCard({ item }: { item: AchievementItem }) {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const startedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            controls.start("visible");
            animateCount(item.target, 1500, setCount);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [controls, item.target]);

  return (
    <Card ref={ref} className="p-1 sm:p-6 bg-transparent shadow-none border-0">
      <CardContent className="p-3 pt-3 sm:pt-6 text-white">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <p className="text-3xl sm:text-6xl font-bold leading-none">
                {formatCount(count)}{item.suffix}
              </p>
              <p className="text-sm sm:text-2xl mt-1">{item.title}</p>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function animateCount(target: number, duration: number, setter: (value: number) => void) {
  const start = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
  const from = 0;
  const to = Number(target) || 0;

  function step(now: number) {
    const current = typeof now === "number" ? now : (typeof performance !== "undefined" ? performance.now() : Date.now());
    const t = Math.min((current - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = Math.floor(from + (to - from) * eased);
    setter(value);
    if (t < 1) requestAnimationFrame(step);
    else setter(to);
  }

  requestAnimationFrame(step);
}

function formatCount(n: number): string | number {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return n;
}

// Inline SVG Icons
function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M16 3H8v4h8V3z" />
    </svg>
  );
}

function IconCheckBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden {...props}>
      <path d="M9 11l2 2 4-4" />
      <path d="M12 2l1.5 3 3.5.5-2.5 2 .5 3.5L12 11l-3 2 .5-3.5L7 7.5 10.5 7 12 4z" />
    </svg>
  );
}

function IconHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden {...props}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}