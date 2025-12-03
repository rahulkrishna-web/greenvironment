import About from "@/components/about";
import AchievementsSection from "@/components/achievements-section";
import Blog from "@/components/blog";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LeadSection from "@/components/lead-section";
import LogoMarquee from "@/components/logo-marquee";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import WhatWeDoImmersive from "@/components/what-we-do-immersive";
import WhatWeDoOptions from "@/components/what-we-do-options";

export default function Home() {
  return (
    <>
      <LeadSection />
      <LogoMarquee />
      <WhatWeDoImmersive />
      <WhatWeDoOptions />
      <AchievementsSection />
      <Features />
      <Testimonial />
      <Blog />
      <FAQ />
      <Footer />
    </>
  );
}
