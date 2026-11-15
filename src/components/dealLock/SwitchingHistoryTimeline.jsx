import React from 'react';
import { Clock, TrendingDown, ArrowDownRight, CheckCircle2, Zap, Lock } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function SwitchingHistoryTimeline() {
  const { negotiations } = useMarketplace();

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Smart Deal Lock — Switching History & Audit Log
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
              DEMO AUDIT TRAIL
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulated chronological record of rival quotes, competitor price drops, and automatic lock switches with anonymous dealer nodes
          </p>
        </div>
      </div>

      <div className="mt-8 relative">
        {/* Vertical timeline spine */}
        <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-brand-red via-navy-600 to-emerald-500" />

        <div className="space-y-6 pl-10 sm:pl-14">
          {negotiations.map((item, index) => {
            const isSwitch = item.type === 'switch';
            const isUndercut = item.type === 'undercut';
            const isLock = item.type === 'lock';

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className={`absolute -left-10 sm:-left-14 top-1 w-7 h-7 rounded-full flex items-center justify-center border-2 ${
                  isSwitch
                    ? 'bg-brand-red border-white text-white shadow-glow-red animate-pulse'
                    : isLock
                    ? 'bg-emerald-500 border-white text-black'
                    : isUndercut
                    ? 'bg-navy-900 border-brand-red text-brand-red'
                    : 'bg-navy-950 border-white/30 text-slate-400'
                }`}>
                  {isSwitch ? (
                    <Zap className="w-3.5 h-3.5" />
                  ) : isLock ? (
                    <Lock className="w-3.5 h-3.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Event Card */}
                <div className={`p-5 rounded-2xl border transition-all ${
                  isSwitch
                    ? 'bg-brand-red/10 border-brand-red/50 shadow-glow-red/20'
                    : isLock
                    ? 'bg-emerald-950/20 border-emerald-500/30'
                    : 'bg-navy-900/40 border-white/10 hover:border-white/20'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {item.id}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isSwitch
                          ? 'bg-brand-red text-white'
                          : isLock
                          ? 'bg-emerald-900 text-emerald-300'
                          : 'bg-navy-800 text-slate-300'
                      }`}>
                        {item.event}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-slate-400">
                      {new Date(item.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} • {new Date(item.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-sm">
                        {item.dealer}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                        {item.details}
                      </p>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Locked Quote Amount
                      </span>
                      <span className="font-mono text-xl font-black text-white">
                        {formatINR(item.price)}
                      </span>
                      {item.priceChange !== 0 && (
                        <span className="text-xs font-mono font-bold text-emerald-400 block">
                          Savings Jump: {formatINR(Math.abs(item.priceChange))}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Explicit Old vs New Offer Display for Audit Transparency */}
                  {item.previousOffer && item.newOffer && (
                    <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-carbon-950/70 rounded-xl p-3 text-xs">
                      <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 sm:pr-3">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                          Previous Offer (Replaced)
                        </span>
                        <p className="font-semibold text-slate-300 mt-0.5 truncate">
                          {item.previousOffer.dealer}
                        </p>
                        <p className="font-mono text-slate-400 font-bold mt-0.5">
                          {formatINR(item.previousOffer.price)}
                        </p>
                      </div>

                      <div className="sm:pl-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase text-emerald-400 block tracking-wider font-bold">
                            New Offer (Active Lock)
                          </span>
                          {item.parityVerified && (
                            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.2 rounded border border-emerald-500/30">
                              Parity Verified
                            </span>
                          )}
                        </div>
                        <p className="font-semibold text-white mt-0.5 truncate">
                          {item.newOffer.dealer}
                        </p>
                        <div className="flex items-center space-x-2 mt-0.5">
                          <span className="font-mono text-emerald-400 font-bold">
                            {formatINR(item.newOffer.price)}
                          </span>
                          {item.incrementalSavings > 0 && (
                            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded">
                              +₹{(item.incrementalSavings).toLocaleString('en-IN')} Saved
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
