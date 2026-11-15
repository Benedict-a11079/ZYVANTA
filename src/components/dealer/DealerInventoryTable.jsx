import React, { useState } from 'react';
import { Layers, Plus, CheckCircle2, AlertCircle, Clock, Truck, ShieldCheck } from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatINR } from '../../utils/formatters';

export default function DealerInventoryTable() {
  const { inventory } = useMarketplace();
  const [items, setItems] = useState(inventory);

  return (
    <div className="bg-navy-950/80 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Dealership Inventory & Yard Stock
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-navy-800 text-sky-400 border border-sky-400/30">
              DEMO INVENTORY
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulated VIN allocations and mock yard inventory for platform testing
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-slate-400 font-mono">Stock Units: {items.reduce((acc, curr) => acc + curr.stockCount, 0)} available</span>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-navy-900/40 text-slate-400 uppercase tracking-wider text-[11px]">
              <th className="p-3.5">Vehicle Details</th>
              <th className="p-3.5">VIN / Stockyard Status</th>
              <th className="p-3.5">Available Units</th>
              <th className="p-3.5">Delivery Lead Time</th>
              <th className="p-3.5">Ex-Showroom</th>
              <th className="p-3.5">Min Floor Price</th>
              <th className="p-3.5">Market Demand</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3.5">
                  <div className="font-semibold text-white text-sm">{item.carName}</div>
                  <div className="text-slate-400 text-xs">{item.variant} • {item.color}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">{item.fuel} • {item.transmission}</div>
                </td>

                <td className="p-3.5">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-navy-900 text-slate-300 border border-white/10 text-xs">
                    <Truck className="w-3.5 h-3.5 text-brand-red" />
                    <span>{item.vinStatus}</span>
                  </span>
                </td>

                <td className="p-3.5 font-mono text-sm font-bold text-white">
                  {item.stockCount} Units
                </td>

                <td className="p-3.5">
                  <span className="font-semibold text-emerald-400 text-xs flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {item.readyInDays} Days
                  </span>
                </td>

                <td className="p-3.5 font-mono text-slate-200">
                  {formatINR(item.exShowroom)}
                </td>

                <td className="p-3.5 font-mono font-bold text-amber-400">
                  {formatINR(item.minBottomlinePrice)}
                </td>

                <td className="p-3.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                    item.demandLevel === 'Very High'
                      ? 'bg-brand-red/20 text-brand-red border border-brand-red/30'
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {item.demandLevel} ({item.activeInquiries} inquiries)
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
