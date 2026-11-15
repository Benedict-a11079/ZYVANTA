import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MarketplaceProvider } from './context/MarketplaceContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import CustomerDashboardPage from './pages/CustomerDashboardPage';
import DealerDashboardPage from './pages/DealerDashboardPage';
import SmartDealLockPage from './pages/SmartDealLockPage';
import GroupBuyingPage from './pages/GroupBuyingPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MarketplaceProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-carbon-950 text-slate-100 font-sans selection:bg-brand-red selection:text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/customer-dashboard" element={<CustomerDashboardPage />} />
              <Route path="/dealer-dashboard" element={<DealerDashboardPage />} />
              <Route path="/smart-deal-lock" element={<SmartDealLockPage />} />
              <Route path="/group-buying" element={<GroupBuyingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MarketplaceProvider>
  );
}
