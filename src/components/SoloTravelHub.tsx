import React, { useState } from 'react';
import { ShieldCheck, MapPin, Compass, AlertTriangle, Radio, CheckCircle2, ChevronDown, PhoneCall, Globe, UserCheck, KeyRound } from 'lucide-react';

interface SoloTravelHubProps {
  userType: 'domestic' | 'international';
  setUserType: (type: 'domestic' | 'international') => void;
  currency: 'INR' | 'USD';
}

export const SoloTravelHub: React.FC<SoloTravelHubProps> = ({ userType, setUserType, currency }) => {
  const [expandedPass, setExpandedPass] = useState<number | null>(1);
  const [pingLocation, setPingLocation] = useState<string>('Ziro Valley, Arunachal Pradesh (27.5387° N, 93.8385° E)');
  const [pingStatus, setPingStatus] = useState<string | null>(null);

  const handleSimulatePing = () => {
    setPingStatus('PINGING');
    setTimeout(() => {
      setPingStatus('SUCCESS');
    }, 1200);
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7c2427]/20 border border-[#7c2427]/40 text-[#e9e3d6] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c2a15a]" />
            Solo De-risking Matrix · 6-Pass Surveyor Protocol
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            Solo Travel Architecture: Domestic & International
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Whether navigating homeland corridors or crossing international borders into India, 
            our 6-Pass Protocol ensures quiet competence, safehouses, and instant micro-impact.
          </p>
        </div>

        {/* Traveler Category Toggle Bar */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#111114] border border-[#e9e3d6]/20 p-1 rounded-md flex items-center gap-2">
            <button
              onClick={() => setUserType('domestic')}
              className={`flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider rounded transition-all ${
                userType === 'domestic'
                  ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold shadow-md'
                  : 'text-[#a49d8d] hover:text-[#e9e3d6]'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              Domestic Solo Traveler (India)
            </button>
            <button
              onClick={() => setUserType('international')}
              className={`flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider rounded transition-all ${
                userType === 'international'
                  ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold shadow-md'
                  : 'text-[#a49d8d] hover:text-[#e9e3d6]'
              }`}
            >
              <Globe className="w-4 h-4" />
              International Solo Traveler
            </button>
          </div>
        </div>

        {/* De-risking Feature Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Domestic Specifics */}
          <div className={`p-6 sm:p-8 rounded-sm border transition-all ${
            userType === 'domestic'
              ? 'bg-[#111114] border-[#c2a15a]'
              : 'bg-[#111114]/60 border-[#e9e3d6]/15 opacity-80'
          }`}>
            <div className="flex items-center justify-between border-b border-[#e9e3d6]/15 pb-4 mb-4">
              <h3 className="font-serif text-2xl text-[#e9e3d6]">🇮🇳 Domestic Solo Explorer Protocol</h3>
              <span className="font-mono text-[10px] text-[#c2a15a] uppercase border border-[#c2a15a]/40 px-2 py-0.5 rounded">
                INR (₹) Direct UPI
              </span>
            </div>
            <ul className="space-y-3 font-serif text-sm text-[#a49d8d]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">Instant UPI Microtipping:</strong> 1-click GPay/PhonePe direct to local tea artisans, boatmen, and homestays.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">Regional Language Prompt Cards:</strong> Pre-translated local dialect cards (Assamese, Khasi, Hindi, Ladakhi) for off-grid communication.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">Forest & State Outpost Network:</strong> Direct coordinate sync with regional forest beat offices & local panchayat safehouses.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">Inner Line Permit (ILP) Auto-Fill:</strong> 24-hour expedited digital clearance for Arunachal Pradesh, Nagaland, and Mizoram.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: International Specifics */}
          <div className={`p-6 sm:p-8 rounded-sm border transition-all ${
            userType === 'international'
              ? 'bg-[#111114] border-[#c2a15a]'
              : 'bg-[#111114]/60 border-[#e9e3d6]/15 opacity-80'
          }`}>
            <div className="flex items-center justify-between border-b border-[#e9e3d6]/15 pb-4 mb-4">
              <h3 className="font-serif text-2xl text-[#e9e3d6]">🌐 International Solo Explorer Protocol</h3>
              <span className="font-mono text-[10px] text-[#c2a15a] uppercase border border-[#c2a15a]/40 px-2 py-0.5 rounded">
                Multi-Currency Card
              </span>
            </div>
            <ul className="space-y-3 font-serif text-sm text-[#a49d8d]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">Card-to-UPI FX Bridge:</strong> Seamless microtipping in USD ($) or EUR (€) converted instantly to host UPI without high bank fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">24/7 Gurgaon Desk Satellite Relay:</strong> Dedicated English/French/German executive desk support for emergency rerouting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">Heli-Evacuation & Trauma LZ:</strong> Pre-mapped helicopter LZ coordinates and hospital links within 25 minutes of any high-altitude trail.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#e9e3d6]">Border & Restricted Area Permits (PAP/RAP):</strong> Full legal compliance filing for sensitive frontier zones in J&K, Spiti, and Assam.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The 6-Pass Surveyor Protocol Accordion */}
        <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm mb-16">
          <div className="border-b border-[#e9e3d6]/15 pb-4 mb-6">
            <div className="font-mono text-[10px] uppercase text-[#c2a15a] tracking-widest mb-1">
              Field Vetting Standard
            </div>
            <h3 className="font-serif text-2xl text-[#e9e3d6]">The 6-Pass Surveyor De-risking Protocol</h3>
            <p className="text-xs text-[#a49d8d] font-serif mt-1">
              Every solo destination corridor must pass all 6 rigorous audits before receiving Desk clearance.
            </p>
          </div>

          <div className="space-y-3 font-serif">
            {[
              {
                pass: 1,
                name: "PASS 01: THE SURVEYOR'S TOPOGRAPHY AUDIT",
                summary: "Ground topography & road grade inspection. Max vehicle grade < 18°. Culvert load testing up to 3.5 tons.",
                detail: "Surveyors walk the ground route 14 days prior to seasonal opening. Secondary country lanes are mapped to bypass heavy congestion. All bridges and gravel culverts are stress-tested."
              },
              {
                pass: 2,
                name: "PASS 02: THE 5-HOUR TRANSIT THRESHOLD",
                summary: "Land transit capped strictly at 5 hours. Automatic pivot to private rail/heli charter if breached.",
                detail: "Solo wanderer fatigue directly correlates with incident rates. If road repairs extend travel time beyond 5 hours, the route is pivoted to private helicopter transfer or luxury express rail."
              },
              {
                pass: 3,
                name: "PASS 03: EMERGENCY MEDICAL & SAFE HOUSE DE-RISKING",
                summary: "Primary Landing Zone (LZ) coordinates & trauma hospital radius within 25 minutes.",
                detail: "Every off-beat corridor maintains a primary LZ coordinate (e.g. Jawai Field 25.1100° N, 73.1240° E) linked to nearest Level-1 trauma centers and armed state forestry outposts."
              },
              {
                pass: 4,
                name: "PASS 04: BORDER PERMITS & LEGALITIES",
                summary: "Pre-cleared forestry checkpoints, ILP approvals, and GSTIN compliance.",
                detail: "Solo travelers are pre-registered with forest department posts (e.g. SF-RAJ-998) to avoid delays or illegal harassment at remote border gates."
              },
              {
                pass: 5,
                name: "PASS 05: SOLO PHYSIOLOGICAL BRIEFING",
                summary: "High-altitude pulse-oximetry, water purity, and dietary allergen verification.",
                detail: "Kitchen crews at remote homestays are briefed on client sensitivity (lactose intolerance, gluten, organic requirements). Water purification standards are verified on-site."
              },
              {
                pass: 6,
                name: "PASS 06: IMMUTABLE SHA-256 HASH INTEGRITY",
                summary: "Cryptographic route hashing to guarantee zero unvetted changes or unauthorized itinerary edits.",
                detail: "The final case brief generates an immutable SHA-256 hash (e.g., 331141fa92676c6f12e392211f056fd3). Any alteration by third-party drivers triggers immediate Desk alerts."
              }
            ].map((item) => (
              <div
                key={item.pass}
                className="border border-[#e9e3d6]/15 rounded bg-[#0b0b0c] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPass(expandedPass === item.pass ? null : item.pass)}
                  className="w-full text-left p-4 flex items-center justify-between hover:bg-[#e9e3d6]/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#c2a15a] bg-[#c2a15a]/10 border border-[#c2a15a]/30 px-2 py-1 rounded">
                      Pass 0{item.pass}
                    </span>
                    <span className="font-serif text-base text-[#e9e3d6] font-medium">{item.name}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#a49d8d] transition-transform ${expandedPass === item.pass ? 'rotate-180 text-[#c2a15a]' : ''}`} />
                </button>

                {expandedPass === item.pass && (
                  <div className="p-4 pt-0 border-t border-[#e9e3d6]/10 text-xs text-[#a49d8d] leading-relaxed">
                    <p className="font-medium text-[#e9e3d6] mb-1">{item.summary}</p>
                    <p>{item.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Safety Mesh Coordinate Ping Simulator */}
        <div className="bg-[#111114] border border-[#7c2427]/40 p-6 sm:p-8 rounded-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#e9e3d6]/15 pb-4 mb-6 gap-2">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#7c2427] uppercase tracking-widest font-bold">
                <Radio className="w-4 h-4 text-[#7c2427] animate-pulse" />
                Live Desk Safety Relay Simulator
              </div>
              <h3 className="font-serif text-2xl text-[#e9e3d6] mt-1">Solo Traveler Coordinate Dispatch</h3>
            </div>
            <span className="font-mono text-[10px] text-[#a49d8d] uppercase">Gurgaon Operations Hub</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                Current Solo GPS Coordinate Beacon
              </label>
              <input
                type="text"
                value={pingLocation}
                onChange={(e) => setPingLocation(e.target.value)}
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-mono text-xs p-3 rounded focus:border-[#c2a15a] focus:outline-none"
              />
            </div>
            <div className="md:col-span-4">
              <button
                onClick={handleSimulatePing}
                disabled={pingStatus === 'PINGING'}
                className="w-full bg-[#7c2427] hover:bg-[#962c30] text-[#e9e3d6] font-mono text-xs uppercase tracking-wider font-bold py-3 px-4 rounded transition-all flex items-center justify-center gap-2"
              >
                {pingStatus === 'PINGING' ? (
                  <>Transmitting Beacon...</>
                ) : (
                  <>
                    <Radio className="w-4 h-4" />
                    Ping Desk Emergency Relay
                  </>
                )}
              </button>
            </div>
          </div>

          {pingStatus === 'SUCCESS' && (
            <div className="mt-4 bg-[#0b0b0c] border border-[#8fb892]/50 p-4 rounded text-xs font-mono text-[#8fb892] animate-fade-in flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8fb892]" />
                Beacon Received by Gurgaon Desk (Operator ID: Desk-09). Nearest Safehouse: Ziro Forest Outpost (1.4 km).
              </div>
              <span className="text-[#a49d8d] text-[10px]">ACK: 200 OK</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
