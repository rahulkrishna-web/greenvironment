
export interface ManualArticle {
  id: string;
  attributes: {
    title: string;
    slug: string;
    date: string;
    category: string;
    summary: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const manualArticles: ManualArticle[] = [
  {
    id: "manual-1",
    attributes: {
      title: "KSPCB Mandates Online Continuous Effluent Monitoring Systems for STPs in Karnataka",
      slug: "kspcb-mandates-ocems-stps-karnataka",
      date: "2026-02-26",
      category: "Regulatory Update",
      summary: "The Karnataka State Pollution Control Board has issued binding directives requiring OCEMS installation at all Sewage Treatment Plants above 100 KLD capacity — with compliance windows as short as 30 days.",
      content: `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500&display=swap');
  
  .manual-article-content {
    --teal: #0D6B6B;
    --teal-light: #1A9090;
    --teal-dark: #084848;
    --orange: #E87722;
    --border: #C5D8D8;
    --text-main: #2A3838;
    
    font-family: 'DM Sans', sans-serif;
    color: var(--text-main);
  }

  .hero-banner {
    background: linear-gradient(135deg, var(--teal-dark) 0%, var(--teal) 60%, #1A9090 100%);
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem 0;
    color: white;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
  .hero-item {
    border-left: 2px solid rgba(232, 119, 34, 0.5);
    padding-left: 1.25rem;
  }
  .hero-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }
  .hero-stat {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .hero-stat span {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 4px;
    opacity: 0.8;
  }
  .hero-desc {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    line-height: 1.4;
    opacity: 0.9;
  }

  .letter-callout {
    background: #fdfcfb;
    border-left: 4px solid var(--orange);
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  }
  .callout-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--orange);
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  .callout-text {
    font-family: 'Source Serif 4', serif;
    font-size: 1.125rem;
    line-height: 1.6;
    font-style: italic;
  }

  .section-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--teal);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
    opacity: 0.5;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    color: var(--teal-dark);
    margin-bottom: 1.25rem;
  }
  .body-text {
    font-family: 'Source Serif 4', serif;
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .threshold-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
    margin: 2rem 0;
  }
  .threshold-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .threshold-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.05);
    border-color: var(--teal-light);
  }
  .threshold-kld {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    color: var(--teal);
    font-weight: 700;
  }
  .threshold-label {
    font-weight: 600;
    margin: 0.5rem 0;
    color: #1a1a1a;
  }
  .threshold-req {
    font-size: 0.875rem;
    color: #4b5563;
    line-height: 1.5;
  }
  .threshold-tag {
    display: inline-block;
    background: rgba(13, 107, 107, 0.08);
    color: var(--teal-dark);
    font-size: 0.7rem;
    padding: 4px 10px;
    border-radius: 99px;
    margin-top: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .params-table-wrapper {
    overflow-x: auto;
    margin: 2rem 0;
    border-radius: 12px;
    border: 1px solid var(--border);
  }
  .params-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    background: white;
  }
  .params-table th {
    background: var(--teal-dark);
    color: white;
    text-align: left;
    padding: 1rem;
    font-weight: 600;
  }
  .params-table td {
    padding: 1rem;
    border-bottom: 1px solid var(--border);
  }
  .params-table tr:last-child td { border-bottom: none; }
  .params-table tr:nth-child(even) { background: #f9fafb; }

  .penalty-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: white;
    border: 1px solid var(--border);
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .penalty-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: rgba(232, 119, 34, 0.1);
    color: var(--orange);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .penalty-content { flex: 1; }
  .penalty-title { font-weight: 700; margin-bottom: 0.25rem; }
  .penalty-desc { font-size: 0.875rem; color: #4b5563; }
  .penalty-value {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--orange);
    text-align: right;
    min-width: 100px;
  }

  .timeline {
    position: relative;
    padding-left: 2rem;
    margin: 3rem 0;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border);
  }
  .timeline-item {
    position: relative;
    margin-bottom: 2.5rem;
  }
  .timeline-dot {
    position: absolute;
    left: -2.4rem;
    top: 0.25rem;
    width: 12px;
    height: 12px;
    background: white;
    border: 2px solid var(--teal);
    border-radius: 50%;
    z-index: 1;
  }
  .timeline-date {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--teal);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .timeline-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--teal-dark);
    margin-bottom: 0.5rem;
  }
  .timeline-desc {
    font-size: 0.95rem;
    color: #4b5563;
    line-height: 1.5;
  }

  .source-box {
    background: #f3f4f6;
    padding: 2rem;
    border-radius: 12px;
    margin-top: 4rem;
  }
  .source-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #6b7280;
    margin-bottom: 1rem;
  }
  .source-list {
    font-size: 0.85rem;
    line-height: 2;
    color: #4b5563;
  }

  @media (max-width: 640px) {
    .hero-grid { grid-template-columns: 1fr; }
    .penalty-card { flex-direction: column; align-items: flex-start; text-align: left; }
    .penalty-value { text-align: left; min-width: auto; }
  }
</style>

<div class="manual-article-content">
  <div class="hero-banner">
    <div class="hero-grid">
      <div class="hero-item">
        <div class="hero-label">Mandatory Threshold</div>
        <div class="hero-stat">100 KLD<span>capacity</span></div>
        <div class="hero-desc">STPs above this capacity must install OCEMS and connect data to KSPCB servers</div>
      </div>
      <div class="hero-item">
        <div class="hero-label">Compliance Window</div>
        <div class="hero-stat">30<span>days</span></div>
        <div class="hero-desc">From receipt of KSPCB notice to full OCEMS installation and linkage</div>
      </div>
      <div class="hero-item">
        <div class="hero-label">Max Penalty Risk</div>
        <div class="hero-stat">₹3 Cr<span>+</span></div>
        <div class="hero-desc">For non-installation, plus criminal liability up to 6 years imprisonment</div>
      </div>
    </div>
  </div>

  <div class="letter-callout">
    <div class="callout-label">Official KSPCB Notice · Ref: Board Office Memo No.2863 (09.10.2025)</div>
    <p class="callout-text">"As per the Budget 2025–26 assurance (Para No. 415) of the Government of Karnataka, the Karnataka State Pollution Control Board has assured the Government to take necessary steps to install Online Continuous Effluent Monitoring Systems (OCEMS) for Sewage Treatment Plants (STPs) being established in construction projects such as private residential apartments, commercial buildings, and other organizations."</p>
  </div>

  <div class="section-label">Background</div>
  <h2 class="section-title">What Is OCEMS and Why Does It Matter?</h2>
  <p class="body-text">Online Continuous Effluent Monitoring Systems (OCEMS) are automated sensor networks installed at the outlet of Sewage Treatment Plants to continuously track treated water quality in real time. Unlike periodic manual sampling, OCEMS transmits data directly to KSPCB and CPCB central servers, enabling regulators to verify compliance without on-site inspections.</p>
  <p class="body-text">The KSPCB Board Meeting held on 21 January 2026 resolved to insist on OCEMS installation at all STP outlets across private residential apartment complexes, commercial establishments, and BWSSB/KUWS&DB STPs operating within the Bangalore Metropolitan Region — specifically those with a treatment capacity exceeding 100 KLD.</p>

  <div class="section-label">Compliance Framework</div>
  <h2 class="section-title">Capacity-Based OCEMS Requirements</h2>
  <p class="body-text">KSPCB's tiered framework distinguishes between facilities that require full OCEMS connectivity and those where an STP alone is mandatory. Understanding your facility's applicable threshold is the first step towards compliance.</p>
  
  <div class="threshold-grid">
    <div class="threshold-card">
      <div class="threshold-kld">100 KLD+</div>
      <div class="threshold-label">Private STPs — Bangalore Metro</div>
      <div class="threshold-req">Mandatory OCEMS installation at STP outlet + live data linkage to KSPCB server</div>
      <span class="threshold-tag">OCEMS + Server Linkage</span>
    </div>
    <div class="threshold-card">
      <div class="threshold-kld">50 KLD+</div>
      <div class="threshold-label">Large STPs Statewide</div>
      <div class="threshold-req">Online sensors for BOD, COD, TSS, pH, and flow — data linked to KSPCB & CPCB central servers</div>
      <span class="threshold-tag">Online Monitoring Required</span>
    </div>
    <div class="threshold-card">
      <div class="threshold-kld">20 KLD+</div>
      <div class="threshold-label">Standard Residential Properties</div>
      <div class="threshold-req">In-house STP mandatory. Apartments with 20+ units or 2,000 m² and above also covered</div>
      <span class="threshold-tag">STP Installation Required</span>
    </div>
    <div class="threshold-card">
      <div class="threshold-kld">5,000 m²+</div>
      <div class="threshold-label">Educational Institutions</div>
      <div class="threshold-req">Mandatory STP installation required regardless of sewage volume generated</div>
      <span class="threshold-tag">Institutional Mandate</span>
    </div>
  </div>

  <div class="section-label">Performance Standards</div>
  <h2 class="section-title">Key Effluent Quality Norms (KSPCB 2026)</h2>
  <p class="body-text">All STPs — regardless of size — must ensure treated effluent meets these KSPCB/CPCB discharge standards. OCEMS systems will continuously verify compliance against these benchmarks in real time.</p>
  
  <div class="params-table-wrapper">
    <table class="params-table">
      <thead>
        <tr><th>Parameter</th><th>Standard (Surface Water)</th><th>Standard (Reuse/Gardening)</th></tr>
      </thead>
      <tbody>
        <tr><td>pH</td><td>5.5 – 9.0</td><td>5.5 – 9.0</td></tr>
        <tr><td>BOD (3 days @ 27°C)</td><td>≤ 10 mg/L</td><td>≤ 20 mg/L</td></tr>
        <tr><td>COD</td><td>≤ 50 mg/L</td><td>≤ 50 mg/L</td></tr>
        <tr><td>TSS</td><td>≤ 10 mg/L</td><td>≤ 20 mg/L</td></tr>
        <tr><td>Total Nitrogen</td><td>≤ 10 mg/L</td><td>≤ 10 mg/L</td></tr>
        <tr><td>Total Phosphorus</td><td>≤ 1 mg/L</td><td>≤ 1 mg/L</td></tr>
        <tr><td>Fecal Coliform</td><td>≤ 100 MPN/100 mL</td><td>≤ 100 MPN/100 mL</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section-label">Regulatory Timeline</div>
  <h2 class="section-title">Enforcement Milestones</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">October 2025</div>
      <div class="timeline-title">Board Office Memo No. 2863</div>
      <div class="timeline-desc">KSPCB issued the foundational directive mandating online sensors for all STPs exceeding 50 KLD.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">January 2026</div>
      <div class="timeline-title">256th Board Meeting Resolution</div>
      <div class="timeline-desc">Mandate for OCEMS at all STP outlets across private residential and commercial facilities above 100 KLD in Bangalore.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">26 February 2026</div>
      <div class="timeline-title">Final Compliance Notice Issued</div>
      <div class="timeline-desc">Individual notices dispatched to occupiers, directing action within 30 days for full OCEMS linkage.</div>
    </div>
  </div>

  <div class="section-label">Enforcement</div>
  <h2 class="section-title">Consequences of Non-Compliance</h2>
  
  <div class="penalty-card">
    <div class="penalty-icon">⚠️</div>
    <div class="penalty-content">
      <div class="penalty-title">No STP Installed</div>
      <div class="penalty-desc">Maximum fine for properties that have not installed required infrastructure.</div>
    </div>
    <div class="penalty-value">≤ ₹3 Cr</div>
  </div>
  
  <div class="penalty-card">
    <div class="penalty-icon">⚙️</div>
    <div class="penalty-content">
      <div class="penalty-title">Faulty / Non-Compliant STP</div>
      <div class="penalty-desc">Flat penalty for STPs that exist but fail to meet discharge standards.</div>
    </div>
    <div class="penalty-value">₹5 Lakh</div>
  </div>
  
  <div class="penalty-card">
    <div class="penalty-icon">⚖️</div>
    <div class="penalty-content">
      <div class="penalty-title">Absent or Disconnected OCEMS</div>
      <div class="penalty-desc">Criminal prosecution possible with imprisonment up to 6 years.</div>
    </div>
    <div class="penalty-value">≤ 6 Yrs</div>
  </div>

  <div class="source-box">
    <div class="source-label">References & Sources</div>
    <div class="source-list">
      1. KSPCB Official Notice — Environmental Officer, Bengaluru City East (Feb 2026)<br>
      2. KSPCB Board Office Memo No. 2863 (Oct 2025)<br>
      3. 256th KSPCB Board Meeting Resolution (Feb 2026)<br>
      4. Water (Prevention and Control of Pollution) Act, 1974
    </div>
  </div>
</div>
      `,
      publishedAt: "2026-02-26T10:00:00.000Z",
      createdAt: "2026-02-26T10:00:00.000Z",
      updatedAt: "2026-02-26T10:00:00.000Z"
    }
  }
];
