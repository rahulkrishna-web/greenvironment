
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
  .manual-article-content {box-sizing:border-box;}
  .manual-article-content :root{
    --teal:#0D6B6B;
    --teal-light:#1A9090;
    --teal-dark:#084848;
    --orange:#E87722;
    --bg:#F7F9F8;
    --text:#1A2A2A;
    --muted:#5A7070;
    --border:#C5D8D8;
  }
  .manual-article-content {font-family:'DM Sans',sans-serif;color:var(--text); line-height: 1.6;}
  .article-wrap{max-width:780px;margin:0 auto;padding:2rem 0.5rem 4rem;}

  .category-tag{display:inline-flex;align-items:center;gap:6px;background:#0D6B6B;color:#fff;font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;padding:5px 14px;border-radius:2px;margin-bottom:1.25rem;}
  .cat-dot{width:6px;height:6px;background:#E87722;border-radius:50%;}

  .headline{font-family:'Playfair Display',serif;font-size:2.1rem;line-height:1.2;color:#084848;margin-bottom:1rem;}
  .subheadline{font-family:'Source Serif 4',serif;font-size:1.1rem;color:#5A7070;line-height:1.6;margin-bottom:1.5rem;font-style:italic;}

  .meta-row{display:flex;align-items:center;gap:1rem;padding:1rem 0;border-top:.5px solid #C5D8D8;border-bottom:.5px solid #C5D8D8;margin-bottom:1.75rem;flex-wrap:wrap;}
  .meta-item{font-size:12px;color:#5A7070;display:flex;align-items:center;gap:5px;}
  .meta-dot{color:#C5D8D8;}

  .hero-banner{background:linear-gradient(135deg,#084848 0%,#0D6B6B 60%,#1A9090 100%);border-radius:4px;padding:2rem 2.5rem;margin-bottom:2rem;position:relative;overflow:hidden;}
  .hero-label{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-bottom:.5rem;}
  .hero-stat{font-family:'Playfair Display',serif;font-size:3rem;color:#fff;line-height:1;}
  .hero-stat span{font-size:1.1rem;font-weight:400;color:rgba(255,255,255,0.7);font-family:'DM Sans',sans-serif;margin-left:4px;}
  .hero-desc{margin-top:.75rem;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.5;}
  .hero-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;position:relative;z-index:1;}
  .hero-item{border-left:2px solid rgba(232,119,34,0.5);padding-left:1rem;}

  .letter-callout{background:#fff;border:none;border-left:4px solid #E87722;padding:1.25rem 1.5rem;border-radius:0 4px 4px 0;margin:1.75rem 0;position:relative; border: 1px solid #C5D8D8; border-left-width: 4px;}
  .callout-label{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#E87722;font-weight:500;margin-bottom:.5rem;}
  .callout-text{font-family:'Source Serif 4',serif;font-size:1rem;line-height:1.65;color:#1A2A2A;}

  .section-label{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#0D6B6B;font-weight:500;margin-bottom:.6rem;display:flex;align-items:center;gap:8px;}
  .section-label::after{content:'';flex:1;height:.5px;background:#C5D8D8;}
  .section-title{font-family:'Playfair Display',serif;font-size:1.35rem;color:#084848;margin-bottom:.9rem;}
  .body-text{font-family:'Source Serif 4',serif;font-size:1rem;line-height:1.75;color:#2A3838;margin-bottom:1.1rem;}

  .threshold-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;}
  .threshold-card{background:#fff;border:.5px solid #C5D8D8;border-radius:4px;padding:1.25rem;}
  .threshold-kld{font-family:'Playfair Display',serif;font-size:1.5rem;color:#0D6B6B;}
  .threshold-label{font-size:13px;color:#5A7070;margin-top:.25rem;line-height:1.4;}
  .threshold-req{font-size:12px;color:#1A2A2A;margin-top:.6rem;padding-top:.6rem;border-top:.5px solid #C5D8D8;}
  .threshold-tag{display:inline-block;background:rgba(13,107,107,0.08);color:#084848;font-size:10px;padding:2px 8px;border-radius:2px;margin-top:.4rem;}

  .params-table{width:100%;border-collapse:collapse;margin:1.25rem 0;font-size:13px;}
  .params-table thead tr{background:#084848;}
  .params-table thead th{color:#fff;text-align:left;padding:.65rem 1rem;font-weight:500;font-size:11px;letter-spacing:.05em;text-transform:uppercase;}
  .params-table tbody tr{border-bottom:.5px solid #C5D8D8;}
  .params-table tbody tr:nth-child(even){background:rgba(13,107,107,0.04);}
  .params-table td{padding:.6rem 1rem;color:#1A2A2A;}
  .params-table td:last-child{color:#084848;font-weight:500;}

  .penalty-row{display:grid;grid-template-columns:auto 1fr auto;gap:1rem;align-items:center;padding:1rem;background:#fff;border:.5px solid #C5D8D8;border-radius:4px;margin-bottom:.75rem;}
  .penalty-icon{width:36px;height:36px;background:rgba(232,119,34,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;}
  .penalty-text{font-size:13px;line-height:1.5;color:#1A2A2A;}
  .penalty-amount{font-family:'Playfair Display',serif;font-size:1.1rem;color:#E87722;white-space:nowrap;}

  .timeline{border-left:2px solid #C5D8D8;padding-left:1.5rem;margin:1.25rem 0;}
  .timeline-item{position:relative;margin-bottom:1.25rem;}
  .timeline-item::before{content:'';position:absolute;left:-1.65rem;top:5px;width:10px;height:10px;border-radius:50%;background:#0D6B6B;border:2px solid #fff;outline:1.5px solid #0D6B6B;}
  .timeline-date{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#0D6B6B;font-weight:500;}
  .timeline-title{font-size:14px;font-weight:500;color:#084848;margin:.2rem 0;}
  .timeline-desc{font-size:13px;color:#5A7070;line-height:1.5;}

  .cta-banner{background:#084848;border-radius:4px;padding:1.75rem 2rem;margin-top:2rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;}
  .cta-text{color:rgba(255,255,255,0.9);font-size:14px;line-height:1.5;}
  .cta-text strong{color:#fff;display:block;font-size:16px;margin-bottom:.3rem;}
  .cta-btn{background:#E87722;color:#fff;border:none;padding:.7rem 1.5rem;border-radius:2px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;white-space:nowrap;}

  .source-box{border:.5px solid #C5D8D8;border-radius:4px;padding:1rem 1.25rem;margin-top:1.5rem;}
  .source-label{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#5A7070;margin-bottom:.5rem;}
  .source-list{font-size:12px;color:#5A7070;line-height:1.9;}
</style>

<div class="manual-article-content">
  <div class="article-wrap">
    <div class="category-tag"><span class="cat-dot"></span> <span>Regulatory Update · KSPCB</span></div>

    <h1 class="headline">KSPCB Mandates Online Continuous Effluent Monitoring Systems for STPs in Karnataka</h1>
    <p class="subheadline">The Karnataka State Pollution Control Board has issued binding directives requiring OCEMS installation at all Sewage Treatment Plants above 100 KLD capacity — with compliance windows as short as 30 days.</p>

    <div class="meta-row">
      <span class="meta-item">📅 <span>26 February 2026</span></span>
      <span class="meta-dot">·</span>
      <span class="meta-item">📁 <span>PCB Notices & OCEMS Directives</span></span>
      <span class="meta-dot">·</span>
      <span class="meta-item">✍️ <span>Greenvironment Editorial Team</span></span>
    </div>

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

    <div style="margin-bottom:2rem;">
      <div class="section-label">Background</div>
      <h2 class="section-title">What Is OCEMS and Why Does It Matter?</h2>
      <p class="body-text">Online Continuous Effluent Monitoring Systems (OCEMS) are automated sensor networks installed at the outlet of Sewage Treatment Plants to continuously track treated water quality in real time. Unlike periodic manual sampling, OCEMS transmits data directly to KSPCB and CPCB central servers, enabling regulators to verify compliance without on-site inspections.</p>
      <p class="body-text">The KSPCB Board Meeting held on 21 January 2026 resolved to insist on OCEMS installation at all STP outlets across private residential apartment complexes, commercial establishments, and BWSSB/KUWS&DB STPs operating within the Bangalore Metropolitan Region — specifically those with a treatment capacity exceeding 100 KLD.</p>
    </div>

    <div style="margin-bottom:2rem;">
      <div class="section-label">Compliance Framework</div>
      <h2 class="section-title">Capacity-Based OCEMS Requirements</h2>
      <p class="body-text">KSPCB's tiered framework distinguishes between facilities that require full OCEMS connectivity and those where an STP alone is mandatory. Understanding your facility's applicable threshold is the first step towards compliance.</p>
      <div class="threshold-grid">
        <div class="threshold-card">
          <div class="threshold-kld">100 KLD+</div>
          <div class="threshold-label">Private STPs — Residential & Commercial (Bangalore Metro)</div>
          <div class="threshold-req">Mandatory OCEMS installation at STP outlet + live data linkage to KSPCB server</div>
          <span class="threshold-tag">OCEMS + Server Linkage</span>
        </div>
        <div class="threshold-card">
          <div class="threshold-kld">50 KLD+</div>
          <div class="threshold-label">All large STPs statewide under 2025 online monitoring norms</div>
          <div class="threshold-req">Online sensors for BOD, COD, TSS, pH, and flow — data linked to KSPCB & CPCB central servers</div>
          <span class="threshold-tag">Online Monitoring Required</span>
        </div>
        <div class="threshold-card">
          <div class="threshold-kld">20 KLD+</div>
          <div class="threshold-label">Any property generating 20 KLD or more of sewage</div>
          <div class="threshold-req">In-house STP mandatory. Apartments with 20+ units or 2,000 m² and above also covered</div>
          <span class="threshold-tag">STP Installation Required</span>
        </div>
        <div class="threshold-card">
          <div class="threshold-kld">5,000 m²+</div>
          <div class="threshold-label">Educational institutions (with or without hostels)</div>
          <div class="threshold-req">Mandatory STP installation required regardless of sewage volume generated</div>
          <span class="threshold-tag">Institutional Mandate</span>
        </div>
      </div>
    </div>

    <div style="margin-bottom:2rem;">
      <div class="section-label">Performance Standards</div>
      <h2 class="section-title">Key Effluent Quality Norms (KSPCB 2026)</h2>
      <p class="body-text">All STPs — regardless of size — must ensure treated effluent meets these KSPCB/CPCB discharge standards. OCEMS systems will continuously verify compliance against these benchmarks in real time.</p>
      <table class="params-table">
        <thead>
          <tr><th>Parameter</th><th>Standard (Surface Water Discharge)</th><th>Standard (Reuse / Gardening)</th></tr>
        </thead>
        <tbody>
          <tr><td>pH</td><td>5.5 – 9.0</td><td>5.5 – 9.0</td></tr>
          <tr><td>BOD (3 days @ 27°C)</td><td>≤ 10 mg/L</td><td>≤ 20 mg/L</td></tr>
          <tr><td>COD</td><td>≤ 50 mg/L</td><td>≤ 50 mg/L</td></tr>
          <tr><td>Total Suspended Solids (TSS)</td><td>≤ 10 mg/L</td><td>≤ 20 mg/L</td></tr>
          <tr><td>Total Nitrogen</td><td>≤ 10 mg/L</td><td>≤ 10 mg/L</td></tr>
          <tr><td>Total Phosphorus</td><td>≤ 1 mg/L</td><td>≤ 1 mg/L</td></tr>
          <tr><td>Fecal Coliform</td><td>≤ 100 MPN/100 mL</td><td>≤ 100 MPN/100 mL</td></tr>
          <tr><td>Ammoniacal Nitrogen</td><td>≤ 5 mg/L</td><td>≤ 5 mg/L</td></tr>
        </tbody>
      </table>
    </div>

    <div style="margin-bottom:2rem;">
      <div class="section-label">Regulatory Timeline</div>
      <h2 class="section-title">Latest KSPCB & CPCB Announcements</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">October 2025</div>
          <div class="timeline-title">Board Office Memo No. 2863 — Mandatory OCEMS for STPs above 50 KLD</div>
          <div class="timeline-desc">KSPCB issued the foundational directive mandating online sensors for all STPs exceeding 50 KLD, with real-time data transmission to central government servers.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">November 2025</div>
          <div class="timeline-title">KSPCB Golden Jubilee — 90% of Bengaluru STPs Non-Compliant</div>
          <div class="timeline-desc">The KSPCB Chairman publicly announced that 90% of Bengaluru's STPs were non-functional or non-compliant, and that penalties potentially exceeding ₹30 crore would be imposed using OCEMS data as legal evidence.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">November 2025 — Deadline</div>
          <div class="timeline-title">CPCB Portal Registration Deadline</div>
          <div class="timeline-desc">All facilities requiring OCEMS were required to be registered and fully connected to the new CPCB portal by mid-November 2025. Unregistered facilities face immediate enforcement action.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">January 2026</div>
          <div class="timeline-title">Criminal Liability Enforcement Strengthened</div>
          <div class="timeline-desc">Legal updates emphasise that failure to maintain OCEMS connectivity or meet discharge standards can result in imprisonment of up to six years alongside daily recurring fines under environmental law.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">21 January 2026 — 256th Board Meeting</div>
          <div class="timeline-title">KSPCB Resolution — 100 KLD Threshold for Bangalore Metro</div>
          <div class="timeline-desc">The Board resolved to mandate OCEMS at all STP outlets across private residential, commercial, and BWSSB/KUWS&DB facilities in the Bangalore Metropolitan Region with capacity above 100 KLD.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">26 February 2026</div>
          <div class="timeline-title">KSPCB Notice Issued to Occupiers — 30-Day Compliance Window</div>
          <div class="timeline-desc">Individual notices dispatched to all applicable occupiers, directing action within 30 days. Facilities with OCEMS already installed must submit linkage details to KSPCB. Ref: Board Office Memo No. 5003 (19.02.2026).</div>
        </div>
      </div>
    </div>

    <div style="margin-bottom:2rem;">
      <div class="section-label">Enforcement & Penalties</div>
      <h2 class="section-title">Consequences of Non-Compliance</h2>
      <p class="body-text">KSPCB has signalled a zero-tolerance posture for 2026, with OCEMS data set to serve as primary legal evidence in enforcement proceedings. Penalties apply even when an STP exists but monitoring is absent or disconnected.</p>
      <div class="penalty-row">
        <div class="penalty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <div class="penalty-text"><strong>No STP Installed</strong> — Maximum fine of up to ₹3 crore for properties that have not installed any STP despite being legally required to do so.</div>
        <div class="penalty-amount">≤ ₹3 Cr</div>
      </div>
      <div class="penalty-row">
        <div class="penalty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <div class="penalty-text"><strong>Faulty / Non-Compliant STP</strong> — Flat penalty of ₹5 lakh regardless of property size, for STPs that exist but fail to meet discharge standards.</div>
        <div class="penalty-amount">₹5 Lakh</div>
      </div>
      <div class="penalty-row">
        <div class="penalty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <div class="penalty-text"><strong>Absent or Disconnected OCEMS</strong> — Criminal prosecution possible with imprisonment up to 6 years plus daily recurring fines under the Water (Prevention & Control of Pollution) Act.</div>
        <div class="penalty-amount">≤ 6 Yrs</div>
      </div>
      <div class="penalty-row">
        <div class="penalty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <div class="penalty-text"><strong>Repeated Violators</strong> — The KSPCB Chairman indicated penalties could exceed ₹30 crore in aggregate where OCEMS data confirms sustained non-compliance over time.</div>
        <div class="penalty-amount">> ₹30 Cr</div>
      </div>
    </div>

    <div style="margin-bottom:2rem;">
      <div class="section-label">Action Required</div>
      <h2 class="section-title">What Occupiers Must Do Now</h2>
      <p class="body-text">If you have received a KSPCB notice or operate a facility that falls within any of the capacity thresholds above, the following steps are required within the 30-day compliance window:</p>
      <p class="body-text"><strong>Step 1:</strong> Determine your STP capacity and identify applicable KSPCB thresholds (20 KLD / 50 KLD / 100 KLD).</p>
      <p class="body-text"><strong>Step 2:</strong> If OCEMS is already installed, submit system details and server linkage documentation to KSPCB Bengaluru City East office immediately.</p>
      <p class="body-text"><strong>Step 3:</strong> If OCEMS is not yet installed, engage a KSPCB-approved OCEMS vendor to commission sensors for BOD, COD, TSS, pH, and flow at the STP outlet, and establish live data transmission to the KSPCB/CPCB server.</p>
      <p class="body-text"><strong>Step 4:</strong> Register your facility and OCEMS details on the CPCB portal (https://ocems.cpcb.gov.in) if not already done. Ensure acknowledgement of the KSPCB notice is sent back promptly.</p>
    </div>

    <div class="source-box">
      <div class="source-label">References & Sources</div>
      <div class="source-list">
        1. KSPCB Official Notice — Environmental Officer, Bengaluru City East (Dated 26 Feb 2026)<br>
        2. KSPCB Board Office Memo No. 2863 — Dated 09.10.2025<br>
        3. 256th KSPCB Board Meeting Resolution — Dated 11.02.2026<br>
        4. KSPCB Board Office Memo No. 5003 — Dated 19.02.2026<br>
        5. KSPCB STP Guidelines 2026 — susbio.in (Reference Guide)<br>
        6. Water (Prevention and Control of Pollution) Act, 1974
      </div>
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
