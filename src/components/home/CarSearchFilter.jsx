import React from 'react';
import { Search, Filter, RotateCcw, SlidersHorizontal, Fuel, IndianRupee, Layers } from 'lucide-react';
import { carFilters } from '../../data/mockCars';

export default function CarSearchFilter({
  searchQuery,
  setSearchQuery,
  selectedBrand,
  setSelectedBrand,
  selectedBudget,
  setSelectedBudget,
  selectedFuel,
  setSelectedFuel,
  selectedBodyType,
  setSelectedBodyType,
  onResetFilters,
  totalResults
}) {
  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
      
      {/* Top Search Input Row */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Chennai cars by name, brand, or feature (e.g., Creta, ADAS, Hybrid)..."
            className="w-full bg-navy-900 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Reset & Counter */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-3">
          <span className="text-xs font-mono text-slate-300 bg-carbon-900 border border-white/10 px-3.5 py-3 rounded-2xl whitespace-nowrap">
            <span className="text-brand-red font-bold">{totalResults}</span> models available
          </span>

          <button
            onClick={onResetFilters}
            className="inline-flex items-center space-x-1.5 px-3.5 py-3 rounded-2xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors"
            title="Reset all filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Filter Dropdown Controls */}
      <div className="mt-5 pt-5 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        
        {/* Brand Filter */}
        <div>
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
            Brand
          </label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-red"
          >
            {carFilters.brands.map((b) => (
              <option key={b} value={b} className="bg-navy-950 text-white">
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Filter */}
        <div>
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
            Budget Range
          </label>
          <select
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-red"
          >
            {carFilters.budgets.map((b) => (
              <option key={b} value={b} className="bg-navy-950 text-white">
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
            Fuel Type
          </label>
          <select
            value={selectedFuel}
            onChange={(e) => setSelectedFuel(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-red"
          >
            {carFilters.fuelTypes.map((f) => (
              <option key={f} value={f} className="bg-navy-950 text-white">
                {f}
              </option>
            ))}
          </select>
        </div>

        {/* Body Type */}
        <div>
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
            Body Type
          </label>
          <select
            value={selectedBodyType}
            onChange={(e) => setSelectedBodyType(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-red"
          >
            {carFilters.bodyTypes.map((bt) => (
              <option key={bt} value={bt} className="bg-navy-950 text-white">
                {bt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
