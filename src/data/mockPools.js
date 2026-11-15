// DEMO DATA NOTICE: All regional group-buying pools, progress counts, and simulated member data are illustrative prototypes.
export const mockPools = [
  {
    id: 'pool-creta-omr-nov',
    carId: 'hyundai-creta-2025',
    carName: 'Hyundai Creta',
    variant: 'SX (O) 1.5 Turbo DCT',
    clusterName: 'Chennai OMR Tech Corridor Buyers Club (Demo)',
    hubLocation: 'OMR - Sholinganallur & Perungudi',
    targetMembers: 10,
    currentMembers: 8,
    status: 'Demo Pool: 2 Slots Open',
    expiresInHours: 22,
    discountPerMember: 65000,
    bonusPerk: 'Complimentary 3-Year Extended Warranty + Ceramic Protection Protocol (Simulated)',
    tiers: [
      { count: 3, discount: 35000, unlocked: true },
      { count: 6, discount: 50000, unlocked: true },
      { count: 10, discount: 65000, unlocked: false }
    ],
    biddingDealersCount: 4,
    bestCurrentQuote: 2115000,
    standardPrice: 2285000,
    totalPotentialSavings: 170000,
    recentJoinedMembers: [
      { name: 'Karthik S. (Demo)', locality: 'Perungudi', timeAgo: '18 mins ago' },
      { name: 'Arunmozhi V. (Demo)', locality: 'Thoraipakkam', timeAgo: '1 hr ago' },
      { name: 'Preeti R. (Demo)', locality: 'Navalur', timeAgo: '3 hrs ago' }
    ]
  },
  {
    id: 'pool-xuv700-annanagar',
    carId: 'mahindra-xuv700-ax7l',
    carName: 'Mahindra XUV700',
    variant: 'AX7 L Diesel AT AWD',
    clusterName: 'Anna Nagar Doctors & Executive Circle (Demo)',
    hubLocation: 'Anna Nagar West & Kilpauk',
    targetMembers: 5,
    currentMembers: 5,
    status: 'Target Unlocked (Demo Allocation Stage)',
    expiresInHours: 5,
    discountPerMember: 85000,
    bonusPerk: 'Priority Factory Dispatch + Dual Dashcam Package (Simulated)',
    tiers: [
      { count: 2, discount: 45000, unlocked: true },
      { count: 4, discount: 65000, unlocked: true },
      { count: 5, discount: 85000, unlocked: true }
    ],
    biddingDealersCount: 3,
    bestCurrentQuote: 2690000,
    standardPrice: 2840000,
    totalPotentialSavings: 150000,
    recentJoinedMembers: [
      { name: 'Dr. Subramaniam N. (Demo)', locality: 'Anna Nagar 2nd Ave', timeAgo: '32 mins ago' },
      { name: 'Vijay Anand (Demo)', locality: 'Shenoy Nagar', timeAgo: '2 hrs ago' }
    ]
  },
  {
    id: 'pool-nexon-ev-velachery',
    carId: 'tata-nexon-ev-empowered',
    carName: 'Tata Nexon.ev',
    variant: 'Empowered Plus 45 kWh',
    clusterName: 'Velachery & Adyar Green Mobility Pool (Demo)',
    hubLocation: 'Velachery Main Rd & IIT Madras Research Park',
    targetMembers: 8,
    currentMembers: 6,
    status: 'Demo Pool: 2 Slots Open',
    expiresInHours: 34,
    discountPerMember: 50000,
    bonusPerk: 'Complimentary 7.2 kW AC Home Fast Charger Package (Simulated)',
    tiers: [
      { count: 3, discount: 25000, unlocked: true },
      { count: 5, discount: 38000, unlocked: true },
      { count: 8, discount: 50000, unlocked: false }
    ],
    biddingDealersCount: 5,
    bestCurrentQuote: 1695000,
    standardPrice: 1815000,
    totalPotentialSavings: 120000,
    recentJoinedMembers: [
      { name: 'Divya M. (Demo)', locality: 'Velachery Bypass', timeAgo: '4 hrs ago' },
      { name: 'Sundar K. (Demo)', locality: 'Kotturpuram', timeAgo: '6 hrs ago' }
    ]
  },
  {
    id: 'pool-innova-hycross-ecr',
    carId: 'toyota-innova-hycross-zx',
    carName: 'Toyota Innova Hycross',
    variant: 'ZX (O) Strong Hybrid',
    clusterName: 'ECR & Alwarpet Premium Family Fleet (Demo)',
    hubLocation: 'Neelankarai, Thiruvanmiyur & Alwarpet',
    targetMembers: 4,
    currentMembers: 3,
    status: 'Demo Pool: 1 Slot Open',
    expiresInHours: 14,
    discountPerMember: 75000,
    bonusPerk: 'Priority Allocation Model + Protection Film Package',
    tiers: [
      { count: 2, discount: 40000, unlocked: true },
      { count: 4, discount: 75000, unlocked: false }
    ],
    biddingDealersCount: 2,
    bestCurrentQuote: 3510000,
    standardPrice: 3650000,
    totalPotentialSavings: 140000,
    recentJoinedMembers: [
      { name: 'Srinivasan G. (Demo)', locality: 'Palavakkam ECR', timeAgo: '5 hrs ago' }
    ]
  }
];
