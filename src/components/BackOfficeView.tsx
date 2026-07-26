import React, { useState } from 'react';
import { NEW_FOUND_DESTINATIONS, LocalHost } from '../data/destinations';
import { ShieldCheck, Plus, CheckCircle2, DollarSign, FileText, Lock, RefreshCw, Trash2, Edit3 } from 'lucide-react';

export const BackOfficeView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'hosts' | 'ledger' | 'legal'>('overview');

  // Ledger state
  const [ledgerEntries, setLedgerEntries] = useState([
    { id: '1', date: '2026-07-24', ref: 'Solo Explorer Pass #1024', detail: 'Domestic Explorer Annual Pass', type: 'Income', amount: 3999 },
    { id: '2', date: '2026-07-25', ref: 'Microtip Protocol Fee #901', detail: '5% Voluntary Protocol Fee (Dawki)', type: 'Income', amount: 12.5 },
    { id: '3', date: '2026-07-25', ref: 'Ground Solar Beacon #Ziro-02', detail: 'Solar charging node deployment (Ziro)', type: 'Expense', amount: 850 },
    { id: '4', date: '2026-07-26', ref: 'Intl Solo Explorer Pass #804', detail: 'International Explorer Annual Pass', type: 'Income', amount: 12367 }
  ]);

  const [newLedgerDate, setNewLedgerDate] = useState('2026-07-27');
  const [newLedgerRef, setNewLedgerRef] = useState('');
  const [newLedgerDetail, setNewLedgerDetail] = useState('');
  const [newLedgerType, setNewLedgerType] = useState<'Income' | 'Expense'>('Income');
  const [newLedgerAmount, setNewLedgerAmount] = useState<number>(500);

  const handleAddLedger = () => {
    if (!newLedgerRef || !newLedgerAmount) return;
    const entry = {
      id: Date.now().toString(),
      date: newLedgerDate,
      ref: newLedgerRef,
      detail: newLedgerDetail,
      type: newLedgerType,
      amount: Number(newLedgerAmount)
    };
    setLedgerEntries([entry, ...ledgerEntries]);
    setNewLedgerRef('');
    setNewLedgerDetail('');
  };

  const totalIncome = ledgerEntries.filter(e => e.type === 'Income').reduce((a, b) => a + b.amount, 0);
  const totalExpense = ledgerEntries.filter(e => e.type === 'Expense').reduce((a, b) => a + b.amount, 0);
  const netMargin = totalIncome - totalExpense;
  const marginPercent = totalIncome > 0 ? Math.round((netMargin / totalIncome) * 100) : 0;

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e9e3d6]/15 pb-6 mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7c2427]/20 border border-[#7c2427]/40 text-[#e9e3d6] font-mono text-[11px] uppercase tracking-widest rounded mb-2">
              <Lock className="w-3.5 h-3.5 text-[#c2a15a]" />
              Internal Operational Desk · Operator Command
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#e9e3d6]">
              theindiaproject.world — Back Office
            </h2>
          </div>
          
          <div className="font-mono text-[10px] uppercase text-[#7c2427] border border-[#7c2427]/50 px-3 py-1.5 rounded tracking-widest">
            STRICTLY CONFIDENTIAL // DESK OPERATOR ACCESS
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs border-b border-[#e9e3d6]/15 pb-4">
          {[
            { id: 'overview', label: 'Desk Overview' },
            { id: 'hosts', label: 'Local Host Network' },
            { id: 'ledger', label: 'Financial Ledger' },
            { id: 'legal', label: 'Legal Templates' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-4 py-2 rounded transition-all uppercase tracking-wider ${
                activeSubTab === tab.id
                  ? 'bg-[#c2a15a] text-[#0b0b0c] font-bold'
                  : 'bg-[#111114] border border-[#e9e3d6]/15 text-[#a49d8d] hover:text-[#e9e3d6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e9e3d6]/15 border border-[#e9e3d6]/15">
              <div className="bg-[#111114] p-6 text-center">
                <div className="font-mono text-[10px] uppercase text-[#a49d8d]">Total Gross Revenue</div>
                <div className="font-serif text-3xl text-[#c2a15a] mt-1 font-light">₹{totalIncome.toLocaleString()}</div>
                <div className="text-xs text-[#a49d8d] mt-0.5">Passes + Protocol Fees</div>
              </div>
              <div className="bg-[#111114] p-6 text-center">
                <div className="font-mono text-[10px] uppercase text-[#a49d8d]">Ground Deployments</div>
                <div className="font-serif text-3xl text-[#7c2427] mt-1 font-light">₹{totalExpense.toLocaleString()}</div>
                <div className="text-xs text-[#a49d8d] mt-0.5">Solar nodes & QR badges</div>
              </div>
              <div className="bg-[#111114] p-6 text-center">
                <div className="font-mono text-[10px] uppercase text-[#a49d8d]">Net Platform Profit</div>
                <div className="font-serif text-3xl text-[#8fb892] mt-1 font-light">₹{netMargin.toLocaleString()}</div>
                <div className="text-xs text-[#a49d8d] mt-0.5">Net Operational Yield</div>
              </div>
              <div className="bg-[#111114] p-6 text-center">
                <div className="font-mono text-[10px] uppercase text-[#a49d8d]">Net Operating Margin</div>
                <div className="font-serif text-3xl text-[#e9e3d6] mt-1 font-light">{marginPercent}%</div>
                <div className="text-xs text-[#a49d8d] mt-0.5">High-margin protocol</div>
              </div>
            </div>

            <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
              <h3 className="font-serif text-xl text-[#e9e3d6] mb-4">Corridor Readiness Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {NEW_FOUND_DESTINATIONS.map(d => (
                  <div key={d.id} className="bg-[#0b0b0c] p-4 border border-[#e9e3d6]/10 rounded">
                    <div className="font-serif text-base text-[#e9e3d6] font-medium">{d.name}</div>
                    <div className="text-xs text-[#a49d8d] font-serif">{d.state}</div>
                    <div className="mt-2 font-mono text-[10px] text-[#8fb892] flex items-center justify-between">
                      <span>{d.hosts.length} Verified Hosts</span>
                      <span>{d.safetyGrade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Local Hosts Tab */}
        {activeSubTab === 'hosts' && (
          <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
            <h3 className="font-serif text-xl text-[#e9e3d6] mb-4">Verified Local Ground Hosts</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-serif text-xs">
                <thead>
                  <tr className="border-b border-[#e9e3d6]/15 font-mono text-[10px] text-[#a49d8d] uppercase">
                    <th className="py-2.5 px-3">Host Name</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3">Location</th>
                    <th className="py-2.5 px-3">UPI ID</th>
                    <th className="py-2.5 px-3">Suggested Tip</th>
                    <th className="py-2.5 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e9e3d6]/10">
                  {NEW_FOUND_DESTINATIONS.flatMap(d => d.hosts).map(h => (
                    <tr key={h.id} className="hover:bg-[#e9e3d6]/5">
                      <td className="py-3 px-3 text-[#e9e3d6] font-medium">{h.name}</td>
                      <td className="py-3 px-3 text-[#a49d8d]">{h.role}</td>
                      <td className="py-3 px-3 text-[#c2a15a]">{h.location}</td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#e9e3d6]">{h.upiId}</td>
                      <td className="py-3 px-3 font-mono text-[#e9e3d6]">₹{h.suggestedTipInr} / ${h.suggestedTipUsd}</td>
                      <td className="py-3 px-3 text-right">
                        <span className="bg-[#8fb892]/10 border border-[#8fb892]/30 text-[#8fb892] font-mono text-[9px] px-2 py-0.5 rounded">
                          VERIFIED
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Ledger Tab */}
        {activeSubTab === 'ledger' && (
          <div className="space-y-6">
            <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
              <h3 className="font-serif text-xl text-[#e9e3d6] mb-4">Add Ledger Transaction</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                <input
                  type="text"
                  value={newLedgerDate}
                  onChange={(e) => setNewLedgerDate(e.target.value)}
                  placeholder="Date (YYYY-MM-DD)"
                  className="bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-mono text-xs px-3 py-2 rounded"
                />
                <input
                  type="text"
                  value={newLedgerRef}
                  onChange={(e) => setNewLedgerRef(e.target.value)}
                  placeholder="Reference"
                  className="bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-xs px-3 py-2 rounded"
                />
                <input
                  type="text"
                  value={newLedgerDetail}
                  onChange={(e) => setNewLedgerDetail(e.target.value)}
                  placeholder="Detail"
                  className="bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-serif text-xs px-3 py-2 rounded"
                />
                <select
                  value={newLedgerType}
                  onChange={(e) => setNewLedgerType(e.target.value as any)}
                  className="bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-mono text-xs px-3 py-2 rounded"
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
                <input
                  type="number"
                  value={newLedgerAmount}
                  onChange={(e) => setNewLedgerAmount(Number(e.target.value))}
                  placeholder="Amount (₹)"
                  className="bg-[#0b0b0c] border border-[#e9e3d6]/25 text-[#e9e3d6] font-mono text-xs px-3 py-2 rounded"
                />
              </div>
              <button
                onClick={handleAddLedger}
                className="mt-4 bg-[#c2a15a] hover:bg-[#b0904a] text-[#0b0b0c] font-mono text-xs uppercase tracking-wider font-bold py-2 px-4 rounded"
              >
                Post Ledger Entry
              </button>
            </div>

            <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
              <h3 className="font-serif text-xl text-[#e9e3d6] mb-4">Financial Ledger History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-serif text-xs">
                  <thead>
                    <tr className="border-b border-[#e9e3d6]/15 font-mono text-[10px] text-[#a49d8d] uppercase">
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Reference</th>
                      <th className="py-2.5 px-3">Detail</th>
                      <th className="py-2.5 px-3">Type</th>
                      <th className="py-2.5 px-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e9e3d6]/10">
                    {ledgerEntries.map(e => (
                      <tr key={e.id} className="hover:bg-[#e9e3d6]/5">
                        <td className="py-3 px-3 font-mono text-[#a49d8d]">{e.date}</td>
                        <td className="py-3 px-3 text-[#e9e3d6]">{e.ref}</td>
                        <td className="py-3 px-3 text-[#a49d8d]">{e.detail}</td>
                        <td className="py-3 px-3 font-mono">
                          <span className={`px-2 py-0.5 rounded text-[10px] ${e.type === 'Income' ? 'bg-[#8fb892]/10 text-[#8fb892] border border-[#8fb892]/30' : 'bg-[#7c2427]/20 text-[#e9e3d6] border border-[#7c2427]/40'}`}>
                            {e.type}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-[#e9e3d6]">₹{e.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Legal Tab */}
        {activeSubTab === 'legal' && (
          <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm space-y-6">
            <h3 className="font-serif text-2xl text-[#e9e3d6]">Legal Documents & Compliance Templates</h3>
            <div className="space-y-4 font-serif text-sm">
              <div className="border border-[#e9e3d6]/15 p-4 rounded bg-[#0b0b0c]">
                <h4 className="font-serif text-lg text-[#c2a15a] mb-1">Terms of Engagement</h4>
                <p className="text-xs text-[#a49d8d] leading-relaxed">
                  theindiaproject.world provides private coordination services across India. An enquiry creates no obligation on either party. Routes, stays, and hosts are assigned at the house's discretion and held in confidence.
                </p>
              </div>

              <div className="border border-[#e9e3d6]/15 p-4 rounded bg-[#0b0b0c]">
                <h4 className="font-serif text-lg text-[#c2a15a] mb-1">Force Majeure & Liability</h4>
                <p className="text-xs text-[#a49d8d] leading-relaxed">
                  While every leg is audited six times under the 6-Pass Surveyor Protocol, the house is not liable for acts of God, extreme high-altitude weather events, or road closures. Pre-identified medical LZs and safehouses remain active.
                </p>
              </div>

              <div className="border border-[#e9e3d6]/15 p-4 rounded bg-[#0b0b0c]">
                <h4 className="font-serif text-lg text-[#c2a15a] mb-1">Privacy & Confidentiality</h4>
                <p className="text-xs text-[#a49d8d] leading-relaxed">
                  Client information is read by one desk only and is never sold or shared. Microtipping receipts are cryptographically hashed for public ledger proof without exposing private traveler identities.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
