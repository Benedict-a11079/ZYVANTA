import React, { useState } from 'react';
import Modal from '../common/Modal';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Car, MapPin, Users, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function NewRequestModal({ isOpen, onClose }) {
  const { cars, submitPurchaseRequest } = useMarketplace();

  const [selectedCarId, setSelectedCarId] = useState(cars[0]?.id || '');
  const [customerName, setCustomerName] = useState('Karthik Subramanian');
  const [customerPhone, setCustomerPhone] = useState('+91 98401 23456');
  const [preferredRto, setPreferredRto] = useState('TN-07 (Chennai South / Thiruvanmiyur)');
  const [exteriorColor, setExteriorColor] = useState('Abyss Black');
  const [requestType, setRequestType] = useState('group'); // 'group' or 'single'

  const selectedCar = cars.find((c) => c.id === selectedCarId) || cars[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    submitPurchaseRequest({
      customerName,
      customerPhone,
      carId: selectedCar.id,
      carName: selectedCar.name,
      variant: selectedCar.variant,
      exteriorColor,
      preferredRto,
      type: requestType === 'group' ? 'Group Buying Regional Pool' : 'Single Buyer Competitive Reverse Auction',
      poolId: requestType === 'group' ? 'pool-creta-omr-nov' : null,
      bestQuotePrice: selectedCar.bestMarketplacePrice,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Chennai Purchase Request [DEMO]"
      subtitle="Broadcast simulated vehicle requirements to anonymous dealership nodes for competitive bids"
      maxWidth="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        {/* Car Selection */}
        <div>
          <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
            Select Car Model & Trim
          </label>
          <select
            value={selectedCarId}
            onChange={(e) => setSelectedCarId(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-3 text-white text-xs focus:outline-none focus:border-brand-red"
          >
            {cars.map((car) => (
              <option key={car.id} value={car.id} className="bg-navy-950 text-white">
                {car.brand} {car.name} — {car.variant} (Showroom: ₹{(car.onRoadChennaiBase / 100000).toFixed(2)}L)
              </option>
            ))}
          </select>
        </div>

        {/* Selected Car preview box */}
        <div className="p-3.5 rounded-2xl bg-carbon-950 border border-white/10 flex items-center space-x-3">
          <img
            src={selectedCar.image}
            alt={selectedCar.name}
            className="w-16 h-14 object-cover rounded-xl border border-white/10"
          />
          <div>
            <span className="font-bold text-white text-sm block">{selectedCar.name}</span>
            <span className="text-slate-400 text-xs">{selectedCar.variant}</span>
            <span className="text-emerald-400 text-[11px] block mt-0.5">
              Best reverse auction benchmark: ₹{(selectedCar.bestMarketplacePrice / 100000).toFixed(2)} Lakh
            </span>
          </div>
        </div>

        {/* Buying Mode Choice */}
        <div>
          <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
            Purchase Mode
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRequestType('group')}
              className={`p-3 rounded-xl border text-left transition-all ${
                requestType === 'group'
                  ? 'bg-navy-800 border-brand-red text-white shadow-glow-red/20'
                  : 'bg-navy-900/60 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-brand-red" />
                <span className="font-bold text-xs">Join Regional Pool</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Unlock tiered fleet discounts (Save up to ₹85k extra).
              </p>
            </button>

            <button
              type="button"
              onClick={() => setRequestType('single')}
              className={`p-3 rounded-xl border text-left transition-all ${
                requestType === 'single'
                  ? 'bg-navy-800 border-brand-red text-white shadow-glow-red/20'
                  : 'bg-navy-900/60 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-brand-red" />
                <span className="font-bold text-xs">Single Buyer Auction</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Direct reverse auction with verified dealers.
              </p>
            </button>
          </div>
        </div>

        {/* Preferred RTO in Chennai */}
        <div>
          <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
            Registration Chennai RTO Zone
          </label>
          <select
            value={preferredRto}
            onChange={(e) => setPreferredRto(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-3 text-white text-xs focus:outline-none focus:border-brand-red"
          >
            <option value="TN-07 (Chennai South / Thiruvanmiyur)">TN-07 (Chennai South / Thiruvanmiyur)</option>
            <option value="TN-01 (Chennai Central / Ayanavaram)">TN-01 (Chennai Central / Ayanavaram)</option>
            <option value="TN-02 (Chennai North / Anna Nagar)">TN-02 (Chennai North / Anna Nagar)</option>
            <option value="TN-09 (Chennai West / K.K. Nagar)">TN-09 (Chennai West / K.K. Nagar)</option>
            <option value="TN-14 (Sholinganallur / OMR)">TN-14 (Sholinganallur / OMR)</option>
            <option value="TN-22 (Alandur / Guindy)">TN-22 (Alandur / Guindy)</option>
          </select>
        </div>

        {/* Exterior Color */}
        <div>
          <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
            Preferred Exterior Color
          </label>
          <input
            type="text"
            value={exteriorColor}
            onChange={(e) => setExteriorColor(e.target.value)}
            className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-3 text-white text-xs focus:outline-none focus:border-brand-red"
            placeholder="e.g. Abyss Black, Polar White, Titan Grey"
          />
        </div>

        {/* Contact Info (Simulated user profile) */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-brand-red"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Mobile (WhatsApp for Bids)
            </label>
            <input
              type="text"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-brand-red"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-mono">
            Zero online charges • Simulated Request
          </span>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 transition-all"
            >
              Broadcast Simulated Request
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
