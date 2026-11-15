import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Lock, 
  ChevronRight, 
  Eye, 
  Scale, 
  History,
  TrendingDown
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function CustomerRequestsTable({ onOpenNewRequestModal, onViewQuotes, onOpenHistory, onOpenCompare }) {
  const { requests, agreedSwitchThreshold } = useMarketplace();

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      {/* Table Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              My Active Purchase Requests
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-brand-red/20 text-brand-red border border-brand-red/30">
              {requests.length} Active
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Tracking ongoing reverse auctions and Chennai regional group-buying pools
          </p>
        </div>

        <button
          onClick={onOpenNewRequestModal}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Reverse Auction Request</span>
        </button>
      </div>

      {/* Requests List */}
      <div className="mt-6 space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="p-5 rounded-2xl bg-navy-900/50 border border-white/5 hover:border-brand-red/40 transition-all duration-200"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Left Column: ID, Car, Specs */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs font-bold text-slate-400 bg-carbon-900 px-2 py-0.5 rounded border border-white/5">
                    {req.id}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {req.type}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Submitted {req.submittedDate}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-white flex items-center">
                  <span>{req.carName}</span>
                  <span className="ml-2 text-xs font-normal text-slate-400 font-sans">
                    — {req.variant}
                  </span>
                </h4>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
                    Preferred RTO: <strong className="text-slate-200 ml-1">{req.preferredRto}</strong>
                  </span>
                  <span>•</span>
                  <span>Color: <strong className="text-slate-200">{req.exteriorColor}</strong></span>
                  <span>•</span>
                  <span>City: <strong className="text-slate-200">Chennai Urban</strong></span>
                </div>
              </div>

              {/* Middle Column: Status & Price Pill */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-2">
                <div className="text-left lg:text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Current Best On-Road
                  </span>
                  <span className="font-mono text-2xl font-black text-white">
                    {formatINR(req.bestQuotePrice)}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {req.lockedQuoteId ? (
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/15 text-brand-red border border-brand-red/40">
                      <Lock className="w-3 h-3 animate-pulse" />
                      <span>48h Deal Lock Active</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-navy-800 text-sky-300 border border-sky-400/30">
                      <Clock className="w-3 h-3" />
                      <span>{req.quotesCount} Dealer Bids Received</span>
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Row Actions */}
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Auto-Switching Guard: {req.autoSwitchEnabled ? `Enabled (Threshold: ${formatINR(agreedSwitchThreshold)})` : 'Disabled'}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onOpenHistory(req)}
                  className="px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white text-xs font-medium flex items-center space-x-1 transition-colors"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>Audit Trail</span>
                </button>

                <button
                  onClick={() => onOpenCompare(req)}
                  className="px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white text-xs font-medium flex items-center space-x-1 transition-colors"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Compare Quotes</span>
                </button>

                <button
                  onClick={() => onViewQuotes(req)}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-semibold flex items-center space-x-1 shadow-glow-red/20 hover:brightness-110 transition-all"
                >
                  <span>View Quotations ({req.quotesCount})</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
