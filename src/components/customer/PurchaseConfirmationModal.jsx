import React, { useState } from 'react';
import Modal from '../common/Modal';
import { useMarketplace } from '../../context/MarketplaceContext';
import { ShieldCheck, CheckCircle2, Lock, AlertCircle, Award, ArrowRight } from 'lucide-react';
import { formatINR } from '../../utils/formatters';

export default function PurchaseConfirmationModal({ isOpen, onClose }) {
  const { activeLockedDeal, confirmDealershipBooking, confirmedBooking } = useMarketplace();

  const [customerName, setCustomerName] = useState('Karthik Subramanian');
  const [preferredRto, setPreferredRto] = useState('TN-07 (Chennai South)');
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [issuedToken, setIssuedToken] = useState(null);

  const handleConfirm = (e) => {
    e.preventDefault();
    const result = confirmDealershipBooking({
      customerName,
      preferredRto,
    });
    setIssuedToken(result.token);
    setHasConfirmed(true);
  };

  const handleReset = () => {
    setHasConfirmed(false);
    setIssuedToken(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Customer Booking Confirmation & Voucher"
      subtitle="Verify your locked on-road quotation before generating your physical dealership handover token"
      maxWidth="max-w-xl"
    >
      {hasConfirmed ? (
        <div className="space-y-5 py-4">
          <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-glow-cyan">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-display text-2xl font-black text-white">
              Booking Intent Confirmed!
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your locked price of <strong className="text-white font-mono">{formatINR(activeLockedDeal.currentPrice)}</strong> has been formally registered for physical vehicle allotment.
            </p>

            {/* Token Badge */}
            <div className="p-3.5 rounded-xl bg-carbon-950 border border-emerald-500/30 inline-block font-mono text-base font-bold text-emerald-400 tracking-wider">
              TOKEN: {issuedToken}
            </div>
          </div>

          {/* Handover Instructions */}
          <div className="p-4 rounded-2xl bg-navy-900/60 border border-white/10 space-y-2 text-xs text-slate-300">
            <span className="font-bold text-white block">Next Steps at Authorized Showroom:</span>
            <ul className="space-y-1.5 text-[11px] list-disc list-inside text-slate-400">
              <li>Present this token to the Dealership Fleet/Key Accounts desk at {activeLockedDeal.currentBestDealer}.</li>
              <li>Inspect your allotted VIN unit and verify the exact itemized price schedule.</li>
              <li><strong>Zero Online Charges:</strong> Payment of booking advance or full payment is made directly to the dealership entity through sanctioned banking channels.</li>
            </ul>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110"
            >
              Done & Return to Dashboard
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleConfirm} className="space-y-4 text-xs">
          
          {/* Important Regulatory Banner: NEVER AUTO CHARGES */}
          <div className="p-4 rounded-2xl bg-navy-900/80 border border-emerald-500/30 space-y-1.5 text-slate-300">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Zero Automatic Payments Guarantee</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              AutoMarketplace is a price protection exchange. Confirming this step <strong>never debits your bank account or card</strong>. It signals your intent to finalize the booking at the guaranteed locked rate.
            </p>
          </div>

          {/* Deal Summary Box */}
          <div className="p-4 rounded-2xl bg-carbon-950 border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Vehicle:</span>
              <span className="font-bold text-white">{activeLockedDeal.carName} — {activeLockedDeal.variant}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Locked Dealership Node:</span>
              <span className="font-semibold text-emerald-400">{activeLockedDeal.currentBestDealer}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Standard Showroom MRP:</span>
              <span className="line-through text-slate-500 font-mono">₹22,85,000</span>
            </div>
            <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-300">Guaranteed Final On-Road:</span>
              <span className="font-mono text-2xl font-black text-white">{formatINR(activeLockedDeal.currentPrice)}</span>
            </div>
            <div className="flex justify-between text-xs text-emerald-400">
              <span>Customer Savings Realized:</span>
              <span className="font-mono font-bold">Save {formatINR(activeLockedDeal.savings)}</span>
            </div>
          </div>

          {/* Confirmation Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                Name on Registration
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs"
                required
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                Tamil Nadu RTO Jurisdiction
              </label>
              <input
                type="text"
                value={preferredRto}
                onChange={(e) => setPreferredRto(e.target.value)}
                className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs"
                required
              />
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="pt-2">
            <label className="flex items-start space-x-2 text-[11px] text-slate-400 cursor-pointer">
              <input type="checkbox" defaultChecked required className="mt-0.5 accent-brand-red rounded" />
              <span>
                I confirm that I wish to register my booking intent at this locked price. I understand that physical inspection, documentation, and payment take place directly at the dealership facility.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 transition-all flex items-center space-x-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Confirm & Generate Booking Token</span>
            </button>
          </div>

        </form>
      )}
    </Modal>
  );
}
