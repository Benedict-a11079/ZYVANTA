import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6 shadow-glow-red/30">
        <Car className="w-8 h-8 text-brand-red" />
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
        404 — Road Ends Here
      </h1>
      <p className="text-sm text-slate-400 mt-2 max-w-md">
        The automotive page or reverse auction you are searching for does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white text-xs font-bold shadow-glow-red hover:brightness-110 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to AutoMarketplace Chennai</span>
      </Link>
    </div>
  );
}
