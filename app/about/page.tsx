import About from "@/components/about";
import AboutUsHero from "@/components/about-us-hero";
import Footer from "@/components/footer";
import { ValuePropositionSection } from "@/components/what-we-do-options";

export default function AboutPage() {
  return (
    <>
      <AboutUsHero />
      <About />
      <ValuePropositionSection />
      <Footer />
    </>
  );
}
