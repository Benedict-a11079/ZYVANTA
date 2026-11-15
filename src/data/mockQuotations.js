// DEMO DATA NOTICE: All quotations are simulated price models for demonstration.
// No real binding dealership contracts or live financial quotations are represented.

export const mockQuotations = [
  {
    id: 'quote-demo-creta-01',
    requestId: 'REQ-CHN-2026-084',
    carId: 'hyundai-creta-2025',
    carName: 'Hyundai Creta',
    variant: 'SX (O) 1.5 Turbo DCT',
    dealerId: 'dealer-node-a-hyundai',
    dealerName: 'Dealer Node A (Simulated Quote)',
    anonymousDealerName: 'Authorized Dealer Node A (Anna Salai Hub)',
    dealerLocation: 'Anna Salai, Nandanam, Chennai (Simulated Node)',
    dealerRating: 4.8,
    isCurrentBest: true,
    status: 'Provisional Lock Active (Demo)',
    quotedAt: '2026-11-11T10:30:00Z',
    lastUpdated: '2026-11-11T14:15:00Z',
    validUntil: '2026-11-13T10:30:00Z',
    agreedLockDurationHours: 48,
    isReported: false,
    reportDetails: null,
    mandatory: {
      exShowroom: 1999900,
      rtoChennai: 259987, // ~13% TN Road Tax bracket + smart card
      statutoryInsurance: 38500, // Mandatory 1-Yr OD + 3-Yr Third Party Cover
      tcs: 19999, // 1% TCS
      hsrpAndFastag: 1200,
      subtotal: 2319586
    },
    optional: {
      zeroDepAndRtiCover: 26000, // Optional Comprehensive Zero-Dep + RTI Cover
      extendedWarranty: 21500, // Optional 4th & 5th Year Protection
      basicAccessoriesKit: 12500, // Optional Basic Accessories Pack
      dealerLogisticsFee: 0, // Logistics & Handling fee (waived 100%)
      subtotal: 60000
    },
    discounts: {
      reverseAuctionDiscount: 144586, // Competitive sealed discount
      groupBuyingFleetRebate: 120000, // Cluster pool discount
      subtotal: 264586
    },
    finalOnRoadPrice: 2115000,
    retailListPrice: 2285000,
    savingsAmount: 170000,
    deliveryTimelineDays: 5,
    stockStatus: 'In Chennai Stockyard (Simulated VIN Allocation)',
    dealerPerks: [
      'Free 3M Ceramic Paint Protection Package',
      'Doorstep Delivery in Chennai Protocol',
      'Free Fastag RFID Recharge ₹1,000',
      'Zero Unapproved Handling Charges Guaranteed'
    ],
    terms: 'Simulated 48-Hour Smart Deal Lock price hold. Does not process financial charges. Subject to customer confirmation at showroom.'
  },
  {
    id: 'quote-demo-creta-02',
    requestId: 'REQ-CHN-2026-084',
    carId: 'hyundai-creta-2025',
    carName: 'Hyundai Creta',
    variant: 'SX (O) 1.5 Turbo DCT',
    dealerId: 'dealer-node-c-hyundai',
    dealerName: 'Dealer Node C (Simulated Quote)',
    anonymousDealerName: 'Authorized Dealer Node C (OMR IT Corridor Hub)',
    dealerLocation: 'OMR, Kandanchavadi, Chennai (Simulated Node)',
    dealerRating: 4.6,
    isCurrentBest: false,
    status: 'Competitor Counter-Offered (Demo)',
    quotedAt: '2026-11-11T09:15:00Z',
    lastUpdated: '2026-11-11T11:45:00Z',
    validUntil: '2026-11-13T09:15:00Z',
    agreedLockDurationHours: 48,
    isReported: false,
    reportDetails: null,
    mandatory: {
      exShowroom: 1999900,
      rtoChennai: 259987,
      statutoryInsurance: 38500,
      tcs: 19999,
      hsrpAndFastag: 1200,
      subtotal: 2319586
    },
    optional: {
      zeroDepAndRtiCover: 29500,
      extendedWarranty: 21500,
      basicAccessoriesKit: 14000,
      dealerLogisticsFee: 4500, // Discounted handling
      subtotal: 69500
    },
    discounts: {
      reverseAuctionDiscount: 119086,
      groupBuyingFleetRebate: 120000,
      subtotal: 239086
    },
    finalOnRoadPrice: 2150000,
    retailListPrice: 2285000,
    savingsAmount: 135000,
    deliveryTimelineDays: 7,
    stockStatus: 'Depot Yard Available (Simulated)',
    dealerPerks: [
      'Underbody Anti-Rust Coating Included',
      'Floor 7D Mats & Sunshades Pack'
    ],
    terms: 'Simulated quote with 48h validity. In-person dealer verification required.'
  },
  {
    id: 'quote-demo-xuv700-01',
    requestId: 'REQ-CHN-2026-091',
    carId: 'mahindra-xuv700-ax7l',
    carName: 'Mahindra XUV700',
    variant: 'AX7 L Diesel AT AWD',
    dealerId: 'dealer-node-b-automotive',
    dealerName: 'Dealer Node B (Simulated Quote)',
    anonymousDealerName: 'Authorized Dealer Node B (Mount Road Hub)',
    dealerLocation: 'Mount Road, Chennai (Simulated Node)',
    dealerRating: 4.7,
    isCurrentBest: true,
    status: 'Accepted in Regional Pool (Demo)',
    quotedAt: '2026-11-11T08:20:00Z',
    lastUpdated: '2026-11-11T13:30:00Z',
    validUntil: '2026-11-13T08:20:00Z',
    agreedLockDurationHours: 48,
    isReported: false,
    reportDetails: null,
    mandatory: {
      exShowroom: 2399000,
      rtoChennai: 311870,
      statutoryInsurance: 48500,
      tcs: 23990,
      hsrpAndFastag: 1200,
      subtotal: 2784560
    },
    optional: {
      zeroDepAndRtiCover: 34000,
      extendedWarranty: 28000,
      basicAccessoriesKit: 18500,
      dealerLogisticsFee: 0,
      subtotal: 80500
    },
    discounts: {
      reverseAuctionDiscount: 90060,
      groupBuyingFleetRebate: 85000,
      subtotal: 175060
    },
    finalOnRoadPrice: 2690000,
    retailListPrice: 2840000,
    savingsAmount: 150000,
    deliveryTimelineDays: 14,
    stockStatus: 'Factory Priority Model (Simulated Direct TN Stock)',
    dealerPerks: [
      'Dual Dashcam Inclusion',
      'Priority Delivery Allotment Protocol',
      'Fuel Tank Allocation on Handover'
    ],
    terms: 'Simulated group buying pool model with 5 members satisfied.'
  },
  {
    id: 'quote-demo-xuv700-02',
    requestId: 'REQ-CHN-2026-091',
    carId: 'mahindra-xuv700-ax7l',
    carName: 'Mahindra XUV700',
    variant: 'AX7 L Diesel AT AWD',
    dealerId: 'dealer-node-e-sundaram',
    dealerName: 'Dealer Node E (Simulated Quote)',
    anonymousDealerName: 'Authorized Dealer Node E (Royapettah Hub)',
    dealerLocation: 'Whites Road, Royapettah, Chennai (Simulated Node)',
    dealerRating: 4.85,
    isCurrentBest: false,
    status: 'Outbid by Competitor (Demo)',
    quotedAt: '2026-11-10T16:45:00Z',
    lastUpdated: '2026-11-11T09:00:00Z',
    validUntil: '2026-11-12T16:45:00Z',
    agreedLockDurationHours: 48,
    isReported: false,
    reportDetails: null,
    mandatory: {
      exShowroom: 2399000,
      rtoChennai: 311870,
      statutoryInsurance: 48500,
      tcs: 23990,
      hsrpAndFastag: 1200,
      subtotal: 2784560
    },
    optional: {
      zeroDepAndRtiCover: 36500,
      extendedWarranty: 28000,
      basicAccessoriesKit: 19500,
      dealerLogisticsFee: 5000,
      subtotal: 89000
    },
    discounts: {
      reverseAuctionDiscount: 63560,
      groupBuyingFleetRebate: 85000,
      subtotal: 148560
    },
    finalOnRoadPrice: 2725000,
    retailListPrice: 2840000,
    savingsAmount: 115000,
    deliveryTimelineDays: 10,
    stockStatus: 'Transit Hub Simulation',
    dealerPerks: [
      'Maintenance Program Protocol',
      'Doorstep Family Test Drive Protocol'
    ],
    terms: 'Simulated quotation data.'
  }
];
