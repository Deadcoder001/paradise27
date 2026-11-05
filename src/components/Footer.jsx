import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenMenu }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#090909] text-white pt-16 xs:pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Subtle Warm Hearth Ambient Glow (Reliable pure CSS, zero WebGL/canvas glitches) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(191, 42, 46, 0.12) 0%, rgba(251, 98, 24, 0.04) 40%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        
        {/* Top Header: Brand Identity & Tasting Menu Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/Logo.png"
                alt="Paradise 27"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Paradise 27
            </h2>
            
            <p className="mt-3 text-xs xs:text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
              Good Food. Great Moments. An intimate sanctuary where seasoned cherrywood coals, regional heritage, and modern gastronomy converge.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenMenu}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white hover:text-black hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Explore Tasting Menus
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Information Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-12 sm:py-16 border-b border-white/[0.08]">
          
          {/* Column 1: Service Hours */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white font-semibold">
              Hours of Service
            </p>
            <div className="text-xs sm:text-sm text-neutral-300 space-y-1.5 font-normal leading-relaxed">
              <p className="text-white font-bold">Monday — Sunday</p>
              <p className="text-white font-bold">7:00 AM — 10:00 PM</p>
              <p className="text-neutral-400 text-[11px] pt-1">Breakfast, Lunch, High Tea & Dinner</p>
              <p className="text-neutral-400 text-[11px]">Open All 7 Days · Highway Hearth</p>
            </div>
          </div>

          {/* Column 2: Location & Arrival */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white font-semibold">
              Location
            </p>
            <div className="text-xs sm:text-sm text-neutral-300 space-y-1.5 font-light leading-relaxed">
              <p className="text-white font-bold">Nagaon Bypass Road</p>
              <p>National Highway 27, Assam 782002</p>
              <p className="text-neutral-400 pt-1">Dedicated attendant parking for travellers</p>
              <a
                href="https://maps.google.com/?q=Paradise+27+National+Highway+27+Nagaon+Bypass+Assam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors pt-1"
              >
                Directions on Google Maps
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 3: Concierge Desk & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white font-semibold">
              Concierge Desk
            </p>
            <div className="text-xs sm:text-sm space-y-2">
              <a
                href="tel:+919910210318"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <p>+91 99102 10318</p>
              </a>

              <a
                href="https://wa.me/919910210318?text=Hello%20Paradise%2027%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20dining."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <p>WhatsApp Concierge</p>
              </a>

              <a
                href="mailto:paradise27gnpk2@gmail.com"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <p className="break-all xs:break-normal">paradise27gnpk2@gmail.com</p>
              </a>

              {/* Social Channels */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href="https://www.instagram.com/paradise___27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs transition-colors"
                  aria-label="Paradise 27 on Instagram"
                >
                  <svg className="w-3.5 h-3.5 text-[#FB6218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <p>Instagram</p>
                </a>

                <a
                  href="https://www.facebook.com/p/Paradise-27-61581372972762/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs transition-colors"
                  aria-label="Paradise 27 on Facebook"
                >
                  <svg className="w-3.5 h-3.5 text-[#FB6218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <p>Facebook</p>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Sanctuary Experience Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white font-semibold">
              Sanctuary
            </p>
            <ul className="text-xs sm:text-sm text-neutral-400 space-y-2 font-light">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Wood-Fired Philosophy
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Culinary Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Desk
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {CURRENT_YEAR} Paradise 27 Restaurant Group. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors py-1 cursor-pointer"
          >
            <p>Back to top</p>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
