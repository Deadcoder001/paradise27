import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Clock, ChevronRight, UtensilsCrossed } from 'lucide-react';
import { navLinks } from '../data/restaurantData';

export default function Navbar({ onOpenReserve: _onOpenReserve, onOpenMenu, isMenuOpen: _isMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Click-away backdrop on phone when pill is extended */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-transparent pointer-events-auto"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Outer floating wrapper anchoring the centered luxury pill */}
      <header className="fixed top-2 xs:top-3 sm:top-5 inset-x-0 z-50 pointer-events-none flex justify-center px-2 xs:px-3 sm:px-6">
        {/* Main Floating Pill */}
        <div
          className={`pointer-events-auto w-full max-w-5xl sm:max-w-6xl rounded-[26px] xs:rounded-[30px] border px-3.5 xs:px-5 sm:px-7 py-2 sm:py-3 overflow-hidden shadow-none transition-colors duration-150 ${
            scrolled || mobileMenuOpen
              ? 'bg-black/50 backdrop-blur-2xl border-white/15'
              : 'bg-black/35 backdrop-blur-xl border-white/10'
          }`}
        >
          {/* Top Row: Brand Logo, Desktop Links, Actions & Mobile Toggle */}
          <div className="flex items-center justify-between w-full">
            {/* Left: Brand Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="relative flex items-center group focus:outline-none"
                aria-label="Paradise 27 Restaurant - Home"
              >
                <div className="relative">
                  {/* Subtle ambient warm glow on hover */}
                  <div className="absolute -inset-2 rounded-full bg-[#FB6218]/0 group-hover:bg-[#FB6218]/25 blur-lg transition-all duration-500 -z-10" />
                  <img
                    src="/images/Logo.png"
                    alt="Paradise 27 - Authentic Delicacies"
                    className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                  />
                </div>
              </Link>
            </div>

            {/* Centre: Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1.5 sm:gap-2"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isItemActive =
                  location.pathname === link.href ||
                  (link.href !== '/' && location.pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 rounded-full group ${
                      isItemActive
                        ? 'text-white bg-[#FB6218] shadow-[0_0_20px_rgba(251,98,24,0.55)] scale-105'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-1.5">
                      {isItemActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
                      )}
                      <div>{link.name}</div>
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Desktop Actions (Menu Trigger + Hotline) */}
            <div className="hidden md:flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
              <button
                type="button"
                onClick={onOpenMenu}
                className="relative group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] active:scale-[0.97] rounded-full border border-white/10 hover:border-[#FB6218]/50 transition-all duration-300 cursor-pointer"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#FB6218] group-hover:rotate-45 transition-transform duration-300" />
                <div>Menu</div>
              </button>

              <a
                href="tel:+919910210318"
                aria-label="Call Restaurant Concierge"
                className="p-2 sm:p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-white/70 hover:text-white transition-all hover:scale-105 active:scale-95"
                title="Concierge Hotline: +91 99102 10318"
              >
                <Phone className="w-3.5 h-3.5 text-[#FB6218]" />
              </a>
            </div>

            {/* Mobile Actions: Menu Trigger Button */}
            <div className="flex md:hidden items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border active:scale-95 transition-all duration-300 ${
                  mobileMenuOpen
                    ? 'text-white bg-white/[0.12] border-white/20'
                    : 'text-white/90 bg-white/[0.06] hover:bg-white/[0.12] border-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-3.5 h-3.5 text-[#FB6218]" />
                    <div className="text-[11px]">Close</div>
                  </>
                ) : (
                  <>
                    <Menu className="w-3.5 h-3.5 text-[#FB6218]" />
                    <div className="text-[11px]">Menu</div>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Extended Content inside the Same Transparent Pill on Phone */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="extended-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-3 pb-1 border-t border-white/10 mt-2.5 flex flex-col space-y-3">
                  
                  {/* Subtle Service Hours Indicator */}
                  <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] text-white/50 px-1">
                    <div className="uppercase tracking-[0.2em] font-medium">Paradise 27 Experience</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FB6218] animate-pulse" />
                      <div>Monday to Sunday · 7:00 AM – 10:00 PM</div>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-1">
                    {navLinks.map((link) => {
                      const isItemActive =
                        location.pathname === link.href ||
                        (link.href !== '/' && location.pathname.startsWith(link.href));

                      return (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between text-sm xs:text-base font-serif tracking-wider transition-colors py-2 px-3 rounded-xl ${
                            isItemActive
                              ? 'text-[#FB6218] bg-white/[0.08] font-semibold'
                              : 'text-white/80 hover:text-[#FB6218] hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isItemActive && <div className="w-1.5 h-1.5 rounded-full bg-[#FB6218]" />}
                            <div>{link.name}</div>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 ${isItemActive ? 'text-[#FB6218]' : 'text-white/30'}`} />
                        </Link>
                      );
                    })}
                  </div>

                  {/* Quick CTAs inside Extended Pill */}
                  <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenMenu?.();
                      }}
                      className="w-full py-2.5 text-xs font-semibold uppercase tracking-widest text-white/90 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#FB6218]" />
                      <div>Explore Tasting Menu (PDF)</div>
                    </button>

                    {/* Hotline Direct Link */}
                    <div className="pt-1 flex items-center justify-between text-[11px] text-white/50 px-1">
                      <a href="tel:+919910210318" className="flex items-center gap-1.5 hover:text-[#FB6218] transition-colors">
                        <Phone className="w-3 h-3 text-[#FB6218]" />
                        <div>+91 99102 10318</div>
                      </a>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#FB6218]" />
                        <div>Monday to Sunday</div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
