import About from "@/components/about";
import AchievementsSection from "@/components/achievements-section";
import Blog from "@/components/blog";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LogoMarquee from "@/components/logo-marquee";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <About />
      <AchievementsSection />
      <Features />
      <Testimonial />
      <Blog />
      <FAQ />
      <Footer />
    </>
  );
}
