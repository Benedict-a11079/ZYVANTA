import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Clock, 
  TrendingDown, 
  Zap, 
  Sparkles, 
  AlertCircle,
  PlayCircle,
  MapPin,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';
import CountdownTimer from '../common/CountdownTimer';
import PurchaseConfirmationModal from '../customer/PurchaseConfirmationModal';

export default function ProvisionalLockStatusCard() {
  const { 
    activeLockedDeal, 
    dealLockTimeRemaining, 
    agreedLockDurationHours,
    setAgreedLockDurationHours,
    autoSwitchEnabled, 
    setAutoSwitchEnabled,
    agreedSwitchThreshold,
    setAgreedSwitchThreshold,
    triggerSimulatedCompetitorUndercut
  } = useMarketplace();

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  return (
    <div className="rounded-3xl glass-panel-accent border-2 border-brand-red p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Top Status Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-brand-red text-white flex items-center justify-center shadow-glow-red">
            <Lock className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Provisional Lock Active (Simulated Hold)
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                TN-07 (Chennai South)
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Held with <strong className="text-slate-200">{activeLockedDeal.currentBestDealer}</strong>
            </p>
          </div>
        </div>

        {/* VIN status pill */}
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-xl bg-navy-900 border border-white/10 text-xs font-mono text-slate-300">
            {activeLockedDeal.vinStatus}
          </span>
        </div>
      </div>

      {/* Main Grid: Countdown + Price Hold */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Countdown Timer Box */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-carbon-950/80 border border-white/10 space-y-4">
          <CountdownTimer
            totalSeconds={dealLockTimeRemaining}
            label={`${agreedLockDurationHours}-Hour Provisional Price Hold`}
          />

          {/* Agreed Lock Duration Controls */}
          <div className="pt-2 border-t border-white/5 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Agreed Hold Duration:</span>
              <span className="font-mono text-white font-bold">{agreedLockDurationHours} Hours</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[24, 48, 72].map((dur) => (
                <button
                  key={dur}
                  type="button"
                  onClick={() => setAgreedLockDurationHours(dur)}
                  className={`py-1.5 rounded-lg text-xs font-mono transition-all ${
                    agreedLockDurationHours === dur
                      ? 'bg-brand-red text-white font-bold shadow-sm'
                      : 'bg-navy-900 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {dur}h {dur === 48 ? '(Default)' : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span>Activated: {activeLockedDeal.lockDate}</span>
            <span className="text-emerald-400 font-medium">No Automatic Deductions</span>
          </div>
        </div>

        {/* Right Column: Price Freeze Box */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Current Best On-Road Chennai Quote:
              </span>
              <span className="font-mono text-3xl sm:text-4xl font-black text-white">
                {formatINR(activeLockedDeal.currentPrice)}
              </span>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Total Savings Unlocked:
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">
                {formatINR(activeLockedDeal.savings)}
              </span>
            </div>
          </div>

          {/* Status info */}
          <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-white/5 space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Standard Showroom MRP:</span>
              <span className="line-through font-mono">₹22,85,000</span>
            </div>
            <div className="flex justify-between text-emerald-400 font-semibold">
              <span>Status Protocol:</span>
              <span>{activeLockedDeal.protectionGuarantee}</span>
            </div>
          </div>

          {/* Auto-Switch Toggle Control (Using Agreed Threshold) */}
          <div className="p-4 rounded-2xl bg-navy-950 border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <Zap className={`w-5 h-5 ${autoSwitchEnabled ? 'text-brand-red animate-pulse' : 'text-slate-500'}`} />
              <div>
                <span className="text-xs font-bold text-white block">
                  Autonomous Price-Match Switching Guard
                </span>
                <span className="text-[11px] text-slate-400">
                  Agreed benefit threshold: auto-switch if competitor underbids by ≥ {formatINR(agreedSwitchThreshold)}
                </span>
              </div>
            </div>

            <button
              onClick={() => setAutoSwitchEnabled(!autoSwitchEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoSwitchEnabled ? 'bg-brand-red' : 'bg-slate-700'
              }`}
              aria-label="Toggle auto switch"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoSwitchEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Customer Confirmation Action Button */}
          <div className="pt-2">
            <button
              onClick={() => setConfirmModalOpen(true)}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 transition-all flex items-center justify-center space-x-2"
            >
              <Lock className="w-4 h-4" />
              <span>Confirm & Lock In-Person Booking Intent</span>
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-1.5">
              Requires customer confirmation before final purchase. Zero online automated payments.
            </p>
          </div>

        </div>

      </div>

      {/* Interactive Simulation Strip */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-navy-900/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6">
        <div className="space-y-0.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <PlayCircle className="w-4 h-4 text-brand-red" />
            <span className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Autonomous Switch Simulation:
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Simulate a verified rival dealer submitting a lower quote to watch the algorithm auto-switch to Dealer Node E!
          </p>
        </div>

        <button
          onClick={triggerSimulatedCompetitorUndercut}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Simulate Competitor Undercut ({formatINR(agreedSwitchThreshold + 5000)} lower)</span>
        </button>
      </div>

      <PurchaseConfirmationModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
      />

    </div>
  );
}
