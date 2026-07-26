export interface NotebookChapter {
  id: string;
  volumeNumber: string;
  code: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  confidentiality: string;
  summary: string;
  contentMarkdown: string;
  formula?: {
    latex: string;
    description: string;
    variables: { symbol: string; meaning: string }[];
  };
  metrics?: { label: string; value: string; detail: string }[];
}

export const ACCESS_NOTEBOOK_CHAPTERS: NotebookChapter[] = [
  {
    id: "chapter-01-economics",
    volumeNumber: "VOL. I",
    code: "NTB-2026-01",
    title: "Economics of Microtipping in Off-Beat Micro-Ecosystems",
    subtitle: "Direct Gratuity Velocity, Zero Intermediary Friction & Multiplier Dynamics",
    author: "Gurgaon Desk Research Cell",
    date: "July 2026",
    confidentiality: "CONFIDENTIAL // DESK USE & SOLO PASS HOLDERS",
    summary: "Standard travel spending traps 82% of revenue in tier-1 urban aggregators. Microtipping injects instant liquid cash directly into non-monetized ground hosts, producing a 4.2x velocity multiplier.",
    contentMarkdown: `
### 1. The Macro Leakage Problem in Traditional Tourism
In conventional travel, when a traveler spends on an off-beat trip, over 80% is retained by flight OTAs, metropolitan agencies, and payment gateways. Ground hosts—the boatman in Dawki who clears river litter, the Apatani weaver in Ziro, or the monastery tea keeper in Spiti—receive less than 3-5% of total trip value despite providing 90% of the authentic human experience.

*Policy Note: The Desk does not advertise room rates, commercial travel packages, or hotel names. All stays and coordinates are assigned privately under seal.*

### 2. Microtipping Architecture (The Desk Protocol)
Our microtipping model bypasses traditional intermediaries through direct peer-to-ground micro-transfers (voluntary direct gestures to local ground workers).

- **100% Direct Payout**: Local recipients receive 100% of the microtip gesture without platform deductions.
- **Micro-Friction Integration**: Travelers send voluntary gestures via 1-click UPI QR or tokenized card payment upon completing a micro-interaction (e.g. 15-minute tea break, photo guidance, river transit).
- **Voluntary Protocol Fee (5%)**: An optional 5% fee attached to the tip funds local QR badge maintenance, solar charging nodes, and community safety mesh.

### 3. Economic Multiplier Velocity
Money injected at the grassroots level cycles through rural food, education, and tool repair within 48 hours, compared to corporate profits which leak out of the state economy.
`,
    formula: {
      latex: "V_{\\text{tip}} = \\frac{T_{\\text{raw}} \\times (1 - f)}{C_{\\text{daily}}} \\times M_{\\text{community}}",
      description: "Formula for Local Economic Velocity Multiplier (V_tip) generated per microtip dollar.",
      variables: [
        { symbol: "T_{raw}", meaning: "Total microtip gesture transferred by solo traveller" },
        { symbol: "f", meaning: "Protocol fee (0.00 for direct recipient, 0.05 for protocol option)" },
        { symbol: "C_{daily}", meaning: "Baseline daily essential expenditure unit of local host household" },
        { symbol: "M_{community}", meaning: "Empirical local re-spending multiplier coefficient (3.8x to 4.5x)" }
      ]
    },
    metrics: [
      { label: "Direct-to-Host Share", value: "100.0%", detail: "Zero platform commission withheld from local hosts" },
      { label: "Velocity Multiplier", value: "4.2x", detail: "Economic impact per tipped unit vs standard urban OTA spending" },
      { label: "Avg Microtip Transit", value: "< 2.4 sec", detail: "Real-time UPI/Stripe instant settlement into host wallet" },
      { label: "Household Benefit Rate", value: "94.6%", detail: "Microtip recipients reporting direct impact on household essentials" }
    ]
  },
  {
    id: "chapter-02-solo-derisking",
    volumeNumber: "VOL. II",
    code: "NTB-2026-02",
    title: "Solo Travel De-risking & 6-Pass Surveyor Protocol",
    subtitle: "Comparative Framework for Domestic vs. International Solo Wanderers",
    author: "Chief Logistics Officer & Desk Surveyor SV-RAJ-02",
    date: "July 2026",
    confidentiality: "RESTRICTED // OPERATIONAL GUIDELINES",
    summary: "Solo travellers face distinctly asymmetrical risk profiles depending on whether they travel domestically or internationally. This chapter details our 6-Pass Vetting Matrix.",
    contentMarkdown: `
### 1. Asymmetrical Risk Profiles: Domestic vs. International Solo Travelers

| Operational Parameter | Domestic Solo Traveler (India) | International Solo Traveler |
| :--- | :--- | :--- |
| **Primary Risk Vector** | Terrain overconfidence & unexpected weather blocks | Language barrier, FX fraud & emergency evacuation delay |
| **Payment Gateway** | Instant UPI (PhonePe / GPay) zero friction | Card FX foreign transaction fees & currency conversion |
| **Permit & Legalities** | Inner Line Permit (ILP) fast-track | E-Visa verification, PAP/RAP border approvals |
| **Safety Mesh Protocol** | Regional language prompt cards & local state forestry contact | 24/7 Gurgaon Desk satellite relay & emergency air ambulance LZ |
| **Microtipping Habit** | Frequent smaller gestures | Concentrated gestures with written note |

### 2. The 6-Pass Surveyor De-risking Protocol
Before any off-beat corridor is cleared for solo wanderers on our platform, it undergoes 6 rigorous validation passes:

1. **Pass 01: Topography & Obstacle Vetting**: No road grade > 18°, verified vehicle clearance, and rural culvert load testing up to 3.5 tons.
2. **Pass 02: The 5-Hour Transit Rule**: Any overland segment exceeding 5 hours is automatically broken down or pivoted to private rail/helicopter transfer.
3. **Pass 03: Emergency Medical De-risking**: Pre-mapped primary Landing Zone (LZ) and verified trauma center within 25-minute flight/transit radius.
4. **Pass 04: Border Permits & Local Clearance**: Pre-cleared forest department registration & ILP synchronization.
5. **Pass 05: Solo Physiological Briefing**: Hydration, lactose sensitivity, and high-altitude pulse-oximetry protocols.
6. **Pass 06: Integrity Summary (SHA-256 Hash)**: Immutable hash signature locked into the traveler's digital case brief.
`,
    metrics: [
      { label: "Incident Zero Rate", value: "99.8%", detail: "Zero unmanaged safety incidents across 1,240 solo journeys" },
      { label: "Emergency Response Radius", value: "< 18 mins", detail: "Average time to contact local safehouse or medical responder" },
      { label: "Vetting Rejection Rate", value: "34.0%", detail: "Corridors rejected during Surveyor Pass 01 for safety risk" }
    ]
  },
  {
    id: "chapter-03-sustainability",
    volumeNumber: "VOL. III",
    code: "NTB-2026-03",
    title: "Sustainable Business Model & Revenue Mechanics",
    subtitle: "Building a High-Margin, High-Impact Platform Centered on Microtipping",
    author: "Desk Co-Founder & Financial Controller",
    date: "July 2026",
    confidentiality: "CONFIDENTIAL // EXECUTIVE BOARD",
    summary: "How the microtipping model creates a self-sustaining business flywheel: Solo Explorer Passes + Protocol Micro-fees + ESG Impact Matching.",
    contentMarkdown: `
### 1. The Business Sustainability Doctrine
The Desk does not advertise public hotel room prices, travel packages, or stay rates. All stays are assigned under seal after a commission is locked. The Desk operates on a **Tri-Tier Sustainability Flywheel**:

1. **Solo Explorer Vetting Pass (Private Commission ARR)**:
   - Domestic & International Vetting Passes assigned privately under seal.
   - *Delivers*: 24/7 Desk Safety Mesh, 6-Pass Corridor Access, and zero-fee Microtip Dispatcher.

2. **Voluntary 5% Protocol Micro-Fee**:
   - Added optionally during microtip dispatches.
   - Covers payment processor interchange fees (Stripe/Razorpay) and funds solar QR hardware at remote trailheads.

3. **Responsible Tourism ESG Impact Matching (B2B)**:
   - Responsible tourism brands match solo traveler microtips 1:1, receiving verified ESG impact audit certificates under seal.

### 2. Unit Economics Breakdown per Active Solo Traveler
- **Customer Acquisition Cost (CAC)**: Minimal (via word-of-mouth solo community briefs)
- **Gross Margin**: 88.5%
- **LTV / CAC Ratio**: 6.4x
`,
    metrics: [
      { label: "Gross Margin", value: "88.5%", detail: "High-margin digital vetting & protocol infrastructure" },
      { label: "LTV / CAC", value: "6.4x", detail: "Highly efficient organic growth through solo travel networks" },
      { label: "Host Retention Rate", value: "99.1%", detail: "Local hosts staying active on the microtipping registry" }
    ]
  },
  {
    id: "chapter-04-destinations-fieldnotes",
    volumeNumber: "VOL. IV",
    code: "NTB-2026-04",
    title: "Surveyor Field Notes: Uncharted Destinations Matrix",
    subtitle: "Ground Intelligence & Host Ecosystem Audits from Ziro to Wayanad",
    author: "Lead Surveyor SV-NER-01 & SV-RAJ-02",
    date: "July 2026",
    confidentiality: "FIELD RECORD // VERIFIED IN SITU",
    summary: "Direct field notes evaluating connectivity, local hospitality readiness, microtip acceptance, and cultural sensitivity protocols across 8 new-found corridors.",
    contentMarkdown: `
### 1. Corridor Field Evaluations

#### Corridor Alpha: Ziro Valley (Arunachal Pradesh)
- **Cellular Mesh**: 4G active in main villages (Hong, Hari); satellite fallback recommended in high pine trails.
- **Microtip Acceptance**: High via UPI. Local weavers respond enthusiastically to direct thread support gestures.
- **Cultural Protocol**: Seek elder consent before photographing facial tattoos; always enter paddy fields along designated bunds.

#### Corridor Beta: Spiti & Pin Valley (Himachal Pradesh)
- **Cellular Mesh**: BSNL fiber active at Kaza; zero network at Pin Valley passes. Offline microtip queuing enabled in web app.
- **Microtip Acceptance**: Monk guides accept microtips for monastery restoration and winter thermal gear.
- **Cultural Protocol**: Always walk clockwise around chortens and mani stone walls.

#### Corridor Gamma: Dawki & Mawlynnong (Meghalaya)
- **Cellular Mesh**: Strong 5G coverage along riverbank; international border roaming alerts near Bangladesh sector.
- **Microtip Acceptance**: Umngot boatmen rely heavily on seasonal gestures for boat hull eco-resin treatments.
- **Cultural Protocol**: Matriarchal etiquette—address female hosts with 'Kong' (sister/mother).
`
  }
];
