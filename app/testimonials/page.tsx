import React from "react";
import TestimonialsHero from "@/components/testimonials-hero";
import Footer from "@/components/footer";
import TestimonialsGrid, { Testimonial } from "@/components/testimonials-grid";
import { getTestimonials, getStrapiURL } from "@/lib/strapi";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function TestimonialsPage() {
  let testimonials: Testimonial[] = [];
  
  try {
    const strapiData = await getTestimonials();
    testimonials = (strapiData?.data || []).map((item: any) => {
      const attr = item.attributes || item;
      const avatar = attr.avatar?.url || attr.avatar?.data?.attributes?.url;
      return {
        id: item.id.toString(),
        name: attr.name || "", 
        designation: attr.designation || "",
        company: attr.company || "",
        content: attr.content || "",
        avatar: avatar ? getStrapiURL(avatar) : "",
        rating: attr.rating || 5,
      };
    });
  } catch (error) {
    console.error("Error fetching testimonials on server:", error);
  }

  return (
    <main className="min-h-screen bg-white">
      <TestimonialsHero />
      
      <section className="max-w-7xl mx-auto px-6 py-24">
        <TestimonialsGrid initialTestimonials={testimonials} />
      </section>

      <Footer />
    </main>
  );
}
