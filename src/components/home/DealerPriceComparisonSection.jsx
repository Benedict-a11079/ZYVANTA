import React, { useState } from 'react';
import { 
  Scale, 
  Check, 
  X, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  TrendingDown, 
  Lock, 
  Sparkles, 
  ArrowRight,
  Info,
  Flag,
  Calendar
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';
import { Link } from 'react-router-dom';
import ReportPriceModal from '../customer/ReportPriceModal';

export default function DealerPriceComparisonSection() {
  const { quotations, activeLockedDeal } = useMarketplace();
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedQuoteForReport, setSelectedQuoteForReport] = useState(null);

  const handleReportQuote = (quote) => {
    setSelectedQuoteForReport(quote);
    setReportModalOpen(true);
  };

  return (
    <section className="py-20 bg-carbon-950 relative overflow-hidden" id="dealer-price-comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-900 border border-brand-red/30 text-xs font-mono text-brand-red mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>TRANSPARENT ON-ROAD BREAKDOWN ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              Side-by-Side Chennai Dealer Price Comparison
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Inspect line-by-line itemized on-road cost schedules. Dealership identities are anonymized per anti-collusion protocols. Mandatory and optional charges are strictly separated.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-xs text-slate-400">Jurisdiction Model:</span>
            <span className="px-3 py-1 rounded-xl bg-navy-900 border border-white/10 text-xs font-mono font-bold text-white">
              TN-07 (Chennai South)
            </span>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Standard Chennai Showroom List Price (Baseline) */}
          <div className="bg-navy-950/40 rounded-3xl border border-white/10 p-6 flex flex-col justify-between opacity-85">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Baseline Model</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300">
                  Standard Walk-in
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-display text-lg font-bold text-slate-200">
                  Showroom Walk-in Reference
                </h4>
                <p className="text-xs text-slate-400">Standard retail estimate with zero pooled negotiation</p>
              </div>

              {/* Price Breakdown */}
              <div className="mt-6 space-y-2.5 text-xs">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                  A. Mandatory Statutory Charges:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Ex-Showroom Base:</span>
                  <span className="font-mono text-slate-200">₹19,99,900</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• TN RTO Road Tax (13%):</span>
                  <span className="font-mono text-slate-200">₹2,59,987</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Statutory Insurance (1Y+3Y):</span>
                  <span className="font-mono text-slate-200">₹38,500</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• TCS (1% Govt Tax):</span>
                  <span className="font-mono text-slate-200">₹19,999</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• HSRP & Fastag:</span>
                  <span className="font-mono text-slate-200">₹1,200</span>
                </div>

                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold pt-2 border-t border-white/5">
                  B. Optional & Dealer Fees:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Zero-Dep & RTI Package:</span>
                  <span className="font-mono text-slate-200">₹36,000</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Basic Accessories Pack:</span>
                  <span className="font-mono text-slate-200">₹12,500</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• 4th-5th Year Extended Warranty:</span>
                  <span className="font-mono text-slate-200">₹21,500</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Dealer Logistics / Handling:</span>
                  <span className="font-mono text-rose-400">+₹9,500</span>
                </div>

                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold pt-2 border-t border-white/5">
                  C. Discounts:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Reverse Auction Concession:</span>
                  <span className="font-mono text-slate-500">₹0 (None)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs text-slate-400">Total Walk-in On-Road:</span>
                <span className="font-mono text-xl font-bold text-slate-300">₹22,85,000</span>
              </div>
              <p className="text-[10px] text-slate-500 text-center">
                Estimated factory lead time: 4 to 6 weeks.
              </p>
            </div>
          </div>

          {/* Card 2: Anonymous Dealer Node C */}
          <div className="bg-navy-950/70 rounded-3xl border border-white/15 p-6 flex flex-col justify-between hover:border-brand-red/40 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Competitive Bid #2</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-navy-800 text-sky-400 border border-sky-400/20">
                  OMR Belt Node
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-display text-lg font-bold text-white">
                  Authorized Dealer Node C
                </h4>
                <p className="text-xs text-slate-400 flex items-center mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-red mr-1" />
                  OMR Corridor Hub (Blinded Identity)
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="mt-6 space-y-2.5 text-xs">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                  A. Mandatory Charges:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Ex-Showroom Base:</span>
                  <span className="font-mono text-slate-200">₹19,99,900</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• TN RTO Road Tax:</span>
                  <span className="font-mono text-slate-200">₹2,59,987</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Statutory Insurance:</span>
                  <span className="font-mono text-slate-200">₹38,500</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• TCS & Fastag:</span>
                  <span className="font-mono text-slate-200">₹21,199</span>
                </div>

                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold pt-2 border-t border-white/5">
                  B. Optional & Dealer Fees:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Zero-Dep & RTI Cover:</span>
                  <span className="font-mono text-slate-200">₹29,500</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Basic Pack & Warranty:</span>
                  <span className="font-mono text-slate-200">₹35,500</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Logistics Fee:</span>
                  <span className="font-mono text-emerald-400 font-semibold">Waived ₹5,000</span>
                </div>

                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold pt-2 border-t border-white/5">
                  C. Discounts:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400 font-semibold text-emerald-400">• Sealed Reverse Rebate:</span>
                  <span className="font-mono text-emerald-400 font-bold">-₹1,19,086</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400 font-semibold text-emerald-400">• Cluster Pool Rebate:</span>
                  <span className="font-mono text-emerald-400 font-bold">-₹1,20,000</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-400">Total On-Road Quote:</span>
                <span className="font-mono text-xl font-bold text-white">₹21,50,000</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-400">
                <span>Net Savings:</span>
                <span className="font-mono font-bold">Save ₹1,35,000</span>
              </div>

              {/* Timestamps */}
              <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-1">
                <span>Last Updated: Today 11:45 AM</span>
                <span>Valid: 48h Window</span>
              </div>

              <button
                onClick={() => handleReportQuote({ id: 'quote-demo-creta-02', anonymousDealerName: 'Authorized Dealer Node C', carName: 'Hyundai Creta', variant: 'SX (O) DCT', finalOnRoadPrice: 2150000 })}
                className="w-full py-1.5 text-[11px] text-slate-400 hover:text-amber-400 flex items-center justify-center space-x-1 transition-colors"
              >
                <Flag className="w-3 h-3" />
                <span>Report Price Discrepancy</span>
              </button>
            </div>
          </div>

          {/* Card 3: Authorized Dealer Node A (CURRENT BEST OFFER) */}
          <div className="relative rounded-3xl glass-panel-accent p-6 flex flex-col justify-between shadow-glow-red/20 border-2 border-brand-red">
            {/* Top Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-red text-white text-[11px] font-mono font-bold shadow-glow-red flex items-center space-x-1.5 uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>CURRENT BEST OFFER (AGREED 48H LOCK)</span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-red font-bold">
                  Winning Bidder
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  Rating 4.8 ★
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-display text-lg font-bold text-white flex items-center justify-between">
                  <span>Authorized Dealer Node A</span>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </h4>
                <p className="text-xs text-slate-400 flex items-center mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-red mr-1" />
                  Anna Salai Hub (Blinded Identity)
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="mt-6 space-y-2.5 text-xs">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                  A. Mandatory Charges:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Ex-Showroom Base:</span>
                  <span className="font-mono text-slate-200">₹19,99,900</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• TN RTO Road Tax:</span>
                  <span className="font-mono text-slate-200">₹2,59,987</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Statutory Insurance:</span>
                  <span className="font-mono text-slate-200">₹38,500</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• TCS & Fastag:</span>
                  <span className="font-mono text-slate-200">₹21,199</span>
                </div>

                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold pt-2 border-t border-white/5">
                  B. Optional & Dealer Fees:
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Zero-Dep & RTI Cover:</span>
                  <span className="font-mono text-slate-200">₹26,000</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Basic Pack & Warranty:</span>
                  <span className="font-mono text-slate-200">₹34,000</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">• Logistics & Handling:</span>
                  <span className="font-mono text-emerald-400 font-bold">Waived 100% (₹9,500)</span>
                </div>

                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold pt-2 border-t border-white/5">
                  C. Discounts:
                </div>
                <div className="flex justify-between py-0.5 text-brand-red font-semibold">
                  <span>• Sealed Reverse Rebate:</span>
                  <span className="font-mono font-bold">-₹1,44,586</span>
                </div>
                <div className="flex justify-between py-0.5 text-emerald-400 font-semibold">
                  <span>• OMR Cluster Pool Rebate:</span>
                  <span className="font-mono font-bold">-₹1,20,000</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-400">Locked On-Road Price:</span>
                <span className="font-mono text-2xl font-black text-white">₹21,15,000</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-400 font-bold">
                <span>Total Savings:</span>
                <span className="font-mono text-sm">Save ₹1,70,000</span>
              </div>

              {/* Timestamps */}
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Updated: Today 02:15 PM</span>
                <span className="text-amber-400">48h Hold Active</span>
              </div>

              {/* Perks */}
              <div className="p-2.5 rounded-xl bg-carbon-950/80 border border-brand-red/30 text-[11px] text-slate-300 space-y-1">
                <span className="font-bold text-white flex items-center">
                  <Sparkles className="w-3.5 h-3.5 text-brand-red mr-1" />
                  Perks Included:
                </span>
                <p>• Complimentary 3M Ceramic Coating (Value: ₹22k)</p>
                <p>• 5-Day Delivery Target with Doorstep Inspection</p>
              </div>

              <div className="flex items-center space-x-2">
                <Link
                  to="/smart-deal-lock"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 transition-all flex items-center justify-center space-x-1.5"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Open 48h Lock Hub</span>
                </Link>
                <button
                  onClick={() => handleReportQuote({ id: 'quote-demo-creta-01', anonymousDealerName: 'Authorized Dealer Node A', carName: 'Hyundai Creta', variant: 'SX (O) DCT', finalOnRoadPrice: 2115000 })}
                  className="p-3 rounded-xl bg-navy-900 border border-white/10 text-slate-400 hover:text-amber-400 transition-colors"
                  title="Report price discrepancy"
                >
                  <Flag className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <ReportPriceModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        quote={selectedQuoteForReport}
      />
    </section>
  );
}
