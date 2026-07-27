import React, { useState } from 'react';
import { NEW_FOUND_DESTINATIONS, LocalHost } from '../data/destinations';
import { MapPin, Compass, HeartHandshake, EyeOff } from 'lucide-react';

interface DestinationsGridProps {
  onSelectHostToConnect: (host: LocalHost) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({ onSelectHostToConnect }) => {
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('ALL');

  const regions = ['ALL', 'Sacred East / Frontier', 'High-Altitude Trans-Himalaya', 'Northern Borderland', 'Khasi Hills Corridor', 'Western Ghats Rainforest', 'Royal Rajputana Frontier'];

  const filteredDestinations = selectedRegionFilter === 'ALL'
    ? NEW_FOUND_DESTINATIONS
    : NEW_FOUND_DESTINATIONS.filter(d => d.region.toLowerCase().includes(selectedRegionFilter.toLowerCase()) || d.state.toLowerCase().includes(selectedRegionFilter.toLowerCase()));

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desk Policy Banner */}
        <div className="bg-[#111114] border border-[#7c2427]/50 p-4 rounded mb-10 text-center flex items-center justify-center gap-3">
          <EyeOff className="w-5 h-5 text-[#c2a15a] flex-shrink-0" />
          <div className="text-xs font-mono text-[#e9e3d6] uppercase tracking-wider">
            <strong>Desk Policy Doctrine:</strong> Stays and exact route coordinates are assigned privately under seal. We do not publicly advertise stays or commercial package pricing.
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <Compass className="w-3.5 h-3.5" />
            Uncharted Corridors · Surveyed & Cleared
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            New-Found Destinations Matrix
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Hand-surveyed off-beat corridors across India for solo wanderers. 
            Integrated with local verified host profiles and 6-pass safety vetting logs.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegionFilter(region)}
              className={`px-3.5 py-1.5 rounded transition-all uppercase tracking-wider ${
                selectedRegionFilter === region
                  ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold shadow'
                  : 'bg-[#111114] border border-[#e9e3d6]/15 text-[#a49d8d] hover:text-[#e9e3d6] hover:border-[#c2a15a]/40'
              }`}
            >
              {region === 'ALL' ? 'All Corridors (8)' : region}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-[#111114] border border-[#e9e3d6]/20 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#c2a15a]/60 transition-all duration-300 group"
            >
              {/* Image & Badges Overlay */}
              <div className="relative h-56 overflow-hidden bg-[#0b0b0c]">
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/40" />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-wider">
                  <span className="bg-[#0b0b0c]/80 backdrop-blur-md border border-[#c2a15a]/40 text-[#c2a15a] px-2.5 py-1 rounded">
                    {dest.state}
                  </span>
                  <span className="bg-[#8fb892]/20 backdrop-blur-md border border-[#8fb892]/40 text-[#8fb892] px-2.5 py-1 rounded">
                    {dest.safetyGrade}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-mono text-[10px] text-[#a49d8d] uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#c2a15a]" /> {dest.coordinates}
                  </div>
                  <h3 className="font-serif text-2xl text-[#e9e3d6] font-normal leading-tight mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#a49d8d] border-b border-[#e9e3d6]/10 pb-2 mb-3">
                    <span>Alt: <strong className="text-[#e9e3d6]">{dest.altitude}</strong></span>
                    <span>Best: <strong className="text-[#c2a15a]">{dest.bestSeason}</strong></span>
                  </div>

                  <p className="font-serif text-sm text-[#a49d8d] leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-mono text-[#e9e3d6]/80 bg-[#0b0b0c] border border-[#e9e3d6]/15 px-2 py-0.5 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Local Hosts Section */}
                <div className="pt-4 border-t border-[#e9e3d6]/15">
                  <div className="font-mono text-[10px] text-[#a49d8d] uppercase tracking-widest mb-2 flex items-center justify-between">
                    <span>Verified Local Hosts ({dest.hosts.length})</span>
                    <span className="text-[#c2a15a]">Ground Network</span>
                  </div>

                  <div className="space-y-2">
                    {dest.hosts.map((host) => (
                      <div key={host.id} className="bg-[#0b0b0c] p-2.5 rounded border border-[#e9e3d6]/10 flex items-center justify-between">
                        <div>
                          <div className="font-serif text-sm text-[#e9e3d6] font-medium">{host.name}</div>
                          <div className="text-[10px] text-[#a49d8d] font-serif">{host.role}</div>
                        </div>
                        <button
                          onClick={() => onSelectHostToConnect(host)}
                          className="bg-[#c2a15a]/10 hover:bg-[#c2a15a] text-[#c2a15a] hover:text-[#0b0b0c] border border-[#c2a15a]/40 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded transition-all flex items-center gap-1"
                        >
                          <HeartHandshake className="w-3 h-3" />
                          Connect Host
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
