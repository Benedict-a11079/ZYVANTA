import React from 'react';
import { 
  Search, 
  Users, 
  Gavel, 
  Lock, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  TrendingDown,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Select Model & Chennai RTO',
      desc: 'Pick your preferred car model and variant. Specify your preferred delivery timeline and Tamil Nadu RTO registration zone (e.g., TN-07 South or TN-01 Central).',
      icon: Search,
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Pool Buyer Demand',
      desc: 'Join an active Chennai regional buyer cluster (e.g. OMR IT Corridor or Anna Nagar Doctors Club). As each buyer joins, tiered fleet discounts unlock automatically.',
      icon: Users,
      badge: 'Group Power'
    },
    {
      step: '03',
      title: 'Dealership Nodes Compete',
      desc: 'Regional dealership nodes compete via sealed reverse quotes. Competitor identities remain blinded to maintain objective price transparency and eliminate collusion.',
      icon: Gavel,
      badge: 'Reverse Auction'
    },
    {
      step: '04',
      title: 'Smart Deal Lock & Auto-Switch',
      desc: 'Secure the lowest on-road quote under a provisional lock. If another dealer bids below the agreed switching threshold before expiration, the deal auto-switches with zero upfront card debits.',
      icon: Lock,
      badge: 'Provisional Hold'
    }
  ];

  return (
    <section className="py-20 bg-navy-950/40 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-900 border border-brand-red/30 text-xs font-mono text-brand-red">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GROUP-BUYING ARCHITECTURE [DEMO]</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            How Group-Buying Beats Traditional Showroom Haggling
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Automotive dealerships traditionally sell cars one by one, keeping margins high. By pooling Chennai buyers together, the platform demonstrates volume pricing with itemized on-road transparency.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-navy-900/60 border border-white/10 hover:border-brand-red/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-card-hover group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-slate-600 group-hover:text-brand-red transition-colors">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-carbon-950 text-slate-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-carbon-950 border border-white/10 flex items-center justify-center mb-5 group-hover:border-brand-red/40 group-hover:bg-navy-950 transition-all">
                    <Icon className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Micro footer indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  <span>Demo Simulation Workflow</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout: Traditional Showroom vs AutoMarketplace */}
        <div className="mt-14 rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
                ARCHITECTURE COMPARISON [SIMULATION]
              </span>
              <h3 className="font-display text-2xl font-bold text-white leading-tight">
                Traditional Showroom vs. AutoMarketplace Group-Buying
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Why spend weekends driving between Mount Road, OMR, and Ambattur to negotiate individually? Our algorithm aggregates genuine demand, allowing authorized dealership nodes to submit sealed competitive bids.
              </p>
              <div className="pt-2 flex items-center space-x-4">
                <Link
                  to="/group-buying"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-brand-red hover:text-white transition-colors"
                >
                  <span>Explore Simulated Chennai Pools</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-carbon-950/80 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">Logistics & Handling Charges</span>
                  <span className="text-[11px] text-slate-400">Regular dealer markup ₹10,000 - ₹25,000</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                  Waived in Model
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-carbon-950/80 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">Zero Dep Insurance Package</span>
                  <span className="text-[11px] text-slate-400">Inflated showroom quotes without RTI</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                  Separated & Itemized
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-carbon-950/80 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">Negotiation Mechanism</span>
                  <span className="text-[11px] text-slate-400">Individual showroom bargaining</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                  Sealed Reverse Auction
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}