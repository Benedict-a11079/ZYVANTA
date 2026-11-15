import React from 'react';
import { Lock, ShieldCheck, Sparkles, CheckCircle2, Zap, ArrowDownRight } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function DealLockHero() {
  const { agreedSwitchThreshold, agreedLockDurationHours } = useMarketplace();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-brand-red/30 p-8 sm:p-10 shadow-2xl mb-10">
      {/* Background glow element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-4">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-xs font-mono font-bold text-white shadow-glow-red/30">
          <Lock className="w-3.5 h-3.5 text-brand-red animate-pulse" />
          <span>DEMO SIMULATION • SMART DEAL LOCK</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          The {agreedLockDurationHours}-Hour Smart Deal Lock
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          Provisionally lock in your simulated lowest Chennai on-road quote without automated bank charges. If an authorized dealership underbids by at least <strong className="text-white">{formatINR(agreedSwitchThreshold)}</strong> (agreed benefit threshold) before the countdown expires, the algorithm <strong className="text-emerald-400">automatically switches</strong> your lock to the cheaper comparable quote. Dealer identities remain strictly anonymized.
        </p>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
          <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-carbon-950/60 border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Price Freeze Guard</span>
              <span className="text-slate-400 text-[11px]">Dealer cannot increase locked baseline or revoke discounts during hold.</span>
            </div>
          </div>

          <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-carbon-950/60 border border-white/5">
            <Zap className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Verified Parity Transfer</span>
              <span className="text-slate-400 text-[11px]">Auto-switches only when specification parity and agreed benefit threshold are met.</span>
            </div>
          </div>

          <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-carbon-950/60 border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Zero Automated Debit</span>
              <span className="text-slate-400 text-[11px]">Customer confirmation required before purchase; zero online payment charges.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}