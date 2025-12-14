"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Sector =
  | "Hospitality"
  | "Residential"
  | "Real Estate"
  | "Commercial"
  | "Healthcare";

const sectorClients: Record<Sector, { src: string; alt: string }[]> = {
  Hospitality: [
    { src: "/clients/marriott logo.png", alt: "Marriott" },
    { src: "/clients/taj logo.png", alt: "Taj" },
    { src: "/clients/sheraton logo.png", alt: "Sheraton" },
    { src: "/clients/novotel logo.png", alt: "Novotel" },
    { src: "/clients/four seasons logo.png", alt: "Four Seasons" },
    { src: "/clients/the leela logo.png", alt: "The Leela" },
  ],
  Residential: [
    { src: "/clients/purvankara logo.png", alt: "Puravankara" },
    { src: "/clients/prestige logo.png", alt: "Prestige" },
    { src: "/clients/brigade group logo.png", alt: "Brigade Group" },
    { src: "/clients/lancor logo.png", alt: "Lancor" },
    { src: "/clients/nucleus logo.png", alt: "Nucleus" },
  ],
  "Real Estate": [
    { src: "/clients/embassy logo.png", alt: "Embassy" },
    { src: "/clients/brookflied logo.png", alt: "Brookfield" },
    { src: "/clients/rmz logo.png", alt: "RMZ" },
    { src: "/clients/brigade group logo.png", alt: "Brigade Group" },
    { src: "/clients/mahindra logo.png", alt: "Mahindra Lifespaces" },
  ],
  Commercial: [
    { src: "/clients/amazon logo.png", alt: "Amazon" },
    { src: "/clients/jsw logo.png", alt: "JSW" },
    { src: "/clients/tcs logo.png", alt: "TCS" },
    { src: "/clients/danfoss logo.png", alt: "Danfoss" },
    { src: "/clients/kirloskar logo.png", alt: "Kirloskar" },
  ],
  Healthcare: [
    { src: "/clients/apollo hospital logo.png", alt: "Apollo Hospitals" },
    { src: "/clients/ramaiah hospital logo.png", alt: "Ramaiah Hospital" },
    { src: "/clients/bmh logo.png", alt: "BMH" },
    { src: "/clients/ifb logo.png", alt: "IFB" },
    { src: "/clients/ambuja logo.png", alt: "Ambuja" },
  ],
};

const sectorOrder: Sector[] = [
  "Hospitality",
  "Residential",
  "Real Estate",
  "Commercial",
  "Healthcare",
];

export const TrustedClients = () => {
  const [activeSector, setActiveSector] = useState<Sector>("Hospitality");
  const logos = useMemo(() => sectorClients[activeSector], [activeSector]);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#e6f7f8] to-white py-24 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(2,105,107,0.12),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(10,184,201,0.14),transparent_36%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0ab8c9]/50 bg-[#0ab8c9]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#02696b]">
            Trusted Clients
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl text-slate-900">
            Partners across sectors
          </h2>
          <p className="max-w-3xl text-lg text-slate-700">
            Explore clients by industry; tap to switch sectors.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 pb-2">
          {sectorOrder.map((sector) => {
            const isActive = sector === activeSector;
            return (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-[#02696b] bg-[#0ab8c9]/15 text-[#02696b] shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#0ab8c9]/50 hover:text-[#02696b]",
                ].join(" ")}
              >
                {sector}
              </button>
            );
          })}
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 place-items-center">
          {logos.map((logo) => (
            <motion.div
              key={logo.src}
              className="flex h-28 w-full items-center justify-center rounded-2xl p-1 sm:p-3 bg-transparent"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={logo.src}
                alt={`${logo.alt} logo`}
                width={240}
                height={120}
                className="h-auto w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
