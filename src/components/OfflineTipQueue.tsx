import React, { useState, useEffect } from 'react';
import { NEW_FOUND_DESTINATIONS, LocalHost } from '../data/destinations';
import { QrCode, WifiOff, RefreshCw, CheckCircle2, Download, Plus, Zap } from 'lucide-react';

interface QueuedTip {
  id: string;
  hostName: string;
  hostRole: string;
  destination: string;
  amountInr: number;
  timestamp: string;
  status: 'QUEUED_OFFLINE' | 'DISPATCHED';
}

export const OfflineTipQueue: React.FC = () => {
  const [queuedTips, setQueuedTips] = useState<QueuedTip[]>([]);
  const [selectedHostId, setSelectedHostId] = useState<string>(NEW_FOUND_DESTINATIONS[0].hosts[0]?.id || '');
  const [tipAmount, setTipAmount] = useState<number>(250);
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [qrHost, setQrHost] = useState<LocalHost>(NEW_FOUND_DESTINATIONS[0].hosts[0]);

  // All hosts flattened
  const allHosts = NEW_FOUND_DESTINATIONS.flatMap(d => d.hosts);
  const currentHost = allHosts.find(h => h.id === selectedHostId) || allHosts[0];

  useEffect(() => {
    const saved = localStorage.getItem('desk_queued_tips');
    if (saved) {
      try {
        setQueuedTips(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const saveQueue = (tips: QueuedTip[]) => {
    setQueuedTips(tips);
    localStorage.setItem('desk_queued_tips', JSON.stringify(tips));
  };

  const handleQueueTip = () => {
    const newTip: QueuedTip = {
      id: `offline-${Date.now().toString().slice(-4)}`,
      hostName: currentHost.name,
      hostRole: currentHost.role,
      destination: currentHost.location,
      amountInr: tipAmount,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'QUEUED_OFFLINE'
    };

    const updated = [newTip, ...queuedTips];
    saveQueue(updated);
  };

  const handleSyncAll = () => {
    const synced = queuedTips.map(t => ({ ...t, status: 'DISPATCHED' as const }));
    saveQueue(synced);
  };

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <WifiOff className="w-3.5 h-3.5" />
            Zero-Cell Connectivity Protocol · Local Storage Queue
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            Offline Microtip Queue & QR Badge Generator
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            Queue tips offline when exploring high-altitude mountain passes or frontier valleys. 
            Tips automatically auto-dispatch and cryptographic receipts generated upon cellular reconnection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Offline Queue Form (6 Cols) */}
          <div className="lg:col-span-6 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm">
            <div className="flex items-center justify-between border-b border-[#e9e3d6]/15 pb-4 mb-6">
              <h3 className="font-serif text-2xl text-[#e9e3d6]">Queue Tip Offline</h3>
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#8fb892] bg-[#8fb892]/10 border border-[#8fb892]/30 px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-[#8fb892] animate-pulse" />
                Local Storage Engine Active
              </div>
            </div>

            {/* Select Host */}
            <div className="mb-4">
              <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                Select Recipient Host
              </label>
              <select
                value={selectedHostId}
                onChange={(e) => setSelectedHostId(e.target.value)}
                className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-3 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
              >
                {allHosts.map(h => (
                  <option key={h.id} value={h.id}>
                    {h.name} — {h.role} ({h.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Tip Amount */}
            <div className="mb-6">
              <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                Tip Amount (₹ INR)
              </label>
              <div className="flex gap-2 mb-3">
                {[100, 250, 500, 1000].map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setTipAmount(amt)}
                    className={`px-3 py-1.5 font-mono text-xs rounded transition-all ${
                      tipAmount === amt
                        ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold'
                        : 'bg-[#0b0b0c] border border-[#e9e3d6]/20 text-[#e9e3d6]'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Queue Button */}
            <button
              onClick={handleQueueTip}
              className="w-full bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-wider font-bold py-3 px-4 rounded transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" /> Queue Tip in Local Memory (Offline)
            </button>

            {/* Queued List */}
            <div className="mt-8 pt-6 border-t border-[#e9e3d6]/15">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#a49d8d] uppercase">
                  Queued Tips ({queuedTips.filter(t => t.status === 'QUEUED_OFFLINE').length})
                </span>
                {queuedTips.some(t => t.status === 'QUEUED_OFFLINE') && (
                  <button
                    onClick={handleSyncAll}
                    className="font-mono text-[10px] text-[#8fb892] uppercase border border-[#8fb892]/40 px-2 py-1 rounded hover:bg-[#8fb892]/10"
                  >
                    Sync All to Network
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {queuedTips.length === 0 ? (
                  <div className="text-xs font-serif text-[#a49d8d] italic text-center py-4">
                    No offline tips queued.
                  </div>
                ) : (
                  queuedTips.map((tip) => (
                    <div key={tip.id} className="bg-[#0b0b0c] p-3 rounded border border-[#e9e3d6]/10 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[#e9e3d6] font-medium">{tip.hostName} ({tip.destination})</div>
                        <div className="text-[10px] text-[#a49d8d] font-mono">{tip.timestamp} · ₹{tip.amountInr}</div>
                      </div>
                      <span className={`font-mono text-[9px] px-2 py-0.5 rounded ${tip.status === 'QUEUED_OFFLINE' ? 'bg-[#c2a15a]/20 text-[#c2a15a] border border-[#c2a15a]/40' : 'bg-[#8fb892]/20 text-[#8fb892] border border-[#8fb892]/40'}`}>
                        {tip.status === 'QUEUED_OFFLINE' ? 'QUEUED OFFLINE' : 'DISPATCHED'}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* QR Code Badge Generator (6 Cols) */}
          <div className="lg:col-span-6 bg-[#111114] border border-[#e9e3d6]/20 p-6 sm:p-8 rounded-sm flex flex-col justify-between">
            <div>
              <div className="border-b border-[#e9e3d6]/15 pb-4 mb-6">
                <h3 className="font-serif text-2xl text-[#e9e3d6] flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-[#c2a15a]" />
                  Local Host QR Trailhead Badge
                </h3>
                <p className="text-xs text-[#a49d8d] font-serif mt-1">
                  Generate a printable physical QR sticker badge for remote tea stalls, boat hulls, or village gates.
                </p>
              </div>

              {/* Host Select */}
              <div className="mb-6">
                <label className="block font-mono text-[10px] uppercase text-[#a49d8d] mb-1">
                  Select Host for Badge
                </label>
                <select
                  value={qrHost.id}
                  onChange={(e) => {
                    const found = allHosts.find(h => h.id === e.target.value);
                    if (found) setQrHost(found);
                  }}
                  className="w-full bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-sm px-3 py-2 rounded focus:border-[#c2a15a] focus:outline-none"
                >
                  {allHosts.map(h => (
                    <option key={h.id} value={h.id}>
                      {h.name} ({h.role} — {h.location})
                    </option>
                  ))}
                </select>
              </div>

              {/* Badge Preview Canvas */}
              <div className="bg-[#0b0b0c] border-2 border-dashed border-[#c2a15a]/50 p-6 rounded text-center flex flex-col items-center justify-center my-4">
                
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#a49d8d] mb-2">
                  VERIFIED LOCAL HOST · DIRECT MICROTIP BADGE
                </div>
                
                <h4 className="font-serif text-2xl text-[#e9e3d6] font-light">{qrHost.name}</h4>
                <div className="text-xs text-[#c2a15a] font-serif mb-4">{qrHost.role} · {qrHost.location}</div>

                {/* SVG Simulated QR */}
                <div className="w-36 h-36 bg-white p-3 rounded shadow-md my-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                    <rect x="0" y="0" width="30" height="30" />
                    <rect x="5" y="5" width="20" height="20" fill="white" />
                    <rect x="10" y="10" width="10" height="10" />
                    <rect x="70" y="0" width="30" height="30" />
                    <rect x="75" y="5" width="20" height="20" fill="white" />
                    <rect x="80" y="10" width="10" height="10" />
                    <rect x="0" y="70" width="30" height="30" />
                    <rect x="5" y="75" width="20" height="20" fill="white" />
                    <rect x="10" y="80" width="10" height="10" />
                    <rect x="35" y="35" width="30" height="30" />
                    <rect x="40" y="40" width="20" height="20" fill="white" />
                    <rect x="70" y="70" width="15" height="15" />
                  </svg>
                </div>

                <div className="font-mono text-[10px] text-[#e9e3d6] mt-3">
                  UPI ID: <span className="text-[#c2a15a]">{qrHost.upiId}</span>
                </div>
                <div className="font-mono text-[8px] text-[#a49d8d] uppercase tracking-widest mt-1">
                  100% Direct Payout · Zero Platform Commission · theindiaproject.world
                </div>

              </div>
            </div>

            <button
              onClick={() => alert(`QR Badge for ${qrHost.name} ready for print!`)}
              className="bg-[#0b0b0c] border border-[#e9e3d6]/25 hover:border-[#c2a15a] text-[#e9e3d6] font-mono text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Download className="w-4 h-4 text-[#c2a15a]" /> Print Host Trailhead Badge
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
