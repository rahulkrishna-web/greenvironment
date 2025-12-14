import Features from "@/components/features";
import Footer from "@/components/footer";
import ServicesHero from "@/components/services-hero";
import ServicesShowcase from "@/components/services-showcase";
import { ServicesProcess } from "@/components/services-process";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesShowcase />
      <Features />
      <ServicesProcess />
      <Footer />
    </>
  );
}
