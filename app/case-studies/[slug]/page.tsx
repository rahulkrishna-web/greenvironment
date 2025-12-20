import Footer from "@/components/footer";
import { caseStudies } from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";

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
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 pt-28 pb-16 lg:pt-32 lg:pb-20 space-y-10 w-full">
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Talk to our team <ArrowUpRight className="h-5! w-5!" />
            </Link>
          </div>
        </header>

        <section className="space-y-6 text-slate-800">
          {renderBody(study.body)}
        </section>
      </div>
      <Footer />
    </div>
  );
}

const renderBody = (body: string) => {
  const lines = body.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    const items = listItems;
    listItems = [];
    blocks.push(
      <ul key={`list-${blocks.length}`} className="list-disc space-y-2 pl-5 text-slate-700">
        {items.map((item, index) => (
          <li key={`li-${blocks.length}-${index}`}>{item}</li>
        ))}
      </ul>
    );
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    const isHeading = /:$/.test(trimmed) && trimmed.length < 40;
    const isListItem = /^([•●-]|\w\.)\s*/.test(trimmed);

    if (isHeading) {
      flushList();
      blocks.push(
        <h2 key={`heading-${blocks.length}`} className="text-xl font-semibold tracking-tight text-slate-900">
          {trimmed}
        </h2>
      );
      return;
    }

    if (isListItem) {
      const itemText = trimmed.replace(/^([•●-]|\w\.)\s*/, "").trim();
      listItems.push(itemText.length ? itemText : trimmed);
      return;
    }

    flushList();
    blocks.push(
      <p key={`p-${blocks.length}`} className="text-slate-700">
        {trimmed}
      </p>
    );
  });

  flushList();
  return blocks;
};