import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  TrendingDown, 
  Scale, 
  SlidersHorizontal 
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function AutoSwitchIndicator() {
  const { autoSwitchEnabled, agreedSwitchThreshold, setAgreedSwitchThreshold } = useMarketplace();

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-navy-900 border border-brand-red/30 flex items-center justify-center">
            <Zap className="w-5 h-5 text-brand-red" />
          </div>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Autonomous Price-Switching Algorithm Indicator
            </h3>
            <p className="text-xs text-slate-400">
              Contractually agreed parameters regulating provisional deal transfers
            </p>
          </div>
        </div>

        <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
          autoSwitchEnabled
            ? 'bg-emerald-950 text-emerald-400 border-emerald-500/30'
            : 'bg-navy-900 text-slate-400 border-white/10'
        }`}>
          {autoSwitchEnabled ? '● Engine Armed & Monitoring' : '○ Disabled'}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Agreed Switching Threshold Slider */}
        <div className="p-4 rounded-2xl bg-navy-900/50 border border-white/5 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-300 font-semibold">Agreed Benefit Concession:</span>
            <span className="font-mono text-sm font-bold text-brand-red">
              {formatINR(agreedSwitchThreshold)}
            </span>
          </div>

          <input
            type="range"
            min="5000"
            max="30000"
            step="5000"
            value={agreedSwitchThreshold}
            onChange={(e) => setAgreedSwitchThreshold(Number(e.target.value))}
            className="w-full accent-brand-red cursor-pointer"
          />

          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>₹5,000</span>
            <span>₹15,000</span>
            <span>₹30,000</span>
          </div>

          <p className="text-[11px] text-slate-400 leading-snug">
            A rival quotation must beat the current locked price by at least this agreed concession amount to trigger an automatic transfer.
          </p>
        </div>

        {/* Parity Verification Guard */}
        <div className="p-4 rounded-2xl bg-navy-900/50 border border-white/5 space-y-2">
          <span className="text-xs font-semibold text-white block">
            Specification Parity Guard
          </span>
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Exact Model, Variant & Transmission match</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Zero-Depreciation Insurance package intact</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Equal or earlier delivery timeline</span>
            </div>
          </div>
        </div>

        {/* Protection & Non-Debit Rule */}
        <div className="p-4 rounded-2xl bg-navy-900/50 border border-white/5 space-y-2">
          <span className="text-xs font-semibold text-white block">
            Zero Online Payment Debit
          </span>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            The Smart Deal Lock is purely an on-road price freeze. It never automatically charges your payment methods. Physical customer acceptance is required prior to vehicle handover.
          </p>
          <div className="pt-1">
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              Zero Downside Guarantee Active
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
