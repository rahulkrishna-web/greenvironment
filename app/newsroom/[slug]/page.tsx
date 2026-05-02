import React from 'react';
import Footer from '@/components/footer';
import { getNewsBySlug, getNews } from '@/lib/strapi';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, Share2, Printer } from 'lucide-react';
import { StrapiBlocksRenderer } from '@/components/StrapiBlocksRenderer';

export const revalidate = 60; // Revalidate every 60 seconds

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> | Params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const strapiData = await getNewsBySlug(resolvedParams.slug);

  if (!strapiData?.data?.[0]) return {};

  const news = strapiData.data[0];
  const attr = news.attributes || news;

  return {
    title: `${attr.title} | Greenenvironment Newsroom`,
    description: attr.summary,
  };
}

export async function generateStaticParams() {
  const strapiData = await getNews();
  const newsList = strapiData.data || [];
  return newsList.map((news: any) => {
    const attr = news.attributes || news;
    return {
      slug: attr.slug,
    };
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const strapiData = await getNewsBySlug(resolvedParams.slug);

  if (!strapiData?.data?.[0]) return notFound();

  const news = strapiData.data[0];
  const attr = news.attributes || news;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-12">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24 space-y-10 w-full relative z-10 flex-grow">
        <Link 
          href="/newsroom" 
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors group mb-8"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Newsroom
        </Link>

        <header className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Notice: {attr.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 border-l-4 border-emerald-600 pl-6">
              {attr.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-y border-slate-200 py-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-slate-700">Published on {formatDate(attr.date)}</span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors text-emerald-700 tooltip" title="Print Notice">
                <Printer className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors text-emerald-700 tooltip" title="Share">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <section className="py-2 sm:py-4">
          <div 
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:text-slate-900 prose-headings:font-bold 
              prose-p:text-slate-700 prose-p:leading-relaxed
              prose-a:text-emerald-700 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:list-disc prose-li:marker:text-emerald-600 prose-li:text-slate-700"
          >
            {attr.content && Array.isArray(attr.content) ? (
              <StrapiBlocksRenderer blocks={attr.content} />
            ) : (
                <div dangerouslySetInnerHTML={{ __html: attr.body || attr.content }} />
            )}
          </div>
        </section>

        <footer className="pt-12 text-center">
            <p className="text-slate-500 text-sm italic mb-6">
                Disclaimer: This is a placeholder notice for OCEM implementation. Please refer to official PCB websites for actual circulars.
            </p>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-8 py-4 text-base font-bold text-white transition hover:bg-emerald-800 shadow-xl shadow-emerald-900/10"
                >
                    Inquire about Compliance
                </Link>
            </div>
        </footer>
      </div>
      <Footer />
    </div>
  );
}
