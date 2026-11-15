import React from 'react';
import Modal from '../common/Modal';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';
import { Clock, TrendingDown, ArrowDownRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

export default function NegotiationHistoryModal({ isOpen, onClose, selectedRequest }) {
  const { negotiations } = useMarketplace();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Reverse Auction Negotiation Audit Trail [DEMO]"
      subtitle={`Simulated chronology of bids, undercuts, and price drops with anonymous dealer nodes for ${selectedRequest?.carName || 'Selected Vehicle'}`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-4">
        {negotiations.map((item, idx) => {
          const isUndercut = item.type === 'undercut' || item.type === 'switch';
          const isLock = item.type === 'lock';

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all ${
                isUndercut
                  ? 'bg-brand-red/10 border-brand-red/40'
                  : isLock
                  ? 'bg-emerald-950/30 border-emerald-500/40'
                  : 'bg-navy-900/50 border-white/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {item.id}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase ${
                    isUndercut
                      ? 'bg-brand-red text-white'
                      : isLock
                      ? 'bg-emerald-900 text-emerald-300'
                      : 'bg-navy-800 text-slate-300'
                  }`}>
                    {item.event}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{new Date(item.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>

              {/* Body */}
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">
                    Dealer: {item.dealer}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Recorded On-Road
                  </span>
                  <span className="font-mono text-lg font-black text-white">
                    {formatINR(item.price)}
                  </span>
                  {item.priceChange !== 0 && (
                    <span className="text-xs font-mono text-emerald-400 font-bold block">
                      {formatINR(item.priceChange)}
                    </span>
                  )}
                </div>
              </div>

              {/* Explicit Old vs New Offer Display for Audit Transparency */}
              {item.previousOffer && item.newOffer && (
                <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-carbon-950/70 rounded-xl p-3 text-xs">
                  <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 sm:pr-3">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Previous Offer
                    </span>
                    <p className="font-semibold text-slate-300 mt-0.5 truncate">
                      {item.previousOffer.dealer}
                    </p>
                    <p className="font-mono text-slate-400 font-bold mt-0.5">
                      {formatINR(item.previousOffer.price)}
                    </p>
                  </div>

                  <div className="sm:pl-1">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block font-bold">
                      New Verified Offer
                    </span>
                    <p className="font-semibold text-white mt-0.5 truncate">
                      {item.newOffer.dealer}
                    </p>
                    <div className="flex items-center space-x-2 mt-0.5">
                      <span className="font-mono text-emerald-400 font-bold">
                        {formatINR(item.newOffer.price)}
                      </span>
                      {item.incrementalSavings > 0 && (
                        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded">
                          +₹{item.incrementalSavings.toLocaleString('en-IN')} Saved
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[10px] text-slate-500 font-mono">
          Simulated events with anonymized dealer nodes. Zero automated card charges.
        </span>
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-white text-xs font-semibold"
        >
          Close Audit Log
        </button>
      </div>
    </Modal>
  );
}