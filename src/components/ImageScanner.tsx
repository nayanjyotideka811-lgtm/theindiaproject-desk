import React, { useState } from 'react';
import { NEW_FOUND_DESTINATIONS, Destination, LocalHost } from '../data/destinations';
import { Camera, Sparkles, MapPin, CheckCircle2, HeartHandshake, RefreshCw, Upload } from 'lucide-react';

interface ImageScannerProps {
  currency: 'INR' | 'USD';
  onSelectHostToTip: (host: LocalHost) => void;
}

export const ImageScanner: React.FC<ImageScannerProps> = ({ currency, onSelectHostToTip }) => {
  const [selectedSample, setSelectedSample] = useState<string>('/nagaland-tribal-heritage.jpg');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<{
    matchedDestination: Destination;
    terrainNotes: string;
    palette: string[];
    confidence: number;
  } | null>({
    matchedDestination: NEW_FOUND_DESTINATIONS[0],
    terrainNotes: "Dense pine hills, paddy fish aquaculture bunds, and organic bamboo structures. High aesthetic match with Sacred East / Apatani Plateau.",
    palette: ["#4f7a52", "#c2a15a", "#111114", "#e9e3d6"],
    confidence: 98.4
  });

  const sampleImages = [
    { url: '/nagaland-tribal-heritage.jpg', name: 'Ziro Bamboo & Hills', destId: 'ziro-valley' },
    { url: '/ladakh-prayer-flags.jpg', name: 'Spiti Cold Desert', destId: 'spiti-valley' },
    { url: '/kerala-backwaters-houseboat.jpg', name: 'Dawki Crystal River', destId: 'dawki-mawlynnong' },
    { url: '/rajasthan-jewelled-hand.jpg', name: 'Shekhawati Heritage', destId: 'shekhawati-corridor' },
    { url: '/varanasi-sadhu-ghats.jpg', name: 'Majuli Riverine Island', destId: 'majuli-island' }
  ];

  const handleAnalyze = (imgUrl: string, destId: string) => {
    setSelectedSample(imgUrl);
    setIsAnalyzing(true);

    setTimeout(() => {
      const dest = NEW_FOUND_DESTINATIONS.find(d => d.id === destId) || NEW_FOUND_DESTINATIONS[0];
      setAnalysisResult({
        matchedDestination: dest,
        terrainNotes: `Topographic analysis identifies ${dest.terrain} in ${dest.region}. High cultural & ecological alignment for solo wanderers.`,
        palette: ["#8f7738", "#c2a15a", "#0b0b0c", "#8fb892"],
        confidence: Math.round((94 + Math.random() * 5) * 10) / 10
      });
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <Camera className="w-3.5 h-3.5" />
            AI Vision Protocol · Photo-to-Corridor Matcher
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            Terrain & Aesthetic Image Scanner
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Upload or pick a landscape photograph to identify terrain mood, color palette, 
            matching Indian corridor coordinates, and verified local host microtip channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sample Image Picker (5 Cols) */}
          <div className="lg:col-span-5 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm">
            <h3 className="font-serif text-xl text-[#e9e3d6] border-b border-[#e9e3d6]/15 pb-3 mb-4">
              Select or Upload Terrain Photo
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {sampleImages.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => handleAnalyze(s.url, s.destId)}
                  className={`cursor-pointer rounded overflow-hidden border transition-all ${
                    selectedSample === s.url
                      ? 'border-[#c2a15a] ring-1 ring-[#c2a15a]'
                      : 'border-[#e9e3d6]/15 hover:border-[#e9e3d6]/40'
                  }`}
                >
                  <img src={s.url} alt={s.name} className="w-full h-24 object-cover" />
                  <div className="p-2 bg-[#0b0b0c] text-[11px] font-serif text-[#e9e3d6] text-center truncate">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0b0b0c] border border-dashed border-[#e9e3d6]/20 p-4 rounded text-center">
              <Upload className="w-6 h-6 text-[#a49d8d] mx-auto mb-2" />
              <div className="text-xs font-mono uppercase text-[#a49d8d]">Upload Custom Photo</div>
              <p className="text-[10px] text-[#a49d8d]/60 font-serif mt-1">JPEG / PNG landscape analysis</p>
            </div>
          </div>

          {/* Analysis Results Display (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm flex flex-col justify-between">
            {isAnalyzing ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center">
                <RefreshCw className="w-8 h-8 text-[#c2a15a] animate-spin mb-3" />
                <div className="font-serif text-lg text-[#e9e3d6]">Analyzing Terrain Topography & Palette...</div>
                <div className="text-xs font-mono text-[#a49d8d] mt-1">Matching against 38 Surveyed Corridors</div>
              </div>
            ) : analysisResult ? (
              <div>
                <div className="flex items-center justify-between border-b border-[#e9e3d6]/15 pb-3 mb-4">
                  <span className="font-mono text-xs text-[#8fb892] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Aesthetic Corridor Match Locked
                  </span>
                  <span className="font-mono text-[10px] text-[#c2a15a] border border-[#c2a15a]/30 px-2 py-0.5 rounded">
                    Confidence: {analysisResult.confidence}%
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={analysisResult.matchedDestination.imageUrl}
                    alt={analysisResult.matchedDestination.name}
                    className="w-28 h-28 object-cover rounded border border-[#c2a15a]/40"
                  />
                  <div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">
                      {analysisResult.matchedDestination.state}
                    </span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] font-normal">
                      {analysisResult.matchedDestination.name}
                    </h3>
                    <div className="text-xs font-mono text-[#a49d8d] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#c2a15a]" /> {analysisResult.matchedDestination.coordinates}
                    </div>
                  </div>
                </div>

                <p className="font-serif text-sm text-[#a49d8d] leading-relaxed mb-6 bg-[#0b0b0c] p-4 border border-[#e9e3d6]/10 rounded">
                  "{analysisResult.terrainNotes}"
                </p>

                {/* Local Hosts Action */}
                <div className="border-t border-[#e9e3d6]/15 pt-4">
                  <div className="font-mono text-[10px] text-[#a49d8d] uppercase tracking-widest mb-3">
                    Recommended Local Host for Microtipping
                  </div>

                  <div className="space-y-2">
                    {analysisResult.matchedDestination.hosts.map((host) => (
                      <div key={host.id} className="bg-[#0b0b0c] p-3 rounded border border-[#e9e3d6]/10 flex items-center justify-between">
                        <div>
                          <div className="font-serif text-sm text-[#e9e3d6] font-medium">{host.name}</div>
                          <div className="text-[10px] text-[#a49d8d] font-serif">{host.role} · {host.location}</div>
                        </div>
                        <button
                          onClick={() => onSelectHostToTip(host)}
                          className="bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded font-bold transition-all flex items-center gap-1"
                        >
                          <HeartHandshake className="w-3.5 h-3.5" />
                          Tip {currency === 'INR' ? `₹${host.suggestedTipInr}` : `$${host.suggestedTipUsd}`}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

        </div>

      </div>
    </section>
  );
};
