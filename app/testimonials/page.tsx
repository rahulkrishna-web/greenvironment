"use client";

import React, { useState, useEffect } from "react";
import TestimonialsHero from "@/components/testimonials-hero";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTestimonials, getStrapiURL } from "@/lib/strapi";
import { Star, MessageSquare } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const strapiData = await getTestimonials();
        const formatted = (strapiData?.data || []).map((item: any) => {
          const attr = item.attributes || item;
          const avatar = attr.avatar?.url || attr.avatar?.data?.attributes?.url;
          return {
            id: item.id.toString(),
            name: attr.name,
            designation: attr.designation,
            company: attr.company,
            content: attr.content,
            avatar: avatar ? getStrapiURL(avatar) : "",
            rating: attr.rating || 5,
          };
        });
        setTestimonials(formatted);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <TestimonialsHero />
      
      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">Voices of Trust & Success</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our commitment to sustainability and efficiency is best told by the partners we serve. Explore real feedback from our diverse client portfolio.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-72 bg-slate-50 rounded-[2.5rem] animate-pulse" />
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="break-inside-avoid relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#0ab8c9]/5 transition-all group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed text-lg italic mb-10">
                   &quot;{testimonial.content.length > 280 ? testimonial.content.substring(0, 277) + '...' : testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#02696b]/5 shrink-0 relative border border-[#0ab8c9]/10">
                    {testimonial.avatar ? (
                      <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#02696b] text-white font-bold text-xl uppercase">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm font-medium text-slate-400">{testimonial.designation}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
      </section>

      <Footer />
    </main>
  );
}
