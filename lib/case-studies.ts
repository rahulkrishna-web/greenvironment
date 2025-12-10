export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  location: string;
  duration: string;
  image?: string;
  metrics: { label: string; value: string }[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  testimonial?: { quote: string; author: string; role: string };
  documentHref?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rmz-millenia-chennai",
    title: "RMZ Millenia drought-proofs Chennai campus with real-time water intelligence",
    summary:
      "IoT-powered, real-time monitoring helped RMZ Millenia cut freshwater use by 22%, source 40% of daily demand from recycled water, and save ₹28.35 lakhs annually within 24 weeks.",
    industry: "Commercial real estate",
    location: "Chennai, India",
    duration: "24 weeks",
    image: "",
    metrics: [
      { label: "Freshwater reduction", value: "22%" },
      { label: "Demand met by recycled water", value: "40%" },
      { label: "Annual savings", value: "₹28.35 lakhs" },
    ],
    challenges: [
      "Keep a fully operational site running while deploying monitoring with minimal disruption.",
      "Integrate with existing treatment infrastructure to avoid unnecessary spend.",
      "Provide evidence-based reporting to satisfy operational and regulatory standards.",
    ],
    solutions: [
      "Ran a multi-week baseline to map water consumption patterns across the campus.",
      "Deployed a Real Time Monitoring (RTM) stack with pH, TDS, turbidity, ORP and flow sensors feeding a secure central platform.",
      "Optimized existing STP/WTP performance, including ORP-based dosing automation for consistent disinfection.",
      "Added tanker monitoring to validate inlet water quality and volume before distribution.",
    ],
    outcomes: [
      "Within 24 weeks, treated STP water was safely reused for flushing, floor cleaning, and landscaping.",
      "Freshwater use dropped by 22% while 40% of daily needs were met using recycled water.",
      "Operational savings of up to ₹28.35 lakhs per year (300 operating days) while improving filter media health.",
    ],
    testimonial: {
      quote:
        "This project helped us save water by 40%, enabling us to maintain and double the stocks.",
      author: "Jiji Thomas",
      role: "Associate Director, RMZ Corp.",
    },
    documentHref: "/case-study1.pdf",
  },
];
