import React from 'react';

const NewsHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-(--breakpoint-xl) mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Newsroom
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Latest PCB Notices & <span className="text-emerald-400">OCEM Directives</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100/80 max-w-2xl">
            Stay updated with the latest circulars, notices, and implementation guidelines from KSPCB, TNPCB, and CPCB regarding real-time environmental monitoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
