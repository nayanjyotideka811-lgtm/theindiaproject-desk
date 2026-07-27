import React, { useState } from 'react';
import { Compass, ShieldCheck, BookOpen, Users, Globe, Sparkles, FileText, Camera, Menu, X, UserCheck } from 'lucide-react';
import { SunSealLogo } from './SunSealLogo';

interface HeaderNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userType: 'domestic' | 'international';
  setUserType: (type: 'domestic' | 'international') => void;
  openVisitingCard: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  userType,
  setUserType,
  openVisitingCard,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'destinations', label: 'Corridors', icon: Compass },
    { id: 'solo-hub', label: 'Solo Briefing', icon: ShieldCheck },
    { id: 'hosts', label: 'Host Network', icon: UserCheck },
    { id: 'notebook', label: 'Field Intelligence', icon: BookOpen },
    { id: 'scanner', label: 'Corridor Matcher', icon: Camera },
    { id: 'memo-gen', label: 'Request Route Brief', icon: FileText },
    { id: 'concierge', label: 'Desk Concierge', icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0c]/95 backdrop-blur-md border-b border-[#e9e3d6]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Seal & Title */}
          <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => { setActiveTab('hero'); setMobileMenuOpen(false); }}>
            <SunSealLogo size="sm" idSuffix="nav" />
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#e9e3d6] uppercase font-bold flex items-center gap-1">
                theindiaproject<span className="text-[#c2a15a]">.world</span>
              </div>
              <div className="text-[9.5px] font-mono tracking-widest text-[#a49d8d] uppercase">
                Private Coordination Desk · Under Seal
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-[10.5px] tracking-wider">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded transition-all ${
                    isActive
                      ? 'text-[#c2a15a] bg-[#c2a15a]/10 border border-[#c2a15a]/30 font-bold'
                      : 'text-[#a49d8d] hover:text-[#e9e3d6] hover:bg-[#e9e3d6]/5'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Traveler Type & Desk Card Badge */}
          <div className="flex items-center gap-2">
            {/* Traveler Mode Toggle */}
            <div className="bg-[#111114] border border-[#e9e3d6]/20 p-0.5 rounded flex items-center font-mono text-[10px]">
              <button
                onClick={() => setUserType('domestic')}
                className={`px-2 py-1 rounded transition-all ${
                  userType === 'domestic'
                    ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold'
                    : 'text-[#a49d8d] hover:text-[#e9e3d6]'
                }`}
              >
                🇮🇳 Domestic
              </button>
              <button
                onClick={() => setUserType('international')}
                className={`px-2 py-1 rounded transition-all ${
                  userType === 'international'
                    ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold'
                    : 'text-[#a49d8d] hover:text-[#e9e3d6]'
                }`}
              >
                🌐 Int'l
              </button>
            </div>

            {/* Visiting Card Desk Badge */}
            <button
              onClick={openVisitingCard}
              className="bg-[#7c2427]/80 hover:bg-[#7c2427] text-[#e9e3d6] text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border border-[#7c2427] transition-all shadow-sm"
            >
              Desk Card
            </button>

            {/* Direct Door to Back Office */}
            <button
              onClick={() => setActiveTab('backoffice')}
              className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border transition-all shadow-sm flex items-center gap-1 ${
                activeTab === 'backoffice'
                  ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold border-[#c2a15a]'
                  : 'bg-[#111114] hover:bg-[#c2a15a]/20 border-[#c2a15a]/50 text-[#c2a15a]'
              }`}
            >
              Back Office 🔒
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#e9e3d6] p-1.5 rounded hover:bg-[#e9e3d6]/10 ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#c2a15a]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0b0b0c] border-t border-[#e9e3d6]/15 py-4 px-2 space-y-1 font-mono text-xs animate-fade-in">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 rounded transition-all text-left ${
                    isActive
                      ? 'text-[#c2a15a] bg-[#c2a15a]/10 border border-[#c2a15a]/30 font-bold'
                      : 'text-[#a49d8d] hover:text-[#e9e3d6] hover:bg-[#e9e3d6]/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#c2a15a]" />
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                setActiveTab('backoffice');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2.5 rounded transition-all text-left text-[#c2a15a] bg-[#c2a15a]/10 border border-[#c2a15a]/30 font-bold mt-2"
            >
              Back Office Door 🔒
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
