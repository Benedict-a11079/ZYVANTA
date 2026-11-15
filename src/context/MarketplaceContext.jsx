import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockCars } from '../data/mockCars';
import { mockDealers } from '../data/mockDealers';
import { mockPools } from '../data/mockPools';
import { mockQuotations } from '../data/mockQuotations';
import { mockCustomerRequests, mockDealerInventory } from '../data/mockRequests';
import { mockNegotiations } from '../data/mockNegotiations';
import { getManufacturers } from "../services/api";
const MarketplaceContext = createContext(null);

export function MarketplaceProvider({ children }) {
  // Current user role: 'customer' or 'dealer'
  const [userRole, setUserRole] = useState('customer');
  const [activeCity, setActiveCity] = useState('Chennai (Demo)');
// Database manufacturers
  const [manufacturers, setManufacturers] = useState([]);
  const [manufacturersLoading, setManufacturersLoading] = useState(true);
  const [manufacturersError, setManufacturersError] = useState(null);
  // Core collections
  const [cars, setCars] = useState(mockCars);
  const [dealers, setDealers] = useState(mockDealers);
  const [pools, setPools] = useState(mockPools);
  const [quotations, setQuotations] = useState(mockQuotations);
  const [requests, setRequests] = useState(mockCustomerRequests);
  const [inventory, setInventory] = useState(mockDealerInventory);
  const [negotiations, setNegotiations] = useState(mockNegotiations);

  // Active comparison state
  const [comparingCars, setComparingCars] = useState(['hyundai-creta-2025', 'mahindra-xuv700-ax7l']);
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);
  const [activeQuoteComparison, setActiveQuoteComparison] = useState(null);

  // Price Reporting State
  const [reportedPrices, setReportedPrices] = useState([]);

  // Final Customer Confirmation State (Zero Automatic Charges Guarantee)
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Notifications (Clearly framed as demo simulation events)
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Smart Deal Lock Held (Demo)',
      message: 'Your Hyundai Creta simulated quote at ₹21.15L is protected under the agreed 48-Hour Price Freeze.',
      time: '15 mins ago',
      read: false,
      type: 'lock'
    },
    {
      id: 'notif-2',
      title: 'Demo OMR Pool Status: 8/10',
      message: '2 more members needed in simulated pool to test Tier 3 rebate trigger.',
      time: '1 hour ago',
      read: false,
      type: 'pool'
    }
  ]);

  // Smart Deal Lock dynamic state (Default 48 hours provisional lock, supports agreed dealer-defined duration)
  const [agreedLockDurationHours, setAgreedLockDurationHours] = useState(48);
  const [dealLockTimeRemaining, setDealLockTimeRemaining] = useState(28 * 3600 + 14 * 60);
  const [autoSwitchEnabled, setAutoSwitchEnabled] = useState(true);
  
  // Agreed minimum switching threshold (configurable per pool contract, removed unapproved hardcoded ₹15k)
  const [agreedSwitchThreshold, setAgreedSwitchThreshold] = useState(10000);

  // Active locked deal holding anonymous dealer identity
  const [activeLockedDeal, setActiveLockedDeal] = useState({
    carName: 'Hyundai Creta',
    variant: 'SX (O) 1.5 Turbo DCT',
    currentBestDealer: 'Authorized Dealer Node A (Anna Salai Hub)',
    dealerId: 'dealer-node-a-hyundai',
    currentPrice: 2115000,
    initialPrice: 2285000,
    savings: 170000,
    lockDate: '11 Nov 2026, 10:30 AM',
    agreedDurationHours: 48,
    vinStatus: 'Pre-allotment Verified in Depot (Demo)',
    protectionGuarantee: '48-Hour Provisional Price Hold Active (No Automatic Charges)'
  });

  // Ticking countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDealLockTimeRemaining((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // Fetch manufacturers from PostgreSQL
useEffect(() => {
  const loadManufacturers = async () => {
    try {
      setManufacturersLoading(true);

      const data = await getManufacturers();

      setManufacturers(data);
      console.log("Manufacturers loaded from PostgreSQL:", data);
      setManufacturersError(null);
    } catch (error) {
      console.error("Manufacturer loading failed:", error);
      setManufacturersError(error.message);
    } finally {
      setManufacturersLoading(false);
    }
  };

  loadManufacturers();
}, []);

  // Action: Join a group pool
  const joinPool = (poolId) => {
    setPools((prevPools) =>
      prevPools.map((p) => {
        if (p.id === poolId) {
          if (p.currentMembers >= p.targetMembers) return p;
          const updatedMembers = p.currentMembers + 1;
          const isComplete = updatedMembers >= p.targetMembers;
          return {
            ...p,
            currentMembers: updatedMembers,
            status: isComplete ? 'Target Reached (Unlocked)' : `${p.targetMembers - updatedMembers} Slots Remaining`
          };
        }
        return p;
      })
    );

    addNotification({
      title: 'Group Pool Joined (Simulation)',
      message: `You have joined the Chennai buyers pool. Additional volume discounts will unlock as more members join.`,
      type: 'pool'
    });
  };

  // Action: Add Notification
  const addNotification = ({ title, message, type = 'info' }) => {
    const newNotif = {
      id: `notif-${Date.now()}`,
      title,
      message,
      time: 'Just now',
      read: false,
      type
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  // Action: Simulate a Competitor Undercut (Strictly maintaining anonymous dealer identities)
  const triggerSimulatedCompetitorUndercut = () => {
    // Undercut exceeds the agreed threshold
    const discountJump = agreedSwitchThreshold + 5000;
    const newBestPrice = activeLockedDeal.currentPrice - discountJump;
    const newAnonymousDealer = 'Authorized Dealer Node E (Royapettah Hub)';

    const previousOfferSnapshot = {
      dealer: activeLockedDeal.currentBestDealer,
      price: activeLockedDeal.currentPrice,
      savings: activeLockedDeal.savings
    };

    // Update active locked deal while maintaining anonymous dealer identities
    setActiveLockedDeal((prev) => ({
      ...prev,
      currentBestDealer: newAnonymousDealer,
      dealerId: 'dealer-node-e-sundaram',
      currentPrice: newBestPrice,
      savings: prev.savings + discountJump,
      protectionGuarantee: 'Auto-Switch Executed: Lower Verified Quotation Captured'
    }));

    // Add negotiation history event with OLD and NEW offers
    const newEvent = {
      id: `NEG-CHN-${Date.now()}`,
      requestId: 'REQ-CHN-2026-084',
      carName: activeLockedDeal.carName + ' ' + activeLockedDeal.variant,
      timestamp: new Date().toISOString(),
      event: 'Auto-Switch: Better Quotation Captured',
      dealer: newAnonymousDealer,
      price: newBestPrice,
      priceChange: -discountJump,
      details: `${newAnonymousDealer} underbid previous quote by ₹${discountJump.toLocaleString('en-IN')}, beating the agreed threshold of ₹${agreedSwitchThreshold.toLocaleString('en-IN')}. Deal automatically switched.`,
      previousOffer: {
        dealer: previousOfferSnapshot.dealer,
        price: previousOfferSnapshot.price,
        savings: previousOfferSnapshot.savings
      },
      newOffer: {
        dealer: newAnonymousDealer,
        price: newBestPrice,
        savings: activeLockedDeal.savings + discountJump
      },
      incrementalSavings: discountJump,
      parityVerified: true,
      type: 'switch'
    };

    setNegotiations((prev) => [newEvent, ...prev]);

    addNotification({
      title: '🚨 Smart Deal Auto-Switch Executed!',
      message: `${newAnonymousDealer} submitted a verified quotation lower by ₹${discountJump.toLocaleString('en-IN')}. New locked price: ₹${(newBestPrice / 100000).toFixed(2)} Lakh. Zero automatic charges.`,
      type: 'switch'
    });
  };

  // Action: Report Inaccurate Price
  const reportPriceDiscrepancy = (quoteId, reportData) => {
    const reportRecord = {
      id: `REP-${Date.now()}`,
      quoteId,
      timestamp: new Date().toISOString(),
      status: 'Under Platform Audit',
      ...reportData
    };

    setReportedPrices((prev) => [reportRecord, ...prev]);

    // Update quotation status in list
    setQuotations((prev) =>
      prev.map((q) => (q.id === quoteId ? { ...q, isReported: true, reportDetails: reportRecord } : q))
    );

    addNotification({
      title: 'Price Audit Report Submitted',
      message: `Quotation ${quoteId.slice(0, 10)} flagged for inspection regarding "${reportData.reason}".`,
      type: 'report'
    });
  };

  // Action: Customer Final Confirmation (Explicit In-Person Handover, NEVER auto-charges)
  const confirmDealershipBooking = (confirmationDetails) => {
    const token = `CHN-LOCK-TOKEN-${Math.floor(100000 + Math.random() * 900000)}`;
    const bookingRecord = {
      token,
      confirmedAt: new Date().toISOString(),
      carName: activeLockedDeal.carName,
      variant: activeLockedDeal.variant,
      lockedPrice: activeLockedDeal.currentPrice,
      dealer: activeLockedDeal.currentBestDealer,
      customerName: confirmationDetails.customerName || 'Karthik Subramanian',
      preferredRto: confirmationDetails.preferredRto || 'TN-07 (Chennai South)',
      status: 'Token Issued for In-Person Showroom Execution',
      paymentMethod: 'Direct at Dealership Upon Inspection (Zero Platform Charges)'
    };

    setConfirmedBooking(bookingRecord);

    addNotification({
      title: 'Booking Intent Confirmed (Token Generated)',
      message: `Handover voucher ${token} generated. Present this at the dealership showroom. No funds deducted online.`,
      type: 'confirmation'
    });

    return bookingRecord;
  };

  // Action: Dealer submits a new quotation
  const submitDealerQuote = (newQuote) => {
    const formattedQuote = {
      id: `quote-${Date.now()}`,
      quotedAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      validUntil: new Date(Date.now() + 48 * 3600 * 1000).toISOString(),
      agreedLockDurationHours: 48,
      status: 'Active Competitor Bid (Demo)',
      isReported: false,
      ...newQuote
    };

    setQuotations((prev) => [formattedQuote, ...prev]);

    addNotification({
      title: 'Quotation Submitted (Demo)',
      message: `On-road quotation of ₹${(newQuote.finalOnRoadPrice / 100000).toFixed(2)} Lakh transmitted.`,
      type: 'quote'
    });
  };

  // Action: Add new customer inquiry
  const submitPurchaseRequest = (requestData) => {
    const newReq = {
      id: `REQ-CHN-2026-${Math.floor(100 + Math.random() * 900)}`,
      submittedDate: new Date().toISOString().split('T')[0],
      quotesCount: 0,
      status: 'Broadcasted to Chennai Dealers (Demo Simulation)',
      autoSwitchEnabled: true,
      agreedSwitchThreshold: 10000,
      dealershipQuotes: [],
      ...requestData
    };

    setRequests((prev) => [newReq, ...prev]);
    addNotification({
      title: 'Purchase Request Created (Demo)',
      message: `Your request for ${requestData.carName} has been broadcasted to simulated dealer nodes.`,
      type: 'request'
    });
  };

  return (
    <MarketplaceContext.Provider
      value={{
        manufacturers,
        manufacturersLoading,
        manufacturersError,
        userRole,
        setUserRole,
        activeCity,
        setActiveCity,
        cars,
        dealers,
        pools,
        quotations,
        requests,
        inventory,
        negotiations,
        notifications,
        comparingCars,
        setComparingCars,
        comparisonModalOpen,
        setComparisonModalOpen,
        activeQuoteComparison,
        setActiveQuoteComparison,
        dealLockTimeRemaining,
        agreedLockDurationHours,
        setAgreedLockDurationHours,
        activeLockedDeal,
        autoSwitchEnabled,
        setAutoSwitchEnabled,
        agreedSwitchThreshold,
        setAgreedSwitchThreshold,
        reportedPrices,
        reportPriceDiscrepancy,
        confirmedBooking,
        confirmDealershipBooking,
        joinPool,
        addNotification,
        triggerSimulatedCompetitorUndercut,
        submitDealerQuote,
        submitPurchaseRequest
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
}
