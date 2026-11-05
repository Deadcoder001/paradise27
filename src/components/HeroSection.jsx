import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Sparkles, Flame, Star, ChevronsLeftRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ onOpenReserve: _onOpenReserve, onOpenMenu }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const trayWrapperRef = useRef(null);
  const emptyTrayRef = useRef(null);
  const foodTrayRef = useRef(null);
  const fishCurryRef = useRef(null);
  const okraRef = useRef(null);
  const textContentRef = useRef(null);

  // Mobile Platter Comparison Bar State & Ref
  const [comparePos, setComparePos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const mobilePlatterRef = useRef(null);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    if (mobilePlatterRef.current) {
      const rect = mobilePlatterRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95);
      setComparePos(pct);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      if (!mobilePlatterRef.current) return;
      const rect = mobilePlatterRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95);
      setComparePos(pct);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const mm = gsap.matchMedia();

    // Desktop & Tablet GSAP Scroll Animation
    mm.add('(min-width: 640px)', () => {
      gsap.set(fishCurryRef.current, {
        x: '-45vw',
        opacity: 1,
        rotation: -20,
      });

      gsap.set(okraRef.current, {
        x: '45vw',
        opacity: 1,
        rotation: 20,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=70%',
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        fishCurryRef.current,
        {
          x: 0,
          rotation: 0,
          ease: 'power2.out',
          duration: 0.45,
        },
        0
      );

      tl.to(
        okraRef.current,
        {
          x: 0,
          rotation: 0,
          ease: 'power2.out',
          duration: 0.45,
        },
        0
      );

      tl.to(
        trayWrapperRef.current,
        {
          rotation: 180,
          ease: 'power1.out',
          duration: 0.6,
        },
        0
      );

      tl.to(
        foodTrayRef.current,
        {
          opacity: 1,
          ease: 'power1.inOut',
          duration: 0.6,
        },
        0
      );

      tl.to(
        emptyTrayRef.current,
        {
          opacity: 0,
          ease: 'power1.inOut',
          duration: 0.6,
        },
        0
      );
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Paradise 27 Fine Dining"
      className="relative z-30 min-h-0 sm:min-h-screen bg-[#BF2A2E] text-white flex flex-col justify-start sm:justify-between pt-16 xs:pt-20 sm:pt-36 lg:pt-40 pb-6 sm:pb-0 overflow-x-clip overflow-y-visible"
    >

      <div
        ref={textContentRef}
        className="relative max-w-5xl mx-auto px-3.5 xs:px-5 sm:px-6 lg:px-8 w-full z-10 text-center will-change-transform pt-1 xs:pt-2 sm:pt-0 mt-1 xs:mt-2 sm:mt-4"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-2.5 xs:space-y-3 sm:space-y-5"
        >

          <div className="flex flex-col items-center w-full">
            <h1 className="font-serif leading-[1.1] text-balance">
              <BlurText
                text="Good Food. Great Moments."
                effect="blur"
                animateBy="words"
                direction="top"
                staggerFrom="start"
                trigger="view"
                delay={200}
                stepDuration={0.35}
                blur={10}
                distance={50}
                onAnimationComplete={handleAnimationComplete}
                className="font-serif text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium tracking-tight text-white justify-center text-center"
                loop={false}
                loopDelay={2}
                focusOnHover={false}
              />
              <BlurText
                text="Paradise 27."
                effect="blur"
                animateBy="words"
                direction="top"
                staggerFrom="start"
                trigger="view"
                delay={350}
                stepDuration={0.35}
                blur={10}
                distance={50}
                onAnimationComplete={handleAnimationComplete}
                className="font-serif text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold text-white justify-center text-center mt-1 sm:mt-2"
                loop={false}
                loopDelay={2}
                focusOnHover={false}
              />
            </h1>
          </div>

          <motion.div variants={itemVariants}>
            <p className="text-xs xs:text-sm sm:text-base md:text-xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed px-1 sm:px-0">
              Where ancestral wood-fired cooking meets modern gastronomy. Discover exceptional flavours, prime cuts kissed by cherrywood embers, and unforgettable moments around the table.
            </p>
          </motion.div>

          {/* Key About Us Highlights Strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-4 text-[10px] xs:text-[11px] sm:text-xs text-white/90 pt-0.5 sm:pt-1"
          >
            <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#FB6218]" />
              <p className="font-medium">Selected Michelin Guide 2026</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/15">
              <Flame className="w-3.5 h-3.5 text-[#FB6218]" />
              <p className="font-medium">Wood-Fired & Ember Service</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/15">
              <Star className="w-3.5 h-3.5 fill-[#FB6218] text-[#FB6218]" />
              <p className="font-medium">4.9 ★ (1.4k Reviews)</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-1 xs:pt-2">
            <button
              type="button"
              onClick={onOpenMenu}
              id="hero-explore-menu-btn"
              className="group relative inline-flex items-center justify-center gap-2.5 xs:gap-3.5 px-6 xs:px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#FAF7F2] text-[#161412] font-medium border border-[#D4AF37]/50 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.4)_inset] hover:shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_35px_rgba(255,230,175,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 ease-out transition-transform pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#161412]/5 group-hover:bg-[#161412]/10 transition-colors duration-300">
                <UtensilsCrossed className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#161412] group-hover:rotate-12 transition-transform duration-300" />
              </div>

              <p className="relative font-serif text-xs xs:text-sm sm:text-base font-semibold tracking-wider text-[#161412]">
                Explore Our Menu
              </p>
              <ArrowRight className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#161412]/60 group-hover:text-[#161412] group-hover:translate-x-1.5 transition-all duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile View (< 640px): Interactive Vertical Compare Bar Platter (Zero Scroll Lag) */}
      <div className="sm:hidden relative w-full flex flex-col items-center justify-center mt-3 xs:mt-5 sm:mt-0 z-40 select-none pb-3 pt-0">
        <div className="relative flex justify-center items-end overflow-visible w-full max-w-[320px] xs:max-w-[360px] mx-auto px-4">
          
          {/* Left Side Dish: Spicy Fish Curry (Appears as it is) */}
          <div className="absolute -left-2 xs:-left-3 bottom-[16%] xs:bottom-[18%] z-30 pointer-events-none w-[95px] xs:w-[115px] aspect-square">
            <div className="absolute inset-2 rounded-full bg-black/60 blur-xl -z-10" aria-hidden="true" />
            <img
              src="/images/Spicy_Fish_Curry.png"
              alt="Paradise 27 Spicy Fish Curry"
              className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.65)] select-none"
              draggable={false}
            />
          </div>

          {/* Right Side Dish: Sautéed Okra (Appears as it is) */}
          <div className="absolute -right-2 xs:-right-3 bottom-[16%] xs:bottom-[18%] z-30 pointer-events-none w-[95px] xs:w-[115px] aspect-square">
            <div className="absolute inset-2 rounded-full bg-black/60 blur-xl -z-10" aria-hidden="true" />
            <img
              src="/images/Terracotta_Bowl_of_Sautéed_Okra.png"
              alt="Paradise 27 Terracotta Bowl of Sautéed Okra"
              className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.65)] select-none"
              draggable={false}
            />
          </div>

          {/* Centre Platter: Interactive Compare Bar Container */}
          <div
            ref={mobilePlatterRef}
            onPointerDown={handlePointerDown}
            className="relative z-40 w-[240px] xs:w-[280px] aspect-square rounded-full cursor-ew-resize touch-none select-none overflow-hidden will-change-transform shadow-[0_25px_45px_rgba(0,0,0,0.65)]"
            style={{ WebkitTouchCallout: 'none' }}
          >
            {/* Ambient Backing Glow */}
            <div className="absolute inset-4 rounded-full bg-black/60 blur-2xl -z-10 pointer-events-none" aria-hidden="true" />

            {/* Base Layer: Brushed Brass Serving Tray */}
            <img
              src="/images/Brushed Brass Serving Tray.png"
              alt="Paradise 27 Brushed Brass Serving Tray"
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
              draggable={false}
            />

            {/* Clipped Top Layer: Culinary Feast Platter */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none"
              style={{
                clipPath: `inset(0 0 0 ${comparePos}%)`,
                WebkitClipPath: `inset(0 0 0 ${comparePos}%)`,
              }}
            >
              <img
                src="/images/brushed_brass_tray_food.png"
                alt="Paradise 27 Culinary Feast Platter"
                className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
                draggable={false}
              />
            </div>

            {/* Clean Vertical Comparison Line with Centered Circle Drag Button */}
            <div
              className="absolute top-0 bottom-0 w-[1.5px] bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.7)] z-50 pointer-events-none"
              style={{ left: `${comparePos}%` }}
            >
              {/* Small Circle Drag Button in the Centre */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white text-neutral-900 border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.5),0_0_12px_rgba(255,255,255,0.7)] flex items-center justify-center pointer-events-none">
                <ChevronsLeftRight className="w-3.5 h-3.5 text-neutral-800" />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Desktop / Tablet View with Cinematic ScrollTrigger */}
      <div className="hidden sm:flex relative w-full justify-center items-end mt-1 xs:mt-2 sm:mt-4 z-40 pointer-events-none overflow-visible">
        <div className="relative flex justify-center items-end overflow-visible">


          <div
            ref={fishCurryRef}
            className="absolute right-[calc(100%+6px)] xs:right-[calc(100%+12px)] sm:right-[calc(100%+24px)] lg:right-[calc(100%+32px)] bottom-[18%] xs:bottom-[22%] sm:bottom-[24%] md:bottom-[28%] lg:bottom-[30%] z-40 pointer-events-none will-change-transform"
          >
            <div className="relative w-[95px] xs:w-[125px] sm:w-[220px] md:w-[290px] lg:w-[360px] xl:w-[410px] aspect-square">

              <div
                className="absolute inset-2 sm:inset-4 rounded-full bg-black/60 blur-xl sm:blur-2xl -z-10"
                aria-hidden="true"
              />
              <img
                src="/images/Spicy_Fish_Curry.png"
                alt="Paradise 27 Spicy Fish Curry"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] select-none"
              />
            </div>
          </div>


          <div
            ref={okraRef}
            className="absolute left-[calc(100%+6px)] xs:left-[calc(100%+12px)] sm:left-[calc(100%+24px)] lg:left-[calc(100%+32px)] bottom-[18%] xs:bottom-[22%] sm:bottom-[24%] md:bottom-[28%] lg:bottom-[30%] z-40 pointer-events-none will-change-transform"
          >
            <div className="relative w-[95px] xs:w-[125px] sm:w-[220px] md:w-[290px] lg:w-[360px] xl:w-[410px] aspect-square">

              <div
                className="absolute inset-2 sm:inset-4 rounded-full bg-black/60 blur-xl sm:blur-2xl -z-10"
                aria-hidden="true"
              />
              <img
                src="/images/Terracotta_Bowl_of_Sautéed_Okra.png"
                alt="Paradise 27 Terracotta Bowl of Sautéed Okra"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] select-none"
              />
            </div>
          </div>


          <div
            ref={trayWrapperRef}
            className="relative z-40 w-[260px] xs:w-[320px] sm:w-[480px] md:w-[600px] lg:w-[720px] xl:w-[800px] aspect-square translate-y-0 pointer-events-auto origin-center will-change-transform overflow-visible"
          >

            <div
              className="absolute inset-6 sm:inset-8 rounded-full bg-black/60 blur-2xl sm:blur-3xl -z-10 pointer-events-none"
              aria-hidden="true"
            />


            <img
              ref={emptyTrayRef}
              src="/images/Brushed Brass Serving Tray.png"
              alt="Paradise 27 Brushed Brass Serving Tray"
              className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)] select-none pointer-events-none will-change-transform"
            />

            <img
              ref={foodTrayRef}
              src="/images/brushed_brass_tray_food.png"
              alt="Paradise 27 Culinary Feast Platter"
              className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)] select-none pointer-events-none opacity-0 will-change-transform"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
