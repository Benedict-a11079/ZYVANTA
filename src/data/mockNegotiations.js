// DEMO DATA NOTICE: All negotiation events and switching records are simulated for interface validation.
// All dealership identities are strictly anonymized per anti-collusion protocol.

export const mockNegotiations = [
  {
    id: 'NEG-CHN-001',
    requestId: 'REQ-CHN-2026-084',
    carName: 'Hyundai Creta SX (O) 1.5 Turbo DCT',
    timestamp: '2026-11-11T10:00:00Z',
    event: 'Request Published to Chennai Dealers (Demo)',
    dealer: 'AutoMarketplace Engine (Simulation)',
    price: 2285000,
    priceChange: 0,
    details: 'Customer Karthik S. initiated competitive reverse auction with OMR Tech Buyers Pool model.',
    previousOffer: null,
    newOffer: {
      dealer: 'Baseline Showroom MRP',
      price: 2285000,
      discount: 0
    },
    incrementalSavings: 0,
    parityVerified: true,
    type: 'system'
  },
  {
    id: 'NEG-CHN-002',
    requestId: 'REQ-CHN-2026-084',
    carName: 'Hyundai Creta SX (O) 1.5 Turbo DCT',
    timestamp: '2026-11-11T11:15:00Z',
    event: 'Initial Quotation Placed',
    dealer: 'Authorized Dealer Node C (OMR Hub)',
    price: 2150000,
    priceChange: -135000,
    details: 'Sealed reverse quote submitted with ₹1.35 Lakh combined concession and basic accessories kit.',
    previousOffer: {
      dealer: 'Baseline Showroom MRP',
      price: 2285000,
      discount: 0
    },
    newOffer: {
      dealer: 'Authorized Dealer Node C (OMR Hub)',
      price: 2150000,
      discount: 135000
    },
    incrementalSavings: 135000,
    parityVerified: true,
    type: 'quote'
  },
  {
    id: 'NEG-CHN-003',
    requestId: 'REQ-CHN-2026-084',
    carName: 'Hyundai Creta SX (O) 1.5 Turbo DCT',
    timestamp: '2026-11-11T13:40:00Z',
    event: 'Competitive Undercut & Automatic Switch Triggered',
    dealer: 'Authorized Dealer Node A (Anna Salai Hub)',
    price: 2115000,
    priceChange: -35000,
    details: 'Dealer Node A undercut Dealer Node C by ₹35,000, satisfying agreed customer threshold. Lock automatically switched.',
    previousOffer: {
      dealer: 'Authorized Dealer Node C (OMR Hub)',
      price: 2150000,
      discount: 135000
    },
    newOffer: {
      dealer: 'Authorized Dealer Node A (Anna Salai Hub)',
      price: 2115000,
      discount: 170000
    },
    incrementalSavings: 35000,
    parityVerified: true,
    type: 'switch'
  },
  {
    id: 'NEG-CHN-004',
    requestId: 'REQ-CHN-2026-084',
    carName: 'Hyundai Creta SX (O) 1.5 Turbo DCT',
    timestamp: '2026-11-11T14:30:00Z',
    event: 'Smart Deal Lock Held (48-Hour Agreed Duration)',
    dealer: 'AutoMarketplace Price Freeze Engine',
    price: 2115000,
    priceChange: 0,
    details: 'Provisional lock held at ₹21.15 Lakh. Zero automatic charges. In-person showroom confirmation required.',
    previousOffer: {
      dealer: 'Authorized Dealer Node A (Anna Salai Hub)',
      price: 2115000,
      discount: 170000
    },
    newOffer: {
      dealer: 'Authorized Dealer Node A (Anna Salai Hub)',
      price: 2115000,
      discount: 170000
    },
    incrementalSavings: 0,
    parityVerified: true,
    type: 'lock'
  }
];

export const mockCompetitorIntel = {
  carModel: 'Hyundai Creta SX (O) 1.5 Turbo DCT',
  market: 'Chennai Urban & Suburbs (Simulated)',
  currentLowestBid: 2115000,
  averageMarketplaceBid: 2145000,
  currentDealerRank: 2,
  totalDealersBidding: 4,
  yourCurrentOffer: 2150000,
  suggestedWinningBid: 2100000,
  projectedProfitMargin: '4.8% (Simulated)',
  timeRemainingInWindow: '28h 14m'
};
