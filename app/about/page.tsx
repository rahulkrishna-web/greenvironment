import About from "@/components/about";
import AboutUsHero from "@/components/about-us-hero";
import Footer from "@/components/footer";
import { TimelineView } from "@/components/global-expansion/timeline-view";
import { AboutCta } from "@/components/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutUsHero />
      <About />
      <TimelineView />
      <AboutCta />
      <Footer />
    </>
  );
}
