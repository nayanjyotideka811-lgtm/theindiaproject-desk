import React from 'react';
import { ShieldCheck, MapPin, Compass } from 'lucide-react';

interface FooterProps {
  onOpenVisitingCard: () => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitingCard, setActiveTab }) => {
  return (
    <footer className="bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15 py-12 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#e9e3d6]/15 pb-10">
          
          {/* Col 1: Brand (5 Cols) */}
          <div className="md:col-span-5">
            <div className="font-mono text-sm tracking-[0.24em] text-[#e9e3d6] uppercase font-bold mb-2">
              theindiaproject<span className="text-[#c2a15a]">.world</span>
            </div>
            <p className="text-sm text-[#a49d8d] leading-relaxed max-w-sm">
              A Private Coordination Desk across India. Architecting sustainable microtipping protocols, 
              solo traveler de-risking, and unscripted off-beat corridor access.
            </p>
            <div className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest mt-4">
              LAT 8°–37° N · LON 68°–97° E · SURVEYED · SEALED · ASSIGNED
            </div>
          </div>

          {/* Col 2: Navigation Links (4 Cols) */}
          <div className="md:col-span-4 font-mono text-xs space-y-2">
            <div className="text-[10px] uppercase text-[#a49d8d] tracking-widest mb-3">Desk Navigation</div>
            <div>
              <button onClick={() => setActiveTab('destinations')} className="text-[#a49d8d] hover:text-[#c2a15a] transition-colors">
                Uncharted Corridors (8 Vetted Regions)
              </button>
            </div>
            <div>
              <button onClick={() => setActiveTab('solo-hub')} className="text-[#a49d8d] hover:text-[#c2a15a] transition-colors">
                Solo Traveler 6-Pass Safety Briefing
              </button>
            </div>
            <div>
              <button onClick={() => setActiveTab('microtipping')} className="text-[#a49d8d] hover:text-[#c2a15a] transition-colors">
                Direct Host Microtipping & Public Ledger
              </button>
            </div>
            <div>
              <button onClick={() => setActiveTab('notebook')} className="text-[#a49d8d] hover:text-[#c2a15a] transition-colors">
                Surveyor Field Notebook Intelligence
              </button>
            </div>
            <div>
              <button onClick={() => setActiveTab('memo-gen')} className="text-[#a49d8d] hover:text-[#c2a15a] transition-colors">
                Request Sealed Route Case Brief
              </button>
            </div>
            <div className="pt-2">
              <button onClick={() => setActiveTab('backoffice')} className="text-[#a49d8d]/30 hover:text-[#c2a15a] text-[10px] uppercase tracking-wider transition-colors flex items-center gap-1">
                🔒 Desk Operator Portal
              </button>
            </div>
          </div>

          {/* Col 3: Direct Desk Contact (3 Cols) */}
          <div className="md:col-span-3 font-mono text-xs text-[#a49d8d]">
            <div className="text-[10px] uppercase text-[#a49d8d] tracking-widest mb-3">Gurgaon Dispatch Desk</div>
            <div>Email: <a href="mailto:contact@theindiaproject.world" className="text-[#c2a15a] hover:underline">contact@theindiaproject.world</a></div>
            <div className="mt-1">GSTIN: 18BFVPD7109E1ZB</div>
            <div className="mt-4">
              <button
                onClick={onOpenVisitingCard}
                className="bg-[#111114] border border-[#c2a15a]/40 text-[#c2a15a] hover:bg-[#c2a15a] hover:text-[#0b0b0c] font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded transition-all"
              >
                View Visiting Card
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Stamp */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a49d8d] font-mono">
          <div>
            © 2026 theindiaproject.world. All rights reserved under seal.
          </div>
          <div className="mt-2 sm:mt-0 text-[10px] tracking-widest uppercase text-[#7c2427] border border-[#7c2427]/40 px-2 py-0.5 rounded">
            CONFIDENTIAL // OPERATIONAL DISPATCH
          </div>
        </div>
      </div>
    </footer>
  );
};
