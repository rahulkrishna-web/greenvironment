export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  location: string;
  duration: string;
  image?: string;
  metrics: { label: string; value: string }[];
  overview: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  testimonial?: { quote: string; author: string; role: string };
  documentHref?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rmz-millenia-chennai",
    title: "Greenvironment helps International Business Park drought proof its Chennai facilities, saves thousands of litres of water and lakhs in operating costs",
    summary:
      "With climate change making extreme weather events frequent and disrupting weather patterns, Chennai faced a rainfall deficit that led to drought and widespread water rationing across the city in 2019.",
    industry: "Commercial business park",
    location: "Chennai, India",
    duration: "24 weeks",
    metrics: [
      { label: "Freshwater reduction", value: "22%" },
      { label: "Demand met by recycled water", value: "40%" },
      { label: "Annual savings", value: "Rs 28.35 lakhs" },
    ],
    overview: [
      "The water crisis created awareness among the IT Corridor of Chennai, our client’s Business Park with 26 companies and over 20,000 employees implemented IOT Based Real Time Monitoring of Total Water Management with the help of Greenvironment India.",
      "Large offices like the ones built and operated by the client generate huge amounts of waste water that when treated and reused leads to lesser freshwater usage. This saves on costs and lessens the water stress on the surrounding community.",
      "Our client approached Greenvironment for one of a kind evidence based real time continuous water monitoring solution to drought proof its facilities and optimize its freshwater usage.",
    ],
    challenges: [
      "The site was in full use and the solution needed to be implemented with minimal operational disruptions while also meeting all reporting and operational standards.",
      "In addition the Greenvironment team also faced an integration challenge as the clients existing infrastructure had to be utilized to its fullest within the Greenvironment solution to save on costs and resources.",
    ],
    solutions: [
      "Greenvironment’s approach is purpose built for each site it handles and therefore started with a short period of site observation to establish the baseline.",
      "Establish the water consumption patterns for the site.",
      "Improving the operation of already available treatment plants at the site.",
      "Greenvironment proposed a comprehensive Real Time Monitoring (RTM) System implementation based on the observations and baseline.",
      "Greenvironment’s purpose built Real Time Monitoring (RTM) system for the Business Park includes a full array of smart sensors on the water lines that transmit water & wastewater quality and quantity indicator data to the central monitoring software via a secure network.",
      "The sensor array includes a pH sensor, a total dissolved solids (TDS) sensor, a turbidity sensor and an oxidation reduction potential (ORP) sensor.",
      "Other key parameters monitored to meet regulatory standards for wastewater management are Total Suspended Solids (TSS), Biological Oxygen Demand (BOD), and Chemical Oxygen Demand (COD).",
      "Tanker Monitoring using TDS sensors helped in ensuring the inlet water quality and flow sensor helped in monitoring the amount of water is unloaded from the tanker.",
      "Sewage Treatment Plant (STP) went through basic operation improvements.",
      "The health of the filter media has been improved due to usage of treated water at the site.",
      "ORP based automation was added to the dosing system, in both Water Treatment Plant (WTP) & STP the disinfection of the treated water has been maintained for further usage of Landscaping & Toilet Flushing.",
    ],
    outcomes: [
      "In 24 weeks, the facility successfully started using the better quality STP treated water for toilet flushing, floor cleaning and landscaping.",
      "Freshwater use dropped by 22%.",
      "40% of per day water requirements is fulfilled by recycled water.",
      "The building has been able to save upto Rs. 28.35 lakhs per annum (300 days operation) on Water spends.",
    ],
    testimonial: {
      quote:
        "This pilot project has been hugely successful and has helped us save water by 40%, thereby enabling us to maintain and double the stocks,",
      author: "Jiji Thomas",
      role: "Associate Director, International Office Infrastructure Provider",
    },
    documentHref: "/case-study/masked-case-study-1-rmz-millenia.docx",
  },
  {
    slug: "club-mahindra-resorts",
    title: "Hospitality giant partners with Greenvironment to save water across its locations",
    summary:
      "The hospitality industry extracts and uses a substantial amount of freshwater water from natural sources while operating.",
    industry: "Hospitality",
    location: "India (multi-site)",
    duration: "15 resorts",
    metrics: [
      { label: "Madikeri plant efficiency", value: "33%" },
      { label: "Emerald Palms efficiency", value: "47%" },
      { label: "Resorts upgraded", value: "15" },
    ],
    overview: [
      "WIth the rise in Green Tourism, it has become imperative for the industry adopt newer technologies to monitor of resource utilization in Real Time.",
      "Recent trends show that hospitality operators who promote sustainable management of water utilities, get an edge over the competitors.",
      "A giant of the Indian hospitality space partnered with Greenvironement to install real time water management (RTM) systems across 15 of its prime properties across India.",
      "These include mountain resorts – Ooty, Madikeri, Virajpet, Munnar, Tungi, Naldehra, Shimla, Kandaghat and Kumbhalgarh, Water Front resorts – Ashtamudi, Alappuzha, Pondicherry, Goa Varca, Goa Emerald Palms and City resort in Diu.",
      "Greenvironmentindia’s Real Time Monitoring (RTM) solutions for water utilities help the resorts manage their of water usage sustainably.",
      "The system helps for not just for the optimal use and re-use of water, but also as a way to keep its green building credentials.",
    ],
    challenges: [
      "Standardize real time monitoring across resorts while improving STP performance for reuse beyond irrigation.",
    ],
    solutions: [
      "All resorts saw the installation of Greenvironment’s custom Internet of things (IoT) based water monitoring system directly leading to the improved overall efficiency of Sewage Water Treatment Plants (STPs) Resorts.",
      "With the real time monitoring of STP is in place, the treated water can be reutilized for flushing other than irrigation as well.",
    ],
    outcomes: [
      "Madikeri Post the installation of the RTM, the treatment efficiency is increased by 30%, disinfection efficiency is increased by 32% and filtration efficiency is increased by 36%. Overall plant efficiency is increased by 33%.",
      "Emerald Palms Here, the treatment efficiency is increased by 50%, disinfection efficiency is increased by 43% and filtration efficiency is increased by 48%. The overall plant efficiency is increased by 47%.",
    ],
    testimonial: {
      quote:
        "We would like to express our gratitude for the excellent work done by the team of “Greenvironmentindia. Using their Real Time Monitoring system provides major benefit to us, as it ensures an open line of communication and I have no hesitation in further recommending”.",
      author: "Site Chief Manager",
      role: "Client Resort in Varca",
    },
    documentHref: "/case-study/masked-case-study-2-club-mahindra-resorts.docx",
  },
  {
    slug: "bm-hospital-kerala",
    title: "Hospital cuts freshwater usage by almost half with Greenvironments RTM",
    summary:
      "A 600-bedded pioneer in the health care sector in northern Kerala approached us to reduce their escalating water demand, reducing water spend and the challenge of safe disposal of hospital wastewater.",
    industry: "Healthcare",
    location: "Northern Kerala, India",
    duration: "2016-2020",
    metrics: [
      { label: "Baseline demand", value: "750 KLD" },
      { label: "Consumption reduced", value: "99 KLD" },
      { label: "Freshwater reduction", value: "33%" },
    ],
    overview: [
      "As is the case with Healthcare facilities, it required water in huge quantities for diverse usage.",
      "Its daily water consumption in 2016 was 750 kilo litres per day (KLD).",
      "The requirements ranged across drinking, hygiene, regulatory & care giving requirements such as hand-washing, food preparation, flushing toilets, laundry, cleaning, sterilization of surgical instruments, reprocessing of medical equipment and patient care, to safety (fire suppression) and landscaping and gardening.",
    ],
    challenges: [
      "As is apparent, the hospital generated wastewater in large quantities.",
      "Because hospital wastewater contains toxic, non-biodegradable, infectious pollutants and biologically active substances, which are harmful for human beings, aquatic life and environment, it is mandatory for hospitals to install a Sewage Treatment Plant (STP) for wastewater recycling.",
      "At our client’s facility, though the recycled outlet water from STP was widely used for toilet flushing and gardening, the actual usage of recycled water was limited due to concerns over the consistency in quality.",
      "On the other hand, the requirement of water for non-potable purposes was also on the rise.",
      "Lack of efficacy of the wastewater recycling plants and process was also observed.",
    ],
    solutions: [
      "The client introduced Greenvironmentindia’s real time monitoring system (RTM) in 2016, to increase the efficacy of the existing STP and improve the quality of the recycled water to ensure its reuse in its hospital.",
      "The RTM also needed to alert STP operators to take corrective action in case of discrepancy in treated water quality as part of their operating standards.",
      "Along with RTM, an automatic Chlorine dosing system was also installed, which helped in maintaining the treated water quality at the levels fit for reuse.",
      "With the improvement in the quality of treated / recycled water through corrective measures enabled by RTM, BMH gained the confidence to reuse their STP treated water for multiple purposes such as toilet flushing and gardening.",
    ],
    outcomes: [
      "Though the estimated water requirement for a 600 bed hospital, as per the norms of the Bureau of Indian standards was 450 KLDs, BMH’s actual fresh water consumption was at almost double. (750 KLD).",
      "With the introduction of Greenvironment’s RTM, recycled water met many of the no potable needs and total water consumption of the hospital was reduced by 99 KLDs.",
      "Cumulatively, over a span of four years there was 33% reduction in the consumption of freshwater.",
    ],
    documentHref: "/case-study/masked-case-study-3-bm-hospital.docx",
  },
  {
    slug: "central-park-south-chennai",
    title: "Chennai residential society cuts freshwater use by over half by optimizing waste water systems",
    summary:
      "Our client is a gated community of 172 apartments located in Sholinganallur that already had a Total Water Management System installed which helps them in Freshwater Monitoring, Tanker Monitoring and Recycled water Monitoring.",
    industry: "Residential community",
    location: "Chennai, India",
    duration: "2015-2019",
    metrics: [
      { label: "Daily use from recycled water", value: "53%" },
      { label: "Annual savings", value: "Rs 20 Lakhs" },
      { label: "STP overall efficiency", value: "90%" },
    ],
    overview: [
      "Using the same, they were reusing their wastewater, even without a city sewer line, to its maximum capacity.",
      "Post the 2015 Chennai floods, this residential society faced a multitude of challenges with respect to its existing water and wastewater management.",
    ],
    challenges: [
      "The Sewage Treatment Plant, which was following an Moving Bed Biofilm Reactor (MBBR) process was not operated properly.",
      "The improper use led to poor quality of treated water and raised major concerns among the residents.",
      "This led to an increase in dependency on Fresh water and increased its water bill.",
      "They also faced a huge challenge in asset management due to frequent failures of electro-mechanical equipment.",
      "In December 2015 the residential society decided to upgrade to a Smart Water Management system with the help of Real-Time Monitoring to improve their existing water management system.",
    ],
    solutions: [
      "Greenvironment’s Real-Time Monitoring system for sewage treatment enables real time data collection, analysis and control tools using Internet Of Things (IoT) and a full array of smart sensors.",
      "Using analytics, the system identifies potential issues and helps in proactive decision making to further improve the reliability and the performance of a plant.",
      "Replaced the MBBR process with the Extended Aeration process and followed proper operating guidelines, resulting in significant improvement in plant efficiency and treated water quality.",
      "Implemented an automated chlorine-based disinfection system in the freshwater system to ensure treated water quality fit for reuse.",
      "The water quality was further regulated by ORP and supported by monthly bacterial strip testing, to detect and control E. coli and coliform presence.",
      "Reused STP treated water for toilet flushing, gardening, cleaning of communal areas, in-house car washing, and groundwater recharge with improved treated water quality.",
      "Introduced an airlift system for recirculation of activated sludge to promote microbial growth in wastewater.",
      "Implemented backwashing of filters using treated water instead of filter feed water, improving the health and life cycle of the filter media.",
      "Introduced a bar screen to prevent foreign particles from entering the system.",
    ],
    outcomes: [
      "Their Water Footprint and dependency on Fresh water reduced across the board, post the implementation of Real Time monitoring of their Water Utilities.",
      "Over 53% of their daily consumption was now fulfilled through recycled water which led to a 30% savings on water spent.",
      "An Annual Savings of Rs 20 Lakhs was achieved in the year 2019-2020 on Fresh Water, by operating the STP at a high Efficiency of 90% Overall efficiency all without compromising on the quality of the treated water.",
      "The Tamil Nadu Pollution Control Board bestowed the prestigious Green Awards to The Central Park South in June, 2019 for their tremendous efforts towards Water and Waste Management and Water savings.",
    ],
    documentHref: "/case-study/masked-case-study-4-central-park-south.docx",
  },
  {
    slug: "rajparis-harmony-chennai",
    title: "Residential apartments cut their freshwater bill by 40 lakhs by upgrading their sewage treatment plant",
    summary:
      "The clients are a gated community with 228 apartments located at Chennai.",
    industry: "Residential community",
    location: "Chennai, India",
    duration: "2018 onward",
    metrics: [
      { label: "STP operating cost", value: "Rs 55/KL to Rs 30/KL" },
      { label: "Annual savings", value: "Rs 40 Lakhs" },
      { label: "Treatment efficiency", value: "30%" },
    ],
    overview: [
      "A 200 KLD Sewage Treatment Plant (STP) was operational there as the STP treated water was designed to be reused for toilet flushing and gardening.",
      "But the challenges in improving and maintaining the STP’S performance was leading to poor quality treated water and sky rocketing water charges.",
    ],
    challenges: [
      "The quality of recycled water was poor due to improper sewage treatment process, leading to treatment efficiency of only 30%.",
      "The disinfection was improper and the final treated water was odorous.",
      "Issues with frequent equipment failure resulted in high operational cost.",
      "Other issues faced at site include excessive sludge due to the absence of a sludge drying bed at Site.",
    ],
    solutions: [
      "In August 2018, Greenvironment installed the RTM system, an Internet of Things based solution, to troubleshoot issues and improve STP performance at the site.",
      "Using real time data from the RTM system, Greenvironment analyzed key performance parameters and recommended process corrections.",
      "The team replaced the raw sewage transfer pump with a 5HP cutter pump instead of a 2HP submersible pump.",
      "This upgrade increased flow rates, reduced operating hours, and supported energy conservation.",
      "The team also modified the piping from the collection tank to the aeration tank to maintain the batch cycle within the required timeline.",
      "Greenvironment replaced the pressure sand filter and activated carbon filter media due to poor filtration and treated water discoloration.",
      "To improve filtration efficiency and extend media life, the team changed the backwash line from filter feed water to treated water.",
      "The team installed sludge drying beds to enable effective removal of excess sludge.",
      "The site now repurposes the dried sludge as fertilizer for landscaping.",
      "Greenvironment also implemented an automatic ORP based chlorine dosing system to achieve consistent and reliable disinfection.",
      "These process improvements now allow the STP to produce treated water suitable for toilet flushing and gardening reuse.",
    ],
    outcomes: [
      "The RTM has helped to reduce the operating cost of the STP from Rs 55/KL to Rs 30/KL because of higher efficiency of the plant.",
      "Rs 40 Lakhs annual Saving on fresh water bill.",
    ],
    documentHref: "/case-study/masked-case-study-5-rajparis-harmony.docx",
  },
  {
    slug: "orion-mall-bengaluru",
    title: "Greenvironment solves of Bangalore’s fourth largest mall with its water management system",
    summary:
      "Bengaluru’s fourth largest mall faced scrutiny over its use of natural water resources in the city due to the burgeoning demand of fresh water from commercial buildings.",
    industry: "Retail / mall",
    location: "Bengaluru, India",
    duration: "2017-2019",
    metrics: [
      { label: "Daily demand met by reuse", value: "49%" },
      { label: "Water spend savings", value: "30%" },
      { label: "Annual savings (2018)", value: "Rs 29 lakh" },
    ],
    overview: [
      "As a step towards conservation of water, the Mall Management chose Internet of Things (IOT) based Total Water Management for the building at the end of 2017 through Greenvironment India.",
    ],
    challenges: [
      "Larger floor area of a mall, its footfall centric operations and the need for comfortable as well as conducive ambience, rely on many systems that rely on water.",
      "To ensure water supply, water managers at the mall alternated between the highly priced water tankers and inconsistent municipality supplies.",
      "These mixed water sources added water challenges such as large fluctuations in inlet water quality and consistency in operational efficacy of the waste water treatment plants.",
      "The threat of running out of water was a constant companion large as often excessive demand led to delayed supply by tankers!",
    ],
    solutions: [
      "The major goal was to monitor the water usage pattern of Orion Mall to reduce the fresh water consumption by improving the efficiency of the treatment plants present at the site.",
      "The incorporation of the water conservation plan was based on a close 3-month study on the water usage pattern of the Mall.",
      "During the first three months of monitoring the water consumption, our observations showed that the largest water usage is divided between toilet flushing, landscaping consumption and cooling tower consumption.",
      "Real Time Monitoring (RTM) of Effluent Treatment Plant, Smart Water Management and the Recycling / Reuse of waste water was recommended to curtail the dependence of fresh water sources.",
      "Installation of RTM, which is based on IoT, monitoring of water utilities and the availability of real time information on treated water quantity & quality, was done in the next phase.",
    ],
    outcomes: [
      "Previously the mall used freshwater for various purposes was 84%.",
      "By 2018 and 2019, over 49% of their daily consumption was now fulfilled through recycled water, which has also led to a 30% savings on water spend.",
      "Savings of Rs 29 lakh per annum in the year 2018 with a further increase in the savings by Rs 11 Lakh in the next year.",
    ],
    documentHref: "/case-study/masked-case-study-6-orion-mall-bangalore.docx",
  },
];
