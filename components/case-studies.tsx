"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies } from "@/lib/case-studies";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PlaceholderTexture = () => (
  <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900">
    <svg
      className="absolute inset-0 h-full w-full opacity-80"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* flowing lines */}
      {Array.from({ length: 14 }).map((_, i) => {
        const y = 20 + i * 40;
        const duration = 6 + (i % 3);
        const delay = i * 0.2;
        return (
          <path
            key={i}
            d={`M-200 ${y} C 150 ${y + 12}, 350 ${y - 12}, 850 ${y + 10}`}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-400"
              dur={`${duration}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dasharray"
              values="120 40; 80 60; 140 30"
              dur={`${duration * 2}s`}
              repeatCount="indefinite"
            />
          </path>
        );
      })}

      {/* network grid */}
      <g className="opacity-60">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 14 }).map((__, col) => {
            const x = 30 + col * 55;
            const y = 30 + row * 45;
            const delay = (row + col) * 0.15;
            return (
              <g key={`${row}-${col}`}>
                <circle cx={x} cy={y} r="2.5" fill="url(#nodeGlow)">
                  <animate
                    attributeName="r"
                    values="2.5;4;2.5"
                    dur="5s"
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {col < 13 && (
                  <line
                    x1={x}
                    y1={y}
                    x2={x + 55}
                    y2={y}
                    stroke="url(#gridStroke)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.2;0.6;0.2"
                      dur="4s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                )}
                {row < 9 && (
                  <line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={y + 45}
                    stroke="url(#gridStroke)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.2;0.6;0.2"
                      dur="4s"
                      begin={`${delay + 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                )}
              </g>
            );
          })
        )}
      </g>

      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(99, 255, 209, 0.35)" />
          <stop offset="50%" stopColor="rgba(135, 206, 255, 0.55)" />
          <stop offset="100%" stopColor="rgba(99, 255, 209, 0.35)" />
        </linearGradient>
        <linearGradient id="gridStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(99, 255, 209, 0.4)" />
          <stop offset="100%" stopColor="rgba(135, 206, 255, 0.35)" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="60%" stopColor="rgba(99, 255, 209, 0.8)" />
          <stop offset="100%" stopColor="rgba(99, 255, 209, 0.1)" />
        </radialGradient>
      </defs>
    </svg>
    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_25%_20%,rgba(99,255,209,0.08),transparent_45%)]" />
    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_80%_70%,rgba(135,206,255,0.08),transparent_45%)]" />
  </div>
);

const CaseStudies = () => {
  return (
    <section id="case-studies" className="max-w-(--breakpoint-xl) mx-auto py-16 px-6 xl:px-0">
      <div className="flex flex-col items-center gap-3 text-center">
        <Badge variant="outline" className="rounded-full border-emerald-200 text-emerald-900 bg-emerald-50">
          Real results
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Case studies</h2>
        <p className="max-w-2xl text-muted-foreground">
          How organizations monitor, reuse, and protect water with Greenvironment’s real-time intelligence.
        </p>
      </div>

      <div className="mt-14 space-y-12">
        {caseStudies.map((study, idx) => {
          const imageLeft = idx % 2 === 0;
          return (
            <Card
              key={study.slug}
              className="shadow-none border border-muted/60 overflow-hidden"
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 ${imageLeft ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}`}
              >
                <CaseImage study={study} idx={idx} />

                <CardContent className="p-6 sm:p-8 flex flex-col gap-5 justify-center">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                      <Link href={`/case-studies/${study.slug}`} className="hover:text-emerald-700 transition-colors">
                        {study.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">{study.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2"
                      >
                        <div className="text-xs uppercase tracking-[0.08em] text-emerald-700">{metric.label}</div>
                        <div className="text-base font-semibold text-emerald-900">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="rounded-full">
                      <Link href={`/case-studies/${study.slug}`}>View details</Link>
                    </Button>
                    {study.documentHref && (
                      <Button asChild variant="outline" className="rounded-full">
                        <Link href={study.documentHref} target="_blank" rel="noopener noreferrer">
                          Download PDF
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

const CaseImage = ({ study, idx }: { study: (typeof caseStudies)[number]; idx: number }) => {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(study.image) && !hasError;
  const imageSrc = study.image ?? "";

  return (
    <div className="relative min-h-[260px] lg:min-h-[320px]">
      {showImage ? (
        <>
          <Image
            src={imageSrc}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={idx === 0}
            onError={() => setHasError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-black/10" />
        </>
      ) : (
        <PlaceholderTexture />
      )}
      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-white/80 text-slate-900">
          {study.industry}
        </Badge>
        <Badge variant="secondary" className="bg-white/80 text-slate-900">
          {study.location}
        </Badge>
        <Badge variant="secondary" className="bg-white/80 text-slate-900">
          {study.duration}
        </Badge>
      </div>
    </div>
  );
};

export default CaseStudies;
