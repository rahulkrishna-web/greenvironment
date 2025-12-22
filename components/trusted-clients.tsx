"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Sector =
  | "Residential"
  | "Commercial Real Estate"
  | "Hospitality"
  | "Industrial"
  | "Healthcare";

const sectorClients: Record<Sector, { src: string; alt: string }[]> = {
  Residential: [
    { src: "/clients/brigade group logo.png", alt: "Brigade Group" },
    { src: "/clients/prestige logo.png", alt: "Prestige" },
    { src: "/clients/lancor logo.png", alt: "Lancor" },
    { src: "/clients/purvankara logo.png", alt: "Puravankara" },
  ],
  "Commercial Real Estate": [
    { src: "/clients/tcs logo.png", alt: "TCS" },
    { src: "/clients/amazon logo.png", alt: "Amazon" },
    { src: "/clients/brookflied logo.png", alt: "Brookfield" },
    { src: "/clients/capitaland logo.svg", alt: "CapitaLand" },
    { src: "/clients/nucleus logo.png", alt: "Nucleus Office Parks" },
    { src: "/clients/prestige logo.png", alt: "Prestige" },
    { src: "/clients/brigade group logo.png", alt: "Brigade Group" },
    { src: "/clients/rmz logo.png", alt: "RMZ" },
    { src: "/clients/embassy logo.png", alt: "Embassy" },
    { src: "/clients/bagmane logo.png", alt: "Bagmane" },
  ],
  Hospitality: [
    { src: "/clients/taj logo.png", alt: "Taj" },
    { src: "/clients/club mahindra logo.png", alt: "Club Mahindra" },
    { src: "/clients/conrad logo.png", alt: "Conrad" },
    { src: "/clients/the leela logo.png", alt: "The Leela" },
    { src: "/clients/ibis logo.png", alt: "Ibis" },
    { src: "/clients/marriott logo.png", alt: "Marriott" },
    { src: "/clients/westin logo.svg", alt: "Westin" },
    { src: "/clients/holiday inn logo.png", alt: "Holiday Inn" },
    { src: "/clients/novotel logo.png", alt: "Novotel" },
    { src: "/clients/sheraton logo.png", alt: "Sheraton" },
  ],
  Industrial: [
    { src: "/clients/mahindra logo.png", alt: "Mahindra" },
    { src: "/clients/ifb logo.png", alt: "IFB Industries" },
    { src: "/clients/rane logo.png", alt: "Rane" },
    { src: "/clients/danfoss logo.png", alt: "Danfoss" },
    { src: "/clients/jsw logo.png", alt: "JSW" },
    { src: "/clients/kirloskar logo.png", alt: "Kirloskar" },
    { src: "/clients/ambuja logo.png", alt: "Ambuja Cement" },
    { src: "/clients/Bmm logo.png", alt: "BMM" },
    { src: "/clients/trident logo.png", alt: "Trident Hotels" },
  ],
  Healthcare: [
    { src: "/clients/bmh logo.png", alt: "BMH" },
    { src: "/clients/ramaiah hospital logo.png", alt: "Ramaiah Memorial Hospital" },
    { src: "/clients/apollo hospital logo.png", alt: "Apollo Hospitals" },
  ],
};

const sectorOrder: Sector[] = [
  "Residential",
  "Commercial Real Estate",
  "Hospitality",
  "Industrial",
  "Healthcare",
];

export const TrustedClients = () => {
  const [activeSector, setActiveSector] = useState<Sector>("Residential");
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
