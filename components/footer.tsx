"use client";

import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Company",
    links: [
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
      {
        title: "News",
        href: "#",
      },
      {
        title: "Media kit",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
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
      {
        title: "Newsletter",
        href: "#",
      }
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "Twitter",
        href: "#",
      },
      {
        title: "LinkedIn",
        href: "#",
      },
      {
        title: "Facebook",
        href: "#",
      }
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms",
        href: "#",
      },
      {
        title: "Privacy",
        href: "#",
      },
      {
        title: "Cookies",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-0 text-white">
      <div className="relative mx-auto max-w-(--breakpoint-xl) px-4 pb-14 pt-10 sm:px-6">
        <div className="relative">
          <div className="pointer-events-none absolute right-6 -top-2.5 h-5 w-[70%] overflow-hidden rounded-[24px] bg-amber-400 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.45)]" aria-hidden>
            <motion.div
              className="absolute inset-y-0 left-[-40%] w-1/2 bg-gradient-to-r from-white/35 via-white/85 to-white/35 blur-sm"
              animate={{ x: ["0%", "180%"] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#0d7f86] px-6 py-10 sm:px-10 lg:px-12 lg:py-14 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.6)]">
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
                  `M0 ${baseY + offsetA} Q 240 ${baseY - amp + offsetB} 480 ${baseY + amp / 2 + offsetA} T 960 ${
                    baseY - amp / 3 + offsetB
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

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 border border-white/20">
                    <span className="text-white text-lg">G</span>
                  </div>
                  <span className="text-white">GREENVIRONMENT</span>
                </div>
                <p className="text-sm text-white/85">Add the tag line text here.</p>
              </div>

              <p className="max-w-sm text-white/85">
                Maecenas non urna a purus semper ultrices. Nam vestibulum tellus tincidunt, ultricies justo a, condimentum nisl.
              </p>

              <div className="flex items-center gap-3">
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                  <DribbbleIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                  <TwitchIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 text-white transition hover:bg-white/25">
                  <GithubIcon className="h-5 w-5" />
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
                        <Link href={href} className="transition hover:text-white">
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

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <Link href="#" className="font-semibold text-white hover:text-white">
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
