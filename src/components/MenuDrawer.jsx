import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  UtensilsCrossed,
  Coffee,
  Download,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  Users,
  Phone,
  MessageCircle,
  AlertCircle,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  try {
    const [year, month, day] = dateStr.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
};

const formatTime = (timeStr) => {
  if (!timeStr) return '';
  try {
    const [hours, minutes] = timeStr.split(':');
    let h = parseInt(hours, 10);
    const m = minutes || '00';
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${m} ${ampm}`;
  } catch {
    return timeStr;
  }
};

export default function MenuDrawer({ isOpen, onClose, onOpenReserve }) {
  const [activeMenuId, setActiveMenuId] = useState('main'); // 'main' | 'breakfast' | 'reserve'

  // WhatsApp Reservation Form State (Exact match to ContactPage)
  const [guestName, setGuestName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [seatingTime, setSeatingTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [formError, setFormError] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const menus = [
    {
      id: 'main',
      title: 'Main Dining Menu',
      shortTitle: 'Main Menu',
      subtitle: 'Wood-Fired Hearth, Prime Steaks, Seafood & Signatures',
      hours: 'Lunch & Dinner · 12:00 PM – 10:00 PM',
      icon: UtensilsCrossed,
      pdfPath: '/Menu/main-menu.pdf',
      downloadName: 'Paradise27-Main-Menu.pdf',
    },
    {
      id: 'breakfast',
      title: 'Breakfast & Morning Fare',
      shortTitle: 'Breakfast',
      subtitle: 'Artisanal Bakes, Specialty Roasts & Morning Specialties',
      hours: 'Morning Service · 7:00 AM – 11:30 AM',
      icon: Coffee,
      pdfPath: '/Menu/breakfast-menu.pdf',
      downloadName: 'Paradise27-Breakfast-Menu.pdf',
    },
  ];

  const currentMenu = menus.find((m) => m.id === activeMenuId) || menus[0];

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    setFormError('');

    if (!guestName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!reservationDate) {
      setFormError('Please select your reservation date.');
      return;
    }

    if (!seatingTime) {
      setFormError('Please enter your preferred arrival time.');
      return;
    }

    const guestsNum = parseInt(guestCount, 10);
    if (!guestCount || isNaN(guestsNum) || guestsNum < 1) {
      setFormError('Please enter the number of guests (at least 1).');
      return;
    }

    const formattedDate = formatDate(reservationDate);
    const formattedTime = formatTime(seatingTime);

    const message = `🍽️ *Paradise 27 — Table Reservation Request*

Hello Concierge Desk,
• *Guest Name:* ${guestName.trim()}
${contactPhone.trim() ? `• *Contact Phone:* ${contactPhone.trim()}` : ''}
• *Reservation Date:* ${formattedDate}
• *Arrival Time:* ${formattedTime}
• *Number of Guests:* ${guestsNum} ${guestsNum === 1 ? 'Guest' : 'Guests'}
${specialNotes.trim() ? `• *Special Notes / Requests:* ${specialNotes.trim()}` : ''}

Please confirm table availability for this reservation. Thank you!`;

    const url = `https://wa.me/919910210318?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex flex-col justify-end items-center pointer-events-none">
          {/* Smooth dark backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 pointer-events-auto"
          />

          {/* Menu Drawer Container: Fixed to the bottom edge */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="pointer-events-auto relative w-full max-w-5xl h-[90vh] xs:h-[92vh] sm:h-[88vh] max-h-[880px] bg-[#090909] border-t border-x border-b-0 border-white/15 rounded-t-[24px] sm:rounded-t-[32px] rounded-b-none shadow-[0_-20px_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden z-10"
          >
            {/* Top bottom-sheet drag handle notch */}
            <div className="w-12 h-1 rounded-full bg-white/20 mx-auto mt-2.5 mb-1.5 flex-shrink-0" />

            {/* Top Amber Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#BF2A2E] via-[#FB6218] to-[#BF2A2E]" />

            {/* Modal Header */}
            <div className="px-4 xs:px-6 sm:px-8 py-3 sm:py-3.5 border-b border-white/10 flex items-center justify-between gap-3 bg-white/[0.02]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 xs:px-3 py-0.5 rounded-full text-[9px] xs:text-[10px] font-semibold uppercase tracking-widest text-[#FB6218] bg-white/5 border border-[#BF2A2E]/30 mb-1">
                  <Sparkles className="w-3 h-3 text-[#FB6218]" />
                  <div>Paradise 27 • Curated Menus & Dining</div>
                </div>
                <h2 className="font-serif text-lg xs:text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {activeMenuId === 'reserve' ? 'Reserve a Table at Paradise 27' : 'Our Menus & Culinary Offerings'}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 xs:p-2.5 rounded-full text-white/70 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Menu Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="px-3 xs:px-6 sm:px-8 py-2.5 bg-black/40 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3">
              {/* Tabs */}
              <div className="flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10 w-full md:w-auto">
                {menus.map((menu) => {
                  const Icon = menu.icon;
                  const isActive = activeMenuId === menu.id;
                  return (
                    <button
                      key={menu.id}
                      type="button"
                      onClick={() => setActiveMenuId(menu.id)}
                      className={`flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-full text-[11px] xs:text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#FB6218] text-white shadow-glow-orange'
                          : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <div className="hidden xs:inline">{menu.title}</div>
                      <div className="xs:hidden">{menu.shortTitle}</div>
                    </button>
                  );
                })}

                {/* Reserve a Table Tab */}
                <button
                  type="button"
                  onClick={() => setActiveMenuId('reserve')}
                  className={`flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-full text-[11px] xs:text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeMenuId === 'reserve'
                      ? 'bg-white text-black font-bold shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#FB6218]" />
                  <div>Reserve a Table</div>
                </button>
              </div>

              {/* Quick Actions (PDF tab only) */}
              {activeMenuId !== 'reserve' && (
                <div className="flex items-center gap-2 w-full md:w-auto justify-between sm:justify-end">
                  <a
                    href={currentMenu.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial justify-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white/90 hover:text-white text-[11px] xs:text-xs font-medium uppercase tracking-wider transition-colors"
                    title="Open menu PDF in full tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#FB6218]" />
                    <div>Fullscreen</div>
                  </a>

                  <a
                    href={currentMenu.pdfPath}
                    download={currentMenu.downloadName}
                    className="flex-1 sm:flex-initial justify-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white/90 hover:text-white text-[11px] xs:text-xs font-medium uppercase tracking-wider transition-colors"
                    title="Download menu PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-[#FB6218]" />
                    <div>Download</div>
                  </a>
                </div>
              )}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative bg-[#090909] p-2 xs:p-3 sm:p-5 overflow-y-auto flex flex-col">
              {activeMenuId === 'reserve' ? (
                /* ========================================================= */
                /* EXACT TABLE RESERVATION FORM (MATCHING ContactPage.jsx)   */
                /* ========================================================= */
                <div className="w-full max-w-4xl mx-auto py-2 px-1 xs:px-2">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
                    
                    {/* Left Column: Hours & Highway Concierge Card */}
                    <div className="lg:col-span-4 p-4 xs:p-5 rounded-2xl bg-white/[0.03] border border-white/15 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-white mb-3">
                          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <Clock className="w-3.5 h-3.5 text-[#FB6218]" />
                          </div>
                          <p className="text-xs uppercase tracking-wider font-bold">Hours of Service</p>
                        </div>
                        <div className="text-xs space-y-2.5 font-medium text-white/80">
                          <div className="flex items-center justify-between pb-2 border-b border-white/10">
                            <p className="text-white font-bold">Monday — Sunday</p>
                            <p className="text-white font-bold">7:00 AM — 10:00 PM</p>
                          </div>
                          <div className="flex items-center justify-between pb-2 border-b border-white/10">
                            <p>Breakfast Fare</p>
                            <p className="text-white font-semibold">7:00 AM — 11:30 AM</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p>Lunch & Dinner</p>
                            <p className="text-white font-semibold">12:00 PM — 10:00 PM</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                        <div className="flex items-center gap-1.5 text-[11px] text-amber-200/90 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                          <p>Reservations Prioritized</p>
                        </div>
                        <p className="text-[10px] text-white/60">
                          Highway stop on NH 27 with dedicated attendant parking for travellers.
                        </p>
                        <a
                          href="tel:+919910210318"
                          className="mt-1 flex items-center gap-2 text-xs font-bold text-white hover:text-[#FB6218] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#FB6218]" />
                          <p>Direct Desk: +91 99102 10318</p>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Exact Table Reservation Form */}
                    <div className="lg:col-span-8 p-4 xs:p-6 rounded-2xl bg-black/40 border border-white/20 shadow-xl">
                      <div className="mb-4">
                        <h3 className="font-serif text-xl xs:text-2xl font-bold text-white mb-1">
                          Reserve a Table
                        </h3>
                        <p className="text-xs xs:text-sm text-white/85 font-medium">
                          Enter your reservation details manually below. We confirm all bookings instantly via WhatsApp.
                        </p>
                      </div>

                      {formError && (
                        <div className="mb-4 p-3 rounded-xl bg-black/50 border border-amber-400/80 text-amber-200 text-xs sm:text-sm font-bold flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                          <p>{formError}</p>
                        </div>
                      )}

                      <form onSubmit={handleWhatsAppInquiry} className="space-y-3.5 sm:space-y-4">
                        {/* 1. Guest Full Name */}
                        <div className="w-full">
                          <label htmlFor="menu-drawer-name" className="flex items-center h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5">
                            Guest Full Name *
                          </label>
                          <input
                            id="menu-drawer-name"
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={guestName}
                            onChange={(e) => {
                              setGuestName(e.target.value);
                              if (formError) setFormError('');
                            }}
                            className="w-full h-12 block py-0 px-3.5 sm:px-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 text-base sm:text-sm font-bold focus:outline-none focus:border-white transition-colors box-border"
                          />
                        </div>

                        {/* 2. Manual Date & Arrival Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-start">
                          {/* Reservation Date */}
                          <div className="w-full min-w-0">
                            <label htmlFor="menu-drawer-date" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                              <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                              Reservation Date *
                            </label>
                            <input
                              id="menu-drawer-date"
                              type="date"
                              required
                              min={today}
                              value={reservationDate}
                              onChange={(e) => {
                                setReservationDate(e.target.value);
                                if (formError) setFormError('');
                              }}
                              style={{ colorScheme: 'dark' }}
                              className="w-full h-12 block py-0 px-3.5 sm:px-4 bg-black/30 border border-white/20 rounded-xl text-white text-base sm:text-sm font-bold focus:outline-none focus:border-white transition-colors cursor-pointer box-border"
                            />
                            <div className="min-h-[18px] mt-1.5 flex items-center">
                              {reservationDate ? (
                                <p className="text-[11px] text-amber-200/90 font-bold leading-tight">
                                  Selected: {formatDate(reservationDate)}
                                </p>
                              ) : (
                                <p className="text-[10px] text-white/50 font-medium leading-tight">
                                  Select date from today onwards
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Arrival Time */}
                          <div className="w-full min-w-0">
                            <label htmlFor="menu-drawer-time" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                              <Clock className="w-3.5 h-3.5 text-white shrink-0" />
                              Arrival Time *
                            </label>
                            <input
                              id="menu-drawer-time"
                              type="time"
                              required
                              value={seatingTime}
                              onChange={(e) => {
                                setSeatingTime(e.target.value);
                                if (formError) setFormError('');
                              }}
                              style={{ colorScheme: 'dark' }}
                              className="w-full h-12 block py-0 px-3.5 sm:px-4 bg-black/30 border border-white/20 rounded-xl text-white text-base sm:text-sm font-bold focus:outline-none focus:border-white transition-colors cursor-pointer box-border"
                            />
                            <div className="min-h-[18px] mt-1.5 flex items-center">
                              {seatingTime ? (
                                <p className="text-[11px] text-amber-200/90 font-bold leading-tight">
                                  Arrival: {formatTime(seatingTime)}
                                </p>
                              ) : (
                                <p className="text-[10px] text-white/50 font-medium leading-tight">
                                  Service: 7:00 AM — 10:00 PM
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* 3. Manual Number of Guests & Contact Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-start">
                          {/* Number of Guests */}
                          <div className="w-full min-w-0">
                            <label htmlFor="menu-drawer-guests" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                              <Users className="w-3.5 h-3.5 text-white shrink-0" />
                              Number of Guests *
                            </label>
                            <input
                              id="menu-drawer-guests"
                              type="number"
                              inputMode="numeric"
                              min="1"
                              max="150"
                              required
                              placeholder="e.g. 2, 4, 8"
                              value={guestCount}
                              onChange={(e) => {
                                setGuestCount(e.target.value);
                                if (formError) setFormError('');
                              }}
                              className="w-full h-12 block py-0 px-3.5 sm:px-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 text-base sm:text-sm font-bold focus:outline-none focus:border-white transition-colors box-border"
                            />
                          </div>

                          {/* Contact Phone */}
                          <div className="w-full min-w-0">
                            <label htmlFor="menu-drawer-phone" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                              Contact Phone (Optional)
                            </label>
                            <input
                              id="menu-drawer-phone"
                              type="tel"
                              inputMode="tel"
                              placeholder="e.g. +91 98765 43210"
                              value={contactPhone}
                              onChange={(e) => setContactPhone(e.target.value)}
                              className="w-full h-12 block py-0 px-3.5 sm:px-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 text-base sm:text-sm font-bold focus:outline-none focus:border-white transition-colors box-border"
                            />
                          </div>
                        </div>

                        {/* 4. Special Requests / Notes */}
                        <div>
                          <label htmlFor="menu-drawer-notes" className="block text-xs uppercase tracking-wider text-white font-bold mb-1.5">
                            Special Requests / Dietary Notes (Optional)
                          </label>
                          <textarea
                            id="menu-drawer-notes"
                            rows={2}
                            placeholder="E.g., Swargadeo Thali, family table, celebration, baby chair..."
                            value={specialNotes}
                            onChange={(e) => setSpecialNotes(e.target.value)}
                            className="w-full px-4 py-2.5 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 text-base sm:text-sm font-medium focus:outline-none focus:border-white transition-colors resize-none"
                          />
                        </div>

                        {/* 5. Submit Button */}
                        <div className="pt-1.5">
                          <button
                            type="submit"
                            className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-neutral-100 text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.99] cursor-pointer"
                          >
                            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                            <div>Send Reservation via WhatsApp</div>
                            <ArrowRight className="w-4 h-4 text-black stroke-[2.5] shrink-0" />
                          </button>
                          <p className="text-[11px] text-white/60 font-medium text-center mt-2">
                            Direct confirmation with Paradise 27 host desk on WhatsApp
                          </p>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              ) : (
                /* ========================================================= */
                /* EMBEDDED LIVE PDF VIEWER                                  */
                /* ========================================================= */
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#090909] flex flex-col">
                  <iframe
                    key={currentMenu.pdfPath}
                    src={`${currentMenu.pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full flex-1 border-0 rounded-2xl"
                    title={currentMenu.title}
                  />

                  {/* Mobile notice bar if iframe is not supported by mobile browser */}
                  <div className="sm:hidden p-3 bg-white/[0.03] border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                    <div className="truncate mr-2">{currentMenu.title} (PDF)</div>
                    <a
                      href={currentMenu.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-[#FB6218] text-white rounded-full text-[10px] font-semibold uppercase tracking-wider flex-shrink-0"
                    >
                      View Full PDF
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-8 py-3.5 border-t border-white/10 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-white/60 font-light flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FB6218]" />
                <div>
                  {activeMenuId === 'reserve' ? 'Open All 7 Days · 7:00 AM — 10:00 PM' : currentMenu.hours}
                </div>
              </div>

              {activeMenuId === 'reserve' ? (
                <button
                  type="button"
                  onClick={() => setActiveMenuId('main')}
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-semibold text-xs uppercase tracking-widest active:scale-[0.98] transition-all cursor-pointer"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#FB6218]" />
                  <div>Explore Tasting Menu (PDF)</div>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveMenuId('reserve')}
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FB6218] to-[#BF2A2E] hover:from-[#FB6218]/90 text-white font-semibold text-xs uppercase tracking-widest shadow-glow-orange active:scale-[0.98] transition-all cursor-pointer"
                >
                  <div>Reserve a Table</div>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
