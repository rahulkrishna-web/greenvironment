import About from "@/components/about";
import Blog from "@/components/blog";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Clients />
      <Testimonial />
      <Blog />
      <FAQ />
      <Footer />
    </>
  );
}
