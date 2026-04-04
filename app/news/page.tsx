import React from 'react';
import NewsHero from '@/components/news-hero';
import Footer from '@/components/footer';
import Link from 'next/link';
import { getNews } from '@/lib/strapi';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata = {
  title: 'News & PCB Notices | Greenenvironment',
  description: 'Latest KSPCB, TNPCB, and CPCB notices for OCEM implementation and environmental monitoring.',
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const CategoryBadge = ({ category }: { category: string }) => {
  const cat = category?.toUpperCase();
  const colors: Record<string, string> = {
    KSPCB: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    TNPCB: 'bg-blue-50 text-blue-700 border-blue-200',
    CPCB: 'bg-amber-50 text-amber-700 border-amber-200',
  };

  const colorClass = colors[cat] || 'bg-slate-50 text-slate-700 border-slate-200';

  return (
    <Badge variant="outline" className={`${colorClass} uppercase tracking-wider font-semibold border`}>
      {cat}
    </Badge>
  );
};

export default async function NewsArchivePage() {
  const strapiData = await getNews();
  const newsList = (strapiData.data || []).map((item: any) => {
    const attr = item.attributes || item;
    return {
      id: item.id,
      slug: attr.slug,
      title: attr.title,
      date: attr.date,
      category: attr.category,
      summary: attr.summary,
    };
  });

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-12">
      <NewsHero />

      <section className="max-w-(--breakpoint-xl) mx-auto px-6 py-16 w-full flex-grow">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main Content - News List */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Recent Notices & Directives</h2>
            
            <div className="space-y-6">
              {newsList.length > 0 ? (
                newsList.map((item: any) => (
                  <div 
                    key={item.id} 
                    className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-md hover:border-emerald-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CategoryBadge category={item.category} />
                          <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                            <Calendar className="w-4 h-4" />
                            {formatDate(item.date)}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                          <Link href={`/news/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 line-clamp-3 mb-6 max-w-3xl font-medium leading-relaxed">
                      {item.summary}
                    </p>

                    <Link 
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:gap-3 transition-all"
                    >
                      Read full notice <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-6 shadow-sm">
                  <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
                    <Calendar className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">No news or notices yet</h3>
                    <p className="text-slate-500 max-w-sm mx-auto">
                      We haven't published any news or PCB notices recently. Please check back later for the latest updates on environmental regulations.
                    </p>
                  </div>
                  <Link 
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 shadow-lg shadow-emerald-900/10"
                  >
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Filters (Optional placeholder) */}
          <aside className="space-y-8">
            <div className="bg-emerald-900 rounded-2xl p-6 text-white overflow-hidden relative shadow-lg">
              <div className="relative z-10 space-y-4">
                <h4 className="text-xl font-bold">OCEM Assistance</h4>
                <p className="text-emerald-100/80 text-sm">
                  Our team can help you with the latest PCB compliance guidelines and OCEM installations.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
                >
                  Get Professional Help
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {['KSPCB', 'TNPCB', 'CPCB'].map((cat: string) => (
                  <button 
                    key={cat}
                    className="px-4 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-emerald-300 hover:text-emerald-700 transition"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
