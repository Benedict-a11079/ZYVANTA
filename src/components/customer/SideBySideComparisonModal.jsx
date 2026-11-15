import React, { useState } from 'react';
import Modal from '../common/Modal';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';
import { Check, X, ShieldCheck, MapPin, Sparkles, Lock, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReportPriceModal from './ReportPriceModal';

export default function SideBySideComparisonModal({ isOpen, onClose }) {
  const { quotations } = useMarketplace();
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedQuoteForReport, setSelectedQuoteForReport] = useState(null);

  // Filter for Hyundai Creta quotes for clean side-by-side demonstration
  const compareQuotes = quotations.filter((q) => q.carId === 'hyundai-creta-2025');

  const handleReportQuote = (q) => {
    setSelectedQuoteForReport(q);
    setReportModalOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Chennai Dealer On-Road Price Comparison (Demo)"
        subtitle="Side-by-side transparent itemized schedule for Hyundai Creta SX (O) 1.5 Turbo DCT • TN-07 RTO"
        maxWidth="max-w-4xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-navy-900/50">
                <th className="p-3.5 text-slate-400 font-semibold uppercase tracking-wider text-[11px] w-1/3">
                  Cost Architecture Components
                </th>
                {compareQuotes.map((q) => (
                  <th key={q.id} className="p-3.5 text-white font-display text-sm font-bold min-w-[220px]">
                    <div className="flex items-center space-x-1.5">
                      <span>{q.anonymousDealerName || q.dealerName}</span>
                      {q.isCurrentBest && (
                        <span className="p-1 rounded-full bg-brand-red text-white" title="Current Locked Best">
                          <Lock className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-sans font-normal text-slate-400 block mt-0.5">
                      {q.dealerLocation}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              
              {/* SECTION 1: MANDATORY STATUTORY CHARGES */}
              <tr className="bg-navy-900/30">
                <td colSpan={1 + compareQuotes.length} className="p-2.5 font-bold text-white uppercase text-[10px] tracking-wider">
                  1. Mandatory Statutory & Government Charges
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">OEM Factory Ex-Showroom Base</td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.mandatory?.exShowroom || q.items?.exShowroom)}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">Tamil Nadu RTO Road Tax & Smart Card Registration</td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.mandatory?.rtoChennai || q.items?.rtoChennai)}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">
                  Statutory Motor Insurance (1Y Own Damage + 3Y Third Party Mandatory)
                </td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.mandatory?.statutoryInsurance || 38500)}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">TCS (1% Govt Tax)</td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.mandatory?.tcs || q.items?.tcs)}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">HSRP Security Number Plates & Fastag RFID</td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.mandatory?.hsrpAndFastag || 1200)}
                  </td>
                ))}
              </tr>

              {/* SECTION 2: OPTIONAL PACKAGES & DEALER FEES */}
              <tr className="bg-navy-900/30">
                <td colSpan={1 + compareQuotes.length} className="p-2.5 font-bold text-sky-400 uppercase text-[10px] tracking-wider">
                  2. Optional Protection Packages & Dealer Fees
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">
                  Comprehensive Zero-Depreciation, RTI & Engine Cover (Optional)
                </td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.optional?.zeroDepAndRtiCover || 26000)}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">
                  4th & 5th Year Extended Warranty Protection (Optional)
                </td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.optional?.extendedWarranty || 21500)}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">
                  Basic Accessories Care Kit (Optional)
                </td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-slate-200">
                    {formatINR(q.optional?.basicAccessoriesKit || 12500)}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">Dealer Logistics & Handling Charges</td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono font-semibold text-emerald-400">
                    {q.optional?.dealerLogisticsFee === 0 || !q.optional?.dealerLogisticsFee ? 'Waived 100% (₹0)' : formatINR(q.optional.dealerLogisticsFee)}
                  </td>
                ))}
              </tr>

              {/* SECTION 3: DISCOUNTS */}
              <tr className="bg-navy-900/30">
                <td colSpan={1 + compareQuotes.length} className="p-2.5 font-bold text-brand-red uppercase text-[10px] tracking-wider">
                  3. Competitive Reverse Auction & Pool Rebates
                </td>
              </tr>

              <tr className="bg-brand-red/5 hover:bg-brand-red/10">
                <td className="p-3 text-brand-red font-semibold">
                  Sealed Reverse Auction Concession
                </td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-brand-red font-bold">
                    - {formatINR(q.discounts?.reverseAuctionDiscount || 144586)}
                  </td>
                ))}
              </tr>

              <tr className="bg-emerald-950/20 hover:bg-emerald-950/30">
                <td className="p-3 text-emerald-400 font-semibold">
                  OMR Regional Cluster Pool Volume Credit
                </td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-mono text-emerald-400 font-bold">
                    - {formatINR(q.discounts?.groupBuyingFleetRebate || 120000)}
                  </td>
                ))}
              </tr>

              {/* SECTION 4: NET FINAL PAYABLE */}
              <tr className="bg-navy-900 border-t-2 border-white/20">
                <td className="p-4 text-white font-display text-sm font-bold">
                  Final Net On-Road Chennai Payable
                </td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-4 font-mono text-lg font-black text-white">
                    {formatINR(q.finalOnRoadPrice)}
                    {q.isCurrentBest && (
                      <span className="block text-[10px] font-sans text-emerald-400 font-semibold mt-0.5">
                        Winning Offer (Locked)
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Delivery ETA */}
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-300 font-medium">Guaranteed Delivery ETA</td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3 font-semibold text-emerald-400">
                    {q.deliveryTimelineDays} Days from yard
                  </td>
                ))}
              </tr>

              {/* Price audit action */}
              <tr className="hover:bg-white/[0.02]">
                <td className="p-3 text-slate-400 text-[11px]">Price Audit & Integrity</td>
                {compareQuotes.map((q) => (
                  <td key={q.id} className="p-3">
                    <button
                      onClick={() => handleReportQuote(q)}
                      className="text-[11px] text-slate-400 hover:text-amber-400 flex items-center space-x-1 transition-colors"
                    >
                      <Flag className="w-3 h-3" />
                      <span>Report Discrepancy</span>
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">
            All prices subject to the agreed 48-Hour Smart Deal Lock price protection protocol. Zero online automated charges.
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 text-xs font-medium border border-white/10"
            >
              Close
            </button>
            <Link
              to="/smart-deal-lock"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 flex items-center space-x-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Smart Deal Lock Console</span>
            </Link>
          </div>
        </div>
      </Modal>

      <ReportPriceModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        quote={selectedQuoteForReport}
      />
    </>
  );
}
