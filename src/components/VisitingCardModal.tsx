import React, { useState } from 'react';
import { X, Download, Copy, Check } from 'lucide-react';
import { SunSealLogo } from './SunSealLogo';

interface VisitingCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitingCardModal: React.FC<VisitingCardModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const cardText = `theindiaproject.world — A Private Coordination Desk\nSURVEYED · SEALED · ASSIGNED\nLAT 8°–37° N · LON 68°–97° E\nContact: contact@theindiaproject.world`;
    navigator.clipboard.writeText(cardText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadVcf = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Desk;The;;;\nFN:The Desk — theindiaproject.world\nORG:theindiaproject.world\nTITLE:Private Coordination Desk\nEMAIL:contact@theindiaproject.world\nURL:https://theindiaproject.world\nNOTE:Surveyed, sealed, assigned.\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'the-desk-theindiaproject.vcf';
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#111114] border border-[#e9e3d6]/30 max-w-2xl w-full p-6 sm:p-8 rounded-sm relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#a49d8d] hover:text-[#e9e3d6] p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center font-mono text-[10px] uppercase text-[#a49d8d] tracking-widest mb-6">
          theindiaproject.world · Official Desk Visiting Card
        </div>

        {/* Card Canvas Container */}
        <div className="flex flex-col items-center gap-6 my-4">
          
          {/* Front Card */}
          <div className="w-full max-w-[480px] h-[270px] bg-[#0b0b0c] border border-[#e9e3d6]/20 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-3 border border-[#e9e3d6]/10 pointer-events-none" />
            
            {/* SVG Rotating Glowing Sun Seal */}
            <div className="mb-2">
              <SunSealLogo size="md" idSuffix="card" />
            </div>

            <div className="font-mono text-xs tracking-[0.24em] text-[#e9e3d6] uppercase font-bold">
              theindiaproject<span className="text-[#c2a15a]">.world</span>
            </div>
            <div className="font-serif text-lg text-[#e9e3d6] font-light mt-1">
              A Private Coordination Desk
            </div>
            <div className="font-mono text-[9px] text-[#c2a15a] tracking-widest uppercase mt-1">
              surveyed · sealed · assigned
            </div>
            <div className="absolute bottom-4 font-mono text-[8px] text-[#a49d8d] tracking-widest">
              LAT 8°–37° N · LON 68°–97° E
            </div>
          </div>

          {/* Reverse Card */}
          <div className="w-full max-w-[480px] h-[270px] bg-[#0b0b0c] border border-[#e9e3d6]/20 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute inset-3 border border-[#e9e3d6]/10 pointer-events-none" />
            
            <div>
              <div className="font-serif text-lg text-[#e9e3d6] font-light leading-snug">
                "We do not advertise stays or routes; <em className="text-[#c2a15a] italic">we assign them under seal.</em>"
              </div>
              <div className="font-serif text-xs text-[#a49d8d] italic mt-1">
                Direct verified ground host support across Indian corridors.
              </div>
            </div>

            <div className="font-mono text-[10px] text-[#a49d8d] space-y-1">
              <div className="flex justify-between border-b border-[#e9e3d6]/10 pb-1">
                <span className="uppercase text-[#a49d8d]/60">Operations</span>
                <span className="text-[#e9e3d6]">Gurgaon Desk, India</span>
              </div>
              <div className="flex justify-between border-b border-[#e9e3d6]/10 pb-1">
                <span className="uppercase text-[#a49d8d]/60">Dispatch Email</span>
                <span className="text-[#c2a15a]">contact@theindiaproject.world</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase text-[#a49d8d]/60">GSTIN Ref</span>
                <span className="text-[#e9e3d6]">18BFVPD7109E1ZB</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handleDownloadVcf}
            className="bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-wider font-bold py-2.5 px-4 rounded transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download vCard (.vcf)
          </button>
          <button
            onClick={handleCopyText}
            className="bg-[#0b0b0c] border border-[#e9e3d6]/25 hover:border-[#c2a15a] text-[#e9e3d6] font-mono text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-all flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-[#8fb892]" /> : <Copy className="w-4 h-4 text-[#c2a15a]" />}
            {copied ? 'Card Copied' : 'Copy Card Text'}
          </button>
        </div>

      </div>
    </div>
  );
};
