import React, { useState } from 'react';
import { Award, TrendingUp, DollarSign, ShieldCheck, HeartHandshake, Zap, PieChart, Users, Lock, EyeOff } from 'lucide-react';

interface BusinessModelProps {
  currency: 'INR' | 'USD';
}

export const BusinessModel: React.FC<BusinessModelProps> = ({ currency }) => {
  // Slider state for interactive ARR forecast
  const [activeUsers, setActiveUsers] = useState<number>(2500);

  // Financial mechanics (Estimated internal metrics)
  const estDomesticPassValue = 500;
  const estIntlPassValue = 20 * 83; // converted
  const avgTipsPerUserPerMonth = 4;
  const avgTipSizeInr = 250;

  // Monthly Calculations
  const domesticCount = Math.round(activeUsers * 0.65);
  const intlCount = activeUsers - domesticCount;

  const arrPassRevenueInr = (domesticCount * estDomesticPassValue) + (intlCount * estIntlPassValue);
  const totalTipsProcessedInr = activeUsers * avgTipsPerUserPerMonth * avgTipSizeInr;
  const protocolFeeYieldInr = totalTipsProcessedInr * 0.05;
  const totalRevenueInr = arrPassRevenueInr + protocolFeeYieldInr;
  const netMarginPercent = 88.5;
  const netProfitInr = totalRevenueInr * (netMarginPercent / 100);

  return (
    <section className="py-12 bg-[#0b0b0c] text-[#e9e3d6] border-t border-[#e9e3d6]/15 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desk Policy Banner */}
        <div className="bg-[#111114] border border-[#7c2427]/50 p-4 rounded mb-10 text-center flex items-center justify-center gap-3">
          <EyeOff className="w-5 h-5 text-[#c2a15a] flex-shrink-0" />
          <div className="text-xs font-mono text-[#e9e3d6] uppercase tracking-wider">
            <strong>Desk Policy Doctrine:</strong> We do not publicly advertise hotel rates, commercial stays, or package price tags. All stays and route coordinates are assigned under seal upon confirmed commission.
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2a15a]/10 border border-[#c2a15a]/30 text-[#c2a15a] font-mono text-[11px] uppercase tracking-widest rounded mb-3">
            <Award className="w-3.5 h-3.5" />
            Financial Architecture · High-Impact Sustainability
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#e9e3d6] tracking-tight">
            Sustainable Business Flywheel
          </h2>
          <p className="mt-4 text-[#a49d8d] font-serif text-lg leading-relaxed">
            How The Desk creates an economically self-sustaining platform centered on microtipping without relying on non-profit grants or exploiting local communities.
          </p>
        </div>

        {/* 3 Revenue Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
            <div className="font-mono text-[10px] uppercase text-[#c2a15a] tracking-widest mb-2 flex items-center justify-between">
              <span>Pillar 01</span>
              <Users className="w-4 h-4 text-[#c2a15a]" />
            </div>
            <h3 className="font-serif text-xl text-[#e9e3d6] mb-2 font-normal">Solo Explorer Pass (Sealed Commission)</h3>
            <p className="text-xs text-[#a49d8d] font-serif leading-relaxed mb-4">
              Subscription access pass for solo travellers unlocking 6-Pass Vetting briefs, satellite safety mesh pings, and 0% host microtip processing.
            </p>
            <div className="bg-[#0b0b0c] p-3 border border-[#e9e3d6]/10 rounded font-mono text-xs text-[#e9e3d6]">
              Access Pass Status: <strong className="text-[#c2a15a]">Assigned Under Seal</strong>
            </div>
          </div>

          <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
            <div className="font-mono text-[10px] uppercase text-[#8fb892] tracking-widest mb-2 flex items-center justify-between">
              <span>Pillar 02</span>
              <DollarSign className="w-4 h-4 text-[#8fb892]" />
            </div>
            <h3 className="font-serif text-xl text-[#e9e3d6] mb-2 font-normal">5% Protocol Maintenance Fee</h3>
            <p className="text-xs text-[#a49d8d] font-serif leading-relaxed mb-4">
              Voluntary micro-fee attached to traveler tips. Funds remote solar QR beacons, trailhead maintenance, and payment gateway interchange.
            </p>
            <div className="bg-[#0b0b0c] p-3 border border-[#e9e3d6]/10 rounded font-mono text-xs text-[#8fb892]">
              Avg Protocol Yield: <strong className="text-[#e9e3d6]">5% Voluntary Contribution</strong>
            </div>
          </div>

          <div className="bg-[#111114] border border-[#e9e3d6]/20 p-6 rounded-sm">
            <div className="font-mono text-[10px] uppercase text-[#7c2427] tracking-widest mb-2 flex items-center justify-between">
              <span>Pillar 03</span>
              <TrendingUp className="w-4 h-4 text-[#7c2427]" />
            </div>
            <h3 className="font-serif text-xl text-[#e9e3d6] mb-2 font-normal">Responsible Tourism ESG Matching</h3>
            <p className="text-xs text-[#a49d8d] font-serif leading-relaxed mb-4">
              Partner heritage havelis and eco-sanctuaries match solo traveler microtips 1:1 per corridor for ESG compliance certification under seal.
            </p>
            <div className="bg-[#0b0b0c] p-3 border border-[#e9e3d6]/10 rounded font-mono text-xs text-[#e9e3d6]">
              Corporate Match: <strong className="text-[#c2a15a]">1:1 Matching Protocol</strong>
            </div>
          </div>
        </div>

        {/* Interactive Investor Sustainability Forecast Calculator */}
        <div className="bg-[#111114] border border-[#c2a15a]/40 p-6 sm:p-10 rounded-sm mb-12">
          <div className="border-b border-[#e9e3d6]/15 pb-4 mb-6">
            <div className="font-mono text-[10px] uppercase text-[#c2a15a] tracking-widest mb-1 flex items-center gap-2">
              <PieChart className="w-4 h-4" /> Internal Operations Projections
            </div>
            <h3 className="font-serif text-2xl text-[#e9e3d6]">Platform Yield & Microtip Impact Projections</h3>
            <p className="text-xs text-[#a49d8d] font-serif mt-1">
              Adjust the active solo wanderer subscriber count to simulate monthly recurring yield and direct host payouts.
            </p>
          </div>

          {/* Slider */}
          <div className="mb-8 font-serif">
            <div className="flex justify-between items-center text-sm text-[#e9e3d6] mb-2 font-mono">
              <span>Active Solo Subscribers: <strong>{activeUsers.toLocaleString()} Travellers</strong></span>
              <span className="text-[#c2a15a]">65% Domestic / 35% International</span>
            </div>
            <input
              type="range"
              min="500"
              max="20000"
              step="500"
              value={activeUsers}
              onChange={(e) => setActiveUsers(Number(e.target.value))}
              className="w-full accent-[#c2a15a] cursor-pointer"
            />
          </div>

          {/* Output Metric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0b0b0c] p-6 border border-[#e9e3d6]/15 rounded">
            <div>
              <div className="font-mono text-[9.5px] uppercase text-[#a49d8d]">Monthly Gross Yield</div>
              <div className="font-serif text-2xl text-[#c2a15a] mt-1 font-light">
                ₹{Math.round(totalRevenueInr).toLocaleString()}
              </div>
              <div className="text-[10px] text-[#a49d8d] mt-0.5">Passes + 5% Protocol Fee</div>
            </div>

            <div>
              <div className="font-mono text-[9.5px] uppercase text-[#a49d8d]">Direct Host Microtips</div>
              <div className="font-serif text-2xl text-[#8fb892] mt-1 font-light">
                ₹{Math.round(totalTipsProcessedInr).toLocaleString()}
              </div>
              <div className="text-[10px] text-[#a49d8d] mt-0.5">100% Direct Payout</div>
            </div>

            <div>
              <div className="font-mono text-[9.5px] uppercase text-[#a49d8d]">Net Operating Profit</div>
              <div className="font-serif text-2xl text-[#e9e3d6] mt-1 font-light">
                ₹{Math.round(netProfitInr).toLocaleString()}
              </div>
              <div className="text-[10px] text-[#a49d8d] mt-0.5">88.5% Margin Profile</div>
            </div>

            <div>
              <div className="font-mono text-[9.5px] uppercase text-[#a49d8d]">Unit LTV / CAC</div>
              <div className="font-serif text-2xl text-[#c2a15a] mt-1 font-light">
                6.4x
              </div>
              <div className="text-[10px] text-[#a49d8d] mt-0.5">Efficient acquisition</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
