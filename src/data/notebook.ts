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
    title: "Ground Host Support & Cultural Preservation in Off-Beat Corridors",
    subtitle: "Direct Resource Support, Zero Intermediary Leakage & Trail Conservation",
    author: "Gurgaon Desk Research Cell",
    date: "July 2026",
    confidentiality: "CONFIDENTIAL // DESK USE & SOLO PASS HOLDERS",
    summary: "Traditional travel decouples travelers from local stewards. Direct ground host support provides verified resources, eco-friendly equipment, and trail safety tools directly to village boatmen, weavers, and monastic guides.",
    contentMarkdown: `
### 1. Ground Steward Stewardship & Conservation
In conventional travel, ground hosts—the boatman in Dawki who clears river litter, the Apatani weaver in Ziro, or the monastery tea keeper in Spiti—provide over 90% of the authentic human experience yet lack access to specialized eco-supplies and safety equipment.

*Policy Note: The Desk does not advertise room rates, commercial travel packages, or hotel names. All stays and coordinates are assigned privately under seal.*

### 2. Direct Ground Support Architecture
Our host support protocol connects travelers directly with ground stewards through non-commercial resource support gestures:

- **100% Direct Impact**: Local recipients receive verified equipment, solar lanterns, medicinal kits, and trail safety gear.
- **Under-Seal Verification**: All support gestures are recorded with cryptographic SHA-256 hash signatures on the public ground log.
- **6-Pass Safety Sync**: Support gestures strengthen local safehouse networks and emergency radio relays across high-altitude and frontier sectors.

### 3. Sustainable Corridor Impact
Equipping local hosts with eco-friendly tools and safety gear preserves fragile ecosystems, maintains ancient handicraft traditions, and ensures safe passage for solo wanderers.
`,
    formula: {
      latex: "I_{\\text{steward}} = \\frac{R_{\\text{support}} \\times C_{\\text{conservation}}}{E_{\\text{risk}}}",
      description: "Formula for Local Steward Preservation Index (I_steward) generated per verified support gesture.",
      variables: [
        { symbol: "R_{support}", meaning: "Resource support gesture dispatched to ground host" },
        { symbol: "C_{conservation}", meaning: "Local eco-preservation & cultural heritage weight factor" },
        { symbol: "E_{risk}", meaning: "Off-grid terrain risk coefficient evaluated under 6-Pass protocol" }
      ]
    },
    metrics: [
      { label: "Ground Steward Direct Reach", value: "100.0%", detail: "All support gestures directly equip local village stewards" },
      { label: "Corridor Preservation Rate", value: "98.4%", detail: "Trail safety and environmental cleanliness rating across 8 sectors" },
      { label: "Hash Verification Time", value: "< 1.2 sec", detail: "Real-time cryptographic SHA-256 hash logging on public record" }
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
### 1. Asymmetrical Risk Profiles: Domestic vs. International Solo Travellers

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
- **Cellular Mesh**: Reliable 4G coverage along the riverbank; international roaming alerts trigger near the Bangladesh border sector.
- **Microtip Acceptance**: Umngot boatmen rely heavily on seasonal gestures for boat hull eco-resin treatments.
- **Cultural Protocol**: Matriarchal etiquette—address female hosts with 'Kong' (sister/mother).
`
  }
];
