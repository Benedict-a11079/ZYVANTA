import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Fuel, 
  Gauge, 
  Calendar, 
  ArrowRight, 
  TrendingDown, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Scale
} from 'lucide-react';
import { formatINR, formatLakhs } from '../../utils/formatters';

export default function FeaturedCars({ cars, onOpenQuoteModal, onOpenCompareModal }) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-16 bg-navy-950/40 rounded-3xl border border-white/5">
        <p className="text-slate-400 text-sm">No vehicles match your search criteria.</p>
        <p className="text-xs text-slate-500 mt-1">Try resetting the filters or searching for another keyword.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {cars.map((car) => {
        const totalSavings = car.onRoadChennaiBase - car.bestMarketplacePrice;

        return (
          <div
            key={car.id}
            className="group relative bg-navy-950/70 hover:bg-navy-900/80 border border-white/10 hover:border-brand-red/40 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between"
          >
            {/* Top Image Banner */}
            <div>
              <div className="relative h-52 w-full overflow-hidden bg-carbon-900">
                <img
                  src={car.image}
                  alt={car.name}
                  onError={(e) => {
                    // Fallback to a neutral SUV image if external CDN is blocked
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/40" />

                {/* Badges on top of image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-black/75 backdrop-blur-md text-white border border-white/15">
                    {car.brand}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-brand-red/90 text-white shadow-glow-red/50">
                    {car.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg text-[9px] font-mono font-bold bg-amber-500/25 text-amber-300 border border-amber-500/30">
                    DEMO MODEL
                  </span>
                </div>

                {/* Pool Status Pill */}
                {car.poolActive && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-carbon-950/85 backdrop-blur-md border border-emerald-500/30 text-xs">
                    <span className="flex items-center space-x-1.5 text-emerald-400 font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>Chennai Pool: {car.poolProgress}/{car.poolTarget} Members (Demo)</span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-300">
                      Tier Rebate Active
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                
                {/* Popular Chennai Area Indicator */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-mono">
                  <span>Targeted Clusters:</span>
                  <span className="text-slate-300">{car.popularInChennai}</span>
                </div>

                {/* Car Title & Variant */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-redGlow transition-colors leading-tight">
                  {car.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {car.variant}
                </p>

                {/* Quick specs pill row */}
                <div className="grid grid-cols-3 gap-2 my-4 pt-3 border-t border-white/5 text-center">
                  <div className="p-2 rounded-xl bg-navy-900/60 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase block">Fuel</span>
                    <span className="text-xs font-semibold text-slate-200">{car.fuel}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-navy-900/60 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase block">Efficiency</span>
                    <span className="text-xs font-semibold text-slate-200">{car.mileage.split(' ')[0]} {car.fuel === 'Electric' ? 'km' : 'kmpl'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-navy-900/60 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase block">Target Lead Time</span>
                    <span className="text-xs font-semibold text-emerald-400">{car.deliveryDays} Days</span>
                  </div>
                </div>

                {/* Price Display Box */}
                <div className="p-4 rounded-2xl bg-carbon-900/90 border border-white/10 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Regular Chennai On-Road MRP:</span>
                    <span className="line-through text-slate-500 font-mono">
                      {formatINR(car.onRoadChennaiBase)}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pt-1">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                        Simulated Best On-Road:
                      </span>
                      <span className="font-mono text-xl font-black text-white">
                        {formatINR(car.bestMarketplacePrice)}
                      </span>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex items-center space-x-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span>Simulated -{formatINR(totalSavings)}</span>
                    </span>
                  </div>
                </div>

                {/* Features Snippet */}
                <ul className="mt-4 space-y-1 text-xs text-slate-300">
                  {car.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-brand-red shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenQuoteModal(car)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold hover:brightness-110 transition-all shadow-glow-red/20 text-center"
                >
                  Request Quote
                </button>
                <Link
                  to="/group-buying"
                  className="w-full py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center space-x-1"
                >
                  <Users className="w-3 h-3 text-emerald-400" />
                  <span>View Pool</span>
                </Link>
              </div>

              <button
                onClick={() => onOpenCompareModal(car)}
                className="w-full py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center space-x-1.5"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compare Chennai Dealer Quotes</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
