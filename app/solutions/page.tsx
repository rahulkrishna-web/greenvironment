import Features from "@/components/features";
import Footer from "@/components/footer";
import ServicesHero from "@/components/services-hero";
import SolutionsMultirow from "@/components/solutions-multirow";
import IndustriesServed from "@/components/industries-served";
import ESGAlignment from "@/components/esg-alignment";
import { ServicesProcess } from "@/components/services-process";

export default function SolutionsPage() {
  return (
    <>
      <ServicesHero />
      <SolutionsMultirow />
      <IndustriesServed />
      <ESGAlignment />
      <Footer />
    </>
  );
}
