import React, { useState } from 'react';
import { Sliders, CheckCircle2, AlertTriangle, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function DealerNegotiationManager({ onOpenQuoteModal }) {
  const { addNotification } = useMarketplace();
  const [fastDiscount, setFastDiscount] = useState(15000);

  const applyInstantConcession = () => {
    addNotification({
      title: 'Counter-Concession Broadcasted',
      message: `An additional concession of ₹${fastDiscount.toLocaleString('en-IN')} has been applied to pending inquiries.`,
      type: 'negotiation'
    });
  };

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Negotiation & Margin Management
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
              DEMO CONTROL DESK
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate automated counter-bid ranges, margin protection buffers, and time-sensitive concessions
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Fast Concession Control */}
        <div className="p-5 rounded-2xl bg-navy-900/40 border border-white/10 space-y-4">
          <div>
            <h4 className="font-bold text-white text-sm">Quick Counter Concession</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Instantly push an aggressive price reduction across active Chennai reverse auctions.
            </p>
          </div>

          <div>
            <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5">
              Concession Amount: <strong className="text-brand-red">{formatINR(fastDiscount)}</strong>
            </label>
            <input
              type="range"
              min="5000"
              max="50000"
              step="5000"
              value={fastDiscount}
              onChange={(e) => setFastDiscount(Number(e.target.value))}
              className="w-full accent-brand-red cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>₹5,000</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
            </div>
          </div>

          <button
            onClick={applyInstantConcession}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110"
          >
            Broadcast Concession Now
          </button>
        </div>

        {/* Card 2: Margin Safety Floor */}
        <div className="p-5 rounded-2xl bg-navy-900/40 border border-white/10 space-y-4">
          <div>
            <h4 className="font-bold text-white text-sm">Automated Floor Protection</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Prevent dealership reps from underbidding below OEM operational cost.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2 rounded-lg bg-carbon-950 border border-white/5">
              <span className="text-slate-400">Creta Minimum Floor:</span>
              <span className="font-mono text-white font-bold">₹21,00,000</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-carbon-950 border border-white/5">
              <span className="text-slate-400">XUV700 Minimum Floor:</span>
              <span className="font-mono text-white font-bold">₹26,80,000</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-carbon-950 border border-white/5">
              <span className="text-slate-400">Nexon EV Minimum Floor:</span>
              <span className="font-mono text-white font-bold">₹16,85,000</span>
            </div>
          </div>

          <span className="text-[11px] text-emerald-400 flex items-center font-medium">
            <ShieldCheck className="w-4 h-4 mr-1 shrink-0" />
            Safety guard active against negative gross margin.
          </span>
        </div>

        {/* Card 3: Free Perks Builder */}
        <div className="p-5 rounded-2xl bg-navy-900/40 border border-white/10 space-y-4">
          <div>
            <h4 className="font-bold text-white text-sm">Value Sweetener Perks</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Win deals by offering high perceived-value accessories rather than cash cuts.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <label className="flex items-center space-x-2 p-1.5 rounded-lg bg-carbon-950 border border-white/5 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-brand-red rounded" />
              <span>Complimentary 3M Ceramic Coating (Cost: ₹4,200 / Value: ₹22,000)</span>
            </label>
            <label className="flex items-center space-x-2 p-1.5 rounded-lg bg-carbon-950 border border-white/5 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-brand-red rounded" />
              <span>Fastag Pre-loaded with ₹1,000 credit</span>
            </label>
            <label className="flex items-center space-x-2 p-1.5 rounded-lg bg-carbon-950 border border-white/5 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-brand-red rounded" />
              <span>Extended Warranty 4th Year Shield</span>
            </label>
          </div>

          <button
            onClick={() => addNotification({ title: 'Perks Package Updated', message: 'Sweetener accessories bundle attached to all new Creta quotes.' })}
            className="w-full py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            Save Default Perks Bundle
          </button>
        </div>

      </div>
    </div>
  );
}
