import Footer from "@/components/footer";
import { getCaseStudyBySlug, getStrapiURL } from "@/lib/strapi";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StrapiBlocksRenderer } from "@/components/StrapiBlocksRenderer";
import Image from "next/image";

export const revalidate = 60; // Revalidate every 60 seconds

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> | Params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const strapiData = await getCaseStudyBySlug(resolvedParams.slug);

  if (!strapiData?.data?.[0]) return {};

  const study = strapiData.data[0];
  const attr = study.attributes || study;

  return {
    title: `${attr.title} | Case Study`,
    description: attr.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const strapiData = await getCaseStudyBySlug(resolvedParams.slug);

  if (!strapiData?.data?.[0]) return notFound();

  const study = strapiData.data[0];
  const attr = study.attributes || study;
  const heroImage = attr.heroImage?.url || attr.heroImage?.data?.attributes?.url;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/60 to-white flex flex-col">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 pt-28 pb-16 lg:pt-32 lg:pb-20 space-y-10 w-full">
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
            Case study
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              {attr.title}
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">{attr.summary}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[attr.industry, attr.location, attr.duration].map((pill: string) => (
              <span
                key={pill}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-emerald-100"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Talk to our team <ArrowUpRight className="h-5! w-5!" />
            </Link>
            {attr.pdf && (attr.pdf.url || attr.pdf.data?.attributes?.url) && (
              <a
                href={getStrapiURL(attr.pdf.url || attr.pdf.data?.attributes?.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                Download Case Study <ArrowUpRight className="h-5! w-5!" />
              </a>
            )}
          </div>
        </header>

        {heroImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={getStrapiURL(heroImage)}
              alt={attr.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <section className="space-y-6 text-slate-800">
          {Array.isArray(attr.content) ? (
            <div className="prose prose-lg prose-slate max-w-none">
              <StrapiBlocksRenderer blocks={attr.content} />
            </div>
          ) : (
            <div className="prose prose-lg prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: attr.body }} />
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}