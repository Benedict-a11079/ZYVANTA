import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Car, 
  ShieldCheck, 
  Users, 
  Scale, 
  Lock, 
  Building2, 
  UserCheck, 
  MapPin, 
  Bell, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import { useMarketplace } from '../../context/MarketplaceContext';

export default function Navbar() {
  const location = useLocation();
  const { userRole, setUserRole, notifications, activeLockedDeal } = useMarketplace();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const navLinks = [
    { label: 'Browse Cars', path: '/' },
    { label: 'Group Buying Pools', path: '/group-buying', badge: 'Tier Savings' },
    { label: 'Smart Deal Lock', path: '/smart-deal-lock', highlight: true },
    { label: 'Customer Dashboard', path: '/customer-dashboard' },
    { label: 'Dealer Portal', path: '/dealer-dashboard', roleBadge: 'Authorized' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-carbon-950/90 backdrop-blur-md border-b border-navy-800/80 transition-all duration-200">
      {/* Top Demo Transparency Banner */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 px-4 py-1.5 border-b border-amber-500/20 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="flex items-center text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping mr-1.5 inline-block"></span>
              [DEMO ARCHITECTURE] Simulated Group-Buying & Reverse Auction Platform
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-red mr-1" />
              Chennai Market Model (TN-01, TN-02, TN-07, TN-09, TN-14)
            </span>
          </div>

          {/* Quick interactive role switcher */}
          <div className="flex items-center space-x-2">
            <span className="text-slate-400 text-[11px] hidden md:inline">Experience Mode:</span>
            <div className="inline-flex p-0.5 rounded-lg bg-carbon-900 border border-white/10 text-xs">
              <button
                onClick={() => setUserRole('customer')}
                className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                  userRole === 'customer'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Customer Mode
              </button>
              <button
                onClick={() => setUserRole('dealer')}
                className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                  userRole === 'dealer'
                    ? 'bg-navy-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Dealer Mode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Demo Badge */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-red to-navy-900 p-0.5 shadow-glow-red/30 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-carbon-950 rounded-[10px] flex items-center justify-center">
                <Car className="w-6 h-6 text-brand-red group-hover:text-brand-redGlow transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-display text-xl font-black tracking-tight text-white flex items-center">
                  AUTO<span className="text-brand-red ml-0.5">MARKETPLACE</span>
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  DEMO DATA
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                CHENNAI AUTO EXCHANGE SIMULATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative group flex items-center space-x-1.5 ${
                  isActive(link.path)
                    ? 'text-white bg-navy-850/80 border border-white/10 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-navy-900/50'
                }`}
              >
                {link.highlight && (
                  <Lock className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                )}
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 rounded-full">
                    {link.badge}
                  </span>
                )}
                {link.roleBadge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold bg-navy-800 text-sky-300 border border-sky-400/30 rounded-full">
                    {link.roleBadge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Notification Bell with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="w-10 h-10 rounded-xl bg-navy-900/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-red/40 transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-glow-red">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Menu */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-3 w-80 rounded-2xl glass-panel-elevated p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 border border-white/15">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h4 className="font-display font-semibold text-white text-sm">Simulated Activity Feed</h4>
                    <span className="text-[10px] text-amber-400 font-mono">Demo Events</span>
                  </div>
                  <div className="mt-3 space-y-2.5 max-h-72 overflow-y-auto pr-1">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="p-2.5 rounded-xl bg-navy-950/60 border border-white/5 hover:border-white/15 transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <p className="font-semibold text-xs text-white">{notif.title}</p>
                          <span className="text-[10px] text-slate-500">{notif.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1 leading-snug">{notif.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 text-center">
                    <Link
                      to="/smart-deal-lock"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-xs text-brand-red hover:underline font-medium"
                    >
                      View Smart Deal Lock Status →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Smart Deal Lock Live Badge CTA */}
            <Link
              to="/smart-deal-lock"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white font-semibold text-sm shadow-glow-red hover:shadow-lg hover:brightness-110 transition-all"
            >
              <Lock className="w-4 h-4" />
              <span>48h Deal Lock</span>
              <span className="text-[11px] bg-black/30 px-2 py-0.5 rounded-md font-mono">₹21.15L (Demo)</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-carbon-950 border-b border-navy-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-navy-900/60 border border-white/5">
            <span className="text-xs text-slate-300">Experience Mode:</span>
            <div className="inline-flex p-0.5 rounded-lg bg-carbon-900 border border-white/10 text-xs">
              <button
                onClick={() => setUserRole('customer')}
                className={`px-3 py-1 rounded font-medium ${
                  userRole === 'customer' ? 'bg-brand-red text-white' : 'text-slate-400'
                }`}
              >
                Customer
              </button>
              <button
                onClick={() => setUserRole('dealer')}
                className={`px-3 py-1 rounded font-medium ${
                  userRole === 'dealer' ? 'bg-navy-600 text-white' : 'text-slate-400'
                }`}
              >
                Dealer
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                  isActive(link.path)
                    ? 'text-white bg-navy-800 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-navy-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/smart-deal-lock"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed text-white font-semibold text-sm shadow-glow-red"
          >
            <Lock className="w-4 h-4" />
            <span>Open 48h Smart Deal Lock (Simulated)</span>
          </Link>
        </div>
      )}
    </header>
  );
}
