import About from "@/components/about";
import AchievementsSection from "@/components/achievements-section";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import { BrandValues } from "@/components/brand-values";
import { ContactFormSection } from "@/components/contact-form-section";
import Hero from "@/components/hero";
import LeadSection from "@/components/lead-section";
import { OneLiner } from "@/components/one-liner";
import { Navbar } from "@/components/navbar";
import { VideoSection } from "@/components/video-section";
import Testimonial from "@/components/testimonial";
import { TrustedClients } from "@/components/trusted-clients";
import WhatWeDoOptions from "@/components/what-we-do-options";
import { ValuePropositionSection } from "@/components/what-we-do-options";

export default function Home() {
  return (
    <>
      <LeadSection />
      <ValuePropositionSection />
      <BrandValues />
      <VideoSection src="https://res.cloudinary.com/rahulkrishna/video/upload/v1765106802/ge/Flow.mp4" />
      <WhatWeDoOptions />
      <AchievementsSection />
      <TrustedClients />
      <OneLiner />
      <ContactFormSection />
      <Footer />
    </>
  );
}
