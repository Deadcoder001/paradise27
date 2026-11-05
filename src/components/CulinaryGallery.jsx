import React, { useState, useEffect } from 'react';
import FlexCarousel from './FlexCarousel';

const foodFiles = [
  { file: 'WhatsApp Image 2026-10-26 at 17.44.00.jpeg', title: 'Wood-Fired Prime Cut', subtitle: 'Cherrywood Hearth' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.01.jpeg', title: 'Charred Coastal Delicacy', subtitle: 'Citrus Glaze & Sea Salt' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.01 (1).jpeg', title: 'Artisanal Hearth Plate', subtitle: 'Chef Reserve Selection' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.02.jpeg', title: 'Flame-Seared Medallion', subtitle: 'Living Embers & Truffle' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.03.jpeg', title: 'Hand-Crafted Fire Special', subtitle: 'Ancestral Technique' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.03 (1).jpeg', title: 'Smoked Ember Skewers', subtitle: 'Seasoned Charcoal Roast' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.03 (2).jpeg', title: 'Golden Roasted Masterwork', subtitle: 'Crusted Herbs & Botanicals' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.04.jpeg', title: 'Slow-Simmered Terracotta', subtitle: 'Heirloom Spice Infusion' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.04 (1).jpeg', title: 'Ember Seared Grand Platter', subtitle: 'A5 Wagyu & Wild Harvest' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.05.jpeg', title: 'Hearth-Crisped Specialty', subtitle: 'Woodland Essence' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.05 (1).jpeg', title: 'Flame-Kissed Feast Cut', subtitle: 'Miyazaki Wagyu Hearth' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.06.jpeg', title: 'Tasting Course Creation', subtitle: 'Michelin Selected Fare' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.07.jpeg', title: 'Seasonal Composition', subtitle: 'Fresh Market Harvest' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.08.jpeg', title: 'Gourmet Fire Roasting', subtitle: 'Craft Kitchen Sanctuary' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.09.jpeg', title: 'Imperial Hearth Presentation', subtitle: 'Dining Celebration' },
  { file: 'WhatsApp Image 2026-10-26 at 17.44.11.jpeg', title: 'Fire-Finished Finale', subtitle: 'Paradise 27 Signature' },
];

const items = foodFiles.map((item) => ({
  src: encodeURI(`/images/food/${item.file}`),
  alt: item.title,
  title: item.title,
  subtitle: item.subtitle,
}));

export default function CulinaryGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="gallery"
      aria-label="Paradise 27 Culinary Gallery"
      className="relative z-10 bg-[#BF2A2E] text-white pt-2 xs:pt-4 sm:pt-6 pb-12 xs:pb-16 sm:pb-24 overflow-hidden select-none w-full"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 text-center mb-4 sm:mb-6">
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-5xl font-medium tracking-tight text-white mb-2">
          A Symphony of Fire & Flavour
        </h2>
        <p className="text-xs xs:text-sm sm:text-base text-white/80 max-w-xl mx-auto font-light">
          Drag or swipe to explore our authentic wood-fired masterworks and culinary artistry.
        </p>
      </div>

      {/* Full width container: compact height on phone, full scale on desktop */}
      <div className="w-full relative h-[390px] xs:h-[430px] sm:h-[540px] md:h-[600px] overflow-hidden" style={{ width: '100%' }}>
        <FlexCarousel
          items={items}
          preset="liquid"
          intro="rise"
          cardHeight={isMobile ? 0.6 : 0.72}
          gap={isMobile ? 10 : 16}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={isMobile ? 0.82 : 0.92}
          lensHeight={1.2}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel={false}
        />
      </div>
    </section>
  );
}
