import CaseStudies from "@/components/case-studies";
import CaseStudyHero from "@/components/case-study-hero";
import Footer from "@/components/footer";
import { getCaseStudies, getStrapiURL } from "@/lib/strapi";
import { CaseStudy } from "@/lib/case-studies";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CaseStudiesPage() {
  const strapiData = await getCaseStudies();
  const projects: CaseStudy[] = (strapiData.data || []).map((item: any) => {
    const attr = item.attributes || item; // Handle both structure types
    const image = attr.heroImage?.url || attr.heroImage?.data?.attributes?.url;
    const pdfUrl = attr.pdf?.url || attr.pdf?.data?.attributes?.url;

    return {
      slug: attr.slug,
      title: attr.title,
      summary: attr.summary,
      industry: attr.industry || "Industry", // Fallback
      location: attr.location || "Location",
      duration: attr.duration || "Duration",
      image: image ? getStrapiURL(image) : undefined,
      metrics: attr.metrics || [],
      body: "", // Not used in listing
      documentHref: pdfUrl ? getStrapiURL(pdfUrl) : undefined
    };
  });

  return (
    <>
      <CaseStudyHero />
      <CaseStudies items={projects} />
      <Footer />
    </>
  );
}
