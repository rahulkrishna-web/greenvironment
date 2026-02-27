import About from "@/components/about";
import AboutUsHero from "@/components/about-us-hero";
import Footer from "@/components/footer";
import { RealMapView } from "@/components/global-expansion/real-map-view";
import { AboutCta } from "@/components/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutUsHero />
      <About />
      <RealMapView />
      <AboutCta />
      <Footer />
    </>
  );
}
