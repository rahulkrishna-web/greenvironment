import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";
import { caseStudies } from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> | Params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const study = caseStudies.find((item) => item.slug === resolvedParams.slug);

  if (!study) return {};

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const study = caseStudies.find((item) => item.slug === resolvedParams.slug);
  if (!study) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/60 to-white flex flex-col">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 pt-28 pb-16 lg:pt-32 lg:pb-20 space-y-12 w-full">
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
            Case study
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              {study.title}
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">{study.summary}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[study.industry, study.location, study.duration].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-emerald-100"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-full">
              <Link href="/contact">
                Talk to our team <ArrowUpRight className="h-5! w-5!" />
              </Link>
            </Button>
            {study.documentHref && (
              <Button asChild variant="outline" className="rounded-full">
                <Link href={study.documentHref} target="_blank" rel="noopener noreferrer">
                  Download case study
                </Link>
              </Button>
            )}
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <Card key={metric.label} className="border-emerald-100 bg-white/80 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <div className="text-sm uppercase tracking-[0.1em] text-emerald-700">{metric.label}</div>
                <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <DetailBlock title="Challenge" items={study.challenges} />
            <DetailBlock title="Solution" items={study.solutions} />
            <DetailBlock title="Outcomes" items={study.outcomes} />
          </div>
          {study.testimonial && (
            <Card className="h-fit border-emerald-100 bg-emerald-900 text-white shadow-lg shadow-emerald-200/30">
              <CardContent className="p-6 space-y-4">
                <div className="text-sm uppercase tracking-[0.2em] text-emerald-100">Testimonial</div>
                <blockquote className="text-xl font-semibold leading-relaxed">
                  “{study.testimonial.quote}”
                </blockquote>
                <div className="text-sm text-emerald-100/90">
                  <div className="font-semibold">{study.testimonial.author}</div>
                  <div>{study.testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const DetailBlock = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <Card className="border-emerald-100 bg-white/90 backdrop-blur">
      <CardContent className="p-6 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <ul className="space-y-3 text-slate-700">
          {items.map((item, index) => (
            <li key={`${title}-${index}`} className="flex gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
