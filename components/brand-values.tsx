"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Sustainability with Integrity",
    description: "Every solution supports environmental stewardship with measurable outcomes.",
    Icon: SustainabilityIcon,
  },
  {
    title: "Transparency in Action",
    description: "Clear, accessible data for stakeholders across the organisational chain.",
    Icon: TransparencyIcon,
  },
  {
    title: "Partnerships for Change",
    description: "Partnering with clients, academia, and communities for long-term change.",
    Icon: PartnershipIcon,
  },
  {
    title: "Measurable by Impact",
    description: "Success measured in resources saved, not promises made.",
    Icon: ImpactIcon,
  },
];

const baseCard =
  "group relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-6 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.65)] backdrop-blur";

export const BrandValues = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#014446] via-[#02696b] to-[#014446] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(10,184,201,0.28),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(245,142,34,0.22),transparent_34%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0ab8c9]/50 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
            Brand Values
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl text-white">Brand Pillars / Values</h2>
          <p className="max-w-3xl text-lg text-white/80">
            Principles that guide how we partner, operate, and measure impact.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map(({ title, description, Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.5, ease: "easeOut" }}
              className={baseCard}
            >
              <div className="relative flex flex-col gap-4">
                <Icon />
                <h3 className="text-xl font-semibold leading-tight text-white">{title}</h3>
                <p className="text-sm sm:text-base text-white/80">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

function SustainabilityIcon() {
  return (
    <div className="h-14 w-14 rounded-xl bg-white/10 p-2">
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <rect x="10" y="22" width="18" height="30" rx="3" className="fill-white stroke-[#02696b]" strokeWidth="3" />
        <rect x="36" y="12" width="18" height="40" rx="3" className="fill-white stroke-[#02696b]" strokeWidth="3" />
        <circle cx="32" cy="30" r="6" className="fill-[#f58e22]" />
      </svg>
    </div>
  );
}

function TransparencyIcon() {
  return (
    <div className="h-14 w-14 rounded-xl bg-white/10 p-2">
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <path
          d="M12 44V18c0-2.2 1.8-4 4-4h18v30H16c-2.2 0-4-1.8-4-4Z"
          className="fill-white stroke-[#02696b]"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 30h14c2.2 0 4 1.8 4 4v14"
          className="fill-none stroke-[#02696b]"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="44" cy="18" r="6" className="fill-[#f58e22]" />
      </svg>
    </div>
  );
}

function PartnershipIcon() {
  return (
    <div className="h-14 w-14 rounded-xl bg-white/10 p-2">
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <path
          d="M12 44V26c0-2.2 1.8-4 4-4h10v22H16c-2.2 0-4-1.8-4-4Z"
          className="fill-white stroke-[#02696b]"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M52 44V26c0-2.2-1.8-4-4-4H38v22h10c2.2 0 4-1.8 4-4Z"
          className="fill-white stroke-[#02696b]"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M24 22 32 12l8 10"
          className="fill-white stroke-[#02696b]"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="22" r="6" className="fill-[#f58e22]" />
      </svg>
    </div>
  );
}

function ImpactIcon() {
  return (
    <div className="h-14 w-14 rounded-xl bg-white/10 p-2">
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <path
          d="M12 42V22c0-2.2 1.8-4 4-4h14v24H16c-2.2 0-4-1.8-4-4Z"
          className="fill-white stroke-[#02696b]"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M52 42V26c0-2.2-1.8-4-4-4H34"
          className="fill-none stroke-[#02696b]"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="36" r="7" className="fill-[#f58e22] stroke-[#02696b]" strokeWidth="3" />
      </svg>
    </div>
  );
}
