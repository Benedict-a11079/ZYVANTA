import React from 'react';
import { Users, MapPin, Clock, Gavel, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function IncomingRequestsList({ onOpenQuoteModal }) {
  const { requests, pools } = useMarketplace();

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Incoming Customer & Pooled Cluster Inquiries
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
              DEMO REGIONAL DEMAND
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Submit simulated competitive bids to win buyer allocations under the provisional Smart Deal Lock
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="p-5 rounded-2xl bg-navy-900/40 border border-white/10 hover:border-brand-red/40 transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs text-slate-400 bg-carbon-900 px-2 py-0.5 rounded border border-white/5">
                    {req.id}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {req.type}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {req.submittedDate}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-white">
                  {req.carName} — <span className="text-sm font-normal text-slate-300 font-sans">{req.variant}</span>
                </h4>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
                    Preferred RTO: <strong className="text-slate-200 ml-1">{req.preferredRto}</strong>
                  </span>
                  <span>•</span>
                  <span>Color: <strong className="text-slate-200">{req.exteriorColor}</strong></span>
                  <span>•</span>
                  <span>Customer: <strong className="text-slate-200">{req.customerName}</strong></span>
                </div>
              </div>

              {/* Right column: Current lowest bid and Action button */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3">
                <div className="text-left lg:text-right">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Current Winning Bidder
                  </span>
                  <span className="font-mono text-2xl font-black text-emerald-400">
                    {formatINR(req.bestQuotePrice)}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Target threshold: Bid &lt; {formatINR(req.bestQuotePrice - req.autoSwitchThreshold)} to auto-switch
                  </span>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(req)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 flex items-center space-x-2 transition-all"
                >
                  <Gavel className="w-4 h-4" />
                  <span>Submit / Undercut Bid</span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
