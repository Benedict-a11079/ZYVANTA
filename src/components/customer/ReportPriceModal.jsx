import React, { useState } from 'react';
import Modal from '../common/Modal';
import { useMarketplace } from '../../context/MarketplaceContext';
import { AlertTriangle, ShieldAlert, CheckCircle2, Flag } from 'lucide-react';
import { formatINR } from '../../utils/formatters';

export default function ReportPriceModal({ isOpen, onClose, quote }) {
  const { reportPriceDiscrepancy } = useMarketplace();

  const [reason, setReason] = useState('Unapproved Handling/Logistics Charge');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!quote) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    reportPriceDiscrepancy(quote.id, {
      quoteId: quote.id,
      dealerName: quote.anonymousDealerName || quote.dealerName,
      carName: `${quote.carName} ${quote.variant}`,
      quotedPrice: quote.finalOnRoadPrice,
      reason,
      details,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Report Inaccurate Price or Hidden Charge"
      subtitle={`Flag quotation ${quote.id.slice(0, 10)} from ${quote.anonymousDealerName || quote.dealerName}`}
      maxWidth="max-w-lg"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-display text-lg font-bold text-white">Price Audit Report Logged</h4>
          <p className="text-xs text-slate-300 max-w-sm mx-auto">
            Our market transparency engine has flagged this quotation for verification against OEM price circulars and RTO schedules.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-300 space-y-1">
            <span className="font-bold text-amber-300 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1.5 shrink-0" />
              Price Integrity Guarantee
            </span>
            <p className="text-[11px] text-slate-400">
              Dealerships quoting on AutoMarketplace are contractually bound to honor exact itemized on-road breakdowns without adding mandatory accessory packs or undocumented handling charges.
            </p>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Reason for Reporting
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-3 text-white text-xs focus:outline-none focus:border-brand-red"
            >
              <option value="Unapproved Handling/Logistics Charge">Unapproved Handling / Logistics Charge included</option>
              <option value="Ex-Showroom Mismatch with OEM">Ex-Showroom price differs from OEM Tamil Nadu price</option>
              <option value="Inflated Statutory Insurance">Insurance quote exceeds IRDAI Zero-Dep benchmarks</option>
              <option value="Mandatory Accessory Bundling">Accessories marked as mandatory rather than optional</option>
              <option value="Quotation Retracted Prematurely">Dealer refused to hold price within agreed 48h lock window</option>
              <option value="Other Discrepancy">Other price inconsistency</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Additional Evidence / Observations
            </label>
            <textarea
              rows="3"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Provide specific notes (e.g. 'Showroom rep quoted ₹15,000 handling fee not listed in app breakdown')..."
              className="w-full bg-navy-900 border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-brand-red placeholder-slate-500"
            />
          </div>

          <div className="p-3 rounded-xl bg-carbon-950 border border-white/5 flex justify-between items-center text-[11px]">
            <span className="text-slate-400">Quotation Value:</span>
            <span className="font-mono font-bold text-white">{formatINR(quote.finalOnRoadPrice)}</span>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs font-bold shadow-md flex items-center space-x-1.5"
            >
              <Flag className="w-3.5 h-3.5" />
              <span>Submit Price Report</span>
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
