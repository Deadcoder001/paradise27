import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ExperiencePreview from '../components/ExperiencePreview';
import CulinaryGallery from '../components/CulinaryGallery';
import WhatsAppReservation from '../components/WhatsAppReservation';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';

export default function HomePage({ onOpenReserve, onOpenMenu }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="w-full">
      {/* Seamless Crimson Section Block */}
      <div className="relative bg-[#BF2A2E] overflow-x-clip overflow-y-visible">
        {/* Hero Section Container in top stacking layer (z-30) */}
        <div className="relative z-30 overflow-x-clip overflow-y-visible">
          <HeroSection
            onOpenReserve={onOpenReserve}
            onOpenMenu={onOpenMenu}
          />
        </div>

        {/* Experience Section in lower stacking layer (z-10) */}
        <div className="relative z-10">
          <ExperiencePreview
            onOpenReserve={onOpenReserve}
            onOpenMenu={onOpenMenu}
          />
        </div>

        {/* Liquid FlexCarousel Gallery Section (z-10) */}
        <div className="relative z-10">
          <CulinaryGallery />
        </div>
      </div>

      {/* WhatsApp Table Concierge Reservation Section (z-10) */}
      <div className="relative z-10">
        <WhatsAppReservation />
      </div>

      {/* Guest Reviews & Critical Acclaim Section (z-10) */}
      <div className="relative z-10">
        <ReviewsSection />
      </div>

      {/* Frequently Asked Questions Section (z-10) */}
      <div className="relative z-10">
        <FAQSection />
      </div>
    </div>
  );
}

