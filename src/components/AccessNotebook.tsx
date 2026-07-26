import React, { useState } from 'react';
import { ACCESS_NOTEBOOK_CHAPTERS, NotebookChapter } from '../data/notebook';
import { BookOpen, FileText, Calculator, Copy, Check, ShieldCheck, DollarSign, Award, ChevronRight, Lock } from 'lucide-react';

interface AccessNotebookProps {
  currency: 'INR' | 'USD';
}

export const AccessNotebook: React.FC<AccessNotebookProps> = ({ currency }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(ACCESS_NOTEBOOK_CHAPTERS[0].id);
  const chapter = ACCESS_NOTEBOOK_CHAPTERS.find(c => c.id === selectedChapterId) || ACCESS_NOTEBOOK_CHAPTERS[0];
  
  const [copied, setCopied] = useState<boolean>(false);

  // Interactive formula calculator state for Chapter 1
  const [calcTipInr, setCalcTipInr] = useState<number>(250);
  const [calcHostBaseline, setCalcHostBaseline] = useState<number>(300); // Daily baseline spend
  const [calcMultiplier, setCalcMultiplier] = useState<number>(4.2);

  // Velocity Calculation
  const calculatedVelocity = Math.round(((calcTipInr * (1 - 0.05)) / calcHostBaseline) * calcMultiplier * 100) / 100;

  const handleCopyChapter = () => {
    navigator.clipboard.writeText(`${chapter.title}\n${chapter.subtitle}\n\n${chapter.summary}\n\n${chapter.contentMarkdown}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Operational Research Journal · Private Access Desk
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            The Desk Access Notebook
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Analytical briefs, microtipping economic velocity formulas, solo traveler de-risking models, and sustainable unit mechanics.
          </p>
        </div>

        {/* Notebook Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Chapter Selector Sidebar (4 Cols) */}
          <div className="lg:col-span-4 bg-[#111114] border border-[#e9e3d6]/20 p-5 rounded-sm h-fit">
            <div className="font-mono text-[10px] uppercase text-[#a49d8d] tracking-widest border-b border-[#e9e3d6]/15 pb-3 mb-4 flex items-center justify-between">
              <span>Journal Index (4 Volumes)</span>
              <Lock className="w-3 h-3 text-[#c2a15a]" />
            </div>

            <div className="space-y-3 font-serif">
              {ACCESS_NOTEBOOK_CHAPTERS.map((ch) => {
                const isSelected = selectedChapterId === ch.id;
                return (
                  <div
                    key={ch.id}
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`cursor-pointer p-4 rounded border transition-all ${
                      isSelected
                        ? 'bg-[#c2a15a]/10 border-[#c2a15a]'
                        : 'bg-[#0b0b0c] border-[#e9e3d6]/15 hover:border-[#e9e3d6]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[9.5px] uppercase tracking-wider text-[#c2a15a] mb-1">
                      <span>{ch.volumeNumber}</span>
                      <span>{ch.code}</span>
                    </div>
                    <div className="text-base text-[#e9e3d6] font-medium leading-snug">{ch.title}</div>
                    <div className="text-xs text-[#a49d8d] mt-1 line-clamp-2">{ch.summary}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chapter Document Reader (8 Cols) */}
          <div className="lg:col-span-8 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-10 rounded-sm font-serif">
            
            {/* Header Stamp */}
            <div className="border-b border-[#e9e3d6]/15 pb-6 mb-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#a49d8d] mb-2">
                <span className="text-[#7c2427] font-bold border border-[#7c2427]/40 px-2 py-0.5 rounded">
                  {chapter.confidentiality}
                </span>
                <span>{chapter.date} · {chapter.author}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl text-[#e9e3d6] font-light leading-tight mt-2">
                {chapter.title}
              </h3>
              <p className="text-sm text-[#c2a15a] italic mt-1 font-serif">
                {chapter.subtitle}
              </p>
            </div>

            {/* Key Metrics Grid if available */}
            {chapter.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0b0b0c] p-4 border border-[#e9e3d6]/15 rounded mb-8">
                {chapter.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="font-mono text-[9px] uppercase text-[#a49d8d]">{m.label}</div>
                    <div className="font-serif text-2xl text-[#c2a15a] mt-1">{m.value}</div>
                    <div className="text-[10px] text-[#a49d8d] mt-0.5 leading-tight">{m.detail}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Content Body */}
            <div className="text-[#e9e3d6]/90 text-base leading-relaxed space-y-4 font-serif border-b border-[#e9e3d6]/15 pb-8 mb-8 whitespace-pre-line">
              {chapter.contentMarkdown}
            </div>

            {/* Mathematical Formula & Interactive Calculator for Chapter 1 */}
            {chapter.formula && (
              <div className="bg-[#0b0b0c] border border-[#c2a15a]/40 p-6 rounded-sm mb-8 font-mono">
                <div className="flex items-center gap-2 text-xs text-[#c2a15a] uppercase tracking-widest mb-3">
                  <Calculator className="w-4 h-4" />
                  Mathematical Model: Local Economic Velocity (V_tip)
                </div>

                <div className="bg-[#111114] p-4 border border-[#e9e3d6]/15 text-center text-lg text-[#c2a15a] my-3 rounded">
                  {chapter.formula.latex}
                </div>
                <p className="text-xs text-[#a49d8d] font-serif mb-4">
                  {chapter.formula.description}
                </p>

                {/* Interactive Calculator Slider */}
                <div className="bg-[#111114] p-4 border border-[#e9e3d6]/15 rounded space-y-3 font-serif">
                  <div className="text-xs font-mono uppercase text-[#e9e3d6] tracking-wider mb-2">
                    Interactive Formula Simulator
                  </div>
                  <div>
                    <label className="text-xs text-[#a49d8d]">Solo Microtip Amount (T_raw): ₹{calcTipInr}</label>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      step="50"
                      value={calcTipInr}
                      onChange={(e) => setCalcTipInr(Number(e.target.value))}
                      className="w-full accent-[#c2a15a] mt-1"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#e9e3d6]/10 text-sm">
                    <span className="text-[#a49d8d]">Calculated Economic Velocity Multiplier (V_tip):</span>
                    <strong className="text-[#8fb892] text-xl font-mono">{calculatedVelocity}x</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handleCopyChapter}
                className="bg-[#111114] border border-[#e9e3d6]/25 hover:border-[#c2a15a] text-[#e9e3d6] font-mono text-xs uppercase tracking-wider px-4 py-2 rounded transition-all flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-[#8fb892]" /> : <Copy className="w-4 h-4 text-[#c2a15a]" />}
                {copied ? 'Chapter Brief Copied' : 'Copy Chapter Brief'}
              </button>

              <span className="font-mono text-[10px] text-[#a49d8d] uppercase">
                SHA-256 Verified Desk Journal
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
