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
    title: "RMZ Millenia drought-proofs a Chennai business park with real-time water intelligence",
    summary:
      "Real-time monitoring helped the campus cut freshwater use by 22%, meet 40% of daily demand with recycled water, and save Rs 28.35 lakhs annually within 24 weeks.",
    industry: "Commercial business park",
    location: "Chennai, India",
    duration: "24 weeks",
    metrics: [
      { label: "Freshwater reduction", value: "22%" },
      { label: "Demand met by recycled water", value: "40%" },
      { label: "Annual savings", value: "Rs 28.35 lakhs" },
    ],
    challenges: [
      "Keep a fully operational site running while deploying monitoring with minimal disruption.",
      "Integrate with existing treatment infrastructure to avoid unnecessary spend.",
      "Provide evidence-based reporting to satisfy operational and regulatory standards.",
    ],
    solutions: [
      "Ran a baseline observation period to map water consumption patterns across the campus.",
      "Deployed a Real Time Monitoring (RTM) stack with pH, TDS, turbidity, ORP, and flow sensors feeding a secure central platform.",
      "Improved existing STP/WTP performance, including ORP-based dosing automation for consistent disinfection.",
      "Added tanker monitoring to validate inlet water quality and volume before distribution.",
    ],
    outcomes: [
      "Within 24 weeks, treated STP water was safely reused for flushing, floor cleaning, and landscaping.",
      "Freshwater use dropped by 22% while 40% of daily needs were met using recycled water.",
      "Operational savings of up to Rs 28.35 lakhs per year (300 operating days) while improving filter media health.",
    ],
    testimonial: {
      quote:
        "This project helped us save water by 40%, enabling us to maintain and double the stocks.",
      author: "Jiji Thomas",
      role: "Associate Director, RMZ Corp.",
    },
    documentHref: "/case-study/masked-case-study-1-rmz-millenia.docx",
  },
  {
    slug: "club-mahindra-resorts",
    title: "Club Mahindra upgrades water monitoring across 15 resorts",
    summary:
      "A hospitality leader deployed Greenvironment's IoT-based RTM system across 15 resorts to improve STP efficiency, reuse treated water, and reinforce green building credentials.",
    industry: "Hospitality",
    location: "India (multi-site)",
    duration: "15 resorts",
    metrics: [
      { label: "Madikeri STP efficiency", value: "+33%" },
      { label: "Emerald Palms STP efficiency", value: "+47%" },
      { label: "Resorts upgraded", value: "15" },
    ],
    challenges: [
      "Standardize real-time water monitoring across multiple resort locations.",
      "Improve STP performance to enable reuse beyond irrigation.",
      "Protect green building credentials with reliable reporting.",
    ],
    solutions: [
      "Deployed an IoT-based RTM system across all resorts for utility monitoring.",
      "Enabled real-time STP monitoring to improve treatment, disinfection, and filtration performance.",
      "Expanded treated water reuse for non-potable needs such as flushing.",
    ],
    outcomes: [
      "Madikeri resort improved treatment efficiency by 30%, disinfection by 32%, and filtration by 36%.",
      "Emerald Palms improved treatment efficiency by 50%, disinfection by 43%, and filtration by 48%.",
      "Overall plant efficiency gains reached 33% and 47% across the highlighted sites.",
    ],
    testimonial: {
      quote:
        "The real-time monitoring system keeps communication open and helps us make faster, better decisions on water quality.",
      author: "Site Chief Manager",
      role: "Client Resort, Varca",
    },
    documentHref: "/case-study/masked-case-study-2-club-mahindra-resorts.docx",
  },
  {
    slug: "bm-hospital-kerala",
    title: "BM Hospital reduces freshwater demand with RTM-enabled reuse",
    summary:
      "A 600-bed hospital in northern Kerala deployed RTM and automated dosing to improve treated water quality and cut freshwater demand by 33% over four years.",
    industry: "Healthcare",
    location: "Northern Kerala, India",
    duration: "2016-2020",
    metrics: [
      { label: "Baseline demand", value: "750 KLD" },
      { label: "Consumption reduced", value: "99 KLD" },
      { label: "Freshwater reduction", value: "33%" },
    ],
    challenges: [
      "Ensure safe reuse of STP-treated water for non-potable hospital needs.",
      "Improve treatment consistency to meet strict operational standards.",
      "Reduce escalating freshwater demand and wastewater risks.",
    ],
    solutions: [
      "Installed RTM for continuous STP monitoring with operator alerts.",
      "Added automatic chlorine dosing to stabilize treated water quality.",
      "Expanded reuse for non-potable needs like flushing and gardening.",
    ],
    outcomes: [
      "Total water consumption dropped by 99 KLD after RTM deployment.",
      "Freshwater consumption reduced by 33% over four years.",
      "Improved treated water quality enabled broader reuse across the hospital.",
    ],
    documentHref: "/case-study/masked-case-study-3-bm-hospital.docx",
  },
  {
    slug: "central-park-south-chennai",
    title: "Central Park South cuts freshwater use with smart STP upgrades",
    summary:
      "A 172-apartment community upgraded its wastewater treatment and monitoring to reuse more water, reduce freshwater dependency, and win a state award.",
    industry: "Residential community",
    location: "Chennai, India",
    duration: "2015-2019",
    metrics: [
      { label: "Daily use from recycled water", value: "53%" },
      { label: "Annual savings", value: "Rs 20 lakhs" },
      { label: "STP overall efficiency", value: "90%" },
    ],
    challenges: [
      "Fix poor MBBR operation that degraded treated water quality.",
      "Reduce freshwater dependency and rising water bills.",
      "Improve asset reliability amid equipment failures.",
    ],
    solutions: [
      "Upgraded the process from MBBR to extended aeration with proper operating guidelines.",
      "Added automated chlorine disinfection with ORP control and bacterial testing.",
      "Introduced sludge recirculation, filter backwashing, and bar screens to stabilize operations.",
    ],
    outcomes: [
      "Over 53% of daily consumption met through recycled water.",
      "Annual freshwater savings of Rs 20 lakhs with a 90% efficient STP.",
      "Received the Tamil Nadu Pollution Control Board Green Award in 2019.",
    ],
    documentHref: "/case-study/masked-case-study-4-central-park-south.docx",
  },
  {
    slug: "rajparis-harmony-chennai",
    title: "Rajparis Harmony saves Rs 40 lakhs annually with RTM upgrades",
    summary:
      "A 228-apartment community optimized its STP with RTM-driven process fixes, reducing operating costs and restoring treated water reuse.",
    industry: "Residential community",
    location: "Chennai, India",
    duration: "2018 onward",
    metrics: [
      { label: "STP operating cost", value: "Rs 55/KL -> Rs 30/KL" },
      { label: "Annual savings", value: "Rs 40 lakhs" },
      { label: "Treatment efficiency", value: "30% -> improved" },
    ],
    challenges: [
      "Poor treatment efficiency led to odorous water and low reuse confidence.",
      "Frequent equipment failures increased operational costs.",
      "Excess sludge buildup due to missing drying beds.",
    ],
    solutions: [
      "Deployed RTM to analyze performance and guide process corrections.",
      "Upgraded transfer pumps, piping, and filter media to improve flow and filtration.",
      "Added sludge drying beds and ORP-based chlorine dosing for reliable disinfection.",
    ],
    outcomes: [
      "Reduced STP operating cost from Rs 55/KL to Rs 30/KL.",
      "Achieved Rs 40 lakhs in annual freshwater savings.",
      "Restored treated water quality suitable for flushing and gardening reuse.",
    ],
    documentHref: "/case-study/masked-case-study-5-rajparis-harmony.docx",
  },
  {
    slug: "orion-mall-bengaluru",
    title: "Orion Mall reduces freshwater dependence with RTM-based reuse",
    summary:
      "Bengaluru's Orion Mall adopted IoT-based total water management to reduce freshwater dependency and improve treatment efficiency.",
    industry: "Retail / mall",
    location: "Bengaluru, India",
    duration: "2017-2019",
    metrics: [
      { label: "Daily demand met by reuse", value: "49%" },
      { label: "Water spend savings", value: "30%" },
      { label: "Annual savings (2018)", value: "Rs 29 lakhs" },
    ],
    challenges: [
      "Inconsistent water sources led to quality fluctuations and supply risk.",
      "High footfall operations required stable, high-volume water availability.",
      "Wastewater treatment efficiency needed improvement to curb freshwater use.",
    ],
    solutions: [
      "Completed a 3-month study of water usage patterns to target major loads.",
      "Deployed RTM for effluent treatment, smart water management, and reuse.",
      "Enabled real-time visibility into treated water quantity and quality.",
    ],
    outcomes: [
      "Recycled water met over 49% of daily demand by 2018-2019.",
      "Water spend reduced by 30% year over year.",
      "Savings of Rs 29 lakhs in 2018 with an additional Rs 11 lakhs the next year.",
    ],
    documentHref: "/case-study/masked-case-study-6-orion-mall-bangalore.docx",
  },
];
