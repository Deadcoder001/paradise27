import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const phone = '919910210318';
  const defaultMessage = 'Hello Paradise 27 Concierge, I would like to inquire about a table reservation.';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Pill on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-white/15 text-white text-xs font-medium tracking-wide shadow-2xl pointer-events-none whitespace-nowrap"
          >
            Chat with Concierge
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Paradise 27 Concierge on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_36px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black"
      >
        {/* Subtle breathing ripple glow */}
        <div
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
          style={{ animationDuration: '3s' }}
          aria-hidden="true"
        />

        {/* WhatsApp Official Vector Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.585.706 5.107 2.046 7.322L2 30l6.873-2.002a13.93 13.93 0 0 0 7.129 1.956h.006c7.72 0 14-6.28 14-14.002 0-3.742-1.458-7.26-4.103-9.905A13.93 13.93 0 0 0 16.002 2zm8.17 19.866c-.34.954-1.986 1.838-2.756 1.953-.728.109-1.637.155-2.65-.172-.613-.197-1.4-.457-2.42-.9-4.29-1.862-7.078-6.23-7.294-6.516-.213-.287-1.74-2.316-1.74-4.417 0-2.102 1.1-3.136 1.49-3.563.39-.427.85-.534 1.134-.534.284 0 .567.003.816.015.263.013.616-.1.964.735.358.86 1.22 2.977 1.326 3.193.107.216.178.47.036.755-.142.285-.213.463-.426.712-.213.25-.448.558-.64.748-.213.214-.436.446-.188.872.248.427 1.104 1.82 2.37 2.948 1.63 1.452 3.003 1.902 3.43 2.115.426.214.674.178.922-.107.25-.285 1.065-1.244 1.35-1.67.283-.427.567-.356.957-.214.39.143 2.482 1.173 2.908 1.386.426.213.71.32.816.498.106.177.106 1.03-.234 1.984z" />
        </svg>
      </a>
    </div>
  );
}

