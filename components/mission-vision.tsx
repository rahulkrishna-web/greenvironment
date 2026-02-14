"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target } from "lucide-react";

const fades = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export const MissionVision = () => {
  return (
    <section className="py-16 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Vision */}
        <motion.div
          {...fades}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <Card className="h-full border-primary/10 bg-gradient-to-br from-emerald-50 via-white to-white hover:shadow-md transition-shadow">
            <CardContent className="p-8 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To redefine global water and energy management by embedding intelligence into critical infrastructure—creating resilient, efficient, and sustainable resource ecosystems.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission */}
        <motion.div
          {...fades}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-full"
        >
          <Card className="h-full border-primary/10 bg-gradient-to-br from-sky-50 via-white to-white hover:shadow-md transition-shadow">
            <CardContent className="p-8 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-sky-100 text-sky-600">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower organizations with real-time intelligence, predictive insights, and data-driven decision support that deliver measurable efficiency, compliance support, and ESG outcomes.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
