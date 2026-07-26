import React, { useState } from 'react';
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
import { LocalHost } from './data/destinations';
import { DollarSign, ShieldCheck, BookOpen, Compass, Award, Sparkles, ArrowRight, CheckCircle2, QrCode, FileText, Camera, WifiOff, Lock } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [userType, setUserType] = useState<'domestic' | 'international'>('domestic');
  const [prefilledHost, setPrefilledHost] = useState<LocalHost | null>(null);
  const [isVisitingCardOpen, setIsVisitingCardOpen] = useState<boolean>(false);

  const handleSelectHostToTip = (host: LocalHost) => {
    setPrefilledHost(host);
    setActiveTab('microtipping');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-[#e9e3d6] flex flex-col font-serif selection:bg-[#7c2427] selection:text-[#e9e3d6]">
      
      {/* Navigation Header */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currency={currency}
        setCurrency={setCurrency}
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
                      Surveyed · Sealed · Assigned · Microtipped
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#e9e3d6] leading-[1.08] tracking-tight">
                      Private Coordination & <br />
                      <span className="italic text-[#c2a15a]">Microtipping Protocol</span> <br />
                      Across India.
                    </h1>

                    <p className="text-lg sm:text-xl font-serif text-[#a49d8d] leading-relaxed max-w-2xl">
                      Empowering solo wanderers—both domestic and international—with direct zero-friction microtipping, 6-pass safety vetting, and access to 8 unscripted, new-found Indian corridors.
                    </p>

                    {/* Mode Status Pill */}
                    <div className="inline-flex items-center gap-3 bg-[#111114] border border-[#e9e3d6]/20 p-3 rounded text-xs font-mono">
                      <span className="text-[#a49d8d]">Current Explorer Context:</span>
                      <span className="text-[#c2a15a] font-bold uppercase">
                        {userType === 'domestic' ? '🇮🇳 Domestic Explorer (INR ₹)' : '🌐 International Explorer (USD $)'}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        onClick={() => setActiveTab('microtipping')}
                        className="bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-widest font-bold py-3.5 px-6 rounded transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <QrCode className="w-4 h-4" /> Launch Microtip Dispatch
                      </button>
                      <button
                        onClick={() => setActiveTab('notebook')}
                        className="bg-[#111114] border border-[#e9e3d6]/30 hover:border-[#c2a15a] text-[#e9e3d6] font-mono text-xs uppercase tracking-widest py-3.5 px-6 rounded transition-all flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4 text-[#c2a15a]" /> Access Desk Notebook
                      </button>
                    </div>
                  </div>

                  {/* Right Column Seal & Metrics (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
                    
                    {/* SVG Seal Stage */}
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-4">
                      <svg className="w-full h-full animate-[spin_80s_linear_infinite]" viewBox="0 0 200 200">
                        <defs>
                          <path id="circPath" d="M100,100 m-66,0 a66,66 0 1,1 132,0 a66,66 0 1,1 -132,0" />
                        </defs>
                        <circle cx="100" cy="100" r="88" fill="none" stroke="#8f7738" strokeWidth="1.5" />
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#c2a15a" strokeWidth="0.8" />
                        <circle cx="100" cy="100" r="60" fill="none" stroke="#c2a15a" strokeWidth="0.8" />
                        <text font-family="Space Mono,monospace" font-size="9" letter-spacing="3.2" fill="#c2a15a">
                          <textPath href="#circPath" startOffset="0%">· SURVEYED · SEALED · ASSIGNED · THEINDIAPROJECT·WORLD</textPath>
                        </text>
                        <g className="rays" stroke="#c2a15a" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="160" y1="100" x2="182" y2="100" />
                          <line x1="100" y1="160" x2="100" y2="182" />
                          <line x1="40" y1="100" x2="18" y2="100" />
                          <line x1="100" y1="40" x2="100" y2="18" />
                          <line x1="142.4" y1="142.4" x2="157.3" y2="157.3" />
                          <line x1="57.6" y1="57.6" x2="42.7" y2="42.7" />
                          <line x1="142.4" y1="57.6" x2="157.3" y2="42.7" />
                          <line x1="57.6" y1="142.4" x2="42.7" y2="157.3" />
                        </g>
                        <circle cx="100" cy="100" r="14" fill="#c2a15a" />
                      </svg>
                    </div>

                    <div className="font-mono text-xs text-[#a49d8d] uppercase tracking-widest mt-2">
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
                  
                  {/* Module 1 */}
                  <div
                    onClick={() => setActiveTab('microtipping')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#c2a15a]/10 border border-[#c2a15a]/30 flex items-center justify-center text-[#c2a15a] mb-4 group-hover:scale-110 transition-transform">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">Business Module</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Microtipping Engine</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Direct-to-host UPI/Card gratuity engine. 100% payout to village boatmen, tea weavers, and monastic guides with SHA-256 public ledger verification.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#c2a15a] font-bold">
                      Open Engine <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 2 */}
                  <div
                    onClick={() => setActiveTab('solo-hub')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#8fb892]/10 border border-[#8fb892]/30 flex items-center justify-center text-[#8fb892] mb-4 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#8fb892] uppercase tracking-widest">Safety Matrix</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Solo Travel Hub</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Customized de-risking protocols for domestic & international solo travellers. 6-pass surveyor matrix, satellite mesh beacon, and emergency LZs.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#8fb892] font-bold">
                      Explore Protocols <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 3 */}
                  <div
                    onClick={() => setActiveTab('destinations')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#7c2427]/20 border border-[#7c2427]/40 flex items-center justify-center text-[#e9e3d6] mb-4 group-hover:scale-110 transition-transform">
                      <Compass className="w-6 h-6 text-[#c2a15a]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">Uncharted Corridors</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">New-Found Destinations</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Hand-surveyed off-beat corridors: Ziro, Spiti, Gurez, Dawki, Dholavira, Majuli, Chembra, and Shekhawati with pre-filled host tipping profiles.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#c2a15a] font-bold">
                      Inspect Corridors <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 4: Route Memo */}
                  <div
                    onClick={() => setActiveTab('memo-gen')}
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
                    onClick={() => setActiveTab('scanner')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#8fb892]/10 border border-[#8fb892]/30 flex items-center justify-center text-[#8fb892] mb-4 group-hover:scale-110 transition-transform">
                      <Camera className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#8fb892] uppercase tracking-widest">AI Vision Protocol</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Photo Aesthetic Matcher</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Analyze landscape photos to match terrain mood, color palette, and GPS coordinates with local host microtip channels.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#8fb892] font-bold">
                      Scan Photo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Module 6: Offline Queue */}
                  <div
                    onClick={() => setActiveTab('offline-queue')}
                    className="bg-[#111114] border border-[#e9e3d6]/20 p-8 rounded-sm hover:border-[#c2a15a] cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded bg-[#7c2427]/20 border border-[#7c2427]/40 flex items-center justify-center text-[#e9e3d6] mb-4 group-hover:scale-110 transition-transform">
                      <WifiOff className="w-6 h-6 text-[#c2a15a]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#c2a15a] uppercase tracking-widest">Zero-Cell Engine</span>
                    <h3 className="font-serif text-2xl text-[#e9e3d6] my-2">Offline Tip Queue & QR</h3>
                    <p className="text-sm font-serif text-[#a49d8d] leading-relaxed mb-4">
                      Queue microtips in local browser memory while in zero-cell mountain passes and print physical QR trailhead badges.
                    </p>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#c2a15a] font-bold">
                      Open Offline Queue <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>

              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Microtipping Engine */}
        {activeTab === 'microtipping' && (
          <MicrotipEngine
            currency={currency}
            userType={userType}
            prefilledHost={prefilledHost}
          />
        )}

        {/* Tab 3: Solo Travel Hub */}
        {activeTab === 'solo-hub' && (
          <SoloTravelHub
            userType={userType}
            setUserType={setUserType}
            currency={currency}
          />
        )}

        {/* Tab 4: New-Found Destinations Grid */}
        {activeTab === 'destinations' && (
          <DestinationsGrid
            currency={currency}
            onSelectHostToTip={handleSelectHostToTip}
          />
        )}

        {/* Tab 5: Access Notebook */}
        {activeTab === 'notebook' && (
          <AccessNotebook
            currency={currency}
          />
        )}

        {/* Tab 6: Route Memo Generator */}
        {activeTab === 'memo-gen' && (
          <RouteMemoGenerator
            userType={userType}
            currency={currency}
          />
        )}

        {/* Tab 7: Photo Matcher */}
        {activeTab === 'scanner' && (
          <ImageScanner
            currency={currency}
            onSelectHostToTip={handleSelectHostToTip}
          />
        )}

        {/* Tab 8: Offline Queue */}
        {activeTab === 'offline-queue' && (
          <OfflineTipQueue />
        )}

        {/* Tab 9: Business Model & Sustainability */}
        {activeTab === 'sustainability' && (
          <BusinessModel
            currency={currency}
          />
        )}

        {/* Tab 10: Desk AI Concierge */}
        {activeTab === 'concierge' && (
          <DeskConcierge
            userType={userType}
          />
        )}

        {/* Tab 11: Back Office Operator View */}
        {activeTab === 'backoffice' && (
          <BackOfficeView />
        )}

      </main>

      {/* Footer */}
      <Footer
        onOpenVisitingCard={() => setIsVisitingCardOpen(true)}
        setActiveTab={setActiveTab}
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
