import React from 'react';
import DealLockHero from '../components/dealLock/DealLockHero';
import ProvisionalLockStatusCard from '../components/dealLock/ProvisionalLockStatusCard';
import AutoSwitchIndicator from '../components/dealLock/AutoSwitchIndicator';
import BestOfferBreakdown from '../components/dealLock/BestOfferBreakdown';
import SwitchingHistoryTimeline from '../components/dealLock/SwitchingHistoryTimeline';

export default function SmartDealLockPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Deal Lock Hero */}
      <DealLockHero />

      {/* 2. 48-Hour Provisional Lock & Offer Expiry Countdown */}
      <ProvisionalLockStatusCard />

      {/* 3. Automatic Switching Indicator & Threshold */}
      <AutoSwitchIndicator />

      {/* 4. Current Best Offer Line-Item Breakdown */}
      <BestOfferBreakdown />

      {/* 5. Switching History & Audit Trail */}
      <SwitchingHistoryTimeline />

    </div>
  );
}
