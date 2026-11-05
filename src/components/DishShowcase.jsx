import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Flame, Star, Sparkles, Clock, Wine, ChefHat, ArrowUpRight } from 'lucide-react';
import { signatureDishes } from '../data/restaurantData';

export default function DishShowcase({ onSelectDish }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const dish = signatureDishes[activeIdx];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient Crimson to Orange Hearth Glow behind the dish */}
      <div 
        className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#BF2A2E]/30 via-[#FB6218]/25 to-transparent rounded-[2.5rem] blur-2xl opacity-75 pointer-events-none -z-10 animate-pulse-slow" 
        aria-hidden="true"
      />

      {/* Main Showcase Container */}
      <div className="relative bg-[#090909]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-5 backdrop-blur-xl shadow-2xl overflow-hidden group">
        
        {/* Subtle top ember border line */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#FB6218]/60 to-transparent" />

        {/* Hero Image Container with Framer Motion */}
        <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#090909]">
          <AnimatePresence mode="wait">
            <motion.div
              key={dish.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Cinematic Vignette Overlay for dark contrast and readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-black/20 pointer-events-none" />

              {/* Top Floating Badge: Category & Live Ember Indicator */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-[#090909]/80 backdrop-blur-md border border-white/15 text-white">
                  <span className="w-2 h-2 rounded-full bg-[#FB6218] animate-pulse" />
                  {dish.category}
                </span>

                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider text-[#FB6218] bg-[#090909]/80 backdrop-blur-md border border-[#BF2A2E]/40">
                  <Flame className="w-3 h-3 text-[#FB6218]" />
                  <span>Wood-Fired Hearth</span>
                </span>
              </div>

              {/* Price & Rating Badge Top Right */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-2">
                <div className="px-3.5 py-1 rounded-full bg-[#FB6218] text-[#FFFFFF] text-xs sm:text-sm font-bold tracking-wider shadow-glow-orange flex items-center gap-1">
                  <span>{dish.price}</span>
                </div>
              </div>

              {/* Bottom In-Image Info Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-left">
                <div className="flex items-center gap-2 text-xs text-white/70 mb-1">
                  <div className="flex items-center text-[#FB6218]">
                    <Star className="w-3.5 h-3.5 fill-[#FB6218] text-[#FB6218]" />
                    <span className="ml-1 text-white font-medium">{dish.rating}</span>
                  </div>
                  <span className="text-white/40">•</span>
                  <div className="flex items-center gap-1 text-white/80">
                    <Clock className="w-3 h-3 text-[#FB6218]" />
                    <span>{dish.prepTime} prep</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[#FFFFFF] leading-tight drop-shadow-md">
                  {dish.name}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dish Description & Sommelier Notes */}
        <div className="mt-4 px-1 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={dish.id + '-desc'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                {dish.description}
              </p>

              {/* Sommelier & Flavor Notes */}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-white/70">
                  <Wine className="w-3.5 h-3.5 text-[#FB6218]" />
                  <span className="text-white/50 text-[11px] uppercase tracking-wider">Pairing:</span>
                  <span className="text-white font-medium text-[11px] sm:text-xs truncate max-w-[210px] sm:max-w-none">
                    {dish.pairing}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {dish.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Dish Switcher Tabs */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50 flex items-center gap-1.5">
              <ChefHat className="w-3.5 h-3.5 text-[#FB6218]" />
              <span>Signature Creations</span>
            </span>
            <span className="text-[11px] text-white/40 font-mono">
              0{activeIdx + 1} / 0{signatureDishes.length}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {signatureDishes.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative flex items-center gap-2 p-1.5 sm:p-2 rounded-xl text-left transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'bg-white/10 border border-[#FB6218] shadow-[0_0_15px_rgba(251,98,24,0.3)]'
                      : 'bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10'
                  }`}
                  aria-label={`View ${item.name}`}
                  aria-pressed={isActive}
                >
                  {/* Thumbnail */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-[#FB6218]/20 ring-1 ring-[#FB6218] ring-inset" />
                    )}
                  </div>

                  {/* Title & Tag */}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[11px] sm:text-xs font-serif font-medium truncate ${
                        isActive ? 'text-[#FFFFFF]' : 'text-white/70'
                      }`}
                    >
                      {item.name.split(' ')[0]} {item.name.split(' ')[1] || ''}
                    </p>
                    <p className="text-[10px] text-[#FB6218] font-medium tracking-wide">
                      {item.price}
                    </p>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FB6218] shadow-glow-orange"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating Prestige Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#090909]/95 backdrop-blur-xl border border-white/15 shadow-2xl"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#BF2A2E] to-[#FB6218] flex items-center justify-center text-white shadow-glow-crimson flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-widest text-[#FB6218] font-bold">
            Curated Excellence
          </div>
          <div className="text-xs text-white font-serif font-medium">
            Artisanal Charcoal Hearth
          </div>
        </div>
      </motion.div>
    </div>
  );
}
