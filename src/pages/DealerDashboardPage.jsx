import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  Inbox, 
  Gavel, 
  EyeOff, 
  Sliders, 
  TrendingUp, 
  Plus, 
  Clock,
  Sparkles
} from 'lucide-react';
import DealerInventoryTable from '../components/dealer/DealerInventoryTable';
import IncomingRequestsList from '../components/dealer/IncomingRequestsList';
import SubmitQuoteModal from '../components/dealer/SubmitQuoteModal';
import CompetitorLeaderboard from '../components/dealer/CompetitorLeaderboard';
import DealerNegotiationManager from '../components/dealer/DealerNegotiationManager';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatINR } from '../utils/formatters';

export default function DealerDashboardPage() {
  const { requests, inventory, quotations } = useMarketplace();

  // Active Tab: 'incoming' | 'inventory' | 'competitor' | 'negotiations'
  const [activeTab, setActiveTab] = useState('incoming');

  // Submit quote modal state
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [selectedTargetRequest, setSelectedTargetRequest] = useState(null);

  const handleOpenQuoteModal = (req) => {
    setSelectedTargetRequest(req);
    setSubmitModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Dealer Profile & Authority Banner */}
      <div className="rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-start sm:items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-950 p-0.5 border border-white/20 shadow-glow-navy">
              <div className="w-full h-full bg-carbon-950 rounded-[14px] flex items-center justify-center">
                <Building2 className="w-8 h-8 text-sky-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="font-display text-2xl sm:text-3xl font-black text-white">
                  Authorized Dealer Node A (Anna Salai Hub)
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-navy-800 text-sky-300 border border-sky-400/30">
                  DEMO DEALER CONSOLE
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1.5">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
                  Dealership Hub: <strong className="text-slate-200 ml-1">Anna Salai & Nandanam, Chennai</strong>
                </span>
                <span>•</span>
                <span>RTO Jurisdiction: TN-07, TN-01 & TN-14</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold font-mono">Simulated Service Benchmark: 4.8 / 5.0</span>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <button
            onClick={() => handleOpenQuoteModal(requests[0])}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 flex items-center space-x-2 self-start md:self-auto"
          >
            <Gavel className="w-4 h-4" />
            <span>Create New Bid / Counter-Offer</span>
          </button>

        </div>

        {/* 4 Stats Cards for Dealer */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Active Regional Inquiries
            </span>
            <span className="font-mono text-2xl font-black text-white">{requests.length}</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">8 In OMR Tech Cluster</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Current Winning Lead Bids
            </span>
            <span className="font-mono text-2xl font-black text-emerald-400">2 Deals</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Holding Provisional Deal Locks</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Yard Stock Units Allocated
            </span>
            <span className="font-mono text-2xl font-black text-sky-400">
              {inventory.reduce((a, b) => a + b.stockCount, 0)} Units
            </span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Simulated Sriperumbudur Stock</span>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Average Deal Gross Margin
            </span>
            <span className="font-mono text-2xl font-black text-amber-400">5.2%</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Protected by Margin Floor</span>
          </div>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center space-x-2 border-b border-white/10 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('incoming')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
            activeTab === 'incoming'
              ? 'bg-navy-850 text-white border border-white/15'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Inbox className="w-3.5 h-3.5" />
          <span>Incoming Customer Inquiries ({requests.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('inventory')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
            activeTab === 'inventory'
              ? 'bg-navy-850 text-white border border-white/15'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Yard Inventory ({inventory.length} Models)</span>
        </button>

        <button
          onClick={() => setActiveTab('competitor')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
            activeTab === 'competitor'
              ? 'bg-navy-850 text-white border border-white/15'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <EyeOff className="w-3.5 h-3.5 text-amber-400" />
          <span>Anonymous Competitor Intel</span>
        </button>

        <button
          onClick={() => setActiveTab('negotiations')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
            activeTab === 'negotiations'
              ? 'bg-navy-850 text-white border border-white/15'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Negotiation & Margin Desk</span>
        </button>
      </div>

      {/* Active Tab Views */}
      {activeTab === 'incoming' && (
        <IncomingRequestsList onOpenQuoteModal={handleOpenQuoteModal} />
      )}

      {activeTab === 'inventory' && (
        <DealerInventoryTable />
      )}

      {activeTab === 'competitor' && (
        <CompetitorLeaderboard onQuickCounterBid={handleOpenQuoteModal} />
      )}

      {activeTab === 'negotiations' && (
        <DealerNegotiationManager onOpenQuoteModal={handleOpenQuoteModal} />
      )}

      {/* Submit Quote Modal */}
      <SubmitQuoteModal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        targetRequest={selectedTargetRequest}
      />

    </div>
  );
}
