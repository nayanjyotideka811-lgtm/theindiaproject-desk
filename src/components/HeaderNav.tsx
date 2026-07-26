import React, { useState } from 'react';
import { Compass, ShieldCheck, BookOpen, DollarSign, Globe, Award, Sparkles, FileText, Camera, WifiOff, Lock, Menu, X } from 'lucide-react';

interface HeaderNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currency: 'INR' | 'USD';
  setCurrency: (currency: 'INR' | 'USD') => void;
  userType: 'domestic' | 'international';
  setUserType: (type: 'domestic' | 'international') => void;
  openVisitingCard: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  userType,
  setUserType,
  openVisitingCard,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'microtipping', label: 'Microtip Engine', icon: DollarSign },
    { id: 'solo-hub', label: 'Solo Hub', icon: ShieldCheck },
    { id: 'destinations', label: 'Corridors', icon: Compass },
    { id: 'notebook', label: 'Access Notebook', icon: BookOpen },
    { id: 'memo-gen', label: 'Route Memo', icon: FileText },
    { id: 'scanner', label: 'Photo Matcher', icon: Camera },
    { id: 'offline-queue', label: 'Offline Queue', icon: WifiOff },
    { id: 'sustainability', label: 'Business Model', icon: Award },
    { id: 'concierge', label: 'Desk Concierge', icon: Sparkles },
    { id: 'backoffice', label: 'Back Office', icon: Lock },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0c]/95 backdrop-blur-md border-b border-[#e9e3d6]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Seal & Title */}
          <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => { setActiveTab('hero'); setMobileMenuOpen(false); }}>
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
              <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="88" fill="none" stroke="#8f7738" strokeWidth="2" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="#c2a15a" strokeWidth="1" />
                <g stroke="#c2a15a" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="160" y1="100" x2="182" y2="100" />
                  <line x1="100" y1="160" x2="100" y2="182" />
                  <line x1="40" y1="100" x2="18" y2="100" />
                  <line x1="100" y1="40" x2="100" y2="18" />
                </g>
                <circle cx="100" cy="100" r="14" fill="#c2a15a" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.2em] text-[#e9e3d6] uppercase font-bold flex items-center gap-1">
                theindiaproject<span className="text-[#c2a15a]">.world</span>
              </div>
              <div className="text-[9.5px] font-mono tracking-widest text-[#a49d8d] uppercase">
                Microtipping Protocol · Solo Desk
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 font-mono text-[11px] tracking-wider">
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

          {/* Traveler Type, Currency & Desk Card Badge */}
          <div className="flex items-center gap-2">
            {/* Traveler Toggle */}
            <div className="bg-[#111114] border border-[#e9e3d6]/20 p-0.5 rounded flex items-center font-mono text-[10px]">
              <button
                onClick={() => {
                  setUserType('domestic');
                  setCurrency('INR');
                }}
                className={`px-2 py-1 rounded transition-all ${
                  userType === 'domestic'
                    ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold'
                    : 'text-[#a49d8d] hover:text-[#e9e3d6]'
                }`}
              >
                🇮🇳 Dom
              </button>
              <button
                onClick={() => {
                  setUserType('international');
                  setCurrency('USD');
                }}
                className={`px-2 py-1 rounded transition-all ${
                  userType === 'international'
                    ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold'
                    : 'text-[#a49d8d] hover:text-[#e9e3d6]'
                }`}
              >
                🌐 Int'l
              </button>
            </div>

            {/* Currency Pill */}
            <button
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="hidden sm:flex items-center gap-1 bg-[#111114] border border-[#c2a15a]/40 text-[#c2a15a] hover:bg-[#c2a15a]/10 px-2 py-1 rounded font-mono text-[10px] uppercase tracking-wider"
              title="Click to toggle currency"
            >
              <Globe className="w-3 h-3" />
              {currency === 'INR' ? 'INR (₹)' : 'USD ($)'}
            </button>

            {/* Visiting Card Desk Badge */}
            <button
              onClick={openVisitingCard}
              className="bg-[#7c2427]/80 hover:bg-[#7c2427] text-[#e9e3d6] text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border border-[#7c2427] transition-all shadow-sm"
            >
              Desk Card
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-[#e9e3d6] p-1.5 rounded hover:bg-[#e9e3d6]/10 ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#c2a15a]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0b0b0c] border-t border-[#e9e3d6]/15 py-4 px-2 space-y-1 font-mono text-xs animate-fade-in">
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
          </div>
        )}
      </div>
    </header>
  );
};
