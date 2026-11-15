import React, { useState } from 'react';
import Modal from '../common/Modal';
import { formatINR, formatDate } from '../../utils/formatters';
import { ShieldCheck, MapPin, CheckCircle2, TrendingDown, Lock, Flag, Clock, Calendar, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReportPriceModal from './ReportPriceModal';
import PurchaseConfirmationModal from './PurchaseConfirmationModal';

export default function ItemizedBreakdownModal({ isOpen, onClose, quote }) {
  const [reportOpen, setReportOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  if (!quote) return null;

  // Extract separated charges or fallback to calculated defaults
  const mandatory = quote.mandatory || {
    exShowroom: 1999900,
    rtoChennai: 259987,
    statutoryInsurance: 38500,
    tcs: 19999,
    hsrpAndFastag: 1200,
    subtotal: 2319586
  };

  const optional = quote.optional || {
    zeroDepAndRtiCover: 26000,
    extendedWarranty: 21500,
    basicAccessoriesKit: 12500,
    dealerLogisticsFee: 0,
    subtotal: 60000
  };

  const discounts = quote.discounts || {
    reverseAuctionDiscount: 144586,
    groupBuyingFleetRebate: 120000,
    subtotal: 264586
  };

  const quotedTime = quote.quotedAt ? new Date(quote.quotedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '10:30 AM';
  const updatedTime = quote.lastUpdated ? new Date(quote.lastUpdated).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '02:15 PM';
  const expiryDate = quote.validUntil ? new Date(quote.validUntil).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '13 Nov';

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={`${quote.anonymousDealerName || quote.dealerName}`}
        subtitle={`Itemized On-Road Breakdown • ${quote.carName} (${quote.variant}) • TN-07 RTO Model`}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4">
          
          {/* Header Metadata with Timestamps */}
          <div className="p-4 rounded-2xl bg-navy-900/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="font-display font-bold text-white text-base flex items-center space-x-1.5">
                <span>{quote.anonymousDealerName || quote.dealerName}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </h4>
              <p className="text-xs text-slate-400 flex items-center mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
                {quote.dealerLocation}
              </p>
            </div>

            <div className="text-left sm:text-right text-[11px] font-mono text-slate-400 space-y-0.5">
              <span className="block text-emerald-400 font-semibold">
                ETA: {quote.deliveryTimelineDays} Days from Yard
              </span>
              <span>Last Updated: {updatedTime}</span>
              <span className="block text-amber-400">Valid Until: {expiryDate} ({quote.agreedLockDurationHours || 48}h Hold)</span>
            </div>
          </div>

          {/* Itemized Table - Separated Mandatory & Optional */}
          <div className="rounded-2xl bg-carbon-950/90 border border-white/10 p-5 space-y-4 text-xs">
            
            {/* 1. Mandatory Statutory Section */}
            <div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                <span className="text-white">1. Mandatory Statutory & Vehicle Charges</span>
                <span className="font-mono text-slate-300">Subtotal: {formatINR(mandatory.subtotal)}</span>
              </div>
              <div className="mt-2 space-y-1.5 text-slate-400">
                <div className="flex justify-between">
                  <span>• OEM Ex-Showroom Base</span>
                  <span className="font-mono text-white">{formatINR(mandatory.exShowroom)}</span>
                </div>
                <div className="flex justify-between">
                  <span>• Tamil Nadu RTO Road Tax & Smart Card Registration (Mandatory ~13%)</span>
                  <span className="font-mono text-white">{formatINR(mandatory.rtoChennai)}</span>
                </div>
                <div className="flex justify-between">
                  <span>• Statutory Insurance (1-Yr Own Damage + 3-Yr Third Party Mandatory)</span>
                  <span className="font-mono text-white">{formatINR(mandatory.statutoryInsurance)}</span>
                </div>
                <div className="flex justify-between">
                  <span>• TCS (1% Govt Tax Collected at Source)</span>
                  <span className="font-mono text-white">{formatINR(mandatory.tcs)}</span>
                </div>
                <div className="flex justify-between">
                  <span>• Fastag RFID & HSRP Govt Security Number Plates</span>
                  <span className="font-mono text-white">{formatINR(mandatory.hsrpAndFastag)}</span>
                </div>
              </div>
            </div>

            {/* 2. Optional Value-Add & Dealer Packages */}
            <div className="pt-2">
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                <span className="text-sky-400">2. Optional Value-Add Packages & Protection</span>
                <span className="font-mono text-sky-400">Subtotal: {formatINR(optional.subtotal)}</span>
              </div>
              <div className="mt-2 space-y-1.5 text-slate-400">
                <div className="flex justify-between">
                  <span>• Zero-Depreciation, RTI & Engine Protector Add-on Cover</span>
                  <span className="font-mono text-white">{formatINR(optional.zeroDepAndRtiCover)}</span>
                </div>
                <div className="flex justify-between">
                  <span>• 4th & 5th Year Extended Warranty Mechanical Shield</span>
                  <span className="font-mono text-white">{formatINR(optional.extendedWarranty)}</span>
                </div>
                <div className="flex justify-between">
                  <span>• Basic Essential Accessory Care Kit (Mats, Flaps, Perfume)</span>
                  <span className="font-mono text-white">{formatINR(optional.basicAccessoriesKit)}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>• Dealer Logistics & PDI Handling Fee</span>
                  <span className="font-mono font-bold">
                    {optional.dealerLogisticsFee === 0 ? 'Waived 100% (₹0)' : formatINR(optional.dealerLogisticsFee)}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Deductions & Volume Discounts */}
            <div className="pt-2">
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-brand-red font-bold uppercase tracking-wider text-[11px]">
                <span>3. Deductions & Sealed Bidding Rebates</span>
                <span className="font-mono">- {formatINR(discounts.subtotal)}</span>
              </div>
              <div className="mt-2 space-y-1.5 text-slate-400">
                <div className="flex justify-between text-brand-red">
                  <span>• Reverse Auction Sealed Dealer Discount</span>
                  <span className="font-mono font-bold">- {formatINR(discounts.reverseAuctionDiscount)}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>• Regional Chennai Group Pool Volume Credit</span>
                  <span className="font-mono font-bold">- {formatINR(discounts.groupBuyingFleetRebate)}</span>
                </div>
              </div>
            </div>

            {/* Net Final Row */}
            <div className="pt-4 border-t-2 border-white/20 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block">
                  Final Net On-Road Chennai Payable:
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-black text-white">
                  {formatINR(quote.finalOnRoadPrice)}
                </span>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-950 text-emerald-300 font-mono font-bold text-xs border border-emerald-500/30 self-start sm:self-auto">
                Total Savings: {formatINR(quote.savingsAmount)}
              </span>
            </div>
          </div>

          {/* Perks Box */}
          <div className="p-3.5 rounded-2xl bg-navy-900/50 border border-white/5 text-xs text-slate-300">
            <span className="font-bold text-white block mb-1.5">Included Dealership Perks:</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {quote.dealerPerks.map((perk, i) => (
                <li key={i} className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Note */}
          <div className="p-3 rounded-xl bg-navy-950 border border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span>Price freeze protected under agreed 48h lock window.</span>
            <span className="text-amber-400 font-medium">Zero online automated charges.</span>
          </div>

          {/* Bottom Actions */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setReportOpen(true)}
              className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Flag className="w-3.5 h-3.5" />
              <span>Report Price Discrepancy</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 text-xs font-semibold border border-white/10"
              >
                Close
              </button>
              <button
                onClick={() => setConfirmOpen(true)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 flex items-center space-x-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Confirm Booking Intent</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Nested Modals */}
      <ReportPriceModal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
        quote={quote}
      />

      <PurchaseConfirmationModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
      />
    </>
  );
}
