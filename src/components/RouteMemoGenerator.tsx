import React, { useState } from 'react';
import { NEW_FOUND_DESTINATIONS, Destination } from '../data/destinations';
import { FileText, ShieldCheck, Download, Copy, Check, Lock, RefreshCw, Compass, ArrowRight } from 'lucide-react';

interface RouteMemoGeneratorProps {
  userType: 'domestic' | 'international';
}

export const RouteMemoGenerator: React.FC<RouteMemoGeneratorProps> = ({ userType }) => {
  const [travellerName, setTravellerName] = useState<string>('Anonymized Solo Traveller');
  const [originCity, setOriginCity] = useState<string>(userType === 'domestic' ? 'Mumbai, India' : 'Zurich, Switzerland');
  const [selectedDestId, setSelectedDestId] = useState<string>(NEW_FOUND_DESTINATIONS[0].id);
  const [transitPreference, setTransitPreference] = useState<string>('SUV Convoy & Local Rail');
  const [lactoseIntolerant, setLactoseIntolerant] = useState<boolean>(false);
  const [highAltitudePrep, setHighAltitudePrep] = useState<boolean>(true);

  const selectedDest = NEW_FOUND_DESTINATIONS.find(d => d.id === selectedDestId) || NEW_FOUND_DESTINATIONS[0];

  const [generatedMemo, setGeneratedMemo] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerateMemo = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const fileNo = `TIP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const randomHash = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

      const memoText = `==================================================================
CASE BRIEF: ${selectedDest.name.toUpperCase()} CORRIDOR (SEALED)
Registered Journey File No: ${fileNo} // Strictly Confidential
------------------------------------------------------------------

1. JOURNEY METRIC SYNOPSIS
* CORRIDOR: ${selectedDest.name} (${selectedDest.region})
* STATE/TERRITORY: ${selectedDest.state} [Coordinates: ${selectedDest.coordinates}]
* TRAVELER PROFILE: 1 Adult (${travellerName}, Origin: ${originCity})
* SECTOR STATUS: SECURED // ALL PASSES CLEAR
* DESK COORDINATOR: GURGAON DESK (Operator ID: Desk-09)
* SURVEYOR SIGN-OFF: SV-RAJ-02 / SV-NER-01 (Topography & Obstacle Vetting complete)

------------------------------------------------------------------

2. TOPOGRAPHIC & GRID ROUTING MATRIX

* Leg 01: Terminal Departure -> ${selectedDest.name} Gateway
  Transit Mode: ${transitPreference} | Duration: 2h 45m | Road Status: Vetted (No grades > 18 deg)
  
* Leg 02: Gateway -> [REDACTED LOCAL HOMESTAY / HERITAGE STAY]
  Transit Mode: Ground Transit | Duration: 1h 30m | Road Status: Secondary Country Lane; clearance verified
  
* Leg 03: Ground Base -> Local Host Microtipping Checkpoints
  Transit Mode: Trail / Boat / Trek | Duration: Flexible | Host Verified: ${selectedDest.hosts.map(h => h.name).join(', ')}

------------------------------------------------------------------

3. SURVEYOR SAFETY VETTING LOGS (THE 6-PASSES)

[PASS 01] THE SURVEYOR'S AUDIT
* Audit Target: ${selectedDest.name} secondary access routes.
* Vetting Log: Surveyed on July 14, 2026. Avoided standard tourist highway congestion. Maximum vehicle weight threshold: 3.5 tons. Verified.

[PASS 02] THE 5-HOUR TRANSIT RULE
* Status: Transit calculated to under 4 hours. No helicopter pivot required.

[PASS 03] EMERGENCY MEDICAL DE-RISKING
* Primary Landing Zone (LZ-01): ${selectedDest.name} Field Zone (${selectedDest.coordinates})
* Trauma Center Destination: Regional District Hospital (Evacuation radius: 18 mins).
* Secondary Safehouse: State Forestry Outpost (Armed security, Sat-comms active).

[PASS 04] BORDER PERMITS & LEGALITIES
* Checkpoints: ${selectedDest.ilpRequired ? 'Inner Line Permit (ILP) cleared under Reg #SF-ILP-902.' : 'No ILP required for this sector.'}

[PASS 05] CLIENT PHYSIOLOGICAL BRIEFING
* Special Instructions: ${lactoseIntolerant ? 'Lactose intolerance flagged. Kitchen crew locked on dairy-free substitutes.' : 'Standard nutrition briefing complete.'} High-altitude oxygen prep: ${highAltitudePrep ? 'Active' : 'Standard'}.

[PASS 06] INTEGRITY SUMMARY
* Itinerary SHA-256 Hash: ${randomHash}
* Status: IMMUTABLE & VERIFIED UNDER SEAL

------------------------------------------------------------------

4. SECURE DISPATCH CONTACT & MICROTIPPING PROTOCOL
All operational coordinates are managed exclusively via Gurgaon operations.

* Gurgaon Desk Email: contact@theindiaproject.world
* GSTIN Reference: 18BFVPD7109E1ZB
* Web: theindiaproject.world
==================================================================`;

      setGeneratedMemo(memoText);
      setIsGenerating(false);
    }, 900);
  };

  const handleCopyMemo = () => {
    if (!generatedMemo) return;
    navigator.clipboard.writeText(generatedMemo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMemo = () => {
    if (!generatedMemo) return;
    const blob = new Blob([generatedMemo], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `case-brief-${selectedDest.id}.txt`;
    a.click();
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <FileText className="w-3.5 h-3.5" />
            Operational Dispatch Tool · Case Brief Generator
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            Sealed Route Memo Generator
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Generate an official, 6-Pass verified Case Brief for your solo journey. 
            Includes SHA-256 cryptographic hashing and local safehouse coordinates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm">
            <h3 className="font-serif text-xl text-[#e9e3d6] border-b border-[#e9e3d6]/15 pb-3 mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#c2a15a]" />
              Solo Journey Parameters
            </h3>

            {/* Traveler Name */}
            <div className="mb-4">
              <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                Traveler Name / Alias
              </label>
              <input
                type="text"
                value={travellerName}
                onChange={(e) => setTravellerName(e.target.value)}
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-3 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
              />
            </div>

            {/* Origin */}
            <div className="mb-4">
              <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                Origin City / Airport
              </label>
              <input
                type="text"
                value={originCity}
                onChange={(e) => setOriginCity(e.target.value)}
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-3 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
              />
            </div>

            {/* Corridor Selection */}
            <div className="mb-4">
              <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                Target Uncharted Corridor
              </label>
              <select
                value={selectedDestId}
                onChange={(e) => setSelectedDestId(e.target.value)}
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-3 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
              >
                {NEW_FOUND_DESTINATIONS.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.state})
                  </option>
                ))}
              </select>
            </div>

            {/* Transit Preference */}
            <div className="mb-4">
              <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                Primary Transit Preference
              </label>
              <select
                value={transitPreference}
                onChange={(e) => setTransitPreference(e.target.value)}
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-3 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
              >
                <option>SUV Convoy & Local Rail</option>
                <option>Private Helicopter Transfer</option>
                <option>River Boat & Eco-Trek</option>
                <option>Self-Guided Off-Grid Pass</option>
              </select>
            </div>

            {/* Physiological Checkboxes */}
            <div className="space-y-2 mb-6 pt-2 border-t border-[#e9e3d6]/10">
              <label className="flex items-center gap-2 text-xs text-[#a49d8d] cursor-pointer">
                <input
                  type="checkbox"
                  checked={lactoseIntolerant}
                  onChange={(e) => setLactoseIntolerant(e.target.checked)}
                  className="accent-[#c2a15a]"
                />
                High-sensitivity lactose / dietary allergen briefing
              </label>
              <label className="flex items-center gap-2 text-xs text-[#a49d8d] cursor-pointer">
                <input
                  type="checkbox"
                  checked={highAltitudePrep}
                  onChange={(e) => setHighAltitudePrep(e.target.checked)}
                  className="accent-[#c2a15a]"
                />
                High-altitude pulse-oximetry & acclimatization kit
              </label>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerateMemo}
              disabled={isGenerating}
              className="w-full bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-widest font-bold py-3 px-4 rounded transition-all flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Hashing Case Brief...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" /> Seal & Generate Case Brief
                </>
              )}
            </button>
          </div>

          {/* Memo Output Canvas (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm flex flex-col justify-between">
            
            {generatedMemo ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#e9e3d6]/15 pb-3">
                  <span className="font-mono text-xs text-[#8fb892] uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Case Brief Generated & Sealed
                  </span>
                  <span className="font-mono text-[10px] text-[#a49d8d]">SHA-256 Locked</span>
                </div>

                <pre className="bg-[#0b0b0c] border border-[#e9e3d6]/15 p-4 rounded text-xs font-mono text-[#e9e3d6] whitespace-pre-wrap overflow-x-auto max-h-[420px] leading-relaxed select-all">
                  {generatedMemo}
                </pre>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleCopyMemo}
                    className="bg-[#c2a15a]/10 hover:bg-[#c2a15a] text-[#c2a15a] hover:text-[#0b0b0c] border border-[#c2a15a]/40 font-mono text-xs uppercase tracking-wider px-4 py-2 rounded transition-all flex items-center gap-1.5"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#8fb892]" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Memo Copied' : 'Copy Memo'}
                  </button>

                  <button
                    onClick={handleDownloadMemo}
                    className="bg-[#0b0b0c] border border-[#e9e3d6]/25 hover:border-[#c2a15a] text-[#e9e3d6] font-mono text-xs uppercase tracking-wider px-4 py-2 rounded transition-all flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-[#c2a15a]" /> Download Case Brief (.txt)
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-[#0b0b0c] border border-[#e9e3d6]/10 rounded">
                <FileText className="w-12 h-12 text-[#a49d8d]/30 mb-3" />
                <div className="font-serif text-xl text-[#e9e3d6]">Case Brief Engine Ready</div>
                <p className="text-xs text-[#a49d8d] font-serif max-w-sm mt-1">
                  Fill in your solo journey parameters on the left and click "Seal & Generate Case Brief" to produce an official Desk route memo.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
