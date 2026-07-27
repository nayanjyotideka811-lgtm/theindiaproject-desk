import React, { useState } from 'react';
import { ACCESS_NOTEBOOK_CHAPTERS } from '../data/notebook';
import { BookOpen, Copy, Check, Lock } from 'lucide-react';

export const AccessNotebook: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(ACCESS_NOTEBOOK_CHAPTERS[0].id);
  const chapter = ACCESS_NOTEBOOK_CHAPTERS.find(c => c.id === selectedChapterId) || ACCESS_NOTEBOOK_CHAPTERS[0];
  
  const [copied, setCopied] = useState<boolean>(false);

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
            Operational Research Journal · Field Intelligence
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            The Desk Access Notebook
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Surveyor field notes, ground host stewardship models, solo traveler safety matrices, and off-grid topography logs.
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
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`w-full text-left p-4 rounded transition-all border ${
                      isSelected
                        ? 'bg-[#c2a15a]/10 border-[#c2a15a]'
                        : 'bg-[#0b0b0c] border-[#e9e3d6]/10 hover:border-[#e9e3d6]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[9.5px] text-[#c2a15a] uppercase tracking-widest mb-1">
                      <span>{ch.volumeNumber} · {ch.code}</span>
                      <span>{ch.date}</span>
                    </div>
                    <div className="font-bold text-[#e9e3d6] text-base leading-snug">
                      {ch.title}
                    </div>
                    <div className="text-xs text-[#a49d8d] line-clamp-2 mt-1">
                      {ch.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chapter Content Reading Stage (8 Cols) */}
          <div className="lg:col-span-8 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-10 rounded-sm">
            
            {/* Metadata Bar */}
            <div className="border-b border-[#e9e3d6]/15 pb-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#c2a15a] uppercase tracking-widest mb-2">
                <span>{chapter.volumeNumber} // {chapter.code}</span>
                <span className="text-[#a49d8d]">{chapter.confidentiality}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#e9e3d6] font-normal leading-tight">
                {chapter.title}
              </h1>
              <div className="font-serif text-base text-[#c2a15a] italic mt-2">
                {chapter.subtitle}
              </div>
              <div className="font-mono text-[10px] text-[#a49d8d] uppercase tracking-wider mt-4">
                Author: {chapter.author} · Date: {chapter.date}
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-[#0b0b0c] border-l-2 border-[#c2a15a] p-4 mb-8 font-serif text-base text-[#e9e3d6] italic leading-relaxed">
              <strong>Executive Summary:</strong> {chapter.summary}
            </div>

            {/* Markdown Body */}
            <div className="prose prose-invert max-w-none font-serif text-base text-[#a49d8d] leading-relaxed space-y-6">
              {chapter.contentMarkdown.split('\n\n').map((para, idx) => {
                if (para.startsWith('### ')) {
                  return <h3 key={idx} className="text-xl text-[#e9e3d6] font-normal mt-6 mb-2 border-b border-[#e9e3d6]/10 pb-2">{para.replace('### ', '')}</h3>;
                }
                if (para.startsWith('#### ')) {
                  return <h4 key={idx} className="text-lg text-[#c2a15a] font-normal mt-4 mb-1">{para.replace('#### ', '')}</h4>;
                }
                if (para.startsWith('*Policy Note:')) {
                  return <div key={idx} className="bg-[#7c2427]/20 border border-[#7c2427]/40 p-3 text-xs font-mono text-[#e9e3d6] my-4 rounded">{para.replace(/\*/g, '')}</div>;
                }
                return <p key={idx}>{para}</p>;
              })}
            </div>

            {/* Latex Formula Block */}
            {chapter.formula && (
              <div className="mt-10 pt-6 border-t border-[#e9e3d6]/15">
                <div className="font-mono text-xs uppercase tracking-widest text-[#c2a15a] mb-3 flex items-center gap-2">
                  Theoretical Model & Preservation Formula
                </div>
                <div className="bg-[#0b0b0c] border border-[#e9e3d6]/20 p-6 rounded text-center font-mono text-lg text-[#e9e3d6] overflow-x-auto my-3">
                  {chapter.formula.latex}
                </div>
                <p className="text-xs text-[#a49d8d] font-serif italic mb-4">
                  {chapter.formula.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                  {chapter.formula.variables.map((v, i) => (
                    <div key={i} className="bg-[#0b0b0c] p-2.5 rounded border border-[#e9e3d6]/10">
                      <span className="text-[#c2a15a] font-bold">{v.symbol}</span>: <span className="text-[#a49d8d]">{v.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Metrics */}
            {chapter.metrics && chapter.metrics.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                {chapter.metrics.map((m, i) => (
                  <div key={i} className="bg-[#0b0b0c] p-4 rounded border border-[#e9e3d6]/15 text-center">
                    <div className="text-[10px] uppercase text-[#a49d8d] tracking-widest">{m.label}</div>
                    <div className="text-2xl text-[#c2a15a] font-bold my-1">{m.value}</div>
                    <div className="text-[10px] text-[#a49d8d] font-serif italic">{m.detail}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Copy Button */}
            <div className="mt-10 pt-6 border-t border-[#e9e3d6]/15 flex justify-end">
              <button
                onClick={handleCopyChapter}
                className="bg-[#0b0b0c] border border-[#e9e3d6]/30 hover:border-[#c2a15a] text-[#e9e3d6] font-mono text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-all flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-[#8fb892]" /> : <Copy className="w-4 h-4 text-[#c2a15a]" />}
                {copied ? 'Briefing Copied' : 'Copy Chapter Briefing'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
