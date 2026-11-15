import React from 'react';
import { 
  Users, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  TrendingDown, 
  Gift, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatINR } from '../utils/formatters';
import { Link } from 'react-router-dom';

export default function GroupBuyingPage() {
  const { pools, joinPool } = useMarketplace();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="rounded-3xl glass-panel-elevated p-8 sm:p-10 border border-white/10 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400">
            <Users className="w-3.5 h-3.5" />
            <span>CHENNAI REGIONAL FLEET AGGREGATION [DEMO SIMULATION]</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Group Buying Pools in Chennai
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Demonstration of pooled buyer aggregation across Chennai tech corridors. Simulated clusters unlock tiered dealership volume concessions and priority factory allocations without online deposits or financial commitments.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Individual Deposit Required to Pool</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct OEM Invoicing at Dealership</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full TN RTO Warranty Preserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pools Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="font-display text-2xl font-bold text-white">
              Simulated Chennai Buyer Pools
            </h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
              DEMO DATA
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {pools.length} Simulated Clusters Open
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pools.map((pool) => {
            const isFull = pool.currentMembers >= pool.targetMembers;
            const progressPercent = Math.min(100, Math.round((pool.currentMembers / pool.targetMembers) * 100));

            return (
              <div
                key={pool.id}
                className="bg-navy-950/80 rounded-3xl border border-white/10 hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                    <span className="flex items-center text-slate-300 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-brand-red mr-1.5" />
                      {pool.hubLocation}
                    </span>
                    <span className="flex items-center text-amber-400 font-mono">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {pool.expiresInHours} Hours Left
                    </span>
                  </div>

                  {/* Cluster Name & Model */}
                  <div className="mt-4">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                      {pool.clusterName}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      {pool.carName}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {pool.variant}
                    </p>
                  </div>

                  {/* Quorum Progress */}
                  <div className="mt-6 p-4 rounded-2xl bg-carbon-950/80 border border-white/5 space-y-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium flex items-center">
                        <Users className="w-3.5 h-3.5 text-brand-red mr-1.5" />
                        Pool Quorum: <strong className="text-white ml-1">{pool.currentMembers} of {pool.targetMembers} Buyers</strong>
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">
                        {progressPercent}%
                      </span>
                    </div>

                    <div className="w-full bg-navy-900 rounded-full h-2 overflow-hidden border border-white/5">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-brand-cyan h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    {/* Tier levels */}
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

                  {/* Group Perk */}
                  <div className="mt-4 p-3 rounded-xl bg-navy-900/40 border border-brand-red/20 flex items-start space-x-2.5 text-xs text-slate-300">
                    <Gift className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Cluster Bonus Gift: </span>
                      <span className="text-slate-300">{pool.bonusPerk}</span>
                    </div>
                  </div>

                  {/* Pricing Comparison */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                        Locked Pool Price:
                      </span>
                      <span className="font-mono text-xl font-black text-white">
                        {formatINR(pool.bestCurrentQuote)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                        Net Savings:
                      </span>
                      <span className="font-mono text-base font-bold text-emerald-400">
                        Save {formatINR(pool.discountPerMember)}
                      </span>
                    </div>
                  </div>

                  {/* Recent members */}
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">
                      Recent Chennai Members Joined:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pool.recentJoinedMembers.map((m, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-navy-900 text-slate-300 text-[11px] font-mono">
                          {m.name} ({m.locality})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
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
                    <span>{isFull ? 'Target Unlocked (Allocating)' : 'Join This Chennai Pool'}</span>
                  </button>

                  <Link
                    to="/smart-deal-lock"
                    className="px-4 py-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-white text-xs font-semibold"
                  >
                    Lock Status
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
