import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Lock, Sparkles, ArrowRight, Zap, CheckCircle2, TrendingDown, AlertTriangle } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';

export default function HeroSection() {
  const { activeLockedDeal } = useMarketplace();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-32 right-10 w-72 h-72 bg-navy-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Demo Ticker Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-amber-500/40 shadow-glow-red/10 text-xs text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="font-mono text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              [Demo Simulation Mode]
            </span>
            <span className="text-slate-300">OMR Cluster model unlocks simulated volume rebate on Hyundai Creta</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
          </div>
        </div>

        {/* Hero Main Heading & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-navy-900/80 border border-white/10 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              <span>Chennai Automotive Marketplace Architecture</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Automotive Group-Buying & Sealed Reverse Auctions.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-redGlow to-amber-400">
                Chennai Market Platform.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Explore how pooling buyer demand across OMR, Anna Nagar, and Velachery coordinates competitive on-road quotations with a 48-hour provisional price hold. <span className="text-amber-300 font-medium">All vehicle data, quotes, and savings shown are simulated demo data.</span>
            </p>

            {/* Benefit badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5 bg-navy-900/70 border border-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Separated Mandatory & Optional Items</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-navy-900/70 border border-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>TN RTO Statutory Tax Transparency</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-navy-900/70 border border-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Automatic Financial Charges</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#search-and-cars"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white font-bold text-sm shadow-glow-red hover:shadow-xl hover:brightness-110 transition-all"
              >
                <span>Browse Cars & Demo Pools</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/smart-deal-lock"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-white/15 text-white font-semibold text-sm transition-all shadow-md"
              >
                <Lock className="w-4 h-4 text-brand-red" />
                <span>Smart Deal Lock Console</span>
              </Link>

              <Link
                to="/dealer-dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-3.5 text-slate-400 hover:text-white text-xs font-medium transition-colors"
              >
                <span>Dealer Mode</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Hero Visual: Live Deal Lock Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-red/40 via-navy-600/40 to-brand-red/30 blur-xl opacity-75" />

              <div className="relative rounded-3xl glass-panel-elevated p-6 border border-white/15 shadow-2xl">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                      Demo Benchmark Price Freeze
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    SIMULATED DATA
                  </span>
                </div>

                {/* Car Showcase with Authentic Hyundai Creta Photo */}
                <div className="mt-4 flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1707054944809-360d11024747?auto=format&fit=crop&w=300&q=80"
                    alt="Hyundai Creta"
                    className="w-24 h-20 object-cover rounded-xl border border-white/10 shadow-md"
                  />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400">Mid-size SUV (Demo Model)</span>
                    <h4 className="font-display text-lg font-bold text-white leading-tight">
                      {activeLockedDeal.carName}
                    </h4>
                    <p className="text-xs text-slate-300">{activeLockedDeal.variant}</p>
                    <span className="inline-block mt-1 text-[11px] font-medium text-emerald-400">
                      Simulated Lead: {activeLockedDeal.currentBestDealer}
                    </span>
                  </div>
                </div>

                {/* Price Transformation Matrix */}
                <div className="mt-5 p-3.5 rounded-2xl bg-carbon-950/80 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Standard Chennai Showroom List:</span>
                    <span className="line-through text-slate-500 font-mono">₹22,85,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-emerald-400 font-medium flex items-center">
                      <TrendingDown className="w-3.5 h-3.5 mr-1" />
                      Simulated Reverse Auction + Fleet Rebate:
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">-₹1,70,000</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Locked Demo On-Road:
                      </span>
                      <span className="font-mono text-2xl font-black text-white">
                        ₹{(activeLockedDeal.currentPrice / 100000).toFixed(2)} Lakh
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
                      Simulated -₹1.70L
                    </span>
                  </div>
                </div>

                {/* Smart Lock Feature Highlights */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <Lock className="w-4 h-4 text-brand-red" />
                    <span>48h Price Hold Active (No Auto-Charge)</span>
                  </div>
                  <Link
                    to="/smart-deal-lock"
                    className="text-brand-red hover:text-white font-semibold flex items-center text-xs"
                  >
                    <span>Console Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Marketplace Statistics Strip with Transparent Demo Labels */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-navy-950/40 border border-white/5">
            <span className="font-mono text-3xl font-black text-white">₹4.8 Cr+</span>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Simulated Demand Pool</p>
          </div>
          <div className="p-4 rounded-2xl bg-navy-950/40 border border-white/5">
            <span className="font-mono text-3xl font-black text-brand-red">18</span>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Simulated Dealership Nodes</p>
          </div>
          <div className="p-4 rounded-2xl bg-navy-950/40 border border-white/5">
            <span className="font-mono text-3xl font-black text-emerald-400">48-Hour</span>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Agreed Price Freeze Hold</p>
          </div>
          <div className="p-4 rounded-2xl bg-navy-950/40 border border-white/5">
            <span className="font-mono text-3xl font-black text-sky-400">100%</span>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Itemized Cost Architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
