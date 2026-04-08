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
import WhatWeDoOptions from "@/components/what-we-do-options";

export const revalidate = 60;

export default async function Home() {
  return (
    <>
      <LeadSection />
      <BrandValues />
      <VideoSection src="https://res.cloudinary.com/rahulkrishna/video/upload/v1765106802/ge/Flow.mp4" />
      <WhatWeDoOptions />
      <AchievementsSection />
      <OneLiner />
      <ContactFormSection />
      <Footer />
    </>
  );
}
