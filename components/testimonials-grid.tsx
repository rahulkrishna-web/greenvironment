"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface TestimonialsGridProps {
  initialTestimonials: Testimonial[];
}

export default function TestimonialsGrid({ initialTestimonials }: TestimonialsGridProps) {
  return (
    <div className="flex flex-col gap-12">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl font-bold text-slate-900 leading-tight">Voices of Trust & Success</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Our commitment to sustainability and efficiency is best told by the partners we serve. Explore real feedback from our diverse client portfolio.
        </p>
      </div>

      {initialTestimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {initialTestimonials.map((testimonial, idx) => {
            const isFeatured = testimonial.content.length > 800;
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative p-10 rounded-[2.5rem] border border-[#0ab8c9]/25 bg-gradient-to-br from-white via-[#e6f7f8] to-white shadow-sm hover:shadow-2xl transition-all group overflow-hidden",
                  isFeatured ? "lg:col-span-12" : "lg:col-span-4"
                )}
              >
                {/* Premium Radial Glow Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,142,34,0.1),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(10,184,201,0.15),transparent_44%)] opacity-0 transition duration-300 group-hover:opacity-70" />
                
                <div className="relative flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed text-lg mb-10 whitespace-pre-wrap grow">
                     &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center gap-5 pt-8 border-t border-slate-100/50">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#02696b]/5 shrink-0 relative border border-[#0ab8c9]/10">
                      {testimonial.avatar ? (
                        <Image src={testimonial.avatar} alt={testimonial.name || "Testimonial"} fill className="object-cover" />
                      ) : testimonial.name ? (
                        <div className="w-full h-full flex items-center justify-center bg-[#02696b] text-white font-bold text-xl uppercase">
                          {testimonial.name.charAt(0)}
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                          <User className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.name || "Anonymous Client"}</h4>
                      {(testimonial.designation || testimonial.company) && (
                        <p className="text-sm font-medium text-slate-400">
                          {[testimonial.designation, testimonial.company].filter(Boolean).join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* Graceful Empty State */
        <div className="flex flex-col items-center justify-center py-24 text-center rounded-[3rem] border-2 border-dashed border-slate-100 bg-slate-50/50 px-10">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 text-[#0ab8c9]">
            <MessageSquare className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">No reviews shared yet</h3>
          <p className="text-slate-500 max-w-sm">
            We are in the process of gathering and authenticating client reviews for our new portal. Please check back shortly to see our partner success stories.
          </p>
        </div>
      )}
    </div>
  );
}
