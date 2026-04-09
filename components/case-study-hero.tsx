const CaseStudyHero = () => {
  return (
    <div className="relative mt-6 lg:mt-16 w-full overflow-hidden border-b border-accent bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,255,191,0.22),transparent_45%)]" />
      </div>
      <div className="relative max-w-(--breakpoint-xl) w-full flex flex-col mx-auto items-center justify-center px-6 py-16 lg:py-24 text-center">
        <div className="max-w-3xl space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Case Studies
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight">
              Proof that resilient water intelligence pays for itself
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Explore how cities, campuses, and enterprises deploy Greenvironment to drought-proof operations, reuse more water, and drive measurable cost savings—without disrupting day-to-day work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
