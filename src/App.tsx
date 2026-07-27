import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { MicrotipEngine } from './components/MicrotipEngine';
import { SoloTravelHub } from './components/SoloTravelHub';
import { DestinationsGrid } from './components/DestinationsGrid';
import { AccessNotebook } from './components/AccessNotebook';
import { BusinessModel } from './components/BusinessModel';
import { DeskConcierge } from './components/DeskConcierge';
import { RouteMemoGenerator } from './components/RouteMemoGenerator';
import { ImageScanner } from './components/ImageScanner';
import { OfflineTipQueue } from './components/OfflineTipQueue';
import { BackOfficeView } from './components/BackOfficeView';
import { Footer } from './components/Footer';
import { VisitingCardModal } from './components/VisitingCardModal';
import { SunSealLogo } from './components/SunSealLogo';
import { LocalHost } from './data/destinations';
import { ShieldCheck, BookOpen, Compass, ArrowRight, FileText, Camera, UserCheck } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [userType, setUserType] = useState<'domestic' | 'international'>('domestic');
  const [prefilledHost, setPrefilledHost] = useState<LocalHost | null>(null);
  const [isVisitingCardOpen, setIsVisitingCardOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveTab(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHostToConnect = (host: LocalHost) => {
    setPrefilledHost(host);
    handleSetActiveTab('hosts');
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-[#e9e3d6] flex flex-col font-serif selection:bg-[#7c2427] selection:text-[#e9e3d6]">
      
      {/* Navigation Header */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        userType={userType}
        setUserType={setUserType}
        openVisitingCard={() => setIsVisitingCardOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        
        {/* HERO / OVERVIEW SECTION */}
        {(activeTab === 'hero' || activeTab === 'overview') && (
          <div>
            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[#e9e3d6]/15 bg-gradient-to-b from-[#0b0b0c] via-[#111114] to-[#0b0b0c]">
              
              {/* Background Topo & Light Glow */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c2a15a_1px,transparent_1px)] [background-size:24px_24px]" />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column Text (7 Cols) */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="inline-flex items-center gap-2 border border-[#c2a15a]/40 bg-[#c2a15a]/10 px-3 py-1 rounded text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#c2a15a]">
                      <span className="w-2 h-2 rounded-full bg-[#c2a15a] animate-ping" />
                      Surveyed · Sealed · Assigned · Under Seal
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#e9e3d6] leading-[1.08] tracking-tight">
                      Private Coordination & <br />
                      <span className="italic text-[#c2a15a]">Hand-Surveyed Corridors</span> <br />
                      Across India.
                    </h1>

                    <p className="text-lg sm:text-xl font-serif text-[#a49d8d] leading-relaxed max-w-2xl">
                      Empowering solo wanderers—both domestic and international—with 6-pass safety vetting, unscripted corridor access, and direct verified ground host connections.
                    </p>

                    {/* Mode Status Pill */}
                    <div className="inline-flex items-center gap-3 bg-[#111114] border border-[#e9e3d6]/20 p-3 rounded text-xs font-mono">
                      <span className="text-[#a49d8d]">Explorer Context:</span>
                      <span className="text-[#c2a15a] font-bold uppercase">
                        {userType === 'domestic' ? '🇮🇳 Domestic Wanderer' : '🌐 International Wanderer'}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        onClick={() => handleSetActiveTab('destinations')}
                        className="bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-widest font-bold py-3.5 px-6 rounded transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <Compass className="w-4 h-4" /> Explore Uncharted Corridors
                      </button>
                      <button
                        onClick={() => handleSetActiveTab('solo-hub')}
                        className="bg-[#111114] border border-[#e9e3d6]/30 hover:border-[#c2a15a] text-[#e9e3d6] font-mono text-xs uppercase tracking-widest py-3.5 px-6 rounded transition-all flex items-center gap-2"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#c2a15a]" /> Solo Safety Briefing
                      </button>
                    </div>
                  </div>

                  {/* Right Column Rotating Sun Seal Logo (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
                    
                    {/* Iconic Rotating Glowing Sun Seal */}
                    <div className="my-4">
                      <SunSealLogo size="xl" useGif={true} />
                    </div>

                    <div className="font-mono text-xs text-[#a49d8d] uppercase tracking-widest mt-4">
                      EST · UNDER SEAL // GURGAON DESK
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* Quick Feature Modules Highlights Grid (6 Cards) */}
            <section className="py-16 bg-[#0b0b0c] text-[#e9e3d6]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Module 1: Corridors */}
                  <div
                    onClick={() => handleSetActiveTab('destinations')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#7c2427]/20 border border-[#7c2427]/40 flex items-center justify-center text-[#e9e3d6] mb-4 group-hover:scale-110 transition-transform">
                      <Compass className="w-6 h-6 text-[#c2a15a]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">Uncharted Corridors</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">New-Found Destinations</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Hand-surveyed off-beat corridors: Ziro, Spiti, Gurez, Dawki, Dholavira, Majuli, Chembra, and Shekhawati with verified local host profiles.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#c2a15a] font-bold">
                      Inspect Corridors <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 2: Solo Hub */}
                  <div
                    onClick={() => handleSetActiveTab('solo-hub')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#8fb892]/10 border border-[#8fb892]/30 flex items-center justify-center text-[#8fb892] mb-4 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#8fb892] uppercase tracking-widest">Safety Matrix</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Solo Travel Hub</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Customized de-risking protocols for domestic & international solo travellers. 6-pass surveyor matrix and satellite mesh beacon.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#8fb892] font-bold">
                      Explore Protocols <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 3: Ground Host Network */}
                  <div
                    onClick={() => handleSetActiveTab('hosts')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#c2a15a]/10 border border-[#c2a15a]/30 flex items-center justify-center text-[#c2a15a] mb-4 group-hover:scale-110 transition-transform">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">Ground Network</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Ground Host Connections</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Direct connection to village boatmen, tea weavers, and monastic guides. Dispatch resource support gestures under seal with verification logs.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#c2a15a] font-bold">
                      Connect Hosts <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 4: Route Memo */}
                  <div
                    onClick={() => handleSetActiveTab('memo-gen')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#c2a15a]/10 border border-[#c2a15a]/30 flex items-center justify-center text-[#c2a15a] mb-4 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">Case Brief Engine</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Sealed Route Memo</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Generate an official 6-Pass verified Case Brief with SHA-256 hash signature, transit leg matrix, and emergency medical LZ coordinates.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#c2a15a] font-bold">
                      Generate Case Brief <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 5: Photo Matcher */}
                  <div
                    onClick={() => handleSetActiveTab('scanner')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#8fb892]/10 border border-[#8fb892]/30 flex items-center justify-center text-[#8fb892] mb-4 group-hover:scale-110 transition-transform">
                      <Camera className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#8fb892] uppercase tracking-widest">AI Vision Protocol</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Photo Aesthetic Matcher</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Analyze landscape photos to match terrain mood, color palette, and GPS coordinates with local host corridors.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#8fb892] font-bold">
                      Scan Photo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 6: Field Intelligence Notebook */}
                  <div
                    onClick={() => handleSetActiveTab('notebook')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#c2a15a]/10 border border-[#c2a15a]/30 flex items-center justify-center text-[#c2a15a] mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-[#c2a15a]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">Field Intelligence</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Surveyor Notebook</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Under-seal surveyor logs detailing regional cultural protocols, dialect guides, solo risk matrices, and off-grid topography.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#c2a15a] font-bold">
                      Access Notebook <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>

              </div>
            </section>
          </div>
        )}

        {/* Tab: Ground Host Network */}
        {(activeTab === 'hosts' || activeTab === 'microtipping') && (
          <MicrotipEngine
            userType={userType}
            prefilledHost={prefilledHost}
          />
        )}

        {/* Tab: Solo Travel Hub */}
        {activeTab === 'solo-hub' && (
          <SoloTravelHub
            userType={userType}
            setUserType={setUserType}
          />
        )}

        {/* Tab: Uncharted Destinations Grid */}
        {activeTab === 'destinations' && (
          <DestinationsGrid
            onSelectHostToConnect={handleSelectHostToConnect}
          />
        )}

        {/* Tab: Field Intelligence Notebook */}
        {activeTab === 'notebook' && (
          <AccessNotebook />
        )}

        {/* Tab: Route Memo Generator */}
        {activeTab === 'memo-gen' && (
          <RouteMemoGenerator
            userType={userType}
          />
        )}

        {/* Tab: Photo Matcher */}
        {activeTab === 'scanner' && (
          <ImageScanner
            onSelectHostToConnect={handleSelectHostToConnect}
          />
        )}

        {/* Tab: Offline Queue (Operator Tool) */}
        {activeTab === 'offline-queue' && (
          <OfflineTipQueue />
        )}

        {/* Tab: Business Sustainability (Operator Document) */}
        {activeTab === 'sustainability' && (
          <BusinessModel />
        )}

        {/* Tab: Desk AI Concierge */}
        {activeTab === 'concierge' && (
          <DeskConcierge
            userType={userType}
          />
        )}

        {/* Tab: Back Office Operator View */}
        {activeTab === 'backoffice' && (
          <BackOfficeView />
        )}

      </main>

      {/* Footer */}
      <Footer
        onOpenVisitingCard={() => setIsVisitingCardOpen(true)}
        setActiveTab={handleSetActiveTab}
      />

      {/* Visiting Card Modal */}
      <VisitingCardModal
        isOpen={isVisitingCardOpen}
        onClose={() => setIsVisitingCardOpen(false)}
      />

    </div>
  );
}

export default App;
