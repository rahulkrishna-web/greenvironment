import About from "@/components/about";
import AchievementsSection from "@/components/achievements-section";
import Footer from "@/components/footer";
import { BrandValues } from "@/components/brand-values";
import { ContactFormSection } from "@/components/contact-form-section";
import Hero from "@/components/hero";
import LeadSection from "@/components/lead-section-neural";
import { OneLiner } from "@/components/one-liner";
import { Navbar } from "@/components/navbar";
import { VideoSection } from "@/components/video-section";
import Testimonial from "@/components/testimonial";
import WhatWeDoOptions from "@/components/what-we-do-options";
import { getTestimonials, getStrapiURL } from "@/lib/strapi";

export const revalidate = 60;

export default async function Home() {
  let testimonialsData: any[] = [];
  try {
    const strapiData = await getTestimonials();
    testimonialsData = (strapiData?.data || []).map((item: any) => {
      const attr = item.attributes || item;
      const avatar = attr.avatar?.url || attr.avatar?.data?.attributes?.url;
      return {
        id: item.id.toString(),
        name: attr.name,
        designation: attr.designation || "",
        company: attr.company || "",
        content: attr.content || "",
        avatar: avatar ? getStrapiURL(avatar) : "",
      };
    });
  } catch (err) {
    console.error("Home testimonials fetch error:", err);
  }

  return (
    <>
      <LeadSection />
      <BrandValues />
      <VideoSection src="https://res.cloudinary.com/rahulkrishna/video/upload/v1765106802/ge/Flow.mp4" />
      <WhatWeDoOptions />
      <AchievementsSection />
      <OneLiner />
      {testimonialsData.length > 0 && <Testimonial initialData={testimonialsData} />}
      <ContactFormSection />
      <Footer />
    </>
  );
}
