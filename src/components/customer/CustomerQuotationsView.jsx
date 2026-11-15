import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Sparkles, 
  Scale, 
  CheckCircle2, 
  AlertCircle,
  TrendingDown,
  Flag,
  Calendar
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';
import ReportPriceModal from './ReportPriceModal';
import PurchaseConfirmationModal from './PurchaseConfirmationModal';

export default function CustomerQuotationsView({ onOpenBreakdownModal, onOpenCompare }) {
  const { quotations, activeLockedDeal } = useMarketplace();
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedQuoteForReport, setSelectedQuoteForReport] = useState(null);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleReportQuote = (quote) => {
    setSelectedQuoteForReport(quote);
    setReportModalOpen(true);
  };

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Received Dealership Quotations (Simulated Models)
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
              Blinded Dealer Nodes
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Sealed bids received from Chennai regional nodes with separated mandatory statutory and optional items
          </p>
        </div>

        <button
          onClick={onOpenCompare}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold border border-white/10 transition-colors"
        >
          <Scale className="w-3.5 h-3.5 text-brand-red" />
          <span>Side-by-Side Comparison Matrix</span>
        </button>
      </div>

      {/* Quotations Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotations.map((quote) => {
          const isLocked = quote.isCurrentBest;
          const updatedTime = quote.lastUpdated ? new Date(quote.lastUpdated).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '11:30 AM';
          const validUntil = quote.validUntil ? new Date(quote.validUntil).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '13 Nov';

          return (
            <div
              key={quote.id}
              className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                isLocked
                  ? 'glass-panel-accent border-2 border-brand-red shadow-glow-red/20 relative'
                  : 'bg-navy-900/50 border border-white/10 hover:border-white/25'
              }`}
            >
              {isLocked && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-glow-red flex items-center space-x-1">
                  <Lock className="w-3 h-3" />
                  <span>Agreed 48h Deal Lock Active</span>
                </div>
              )}

              <div>
                {/* Dealer Info (Anonymized per protocol) */}
                <div className="flex items-start justify-between pb-4 border-b border-white/10">
                  <div>
                    <h4 className="font-display text-lg font-bold text-white flex items-center space-x-1.5">
                      <span>{quote.anonymousDealerName || quote.dealerName}</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center mt-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-red mr-1 shrink-0" />
                      {quote.dealerLocation}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold block">
                      ★ {quote.dealerRating} Node Score
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Ref: {quote.id.slice(0, 10)}
                    </span>
                  </div>
                </div>

                {/* Car Spec */}
                <div className="mt-4 pb-3 border-b border-white/5">
                  <span className="text-xs font-bold text-slate-200">
                    {quote.carName} — {quote.variant}
                  </span>
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-1">
                    <span className="text-emerald-400 font-medium">Stock: {quote.stockStatus}</span>
                    <span>•</span>
                    <span>Target ETA: {quote.deliveryTimelineDays} Days</span>
                  </div>
                </div>

                {/* Price Breakdown Preview */}
                <div className="mt-4 p-4 rounded-2xl bg-carbon-950/80 border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Regular Chennai On-Road MRP:</span>
                    <span className="line-through text-slate-500 font-mono">
                      {formatINR(quote.retailListPrice)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-emerald-400 font-medium">
                    <span className="flex items-center">
                      <TrendingDown className="w-3.5 h-3.5 mr-1" />
                      Reverse Auction + Fleet Concessions:
                    </span>
                    <span className="font-mono font-bold">-{formatINR(quote.savingsAmount)}</span>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                    <span className="text-xs font-semibold text-slate-300">Final Net On-Road:</span>
                    <span className="font-mono text-2xl font-black text-white">
                      {formatINR(quote.finalOnRoadPrice)}
                    </span>
                  </div>

                  {/* Timestamps */}
                  <div className="pt-2 border-t border-white/5 flex justify-between text-[10px] font-mono text-slate-400">
                    <span>Updated: {updatedTime}</span>
                    <span className="text-amber-400">Valid: {validUntil}</span>
                  </div>
                </div>

                {/* Dealer perks checklist */}
                <div className="mt-4 space-y-1 text-xs text-slate-300">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-slate-400 block font-semibold mb-1">
                    Value Perks Included:
                  </span>
                  {quote.dealerPerks.slice(0, 2).map((perk, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenBreakdownModal(quote)}
                    className="flex-1 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold transition-colors text-center"
                  >
                    Inspect Full Itemized Breakdown
                  </button>

                  <button
                    onClick={() => handleReportQuote(quote)}
                    className="px-3 py-2.5 rounded-xl bg-carbon-900 hover:bg-carbon-800 text-slate-400 hover:text-amber-400 border border-white/10 text-xs font-medium transition-colors"
                    title="Report inaccurate price"
                  >
                    <Flag className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenCompare}
                    className="px-3 py-2.5 rounded-xl bg-carbon-900 hover:bg-carbon-800 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
                    title="Compare with other quotes"
                  >
                    <Scale className="w-4 h-4" />
                  </button>
                </div>

                {isLocked && (
                  <button
                    onClick={() => setConfirmModalOpen(true)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 flex items-center justify-center space-x-1.5"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Confirm Booking Intent (Zero Automatic Charges)</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      <ReportPriceModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        quote={selectedQuoteForReport}
      />

      <PurchaseConfirmationModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
      />
    </div>
  );
}
