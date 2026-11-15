import React, { useState } from 'react';
import { ShieldCheck, MapPin, CheckCircle2, TrendingDown, Sparkles, Building2, Clock, Calendar, Flag, AlertTriangle, FileText } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';
import ReportPriceModal from '../customer/ReportPriceModal';

export default function BestOfferBreakdown() {
  const { activeLockedDeal, quotations } = useMarketplace();
  const [reportModalOpen, setReportModalOpen] = useState(false);

  // Find current best quote or fallback to first
  const currentQuote = quotations.find((q) => q.isCurrentBest) || quotations[0];
  const b = currentQuote?.breakdown;

  // Calculate separated subtotals
  const mandatoryTotal = b ? (
    b.mandatory.exShowroom +
    b.mandatory.rtoRegistration +
    b.mandatory.statutoryInsurance +
    b.mandatory.tcs +
    b.mandatory.fastagHsrp
  ) : 2345586;

  const optionalTotal = b ? (
    b.optional.zeroDepAddon +
    b.optional.extendedWarranty +
    b.optional.basicAccessoriesKit +
    b.optional.dealerHandling
  ) : 34000;

  const discountsTotal = b ? (
    b.discounts.reverseAuctionDiscount +
    b.discounts.poolVolumeRebate +
    b.discounts.dealerCashConcession
  ) : 170000;

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Current Best Offer Line-Item Breakdown
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulated itemized quotation held by {activeLockedDeal.currentBestDealer} • TN-07 Jurisdiction
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setReportModalOpen(true)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-navy-900 border border-white/10 hover:border-amber-400/40 text-xs text-slate-300 hover:text-amber-300 transition-colors"
          >
            <Flag className="w-3.5 h-3.5 text-amber-400" />
            <span>Report Price Discrepancy</span>
          </button>

          <div className="text-left sm:text-right">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Net On-Road Payable
            </span>
            <span className="font-mono text-2xl font-black text-white">
              {formatINR(activeLockedDeal.currentPrice)}
            </span>
          </div>
        </div>
      </div>

      {/* Timestamps & Validity Bar */}
      <div className="my-4 p-3 bg-navy-900/60 rounded-xl border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-brand-red" />
          <span>Last Updated: <strong className="text-slate-200">{new Date(currentQuote?.lastUpdated || Date.now()).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</strong></span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Quotation Valid Until: <strong className="text-amber-300">{new Date(currentQuote?.validUntil || Date.now() + 172800000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></span>
        </div>
        <div className="text-[11px] font-mono text-slate-500">
          Ref: {currentQuote?.id || 'DEMO-QTE-001'}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Line Items Table with Separated Mandatory & Optional */}
        <div className="lg:col-span-8 rounded-2xl bg-carbon-950/80 border border-white/5 overflow-hidden text-xs">
          
          {/* Section 1: Mandatory Statutory Charges */}
          <div className="bg-navy-900/80 px-4 py-2.5 border-b border-white/5 flex justify-between items-center">
            <span className="font-semibold text-white uppercase text-[11px] tracking-wider">
              1. Mandatory Statutory & Govt Charges
            </span>
            <span className="font-mono text-slate-400 text-xs">
              Subtotal: {formatINR(mandatoryTotal)}
            </span>
          </div>
          <div className="divide-y divide-white/5 px-4 py-2">
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">OEM Ex-Showroom Base</span>
              <span className="font-mono text-white font-semibold">₹{(b?.mandatory.exShowroom || 1999900).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">Tamil Nadu RTO Motor Vehicle Tax & Smart Card Registration</span>
              <span className="font-mono text-white font-semibold">₹{(b?.mandatory.rtoRegistration || 259987).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">Statutory Motor Third-Party & Own Damage Insurance</span>
              <span className="font-mono text-white font-semibold">₹{(b?.mandatory.statutoryInsurance || 64500).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">TCS (Tax Collected at Source - 1% under IT Act)</span>
              <span className="font-mono text-white font-semibold">₹{(b?.mandatory.tcs || 19999).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">Fastag & HSRP Govt Security Plates</span>
              <span className="font-mono text-white font-semibold">₹{(b?.mandatory.fastagHsrp || 1200).toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Section 2: Optional Packages & Dealership Add-ons */}
          <div className="bg-navy-900/80 px-4 py-2.5 border-y border-white/5 flex justify-between items-center">
            <span className="font-semibold text-white uppercase text-[11px] tracking-wider">
              2. Optional Packages & Value Add-ons
            </span>
            <span className="font-mono text-slate-400 text-xs">
              Subtotal: {formatINR(optionalTotal)}
            </span>
          </div>
          <div className="divide-y divide-white/5 px-4 py-2">
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">Bumper-to-Bumper Zero Depreciation Add-on Cover</span>
              <span className="font-mono text-white font-semibold">₹{(b?.optional.zeroDepAddon || 14000).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">4th & 5th Year Manufacturer Extended Warranty</span>
              <span className="font-mono text-white font-semibold">₹{(b?.optional.extendedWarranty || 20000).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">Basic OEM Accessories Kit (Floor mats, mud flaps)</span>
              <span className="font-mono text-white font-semibold">
                {b?.optional.basicAccessoriesKit ? `₹${b.optional.basicAccessoriesKit.toLocaleString('en-IN')}` : 'Included (Waived)'}
              </span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-300">Dealer Logistics & PDI Handling Charges</span>
              <span className="font-mono text-emerald-400 font-semibold">
                {b?.optional.dealerHandling === 0 ? '₹0 (Waived per policy)' : `₹${b?.optional.dealerHandling}`}
              </span>
            </div>
          </div>

          {/* Section 3: Concessions & Applied Discounts */}
          <div className="bg-navy-900/80 px-4 py-2.5 border-y border-white/5 flex justify-between items-center">
            <span className="font-semibold text-emerald-400 uppercase text-[11px] tracking-wider">
              3. Applied Concessions & Platform Savings
            </span>
            <span className="font-mono text-emerald-400 text-xs font-bold">
              Total Discount: -{formatINR(discountsTotal)}
            </span>
          </div>
          <div className="divide-y divide-white/5 px-4 py-2">
            <div className="py-2 flex justify-between text-brand-red font-semibold">
              <span>Competitive Reverse Auction Discount</span>
              <span className="font-mono font-bold">-₹{(b?.discounts.reverseAuctionDiscount || 55000).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between text-emerald-400 font-semibold">
              <span>Chennai Regional Cluster Group Pool Rebate</span>
              <span className="font-mono font-bold">-₹{(b?.discounts.poolVolumeRebate || 65000).toLocaleString('en-IN')}</span>
            </div>
            <div className="py-2 flex justify-between text-emerald-400 font-semibold">
              <span>Dealership Special Bonus Allowance</span>
              <span className="font-mono font-bold">-₹{(b?.discounts.dealerCashConcession || 50000).toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Final Net Payable Row */}
          <div className="p-4 flex justify-between items-baseline bg-navy-900 border-t-2 border-white/20">
            <div>
              <span className="font-display font-bold text-white text-sm block">
                Net Calculated On-Road (TN-07 Chennai)
              </span>
              <span className="text-[10px] text-slate-400 font-sans">
                Mandatory ({formatINR(mandatoryTotal)}) + Optional ({formatINR(optionalTotal)}) - Savings ({formatINR(discountsTotal)})
              </span>
            </div>
            <span className="font-mono text-2xl font-black text-white">
              {formatINR(activeLockedDeal.currentPrice)}
            </span>
          </div>
        </div>

        {/* Right: Dealership Node Credentials & In-Person Handover */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-2xl bg-navy-900/50 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-bold">
                Anonymous Dealer Node
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-navy-800 text-slate-300">
                TN-07 Zone
              </span>
            </div>
            <h4 className="font-display font-bold text-white text-base flex items-center space-x-1.5">
              <span>{activeLockedDeal.currentBestDealer}</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </h4>
            <p className="text-xs text-slate-400 flex items-center">
              <MapPin className="w-3.5 h-3.5 text-brand-red mr-1 shrink-0" />
              Nandanam & Anna Salai Hub, Chennai
            </p>

            <div className="pt-2 border-t border-white/5 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Simulated VIN allocation in yard</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Doorstep delivery coordination upon visit</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero compulsory accessory mandates</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-navy-900/40 border border-white/10 text-xs text-slate-300 space-y-2">
            <span className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              Booking & Inspection Procedure:
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              This simulated quotation establishes an indicative baseline. Final vehicle registration and physical delivery require an in-person showroom visit and direct verification with dealership personnel. No online automated card debits are performed by AutoMarketplace.
            </p>
          </div>
        </div>

      </div>

      {/* Report Modal */}
      <ReportPriceModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        quote={currentQuote}
      />
    </div>
  );
}