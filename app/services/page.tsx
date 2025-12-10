import Features from "@/components/features";
import Footer from "@/components/footer";
import ServicesHero from "@/components/services-hero";
import { ServicesProcess } from "@/components/services-process";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Features />
      <ServicesProcess />
      <Footer />
    </>
  );
}
