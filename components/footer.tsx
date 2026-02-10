"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Company",
    links: [
      {
        title: "About us",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Case Studies",
        href: "/case-studies",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "X",
        href: "https://x.com/GreenvironmentI",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/greenvironmentindia",
      },
      {
        title: "Facebook",
        href: "https://www.facebook.com/GreenvironmentIndia",
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/greenvironment_india/",
      },
      {
        title: "YouTube",
        href: "https://www.youtube.com/channel/UC5M7YeDV1hqlbqUkByKLcvw",
      }
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy",
        href: "/pages/privacy",
      }
    ],
  },
];

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}>
    <path
      fill="currentColor"
      d="M18.244 2.25h3.308l-7.228 8.26 8.508 11.24h-6.66l-5.213-6.817L4.99 21.75H1.68l7.73-8.835L1.232 2.25H8.07l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.07 4.126H5.106L17.083 19.77z"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative mt-0 text-white">
      <div className="relative w-full pb-14 pt-10">
        <div className="relative">
          <div className="pointer-events-none absolute right-6 -top-2.5 h-5 w-[70%] overflow-hidden rounded-[24px] bg-amber-400 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.45)]" aria-hidden>
            <motion.div
              className="absolute inset-y-0 left-[-40%] w-1/2 bg-gradient-to-r from-white/35 via-white/85 to-white/35 blur-sm"
              animate={{ x: ["0%", "180%"] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />
          </div>

          <div className="relative overflow-hidden bg-[#0d7f86] px-6 py-10 sm:px-10 lg:px-12 lg:py-14 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_45%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_40%)]" />
              <motion.div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 26px)",
                  backgroundSize: "140px 38px",
                }}
                animate={{ backgroundPosition: ["0px 0px", "90px 0px"] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                aria-hidden
              />
              <motion.svg
                className="absolute inset-0 h-full w-full opacity-85"
                viewBox="0 0 1440 360"
                preserveAspectRatio="none"
                aria-hidden
              >
                {Array.from({ length: 10 }).map((_, i) => {
                  const height = 360;
                  const margin = 28;
                  const drawable = height - margin * 2;
                  const baseY = margin + ((i + 1) * drawable) / 11; // evenly spaced with top/bottom padding
                  const amp = 14;
                  const lift = 10;
                  const delay = i * 0.28;
                  const pathFor = (offsetA: number, offsetB: number) =>
                    `M0 ${baseY + offsetA} Q 240 ${baseY - amp + offsetB} 480 ${baseY + amp / 2 + offsetA} T 960 ${baseY - amp / 3 + offsetB
                    } T 1440 ${baseY + offsetA}`;

                  return (
                    <motion.path
                      key={i}
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                      d={pathFor(0, 0)}
                      animate={{
                        d: [
                          pathFor(lift, -amp / 2),
                          pathFor(-lift, amp / 2),
                          pathFor(lift / 2, -amp / 3),
                        ],
                      }}
                      transition={{ duration: 11.5 + i * 0.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay }}
                    />
                  );
                })}
              </motion.svg>
            </div>

            <div className="relative mx-auto grid max-w-(--breakpoint-xl) gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">

                    <span className="text-white">GREENVIRONMENT</span>
                  </div>
                </div>

                <p className="max-w-sm text-white/85">
                  Our AI-native monitoring provides a comprehensive view of your infrastructure to preempt issues and reduce overhead.
                  Streamline your operations with real-time health insights while effortlessly hitting your sustainability goals.
                </p>

                <div className="flex items-center gap-2 text-white/80">
                  <span className="font-semibold text-white">Phone:</span>
                  <a href="tel:+919739733255" className="hover:text-white transition-colors">
                    +91 97397 33255
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="https://www.linkedin.com/company/greenvironmentindia" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.facebook.com/GreenvironmentIndia" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                    <FacebookIcon className="h-5 w-5" />
                  </Link>
                  <Link href="https://x.com/GreenvironmentI" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                    <XIcon className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UC5M7YeDV1hqlbqUkByKLcvw" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                    <YoutubeIcon className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.instagram.com/greenvironment_india/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                    <InstagramIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {footerSections.map(({ title, links }) => (
                  <div key={title} className="space-y-4">
                    <h6 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{title}</h6>
                    <ul className="space-y-3 text-white/90">
                      {links.map(({ title, href }) => (
                        <li key={title}>
                          <Link
                            href={href}
                            className="transition hover:text-white"
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="mt-6 flex flex-col gap-3 px-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
              <span>
                &copy; {new Date().getFullYear()}{" "}
                <Link href="/" className="font-semibold text-white hover:text-white">
                  Greenvironment
                </Link>
                . All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
