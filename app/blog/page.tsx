import About from "@/components/about";
import AboutUsHero from "@/components/about-us-hero";
import Blog from "@/components/blog";
import BlogHero from "@/components/blog-hero";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <Blog />
      <Footer />
    </>
  );
}
