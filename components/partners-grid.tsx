"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { StrapiBlocksRenderer } from "@/components/StrapiBlocksRenderer";
import { Info, X, LayoutGrid } from "lucide-react";

type Sector =
  | "Residential"
  | "Commercial Real Estate"
  | "Hospitality"
  | "Industrial"
  | "Healthcare"
  | "All";

export interface Client {
  id: string;
  name: string;
  logo: string;
  sector: Sector;
  properties?: any; // Strapi Blocks
}

const sectorOrder: Sector[] = [
  "All",
  "Residential",
  "Commercial Real Estate",
  "Hospitality",
  "Industrial",
  "Healthcare",
];

interface PartnersGridProps {
  initialClients: Client[];
}

export default function PartnersGrid({ initialClients }: PartnersGridProps) {
  const [activeSector, setActiveSector] = useState<Sector>("All");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filteredClients = useMemo(() => {
    if (activeSector === "All") return initialClients;
    return initialClients.filter((c) => c.sector === activeSector);
  }, [initialClients, activeSector]);

  return (
    <div className="flex flex-col gap-12">
      {/* Sector Filters */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-100">
        {sectorOrder.map((sector) => {
          const isActive = sector === activeSector;
          return (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={[
                "rounded-full border px-6 py-2.5 text-sm font-bold transition-all duration-300",
                isActive
                  ? "border-[#02696b] bg-[#0ab8c9]/10 text-[#02696b] shadow-sm ring-2 ring-[#0ab8c9]/20"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#0ab8c9]/50 hover:text-[#02696b]",
              ].join(" ")}
            >
              {sector}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      {filteredClients.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => (
              <motion.div
                layout
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative flex flex-col items-center justify-center h-40 p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#0ab8c9]/30 hover:shadow-xl hover:shadow-emerald-900/5 transition-all cursor-pointer overflow-hidden"
                onClick={() => client.properties && setSelectedClient(client)}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={240}
                  height={120}
                  className="h-auto w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                
                {client.properties && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info className="w-4 h-4 text-[#0ab8c9]" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Graceful Empty State */
        <div className="flex flex-col items-center justify-center py-32 text-center rounded-3xl border-2 border-dashed border-slate-100 bg-slate-50/50 px-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-slate-300">
            <LayoutGrid className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No partners found in this sector</h3>
          <p className="text-slate-500 max-w-sm mb-8">
            We are currently updating our partner portfolio with 175+ industry leaders. New entries for this category will appear here soon.
          </p>
          {activeSector !== "All" && (
            <button 
              onClick={() => setActiveSector("All")}
              className="text-[#02696b] font-bold hover:text-[#0ab8c9] transition-colors"
            >
              View all sectors →
            </button>
          )}
        </div>
      )}

      {/* Client Detail Modal */}
      <AnimatePresence>
        {selectedClient && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClient(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedClient(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row items-center gap-8 border-b border-slate-100 pb-8">
                  <div className="w-40 h-24 relative flex-shrink-0">
                    <Image
                      src={selectedClient.logo}
                      alt={selectedClient.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-block px-3 py-1 bg-[#0ab8c9]/10 text-[#02696b] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#0ab8c9]/20">
                      {selectedClient.sector}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{selectedClient.name}</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Properties & Partnerships</h4>
                  <div className="prose prose-slate prose-lg max-w-none prose-p:leading-relaxed prose-li:marker:text-[#0ab8c9]">
                    <StrapiBlocksRenderer blocks={selectedClient.properties} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
