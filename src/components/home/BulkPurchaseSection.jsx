import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Gift, 
  TrendingDown 
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function BulkPurchaseSection() {
  const { pools, joinPool } = useMarketplace();

  return (
    <section className="py-20 bg-navy-950/60 border-t border-white/5 relative" id="bulk-purchase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-900 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>COLLECTIVE BUYING HUBS [DEMO SIMULATION]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              Simulated Chennai Group-Buying Pools
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Experience simulated local buyer clusters across Chennai tech corridors. As pool tiers reach target member quorums, mock dealership volume concessions unlock. All figures represent demonstration data.
            </p>
          </div>

          <Link
            to="/group-buying"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-bold text-brand-red hover:text-white transition-colors"
          >
            <span>View All Regional Pools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {pools.map((pool) => {
            const isFull = pool.currentMembers >= pool.targetMembers;
            const progressPercent = Math.min(100, Math.round((pool.currentMembers / pool.targetMembers) * 100));

            return (
              <div
                key={pool.id}
                className="bg-navy-900/60 border border-white/10 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover group"
              >
                <div>
                  {/* Top Location & Expiry */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                    <span className="flex items-center text-slate-300 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-red mr-1.5" />
                      {pool.hubLocation}
                    </span>
                    <span className="flex items-center text-amber-400 font-mono">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {pool.expiresInHours}h left
                    </span>
                  </div>

                  {/* Pool Title & Car */}
                  <div className="mt-4">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                      {pool.clusterName}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1 leading-snug">
                      {pool.carName}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {pool.variant}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 p-4 rounded-2xl bg-carbon-950/80 border border-white/5 space-y-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium flex items-center">
                        <Users className="w-3.5 h-3.5 text-brand-red mr-1.5" />
                        Buyer Quorum: <strong className="text-white ml-1">{pool.currentMembers} of {pool.targetMembers} joined</strong>
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">
                        {progressPercent}% Filled
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-navy-950 rounded-full h-2 overflow-hidden border border-white/5">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-brand-cyan h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    {/* Tiers list */}
                    <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px]">
                      {pool.tiers.map((t, idx) => (
                        <div
                          key={idx}
                          className={`p-1.5 rounded-lg border ${
                            t.unlocked
                              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                              : 'bg-navy-900/40 border-white/5 text-slate-500'
                          }`}
                        >
                          <span className="block font-semibold">{t.count} Buyers</span>
                          <span className="font-mono">-{formatINR(t.discount)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Group Perk / Free Gift Banner */}
                  <div className="mt-4 p-3 rounded-xl bg-navy-950/60 border border-brand-red/20 flex items-start space-x-2.5 text-xs text-slate-300">
                    <Gift className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Bonus Group Perk Unlocked: </span>
                      <span className="text-slate-300">{pool.bonusPerk}</span>
                    </div>
                  </div>

                  {/* Financial Summary */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                        Best Pool On-Road:
                      </span>
                      <span className="font-mono text-xl font-black text-white">
                        {formatINR(pool.bestCurrentQuote)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                        Per-Member Savings:
                      </span>
                      <span className="font-mono text-base font-bold text-emerald-400">
                        Save {formatINR(pool.discountPerMember)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                  <button
                    onClick={() => joinPool(pool.id)}
                    disabled={isFull}
                    className={`flex-1 py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2 ${
                      isFull
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30 cursor-not-allowed'
                        : 'bg-gradient-to-r from-brand-red to-brand-darkRed text-white hover:brightness-110 shadow-glow-red/20'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>{isFull ? 'Quorum Completed — Allocating' : 'Join This Chennai Pool'}</span>
                  </button>

                  <Link
                    to="/smart-deal-lock"
                    className="px-4 py-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-white text-xs font-semibold transition-colors"
                  >
                    Inspect
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
