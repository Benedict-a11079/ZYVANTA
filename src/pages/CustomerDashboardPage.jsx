import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Lock, 
  FileText, 
  TrendingDown, 
  Scale, 
  History, 
  Plus, 
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight
} from 'lucide-react';
import CustomerRequestsTable from '../components/customer/CustomerRequestsTable';
import CustomerQuotationsView from '../components/customer/CustomerQuotationsView';
import SideBySideComparisonModal from '../components/customer/SideBySideComparisonModal';
import NegotiationHistoryModal from '../components/customer/NegotiationHistoryModal';
import ItemizedBreakdownModal from '../components/customer/ItemizedBreakdownModal';
import NewRequestModal from '../components/customer/NewRequestModal';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatINR } from '../utils/formatters';
import { Link } from 'react-router-dom';

export default function CustomerDashboardPage() {
  const { requests, quotations, activeLockedDeal, dealLockTimeRemaining, agreedLockDurationHours } = useMarketplace();

  // Modals state
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [newRequestModalOpen, setNewRequestModalOpen] = useState(false);
  const [breakdownModalOpen, setBreakdownModalOpen] = useState(false);
  const [selectedQuoteForBreakdown, setSelectedQuoteForBreakdown] = useState(null);
  const [selectedRequestForHistory, setSelectedRequestForHistory] = useState(requests[0]);

  // Tab State: 'all' | 'requests' | 'quotations'
  const [activeTab, setActiveTab] = useState('all');

  const handleOpenBreakdown = (quote) => {
    setSelectedQuoteForBreakdown(quote);
    setBreakdownModalOpen(true);
  };

  const handleOpenHistory = (req) => {
    setSelectedRequestForHistory(req);
    setHistoryModalOpen(true);
  };

  const hoursRemaining = Math.floor(dealLockTimeRemaining / 3600);
  const minsRemaining = Math.floor((dealLockTimeRemaining % 3600) / 60);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Customer Profile & Summary Banner */}
      <div className="rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-start sm:items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-red to-navy-900 p-0.5 shadow-glow-red">
              <div className="w-full h-full bg-carbon-950 rounded-[14px] flex items-center justify-center">
                <User className="w-8 h-8 text-brand-red" />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="font-display text-2xl sm:text-3xl font-black text-white">
                  Karthik Subramanian
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
                  Simulated Buyer Profile [DEMO DATA]
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1.5">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
                  Primary Jurisdiction: <strong className="text-slate-200 ml-1">TN-07 (Chennai South)</strong>
                </span>
                <span>•</span>
                <span>OMR Tech Corridor Cluster Member (Simulated)</span>
                <span>•</span>
                <span className="font-mono text-slate-500">Demo User ID: USR-CHN-0042</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setNewRequestModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 flex items-center space-x-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Create Request</span>
            </button>

            <button
              onClick={() => setCompareModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold border border-white/10 flex items-center space-x-1.5"
            >
              <Scale className="w-4 h-4 text-brand-red" />
              <span>Compare Quotes</span>
            </button>
          </div>

        </div>

        {/* 4 Stats Cards */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Active Requests
            </span>
            <span className="font-mono text-2xl font-black text-white">{requests.length}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">2 Pools • 1 Reverse Auction</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Dealer Quotations Received
            </span>
            <span className="font-mono text-2xl font-black text-brand-red">{quotations.length}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Across 4 Anonymous Dealer Nodes</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Simulated Savings (Demo)
            </span>
            <span className="font-mono text-2xl font-black text-emerald-400">
              {formatINR(activeLockedDeal.savings)}
            </span>
            <span className="text-[10px] text-slate-400 block mt-0.5">vs Showroom List MRP</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              {agreedLockDurationHours}h Deal Lock Status
            </span>
            <span className="font-mono text-xl font-bold text-amber-400 flex items-center mt-1">
              <Lock className="w-4 h-4 mr-1 text-brand-red animate-pulse" />
              {hoursRemaining}h {minsRemaining}m Left
            </span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Auto-Switching Guard Active</span>
          </div>
        </div>
      </div>

      {/* Smart Deal Lock Highlight Banner */}
      <div className="rounded-3xl glass-panel-accent border border-brand-red/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-glow-red">
            <Lock className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Smart Deal Lock is Active on {activeLockedDeal.carName} ({formatINR(activeLockedDeal.currentPrice)})
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Held with {activeLockedDeal.currentBestDealer}. Auto-switching engine is scanning competitor dealerships for lower bids.
            </p>
          </div>
        </div>

        <Link
          to="/smart-deal-lock"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 flex items-center justify-center space-x-2 shrink-0"
        >
          <span>Open Deal Lock Console</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-navy-850 text-white border border-white/15'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All Activities
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'requests'
              ? 'bg-navy-850 text-white border border-white/15'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Purchase Requests ({requests.length})
        </button>
        <button
          onClick={() => setActiveTab('quotations')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'quotations'
              ? 'bg-navy-850 text-white border border-white/15'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Received Dealer Quotations ({quotations.length})
        </button>
      </div>

      {/* Sections */}
      {(activeTab === 'all' || activeTab === 'requests') && (
        <CustomerRequestsTable
          onOpenNewRequestModal={() => setNewRequestModalOpen(true)}
          onViewQuotes={() => setActiveTab('quotations')}
          onOpenHistory={handleOpenHistory}
          onOpenCompare={() => setCompareModalOpen(true)}
        />
      )}

      {(activeTab === 'all' || activeTab === 'quotations') && (
        <CustomerQuotationsView
          onOpenBreakdownModal={handleOpenBreakdown}
          onOpenCompare={() => setCompareModalOpen(true)}
        />
      )}

      {/* Modals */}
      <SideBySideComparisonModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />

      <NegotiationHistoryModal
        isOpen={historyModalOpen}
        onClose={() => setHistoryModalOpen(false)}
        selectedRequest={selectedRequestForHistory}
      />

      <ItemizedBreakdownModal
        isOpen={breakdownModalOpen}
        onClose={() => setBreakdownModalOpen(false)}
        quote={selectedQuoteForBreakdown}
      />

      <NewRequestModal
        isOpen={newRequestModalOpen}
        onClose={() => setNewRequestModalOpen(false)}
      />

    </div>
  );
}
