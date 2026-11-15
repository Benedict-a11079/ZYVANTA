import React from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer({ totalSeconds, label = 'Provisional Lock Expires In' }) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num) => String(num).padStart(2, '0');

  // Calculate percentage of 48 hours (48 * 3600 = 172800s)
  const totalDuration = 48 * 3600;
  const percentageRemaining = Math.max(0, Math.min(100, (totalSeconds / totalDuration) * 100));

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
        <span className="flex items-center space-x-1.5">
          <Clock className="w-3.5 h-3.5 text-brand-red animate-pulse" />
          <span>{label}</span>
        </span>
        <span className="text-[11px] font-mono text-emerald-400">Lock Protected</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-navy-950/80 border border-white/10 rounded-xl p-2.5">
          <span className="font-mono text-2xl font-bold text-white block">
            {pad(hours)}
          </span>
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Hours</span>
        </div>

        <div className="bg-navy-950/80 border border-white/10 rounded-xl p-2.5">
          <span className="font-mono text-2xl font-bold text-brand-red block">
            {pad(minutes)}
          </span>
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Mins</span>
        </div>

        <div className="bg-navy-950/80 border border-white/10 rounded-xl p-2.5">
          <span className="font-mono text-2xl font-bold text-white block">
            {pad(seconds)}
          </span>
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Secs</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 w-full bg-navy-900 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-brand-red to-amber-400 h-1.5 rounded-full transition-all duration-1000"
          style={{ width: `${percentageRemaining}%` }}
        ></div>
      </div>
    </div>
  );
}
