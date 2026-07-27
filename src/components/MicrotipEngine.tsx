import React, { useState } from 'react';
import { NEW_FOUND_DESTINATIONS, LocalHost } from '../data/destinations';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, UserCheck, Package, Send, Lock } from 'lucide-react';

interface MicrotipEngineProps {
  userType: 'domestic' | 'international';
  prefilledHost?: LocalHost | null;
}

interface SupportLogEntry {
  id: string;
  timestamp: string;
  hostName: string;
  hostRole: string;
  destination: string;
  supportItem: string;
  hash: string;
  status: 'VERIFIED ON GROUND' | 'DISPATCHED';
}

const INITIAL_LOGS: SupportLogEntry[] = [
  {
    id: "log-901",
    timestamp: "12 mins ago",
    hostName: "Bah Suklang",
    hostRole: "Umngot Boatman & River Cleaner",
    destination: "Dawki, Meghalaya",
    supportItem: "Eco-Friendly Boat Hull Sealant & River Cleaning Net",
    hash: "3a89f9e12019b887102c912",
    status: "VERIFIED ON GROUND"
  },
  {
    id: "log-902",
    timestamp: "34 mins ago",
    hostName: "Lobsang Dorje",
    hostRole: "Monastic Guide & Tea Keeper",
    destination: "Spiti Valley, Himachal",
    supportItem: "Thermal Flask & Solar Battery Pack",
    hash: "7f41e0a29381c66299104fa",
    status: "VERIFIED ON GROUND"
  },
  {
    id: "log-903",
    timestamp: "1 hour ago",
    hostName: "Kojin Apatani",
    hostRole: "Village Eco-Guide & Weaver",
    destination: "Ziro Valley, Arunachal",
    supportItem: "Organic Cotton Threads & Solar Evening Lamp",
    hash: "b103c8479219803112349ae",
    status: "VERIFIED ON GROUND"
  },
  {
    id: "log-904",
    timestamp: "2 hours ago",
    hostName: "Farooq Shina",
    hostRole: "River Boatman & Storyteller",
    destination: "Gurez Valley, J&K",
    supportItem: "Cold-Weather Trail Radio & Waterproof Maps",
    hash: "e904a1127bc019388102377",
    status: "VERIFIED ON GROUND"
  }
];

export const MicrotipEngine: React.FC<MicrotipEngineProps> = ({ userType, prefilledHost }) => {
  const [selectedDestId, setSelectedDestId] = useState<string>(NEW_FOUND_DESTINATIONS[0].id);
  const selectedDest = NEW_FOUND_DESTINATIONS.find(d => d.id === selectedDestId) || NEW_FOUND_DESTINATIONS[0];
  
  const [selectedHostId, setSelectedHostId] = useState<string>(prefilledHost?.id || selectedDest.hosts[0]?.id || '');
  const selectedHost = selectedDest.hosts.find(h => h.id === selectedHostId) || selectedDest.hosts[0];

  const [customSupportNote, setCustomSupportNote] = useState<string>('');
  const [dispatchedReceipt, setDispatchedReceipt] = useState<SupportLogEntry | null>(null);
  const [logs, setLogs] = useState<SupportLogEntry[]>(INITIAL_LOGS);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleDispatchSupport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHost) return;

    setIsProcessing(true);

    setTimeout(() => {
      const newHash = Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const newEntry: SupportLogEntry = {
        id: `log-${Date.now().toString().slice(-4)}`,
        timestamp: "Just now",
        hostName: selectedHost.name,
        hostRole: selectedHost.role,
        destination: selectedDest.name,
        supportItem: customSupportNote || selectedHost.impactNeeds,
        hash: newHash,
        status: "VERIFIED ON GROUND"
      };

      setLogs([newEntry, ...logs]);
      setDispatchedReceipt(newEntry);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] font-serif border-t border-[#e9e3d6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            Ground Host Network · Non-Monetary Support Protocol
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            Direct Ground Host Connection & Support
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Connect directly with verified local boatmen, weavers, and monastic guides across off-beat corridors. 
            Dispatch resource support gestures under seal with instant cryptographic verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Corridor & Host Selection (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm">
            <h3 className="font-serif text-2xl text-[#e9e3d6] mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#c2a15a]" />
              Select Corridor & Verified Ground Host
            </h3>

            <form onSubmit={handleDispatchSupport} className="space-y-6">
              
              {/* Step 1: Select Corridor */}
              <div>
                <label className="block font-mono text-xs text-[#a49d8d] uppercase tracking-wider mb-2">
                  1. Target Corridor Sector
                </label>
                <select
                  value={selectedDestId}
                  onChange={(e) => {
                    setSelectedDestId(e.target.value);
                    const dest = NEW_FOUND_DESTINATIONS.find(d => d.id === e.target.value);
                    if (dest && dest.hosts.length > 0) {
                      setSelectedHostId(dest.hosts[0].id);
                    }
                  }}
                  className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/30 text-[#e9e3d6] p-3 rounded font-serif focus:border-[#c2a15a] focus:outline-none"
                >
                  {NEW_FOUND_DESTINATIONS.map(d => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.state})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Host Card Display */}
              <div>
                <label className="block font-mono text-xs text-[#a49d8d] uppercase tracking-wider mb-2">
                  2. Verified Local Host Profile
                </label>
                {selectedDest.hosts.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDest.hosts.map(host => (
                      <div
                        key={host.id}
                        onClick={() => setSelectedHostId(host.id)}
                        className={`p-4 rounded border cursor-pointer transition-all ${
                          selectedHostId === host.id
                            ? 'bg-[#c2a15a]/10 border-[#c2a15a]'
                            : 'bg-[#0b0b0c] border-[#e9e3d6]/20 hover:border-[#e9e3d6]/40'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-bold text-[#e9e3d6] text-lg flex items-center gap-2">
                              {host.name}
                              {host.verified && (
                                <span className="bg-[#8fb892]/20 text-[#8fb892] font-mono text-[9px] px-1.5 py-0.5 rounded border border-[#8fb892]/40">
                                  VERIFIED HOST
                                </span>
                              )}
                            </div>
                            <div className="font-mono text-xs text-[#c2a15a] mt-0.5">{host.role} · {host.location}</div>
                            <p className="text-sm text-[#a49d8d] mt-2 italic font-serif">"{host.story}"</p>
                          </div>
                        </div>

                        {/* Impact Need Highlight */}
                        <div className="mt-3 pt-3 border-t border-[#e9e3d6]/10 flex items-center justify-between text-xs font-mono">
                          <span className="text-[#a49d8d]">Primary Ground Need:</span>
                          <span className="text-[#c2a15a] font-semibold">{host.impactNeeds}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-[#0b0b0c] border border-[#e9e3d6]/20 text-[#a49d8d] text-sm">
                    Direct host registration underway for this sector.
                  </div>
                )}
              </div>

              {/* Step 3: Custom Support Note */}
              <div>
                <label className="block font-mono text-xs text-[#a49d8d] uppercase tracking-wider mb-2">
                  3. Custom Support Note or Resource Specification (Optional)
                </label>
                <textarea
                  value={customSupportNote}
                  onChange={(e) => setCustomSupportNote(e.target.value)}
                  placeholder={`Default: ${selectedHost?.impactNeeds || 'Eco-trail equipment & supplies'}`}
                  rows={2}
                  className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/30 text-[#e9e3d6] p-3 rounded font-serif focus:border-[#c2a15a] focus:outline-none text-sm"
                />
              </div>

              {/* Dispatch Button */}
              <button
                type="submit"
                disabled={isProcessing || !selectedHost}
                className="w-full bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono font-bold uppercase tracking-widest py-4 px-6 rounded transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isProcessing ? (
                  <>Verifying & Dispatching Under Seal...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Dispatch Host Support Memorandum
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Dispatch Receipt & Verification (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {dispatchedReceipt ? (
              <div className="bg-[#111114] border border-[#c2a15a] p-6 rounded-sm space-y-4 animate-fade-in shadow-xl">
                <div className="flex items-center gap-2 text-[#8fb892] font-mono text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5" /> Host Support Dispatched Under Seal
                </div>
                
                <h4 className="font-serif text-2xl text-[#e9e3d6] border-b border-[#e9e3d6]/15 pb-3">
                  Verification Receipt
                </h4>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#a49d8d]">Recipient Host:</span>
                    <span className="text-[#e9e3d6] font-bold">{dispatchedReceipt.hostName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a49d8d]">Role:</span>
                    <span className="text-[#c2a15a]">{dispatchedReceipt.hostRole}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a49d8d]">Corridor:</span>
                    <span className="text-[#e9e3d6]">{dispatchedReceipt.destination}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#e9e3d6]/10 pt-2">
                    <span className="text-[#a49d8d]">Support Gesture:</span>
                    <span className="text-[#8fb892] font-serif italic text-right">{dispatchedReceipt.supportItem}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#e9e3d6]/10 pt-2">
                    <span className="text-[#a49d8d]">Hash Stamp:</span>
                    <span className="text-[#a49d8d] font-mono text-[10px] truncate max-w-[180px]">{dispatchedReceipt.hash}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e9e3d6]/15 text-center">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#c2a15a] bg-[#c2a15a]/10 px-3 py-1 rounded border border-[#c2a15a]/30">
                    <Lock className="w-3 h-3" /> IMMUTABLE GROUND RECORD
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm text-center py-12">
                <HeartHandshake className="w-12 h-12 text-[#c2a15a]/60 mx-auto mb-4" />
                <h4 className="font-serif text-xl text-[#e9e3d6] mb-2">Direct Ground Impact</h4>
                <p className="text-sm text-[#a49d8d] font-serif leading-relaxed max-w-sm mx-auto">
                  Every support memorandum dispatched directly reaches verified local hosts in off-beat corridors, providing essential equipment, eco-materials, and trail safety resources.
                </p>
              </div>
            )}

            {/* Protocol Guarantee Box */}
            <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-[#c2a15a] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> 6-Pass Host Verification Guarantee
              </div>
              <p className="text-xs text-[#a49d8d] leading-relaxed font-serif">
                Ground hosts are individually audited in situ by lead surveyors. Support gestures are non-commercial and dedicated to local environmental preservation and community safety.
              </p>
            </div>

          </div>

        </div>

        {/* Live Ground Support Logs Table */}
        <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b border-[#e9e3d6]/15">
            <div>
              <h3 className="font-serif text-2xl text-[#e9e3d6]">Verified Ground Support Logs</h3>
              <p className="text-xs font-mono text-[#a49d8d] uppercase tracking-wider mt-1">
                Real-time record of verified support gestures across Indian corridors
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#e9e3d6]/15 font-mono text-[10px] uppercase tracking-wider text-[#a49d8d]">
                  <th className="py-2.5 px-3">Timestamp</th>
                  <th className="py-2.5 px-3">Host</th>
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3">Corridor</th>
                  <th className="py-2.5 px-3">Support Item</th>
                  <th className="py-2.5 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e9e3d6]/10 text-xs font-serif">
                {logs.map((entry) => (
                  <tr key={entry.id} className="hover:bg-[#e9e3d6]/5 transition-colors">
                    <td className="py-3 px-3 font-mono text-[11px] text-[#a49d8d]">{entry.timestamp}</td>
                    <td className="py-3 px-3 text-[#e9e3d6] font-medium">{entry.hostName}</td>
                    <td className="py-3 px-3 text-[#a49d8d]">{entry.hostRole}</td>
                    <td className="py-3 px-3 text-[#c2a15a]">{entry.destination}</td>
                    <td className="py-3 px-3 text-[#e9e3d6] italic">{entry.supportItem}</td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-flex items-center gap-1 bg-[#8fb892]/10 border border-[#8fb892]/30 text-[#8fb892] font-mono text-[9px] px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" /> {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
