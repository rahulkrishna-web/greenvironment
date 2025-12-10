import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { caseStudies } from "@/lib/case-studies";
import Link from "next/link";

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

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <Card key={study.slug} className="shadow-none border border-muted/50 hover:border-emerald-200 transition-colors">
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{study.industry}</Badge>
                <Badge variant="secondary">{study.location}</Badge>
                <Badge variant="secondary">{study.duration}</Badge>
              </div>
              <h3 className="text-xl font-semibold tracking-tight leading-snug">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground">{study.summary}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-left"
                  >
                    <div className="text-xs uppercase tracking-[0.08em] text-emerald-700">{metric.label}</div>
                    <div className="text-base font-semibold text-emerald-900">{metric.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm" className="rounded-full">
                  <Link href={`/case-studies/${study.slug}`}>View details</Link>
                </Button>
                {study.documentHref && (
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link href={study.documentHref} target="_blank" rel="noopener noreferrer">
                      Download PDF
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
