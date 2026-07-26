import React, { useState } from 'react';
import { NEW_FOUND_DESTINATIONS, LocalHost, Destination } from '../data/destinations';
import { DollarSign, CheckCircle2, QrCode, ArrowRight, ShieldCheck, HeartHandshake, RefreshCw, Zap, Award } from 'lucide-react';

interface MicrotipEngineProps {
  currency: 'INR' | 'USD';
  userType: 'domestic' | 'international';
  prefilledHost?: LocalHost | null;
}

interface LedgerEntry {
  id: string;
  timestamp: string;
  hostName: string;
  hostRole: string;
  destination: string;
  amountInr: number;
  amountUsd: number;
  protocolFeeInr: number;
  protocolFeeUsd: number;
  currency: 'INR' | 'USD';
  hash: string;
  status: 'VERIFIED ON GROUND' | 'SETTLING';
}

const INITIAL_LEDGER: LedgerEntry[] = [
  {
    id: "tip-901",
    timestamp: "12 mins ago",
    hostName: "Bah Suklang",
    hostRole: "Umngot Boatman & River Cleaner",
    destination: "Dawki, Meghalaya",
    amountInr: 250,
    amountUsd: 3.0,
    protocolFeeInr: 12.5,
    protocolFeeUsd: 0.15,
    currency: "INR",
    hash: "3a89f9e12019b887102c912",
    status: "VERIFIED ON GROUND"
  },
  {
    id: "tip-902",
    timestamp: "34 mins ago",
    hostName: "Lobsang Dorje",
    hostRole: "Monastic Guide & Tea Keeper",
    destination: "Spiti Valley, Himachal",
    amountInr: 500,
    amountUsd: 6.0,
    protocolFeeInr: 25.0,
    protocolFeeUsd: 0.30,
    currency: "USD",
    hash: "7f41e0a29381c66299104fa",
    status: "VERIFIED ON GROUND"
  },
  {
    id: "tip-903",
    timestamp: "1 hour ago",
    hostName: "Kojin Apatani",
    hostRole: "Village Eco-Guide & Weaver",
    destination: "Ziro Valley, Arunachal",
    amountInr: 300,
    amountUsd: 4.0,
    protocolFeeInr: 15.0,
    protocolFeeUsd: 0.20,
    currency: "INR",
    hash: "b103c8479219803112349ae",
    status: "VERIFIED ON GROUND"
  },
  {
    id: "tip-904",
    timestamp: "2 hours ago",
    hostName: "Farooq Shina",
    hostRole: "River Boatman & Storyteller",
    destination: "Gurez Valley, J&K",
    amountInr: 200,
    amountUsd: 2.5,
    protocolFeeInr: 10.0,
    protocolFeeUsd: 0.12,
    currency: "INR",
    hash: "e904a1127bc019388102377",
    status: "VERIFIED ON GROUND"
  }
];

export const MicrotipEngine: React.FC<MicrotipEngineProps> = ({ currency, userType, prefilledHost }) => {
  const [selectedDestId, setSelectedDestId] = useState<string>(NEW_FOUND_DESTINATIONS[0].id);
  const selectedDest = NEW_FOUND_DESTINATIONS.find(d => d.id === selectedDestId) || NEW_FOUND_DESTINATIONS[0];
  
  const [selectedHostId, setSelectedHostId] = useState<string>(selectedDest.hosts[0]?.id || '');
  const selectedHost = selectedDest.hosts.find(h => h.id === selectedHostId) || selectedDest.hosts[0];

  const defaultAmount = currency === 'INR' ? (selectedHost?.suggestedTipInr || 250) : (selectedHost?.suggestedTipUsd || 3);
  const [tipAmount, setTipAmount] = useState<number>(defaultAmount);
  const [includeProtocolFee, setIncludeProtocolFee] = useState<boolean>(true);
  const [donorNote, setDonorNote] = useState<string>('');
  
  const [dispatchedReceipt, setDispatchedReceipt] = useState<LedgerEntry | null>(null);
  const [ledger, setLedger] = useState<LedgerEntry[]>(INITIAL_LEDGER);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const protocolFee = includeProtocolFee ? Math.round(tipAmount * 0.05 * 100) / 100 : 0;
  const totalCharge = Math.round((tipAmount + protocolFee) * 100) / 100;

  // Impact estimation logic
  const getImpactDescription = (amount: number, curr: 'INR' | 'USD') => {
    const inrValue = curr === 'USD' ? amount * 83 : amount;
    if (inrValue < 150) return "Provides 1 day of organic tea garden tools & firewood refill.";
    if (inrValue < 300) return "Funds a child's weekly school textbook set & eco-trail cleanup supplies.";
    if (inrValue < 600) return "Covers boat hull eco-resins or weaving loom wire repairs.";
    return "Supports 1 week of solar battery charging & village water filter upgrades.";
  };

  const handleDispatch = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const randomHash = Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const amountInr = currency === 'INR' ? tipAmount : Math.round(tipAmount * 83);
      const amountUsd = currency === 'USD' ? tipAmount : Math.round((tipAmount / 83) * 10) / 10;

      const newEntry: LedgerEntry = {
        id: `tip-${Date.now().toString().slice(-4)}`,
        timestamp: "Just now",
        hostName: selectedHost.name,
        hostRole: selectedHost.role,
        destination: selectedDest.name + ", " + selectedDest.state,
        amountInr,
        amountUsd,
        protocolFeeInr: Math.round(amountInr * 0.05 * 10) / 10,
        protocolFeeUsd: Math.round(amountUsd * 0.05 * 100) / 100,
        currency,
        hash: randomHash,
        status: "VERIFIED ON GROUND"
      };

      setLedger([newEntry, ...ledger]);
      setDispatchedReceipt(newEntry);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            Core Business Module · Peer-to-Ground Protocol
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            Frictionless Microtipping for Solo Travelers
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Directly empower remote indigenous hosts, boatmen, guides, and tea artisans in India's uncharted corridors. 
            <span className="text-[#c2a15a]"> 100% of recipient tips go straight to local bank/UPI accounts</span> with zero intermediary platform leakage.
          </p>
        </div>

        {/* Top Metric Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e9e3d6]/15 border border-[#e9e3d6]/15 mb-12">
          <div className="bg-[#111114] p-6 text-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#a49d8d]">Direct Host Share</div>
            <div className="font-serif text-3xl text-[#c2a15a] mt-2 font-light">100.0%</div>
            <div className="text-xs text-[#a49d8d] mt-1 font-serif">Zero deductions from host</div>
          </div>
          <div className="bg-[#111114] p-6 text-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#a49d8d]">Verified Local Hosts</div>
            <div className="font-serif text-3xl text-[#e9e3d6] mt-2 font-light">142 Active</div>
            <div className="text-xs text-[#a49d8d] mt-1 font-serif">Across 8 Uncharted Corridors</div>
          </div>
          <div className="bg-[#111114] p-6 text-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#a49d8d]">Protocol Velocity</div>
            <div className="font-serif text-3xl text-[#8fb892] mt-2 font-light">4.2x Impact</div>
            <div className="text-xs text-[#a49d8d] mt-1 font-serif">Direct economic re-spending</div>
          </div>
          <div className="bg-[#111114] p-6 text-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#a49d8d]">Ledger Integrity</div>
            <div className="font-serif text-3xl text-[#c2a15a] mt-2 font-light">SHA-256</div>
            <div className="text-xs text-[#a49d8d] mt-1 font-serif">Immutable transaction hash</div>
          </div>
        </div>

        {/* Main Dispatcher UI & Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Dispatcher Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm">
            <div className="flex items-center justify-between border-b border-[#e9e3d6]/15 pb-4 mb-6">
              <h3 className="font-serif text-2xl text-[#e9e3d6] font-normal flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#c2a15a]" />
                Microtip Dispatch Console
              </h3>
              <div className="font-mono text-[10px] uppercase text-[#c2a15a] tracking-widest border border-[#c2a15a]/40 px-2 py-0.5 rounded">
                Mode: {userType === 'domestic' ? 'Domestic UPI' : 'Intl Card Protocol'}
              </div>
            </div>

            {/* Step 1: Destination Selection */}
            <div className="mb-6">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-[#a49d8d] mb-2">
                1. Select New-Found Corridor
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
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-base px-4 py-2.5 rounded focus:border-[#c2a15a] focus:outline-none"
              >
                {NEW_FOUND_DESTINATIONS.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.state}) — {d.region}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Host Selection */}
            <div className="mb-6">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-[#a49d8d] mb-2">
                2. Select Recipient Local Host
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedDest.hosts.map(host => (
                  <div
                    key={host.id}
                    onClick={() => setSelectedHostId(host.id)}
                    className={`cursor-pointer border p-3 rounded transition-all ${
                      selectedHostId === host.id
                        ? 'border-[#c2a15a] bg-[#c2a15a]/10'
                        : 'border-[#e9e3d6]/15 bg-[#0b0b0c] hover:border-[#e9e3d6]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-serif font-medium text-[#e9e3d6]">{host.name}</div>
                      {host.verified && <CheckCircle2 className="w-4 h-4 text-[#8fb892]" />}
                    </div>
                    <div className="text-xs text-[#a49d8d] font-serif mt-0.5">{host.role}</div>
                    <div className="text-[10px] font-mono text-[#c2a15a] mt-2">
                      Suggested: {currency === 'INR' ? `₹${host.suggestedTipInr}` : `$${host.suggestedTipUsd}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Amount Selection */}
            <div className="mb-6">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-[#a49d8d] mb-2">
                3. Choose Microtip Amount ({currency})
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {(currency === 'INR' ? [50, 150, 250, 500, 1000] : [1, 3, 5, 10, 20]).map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setTipAmount(amt)}
                    className={`px-4 py-2 font-mono text-xs rounded transition-all ${
                      tipAmount === amt
                        ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold'
                        : 'bg-[#0b0b0c] border border-[#e9e3d6]/20 text-[#e9e3d6] hover:border-[#c2a15a]'
                    }`}
                  >
                    {currency === 'INR' ? `₹${amt}` : `$${amt}`}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={tipAmount}
                  onChange={(e) => setTipAmount(Number(e.target.value))}
                  placeholder="Custom amount"
                  className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-mono text-sm px-4 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
                />
              </div>
            </div>

            {/* Impact Calculation Preview */}
            <div className="bg-[#0b0b0c] border border-[#c2a15a]/30 p-4 rounded mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c2a15a] uppercase tracking-wider mb-1">
                <Zap className="w-3.5 h-3.5" /> Direct Community Impact Statement
              </div>
              <p className="text-sm font-serif text-[#e9e3d6]">
                {getImpactDescription(tipAmount, currency)}
              </p>
            </div>

            {/* Optional Protocol Fee Checkbox */}
            <div className="mb-6 flex items-start gap-3 bg-[#0b0b0c] p-3 border border-[#e9e3d6]/15 rounded">
              <input
                type="checkbox"
                id="protocolFee"
                checked={includeProtocolFee}
                onChange={(e) => setIncludeProtocolFee(e.target.checked)}
                className="mt-1 accent-[#c2a15a]"
              />
              <label htmlFor="protocolFee" className="text-xs text-[#a49d8d] font-serif cursor-pointer">
                Include voluntary 5% Desk Protocol Fee ({currency === 'INR' ? `₹${protocolFee}` : `$${protocolFee}`}) to fund remote QR trailhead beacons and emergency safety mesh.
              </label>
            </div>

            {/* Personal Note */}
            <div className="mb-6">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-[#a49d8d] mb-1">
                Note of Gratitude to Host (Optional)
              </label>
              <input
                type="text"
                value={donorNote}
                onChange={(e) => setDonorNote(e.target.value)}
                placeholder="e.g. Thank you for the wonderful tea and guidance on the trek!"
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-3 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
              />
            </div>

            {/* Dispatch Action Button */}
            <button
              onClick={handleDispatch}
              disabled={isProcessing}
              className="w-full bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-widest font-bold py-3.5 px-6 rounded transition-all shadow-md flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating Microtip Hash & Dispatching...
                </>
              ) : (
                <>
                  <QrCode className="w-4 h-4" />
                  Dispatch Microtip ({currency === 'INR' ? `₹${totalCharge}` : `$${totalCharge}`})
                </>
              )}
            </button>
          </div>

          {/* Recipient Host Card & Live Receipt (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Selected Host Info Box */}
            <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
              <div className="flex items-center gap-4">
                <img
                  src={selectedHost?.avatarUrl || "/nagaland-tribal-heritage.jpg"}
                  alt={selectedHost?.name}
                  className="w-16 h-16 rounded-full object-cover border border-[#c2a15a]/50"
                />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#8fb892] bg-[#8fb892]/10 border border-[#8fb892]/30 px-2 py-0.5 rounded">
                    Verified Desk Host
                  </span>
                  <h4 className="font-serif text-xl text-[#e9e3d6] mt-1 font-normal">{selectedHost?.name}</h4>
                  <p className="text-xs text-[#a49d8d] font-serif">{selectedHost?.role}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#e9e3d6]/15 font-serif text-xs text-[#a49d8d] leading-relaxed italic">
                "{selectedHost?.story}"
              </div>

              <div className="mt-4 bg-[#0b0b0c] p-3 border border-[#e9e3d6]/10 rounded font-mono text-[11px] text-[#e9e3d6] flex items-center justify-between">
                <span className="text-[#a49d8d]">Recipient UPI:</span>
                <span className="text-[#c2a15a]">{selectedHost?.upiId}</span>
              </div>
            </div>

            {/* Simulated Receipt Display */}
            {dispatchedReceipt ? (
              <div className="bg-[#0b0b0c] border border-[#8fb892]/50 p-6 rounded-sm animate-fade-in">
                <div className="flex items-center justify-between border-b border-[#8fb892]/30 pb-3 mb-3">
                  <div className="flex items-center gap-2 text-[#8fb892] font-mono text-xs uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" /> Tip Sealed & Dispatched
                  </div>
                  <span className="text-[10px] font-mono text-[#a49d8d]">
                    {dispatchedReceipt.timestamp}
                  </span>
                </div>

                <div className="font-serif text-2xl text-[#e9e3d6] mb-1">
                  {dispatchedReceipt.currency === 'INR' ? `₹${dispatchedReceipt.amountInr}` : `$${dispatchedReceipt.amountUsd}`}
                </div>
                <div className="text-xs font-serif text-[#a49d8d]">
                  Transferred to <strong className="text-[#e9e3d6]">{dispatchedReceipt.hostName}</strong> ({dispatchedReceipt.destination})
                </div>

                <div className="mt-4 pt-3 border-t border-[#e9e3d6]/10 font-mono text-[10px] text-[#a49d8d]">
                  <div>SHA-256 Ledger Hash:</div>
                  <div className="text-[#c2a15a] truncate mt-0.5">{dispatchedReceipt.hash}</div>
                </div>
              </div>
            ) : (
              <div className="bg-[#111114] border border-[#e9e3d6]/15 p-6 rounded-sm text-center flex flex-col items-center justify-center min-h-[180px]">
                <QrCode className="w-10 h-10 text-[#a49d8d]/40 mb-3" />
                <div className="font-serif text-base text-[#e9e3d6]">Ready to Dispatch Microtip</div>
                <div className="text-xs text-[#a49d8d] font-serif mt-1 max-w-xs">
                  Your microtip will be instantly transferred to the recipient's verified account with an immutable cryptographic receipt.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Real-time Verified Public Microtip Ledger Table */}
        <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#e9e3d6]/15 pb-4 mb-6 gap-2">
            <div>
              <h3 className="font-serif text-xl text-[#e9e3d6] font-normal flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#8fb892]" />
                Public Ledger of Verified Microtips
              </h3>
              <p className="text-xs text-[#a49d8d] font-serif mt-0.5">
                Real-time cryptographic registry of direct tips sent across India's off-beat corridors.
              </p>
            </div>
            <div className="font-mono text-[10px] text-[#a49d8d] uppercase tracking-widest">
              Live Protocol Feed
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e9e3d6]/15 text-[10px] font-mono uppercase text-[#a49d8d] tracking-wider">
                  <th className="py-2.5 px-3">Time</th>
                  <th className="py-2.5 px-3">Recipient Host</th>
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3">Corridor</th>
                  <th className="py-2.5 px-3">Amount</th>
                  <th className="py-2.5 px-3">Hash Signature</th>
                  <th className="py-2.5 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e9e3d6]/10 text-xs font-serif">
                {ledger.map((entry) => (
                  <tr key={entry.id} className="hover:bg-[#e9e3d6]/5 transition-colors">
                    <td className="py-3 px-3 font-mono text-[11px] text-[#a49d8d]">{entry.timestamp}</td>
                    <td className="py-3 px-3 text-[#e9e3d6] font-medium">{entry.hostName}</td>
                    <td className="py-3 px-3 text-[#a49d8d]">{entry.hostRole}</td>
                    <td className="py-3 px-3 text-[#c2a15a]">{entry.destination}</td>
                    <td className="py-3 px-3 font-mono text-[#e9e3d6]">
                      {entry.currency === 'INR' ? `₹${entry.amountInr}` : `$${entry.amountUsd}`}
                    </td>
                    <td className="py-3 px-3 font-mono text-[10px] text-[#a49d8d] truncate max-w-[140px]">
                      {entry.hash}
                    </td>
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
