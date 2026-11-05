import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

// Custom Hand-Crafted Luxury Fork Vector
function LuxuryForkSvg({ className = '' }) {
  return (
    <svg
      viewBox="0 0 80 260"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="23" y="14" width="3.5" height="56" rx="1.75" />
      <rect x="32" y="14" width="3" height="56" rx="1.5" />
      <rect x="41" y="14" width="3" height="56" rx="1.5" />
      <rect x="49.5" y="14" width="3.5" height="56" rx="1.75" />
      <path d="M19 62 C19 86 33 96 35 116 L36 180 C36 210 32 230 32 244 C32 254 44 254 44 244 C44 230 40 210 40 180 L41 116 C43 96 57 86 57 62 C57 58 53 58 53 62 C53 82 41 88 39 108 L37 108 C35 88 23 82 23 62 C23 58 19 58 19 62 Z" />
    </svg>
  );
}

// Custom Hand-Crafted Luxury Spoon Vector
function LuxurySpoonSvg({ className = '' }) {
  return (
    <svg
      viewBox="0 0 80 260"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M38 12 C21 12 18 36 18 64 C18 90 28 106 34 120 L35 180 C35 210 31 230 31 244 C31 254 45 254 45 244 C45 230 41 210 41 180 L42 120 C48 106 58 90 58 64 C58 36 55 12 38 12 Z M38 20 C50 20 52 38 52 64 C52 86 44 98 38 110 C32 98 24 86 24 64 C24 38 26 20 38 20 Z" />
    </svg>
  );
}

export default function ExperiencePreview({ onOpenReserve: _onOpenReserve, onOpenMenu: _onOpenMenu }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const leftForkRef = useRef(null);
  const rightSpoonRef = useRef(null);
  const centerCrestRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      // Left Fork reveals and glides into position as you scroll
      gsap.fromTo(
        leftForkRef.current,
        {
          x: -70,
          y: 60,
          rotation: -30,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: -10,
          opacity: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center 45%',
            scrub: 0.8,
          },
        }
      );

      // Right Spoon reveals and glides into position as you scroll
      gsap.fromTo(
        rightSpoonRef.current,
        {
          x: 70,
          y: 60,
          rotation: 30,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 10,
          opacity: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center 45%',
            scrub: 0.8,
          },
        }
      );

      // Center Crest crossed fork & spoon appears on scroll
      gsap.fromTo(
        centerCrestRef.current,
        {
          scale: 0.5,
          opacity: 0,
          rotation: -30,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Paradise 27 Culinary Philosophy"
      className="relative z-10 pt-4 xs:pt-6 sm:pt-10 lg:pt-14 pb-10 xs:pb-12 sm:pb-16 lg:pb-20 bg-[#BF2A2E] text-white overflow-hidden"
    >
      {/* Floating Animated Fork SVG (Left) - Appears on Scroll */}
      <div
        ref={leftForkRef}
        className="absolute left-2 xs:left-3 sm:left-6 md:left-10 lg:left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden sm:block will-change-transform"
      >
        <div className="text-white/35 drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
          <LuxuryForkSvg className="w-12 sm:w-16 md:w-20 lg:w-28 h-auto" />
        </div>
      </div>

      {/* Floating Animated Spoon SVG (Right) - Appears on Scroll */}
      <div
        ref={rightSpoonRef}
        className="absolute right-2 xs:right-3 sm:right-6 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden sm:block will-change-transform"
      >
        <div className="text-white/35 drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
          <LuxurySpoonSvg className="w-12 sm:w-16 md:w-20 lg:w-28 h-auto" />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center z-10">
        
        {/* Animated Crossed Fork & Spoon Crest - Appears on Scroll */}
        <div
          ref={centerCrestRef}
          className="mb-2 sm:mb-3 flex items-center justify-center will-change-transform"
        >
          <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-13 sm:h-13 rounded-full bg-black/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/90 shadow-[0_6px_16px_rgba(0,0,0,0.25)]">
            <UtensilsCrossed className="w-4 h-4 xs:w-5 xs:h-5 text-[#FAF7F2]" />
          </div>
        </div>

        {/* Title with BlurText Effect */}
        <div className="w-full flex justify-center mb-5 xs:mb-6 sm:mb-8">
          <BlurText
            text="The Paradise 27 Philosophy"
            effect="blur"
            animateBy="words"
            direction="top"
            staggerFrom="start"
            trigger="view"
            delay={120}
            stepDuration={0.35}
            blur={12}
            distance={40}
            className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight text-center justify-center"
            loop={false}
            focusOnHover={false}
          />
        </div>

        {/* ScrollReveal - Expanded, Larger Size, Justified Text, Pure Background */}
        <div className="w-full max-w-4xl px-1 xs:px-2 sm:px-0">
          <ScrollReveal
            highlightColor=""
            mode="scrub"
            splitBy="words"
            effect="fade"
            stagger={0.04}
            duration={0.8}
            smoothing={0}
            baseOpacity={0.1}
            baseRotation={2}
            baseOffset={0}
            enableBlur={true}
            blurStrength={4}
            containerClassName="my-0 w-full"
            textClassName="font-serif !text-base xs:!text-xl sm:!text-3xl md:!text-4xl lg:!text-[2.6rem] font-medium tracking-tight text-white leading-relaxed xs:leading-relaxed sm:leading-relaxed text-justify [text-align-last:center] select-none break-words"
          >
            Paradise 27 was born from a deep reverence for the elemental fire. Every morning, our seasoned cherrywood embers are rekindled, transforming ancient culinary techniques into an unforgettable dining experience. We do not simply serve food; we craft timeless moments where flavour, warmth, and memory intertwine. From prime Miyazaki A5 wagyu seared over glowing charcoal to line-caught wild king salmon kissed by citrus smoke, each plate honours the provenance of our ingredients. Guided by ancestral hearth traditions and modern gastronomic artistry, our kitchen is a sanctuary for the curious palate. Gather around our table, breathe in the comforting perfume of burning wood, and discover a dining experience where every nuance is curated to linger long after the final course.
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
