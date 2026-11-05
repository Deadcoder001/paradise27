import React, { useEffect, useRef } from 'react';

export default function ReviewsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically inject the SociableKIT script when the component mounts and the DOM node is present
    const scriptSrc = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    
    // Remove any previously inserted SociableKIT script so it executes fresh against the mounted DOM element
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true;
    document.body.appendChild(script);

    // Continuous guard to hide watermark, remove boxes, and remove next/previous buttons
    const cleanupWidgetDOM = () => {
      // 1. Hide SociableKIT watermark links and branding
      const watermarks = document.querySelectorAll(
        '.sk-ww-google-reviews a[href*="sociablekit"], .sk-ww-google-reviews [class*="branding"], .sk-ww-google-reviews .sk-powered-by, .sk-ww-google-reviews [class*="powered-by"], .sk-ww-google-reviews [class*="attribution"], a[href*="sociablekit"]'
      );
      watermarks.forEach((el) => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.height = '0';
        el.style.overflow = 'hidden';
        el.style.pointerEvents = 'none';
      });

      // 2. Hide Next and Previous buttons
      const navButtons = document.querySelectorAll(
        '.sk-ww-google-reviews .slick-prev, .sk-ww-google-reviews .slick-next, .sk-ww-google-reviews .swiper-button-prev, .sk-ww-google-reviews .swiper-button-next, .sk-ww-google-reviews [class*="prev"], .sk-ww-google-reviews [class*="next"], .sk-ww-google-reviews [aria-label*="Next"], .sk-ww-google-reviews [aria-label*="Previous"]'
      );
      navButtons.forEach((el) => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.pointerEvents = 'none';
      });

      // 3. Remove boxes, shadows, and borders from review cards
      const reviewCards = document.querySelectorAll(
        '.sk-ww-google-reviews [class*="card"], .sk-ww-google-reviews [class*="item"]'
      );
      reviewCards.forEach((el) => {
        el.style.boxShadow = 'none';
        el.style.border = 'none';
        el.style.backgroundColor = 'transparent';
      });

      // 4. Remove any separator lines or dividers
      const dividers = document.querySelectorAll(
        '.sk-ww-google-reviews hr, .sk-ww-google-reviews [class*="divider"], .sk-ww-google-reviews [class*="separator"], .sk-ww-google-reviews [class*="line"]'
      );
      dividers.forEach((el) => {
        el.style.display = 'none';
        el.style.border = 'none';
      });
    };

    const interval = setInterval(cleanupWidgetDOM, 250);

    return () => {
      clearInterval(interval);
      script.remove();
    };
  }, []);

  return (
    <section
      id="reviews"
      aria-label="Google Reviews"
      className="relative z-10 bg-[#090909] text-white pt-12 xs:pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#FB6218] font-semibold mb-1.5">
            Google Reviews
          </p>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl font-medium tracking-tight text-white">
            Reflections from the Hearth
          </h2>
        </div>

        {/* Live SociableKIT Google Reviews Embed */}
        <div className="w-full min-h-[420px]">
          <div
            ref={containerRef}
            className="sk-ww-google-reviews"
            data-embed-id="25725858"
          />
        </div>

      </div>
    </section>
  );
}
