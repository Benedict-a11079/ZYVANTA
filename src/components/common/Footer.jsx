import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ShieldCheck, MapPin, Phone, Mail, Award, AlertCircle, ArrowUpRight, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-carbon-950 border-t border-navy-800/80 text-slate-400 text-sm">
      {/* Top Banner: Architecture & Transparency Standards */}
      <div className="border-b border-white/5 bg-navy-950/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-brand-red/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h5 className="font-display font-semibold text-white text-base">Demonstration Dealership Profiles</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Illustrative dealership profiles modeling Chennai dealer hubs (Anna Salai, OMR, Guindy, Koyambedu). All quotations shown are simulated demonstration data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h5 className="font-display font-semibold text-white text-base">48-Hour Provisional Hold Protocol</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Models a 48-hour provisional price hold with agreed benefit auto-switch logic. Never automatically charges or debits customer funds.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-sky-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h5 className="font-display font-semibold text-white text-base">Tamil Nadu RTO Tax Calculations</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Demonstrates itemized on-road calculations modeled on TN-01, TN-02, TN-07, TN-09, and TN-14 schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-red to-navy-900 p-0.5">
                <div className="w-full h-full bg-carbon-950 rounded-[10px] flex items-center justify-center">
                  <Car className="w-5 h-5 text-brand-red" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-display text-lg font-black tracking-tight text-white">
                  AUTO<span className="text-brand-red">MARKETPLACE</span>
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  DEMO DATA
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Demonstration prototype exploring community group-buying leverage, sealed reverse auctions, and transparent itemized on-road pricing for Chennai car buyers.
            </p>

            <div className="flex flex-col space-y-1.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span>Simulated Regional Node: OMR IT Highway & Anna Salai, Chennai, TN</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span>Prototype Inquiries: +91 44 4800 1200 (Demonstration Desk)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span>concierge-demo@automarketplace.in</span>
              </div>
            </div>
          </div>

          {/* Popular Chennai Clusters */}
          <div>
            <h6 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Simulated Regional Pools
            </h6>
            <ul className="space-y-2 text-xs">
              <li><Link to="/group-buying" className="hover:text-white transition-colors">OMR Tech Corridor Cluster (Demo)</Link></li>
              <li><Link to="/group-buying" className="hover:text-white transition-colors">Anna Nagar & Kilpauk Circle (Demo)</Link></li>
              <li><Link to="/group-buying" className="hover:text-white transition-colors">Velachery & Adyar EV Pool (Demo)</Link></li>
              <li><Link to="/group-buying" className="hover:text-white transition-colors">ECR Premium MPV Cluster (Demo)</Link></li>
              <li><Link to="/group-buying" className="hover:text-white transition-colors">Guindy Corporate Group (Demo)</Link></li>
            </ul>
          </div>

          {/* Navigation & Services */}
          <div>
            <h6 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Platform Modules
            </h6>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Search & Compare Cars</Link></li>
              <li><Link to="/smart-deal-lock" className="hover:text-white transition-colors">48-Hour Smart Deal Lock Hub</Link></li>
              <li><Link to="/group-buying" className="hover:text-white transition-colors">Group-Buying Pool Architecture</Link></li>
              <li><Link to="/customer-dashboard" className="hover:text-white transition-colors">Customer Quotations Dashboard</Link></li>
              <li><Link to="/dealer-dashboard" className="hover:text-white transition-colors">Dealer Portal & Anonymous Intel</Link></li>
            </ul>
          </div>

          {/* Compliance & RTO */}
          <div>
            <h6 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Chennai RTOs Modeled
            </h6>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-slate-400">
              <span className="p-1 rounded bg-navy-900/60 border border-white/5">TN-01 Chennai C.</span>
              <span className="p-1 rounded bg-navy-900/60 border border-white/5">TN-02 Chennai N.</span>
              <span className="p-1 rounded bg-navy-900/60 border border-white/5">TN-07 Chennai S.</span>
              <span className="p-1 rounded bg-navy-900/60 border border-white/5">TN-09 Chennai W.</span>
              <span className="p-1 rounded bg-navy-900/60 border border-white/5">TN-14 Sholing.</span>
              <span className="p-1 rounded bg-navy-900/60 border border-white/5">TN-22 Alandur</span>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="text-[11px] text-amber-400 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                Zero Automatic Card/Bank Charges
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="mt-10 p-4 rounded-xl bg-navy-950 border border-amber-500/30 text-slate-300 text-xs flex items-start space-x-3 shadow-lg">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">
              CRITICAL DEMO DATA TRANSPARENCY NOTICE:
            </p>
            <p className="text-[11px] leading-relaxed text-slate-400">
              AutoMarketplace is currently an engineering prototype and technology demonstration for the Chennai, India market. 
              <strong> All vehicle prices, dealership quotations, inventory counts, group discount tiers, and customer savings shown across this application are simulated DEMO DATA.</strong> 
              They do not represent binding commercial quotations, real inventory allocations, or actual dealership agreements. 
              <strong> The Smart Deal Lock does NOT automatically charge credit cards or bank accounts, and does not purchase vehicles automatically.</strong> 
              Customer confirmation is mandatory before physical vehicle booking at an authorized dealership facility.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AutoMarketplace Prototype Architecture. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-3 sm:mt-0">
            <span className="hover:text-slate-300 cursor-pointer">Reverse Auction Rules (Simulated)</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy & Anti-Collusion Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Tamil Nadu RTO Tax Schedules</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
