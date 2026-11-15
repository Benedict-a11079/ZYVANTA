import React, { useState } from 'react';
import Modal from '../common/Modal';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';
import { Gavel, TrendingDown, Check, ShieldCheck, AlertCircle, Sparkles, Building2, Clock } from 'lucide-react';

export default function SubmitQuoteModal({ isOpen, onClose, targetRequest }) {
  const { submitDealerQuote, agreedSwitchThreshold } = useMarketplace();

  const req = targetRequest || {
    id: 'REQ-CHN-2026-084',
    carName: 'Hyundai Creta',
    variant: 'SX (O) 1.5 Turbo DCT',
    carId: 'hyundai-creta-2026',
    bestQuotePrice: 2115000,
    preferredRto: 'TN-07 (Chennai South / Thiruvanmiyur)'
  };

  const [dealerName, setDealerName] = useState('Authorized Dealer Node B (Mount Road Hub)');
  const [exShowroom, setExShowroom] = useState(1999900);
  const [rtoChennai, setRtoChennai] = useState(259987);
  const [statutoryInsurance, setStatutoryInsurance] = useState(48000);
  const [zeroDepAddon, setZeroDepAddon] = useState(14000);
  const [tcs, setTcs] = useState(19999);
  const [extendedWarranty, setExtendedWarranty] = useState(20000);
  const [accessoriesPack, setAccessoriesPack] = useState(10000);
  const [reverseDiscount, setReverseDiscount] = useState(60000);
  const [groupRebate, setGroupRebate] = useState(65000);
  const [dealerCashDiscount, setDealerCashDiscount] = useState(45000);
  const [deliveryDays, setDeliveryDays] = useState(4);
  const [agreedLockDuration, setAgreedLockDuration] = useState(48);
  const [selectedPerks, setSelectedPerks] = useState([
    'Free 3M Ceramic Coating',
    'Full Tank Fuel on Delivery',
    'Fastag Recharge ₹1,500'
  ]);

  // Mandatory charges subtotal
  const mandatoryTotal =
    Number(exShowroom) +
    Number(rtoChennai) +
    Number(statutoryInsurance) +
    Number(tcs) +
    1200; // Fastag & HSRP

  // Optional charges subtotal
  const optionalTotal =
    Number(zeroDepAddon) +
    Number(extendedWarranty) +
    Number(accessoriesPack);

  // Discounts subtotal
  const totalDiscounts =
    Number(reverseDiscount) +
    Number(groupRebate) +
    Number(dealerCashDiscount);

  // Net calculated on-road
  const totalOnRoad = mandatoryTotal + optionalTotal - totalDiscounts;

  const willBeatBest = totalOnRoad <= (req.bestQuotePrice - agreedSwitchThreshold);
  const priceDifference = req.bestQuotePrice - totalOnRoad;

  const togglePerk = (perk) => {
    if (selectedPerks.includes(perk)) {
      setSelectedPerks(selectedPerks.filter((p) => p !== perk));
    } else {
      setSelectedPerks([...selectedPerks, perk]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitDealerQuote({
      requestId: req.id,
      carId: req.carId,
      carName: req.carName,
      variant: req.variant,
      dealerId: 'dealer-node-b-mountroad',
      dealerName,
      anonymousAlias: dealerName,
      dealerLocation: 'Mount Road & Anna Salai, Chennai',
      dealerRating: 4.8,
      isCurrentBest: totalOnRoad < req.bestQuotePrice,
      finalOnRoadPrice: totalOnRoad,
      retailListPrice: 2285000,
      savingsAmount: 2285000 - totalOnRoad,
      deliveryTimelineDays: deliveryDays,
      stockStatus: 'Ready in Central Yard (Simulated)',
      dealerPerks: selectedPerks,
      agreedLockDurationHours: agreedLockDuration,
      breakdown: {
        mandatory: {
          exShowroom: Number(exShowroom),
          rtoRegistration: Number(rtoChennai),
          statutoryInsurance: Number(statutoryInsurance),
          tcs: Number(tcs),
          fastagHsrp: 1200
        },
        optional: {
          zeroDepAddon: Number(zeroDepAddon),
          extendedWarranty: Number(extendedWarranty),
          basicAccessoriesKit: Number(accessoriesPack),
          dealerHandling: 0
        },
        discounts: {
          reverseAuctionDiscount: Number(reverseDiscount),
          poolVolumeRebate: Number(groupRebate),
          dealerCashConcession: Number(dealerCashDiscount)
        }
      }
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Submit Quotation / Counter-Bid [DEMO DATA]"
      subtitle={`Formulate simulated Chennai on-road quotation for ${req.carName} (${req.preferredRto})`}
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        
        {/* Competitor Benchmark Alert */}
        <div className="p-3.5 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
              Current Lowest Benchmark Bid
            </span>
            <span className="font-mono text-xl font-bold text-white">
              {formatINR(req.bestQuotePrice)}
            </span>
            <span className="text-[10px] text-slate-400 block">
              Required Concession to Auto-Switch: {formatINR(agreedSwitchThreshold)}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
              Your Projected Bid
            </span>
            <span className={`font-mono text-xl font-bold ${totalOnRoad < req.bestQuotePrice ? 'text-emerald-400' : 'text-amber-400'}`}>
              {formatINR(totalOnRoad)}
            </span>
            {totalOnRoad < req.bestQuotePrice && (
              <span className="text-[10px] font-mono text-emerald-400 font-semibold block">
                {willBeatBest ? `Beats lock by ${formatINR(priceDifference)} (Triggers Switch!)` : `Underbids by ${formatINR(priceDifference)} (Below switch threshold)`}
              </span>
            )}
          </div>
        </div>

        {/* Dealer Identity Warning */}
        <div className="p-2.5 rounded-xl bg-navy-950/70 border border-sky-400/20 text-slate-400 text-[11px] flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Dealer identities remain strictly anonymized as dealer nodes in the competitor view.</span>
        </div>

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Anonymous Dealer Node Label
            </label>
            <input
              type="text"
              value={dealerName}
              onChange={(e) => setDealerName(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Agreed Lock Duration
            </label>
            <select
              value={agreedLockDuration}
              onChange={(e) => setAgreedLockDuration(Number(e.target.value))}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono"
            >
              <option value={24}>24 Hours</option>
              <option value={48}>48 Hours (Default)</option>
              <option value={72}>72 Hours</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Guaranteed Delivery ETA (Days)
            </label>
            <input
              type="number"
              value={deliveryDays}
              onChange={(e) => setDeliveryDays(Number(e.target.value))}
              min="1"
              max="60"
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              OEM Ex-Showroom (₹) [Mandatory]
            </label>
            <input
              type="number"
              value={exShowroom}
              onChange={(e) => setExShowroom(Number(e.target.value))}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              TN RTO Road Tax & Smart Card (₹) [Mandatory]
            </label>
            <input
              type="number"
              value={rtoChennai}
              onChange={(e) => setRtoChennai(Number(e.target.value))}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Statutory Insurance 1Y OD + 3Y TP (₹) [Mandatory]
            </label>
            <input
              type="number"
              value={statutoryInsurance}
              onChange={(e) => setStatutoryInsurance(Number(e.target.value))}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Zero Dep Insurance Add-on (₹) [Optional]
            </label>
            <input
              type="number"
              value={zeroDepAddon}
              onChange={(e) => setZeroDepAddon(Number(e.target.value))}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Dealer Cash Discount / Concession (₹)
            </label>
            <input
              type="number"
              value={dealerCashDiscount}
              onChange={(e) => setDealerCashDiscount(Number(e.target.value))}
              className="w-full bg-navy-900 border border-brand-red/50 rounded-xl px-3 py-2 text-brand-red font-bold text-xs font-mono"
            />
          </div>
        </div>

        {/* Free Dealership Value Additions */}
        <div className="pt-2">
          <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
            Select Dealer Perks Included (Enhances Conversion Score)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Free 3M Ceramic Coating',
              'Full Tank Fuel on Delivery',
              'Fastag Recharge ₹1,500',
              'Complimentary 5th Year Extended Warranty',
              'Underbody Anti-Rust Coating',
              'Free 7D Floor Mats & Sunshades'
            ].map((perk) => {
              const active = selectedPerks.includes(perk);
              return (
                <button
                  key={perk}
                  type="button"
                  onClick={() => togglePerk(perk)}
                  className={`p-2 rounded-xl text-left border flex items-center space-x-1.5 transition-all ${
                    active
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-navy-900/40 border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border ${active ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-slate-500'}`}>
                    {active && <Check className="w-3 h-3" />}
                  </span>
                  <span className="truncate">{perk}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Net On-Road: <strong className="text-white text-sm font-mono">{formatINR(totalOnRoad)}</strong>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-navy-900 text-slate-300 text-xs font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110"
            >
              Submit Simulated Quotation
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}