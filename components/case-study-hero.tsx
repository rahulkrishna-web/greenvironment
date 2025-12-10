import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CaseStudyHero = () => {
  return (
    <div className="relative mt-6 lg:mt-16 w-full overflow-hidden border-b border-accent bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,255,191,0.22),transparent_45%)]" />
      </div>
      <div className="relative max-w-(--breakpoint-xl) w-full flex flex-col-reverse lg:flex-row mx-auto items-center justify-between gap-y-6 gap-x-12 px-6 py-16 lg:py-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Case Studies
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight">
              Proof that resilient water intelligence pays for itself
            </h1>
            <p className="text-base sm:text-lg text-white/80">
              Explore how cities, campuses, and enterprises deploy Greenvironment to drought-proof operations, reuse more water, and drive measurable cost savings—without disrupting day-to-day work.
            </p>
          </div>
        </div>

        <div className="relative lg:max-w-lg xl:max-w-xl w-full">
          <div className="aspect-square rounded-[28px] bg-gradient-to-br from-emerald-500/20 via-emerald-300/10 to-white/5 ring-1 ring-white/10 p-4 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 w-full h-full">
              {["Real-time sensors", "Quality assurance", "Reuse automation", "Cost savings"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm font-semibold text-white/90 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
