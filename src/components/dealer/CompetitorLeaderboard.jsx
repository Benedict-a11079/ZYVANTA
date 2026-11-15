import React from 'react';
import { 
  TrendingDown, 
  Award, 
  ShieldAlert, 
  Zap, 
  Clock, 
  EyeOff, 
  Lock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function CompetitorLeaderboard({ onQuickCounterBid }) {
  const { triggerSimulatedCompetitorUndercut, agreedSwitchThreshold } = useMarketplace();

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Anonymous Competitor Price Intel (Simulated)
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-navy-800 text-amber-400 border border-amber-500/30 flex items-center space-x-1">
              <EyeOff className="w-3.5 h-3.5" />
              <span>Blinded Anti-Collusion Protocol</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time competitor ranking for active Hyundai Creta OMR Cluster. Real dealership identities are strictly anonymized per fair-competition guidelines.
          </p>
        </div>

        <span className="text-xs font-mono text-emerald-400">
          Target Pool: 8 Buyers (Simulation)
        </span>
      </div>

      {/* Metrics Row */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-white/5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
            Your Live Rank
          </span>
          <span className="font-mono text-2xl font-black text-amber-400">#2 of 4</span>
          <span className="text-[10px] text-slate-500 block">Trailing leader node</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-white/5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
            Current Best On-Road
          </span>
          <span className="font-mono text-2xl font-black text-emerald-400">₹21.15L</span>
          <span className="text-[10px] text-slate-500 block">Dealer Node #1 (Locked)</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-white/5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
            Your Active Bid
          </span>
          <span className="font-mono text-2xl font-black text-white">₹21.50L</span>
          <span className="text-[10px] text-slate-500 block">Delta: +₹35,000</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-white/5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
            Agreed Switch Threshold
          </span>
          <span className="font-mono text-2xl font-black text-brand-red">{formatINR(agreedSwitchThreshold)}</span>
          <span className="text-[10px] text-slate-500 block">Minimum Benefit Target</span>
        </div>
      </div>

      {/* Anonymous Bids Table */}
      <div className="mt-6 rounded-2xl bg-carbon-950/80 border border-white/5 overflow-hidden">
        <div className="p-3 bg-navy-900/40 border-b border-white/5 text-[11px] font-mono text-slate-400 uppercase tracking-wider flex justify-between">
          <span>Anonymized Dealer Node</span>
          <span>Chennai On-Road Bid</span>
          <span>Delta from Best</span>
          <span>Lock Status</span>
        </div>

        <div className="divide-y divide-white/5 text-xs">
          {/* Dealer Node 1 */}
          <div className="p-3.5 flex items-center justify-between bg-emerald-950/20">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs flex items-center justify-center">1</span>
              <div>
                <span className="font-bold text-white">Authorized Dealer Node #1</span>
                <span className="text-[10px] text-slate-400 block">Anna Salai Zone Hub • Blinded Identity</span>
              </div>
            </div>
            <span className="font-mono font-bold text-emerald-400 text-sm">₹21,15,000</span>
            <span className="font-mono text-xs text-slate-400">Benchmark Lead</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              Provisional Lock Active
            </span>
          </div>

          {/* You (Dealer Node 2) */}
          <div className="p-3.5 flex items-center justify-between bg-brand-red/10 border-l-2 border-brand-red">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-black font-mono font-bold text-xs flex items-center justify-center">2</span>
              <div>
                <span className="font-bold text-white">Your Dealership Node (You)</span>
                <span className="text-[10px] text-brand-red block font-medium">Outbid by ₹35,000</span>
              </div>
            </div>
            <span className="font-mono font-bold text-white text-sm">₹21,50,000</span>
            <span className="font-mono text-xs text-brand-red">+₹35,000</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-navy-900 text-amber-300 border border-amber-500/30">
              Pending Counter
            </span>
          </div>

          {/* Dealer Node 3 */}
          <div className="p-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold text-xs flex items-center justify-center">3</span>
              <div>
                <span className="font-bold text-slate-300">Authorized Dealer Node #3</span>
                <span className="text-[10px] text-slate-500 block">Koyambedu Hub • Blinded Identity</span>
              </div>
            </div>
            <span className="font-mono text-slate-300 text-sm">₹21,68,000</span>
            <span className="font-mono text-xs text-slate-400">+₹53,000</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-navy-900">
              Outbid
            </span>
          </div>

          {/* Dealer Node 4 */}
          <div className="p-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold text-xs flex items-center justify-center">4</span>
              <div>
                <span className="font-bold text-slate-300">Authorized Dealer Node #4</span>
                <span className="text-[10px] text-slate-500 block">Ambattur Hub • Blinded Identity</span>
              </div>
            </div>
            <span className="font-mono text-slate-300 text-sm">₹21,80,000</span>
            <span className="font-mono text-xs text-slate-400">+₹65,000</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-navy-900">
              Outbid
            </span>
          </div>
        </div>
      </div>

      {/* Strategic Call to Action for Dealer */}
      <div className="mt-6 p-4 rounded-2xl glass-panel-accent border border-brand-red/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="font-display font-bold text-white text-sm flex items-center">
            <Zap className="w-4 h-4 text-brand-red mr-1.5" />
            Trigger Smart Deal Lock Auto-Switch Simulation
          </span>
          <p className="text-xs text-slate-300">
            Submit a bid exceeding the agreed {formatINR(agreedSwitchThreshold)} threshold below Dealer Node #1 to capture lead status under the 48-hour provisional freeze protocol.
          </p>
        </div>

        <button
          onClick={triggerSimulatedCompetitorUndercut}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 shrink-0"
        >
          Submit Winning Counter-Bid
        </button>
      </div>
    </div>
  );
}
