import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Clock,
  Users,
  Phone,
  MessageCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
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

export default function ReservationModal({ isOpen, onClose }) {
  const [guestName, setGuestName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [seatingTime, setSeatingTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [formError, setFormError] = useState('');

  const today = new Date().toISOString().split('T')[0];

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

  const resetAndClose = () => {
    setFormError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#090909] border border-white/20 rounded-2xl xs:rounded-3xl p-5 xs:p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(251,98,24,0.15)] z-10"
          >
            {/* Subtle top ember glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BF2A2E] via-[#FB6218] to-[#BF2A2E]" />

            {/* Close button */}
            <button
              type="button"
              onClick={resetAndClose}
              className="absolute top-3.5 right-3.5 xs:top-5 xs:right-5 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Reservation Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-left mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-[#FB6218] bg-white/5 border border-[#BF2A2E]/30 mb-2">
                <Sparkles className="w-3 h-3 text-[#FB6218]" />
                <div>Paradise 27 • Direct Host Desk</div>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Reserve a Table
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Enter your reservation details manually below. We confirm all bookings instantly via WhatsApp.
              </p>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-black/50 border border-amber-400/80 text-amber-200 text-xs sm:text-sm font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <p>{formError}</p>
              </div>
            )}

            {/* Exact Reservation Form (Matching ContactPage) */}
            <form onSubmit={handleWhatsAppInquiry} className="space-y-3.5 sm:space-y-4 text-left">
              {/* 1. Guest Full Name */}
              <div className="w-full">
                <label htmlFor="modal-wa-name" className="flex items-center h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5">
                  Guest Full Name *
                </label>
                <input
                  id="modal-wa-name"
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
                  <label htmlFor="modal-wa-date" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                    Reservation Date *
                  </label>
                  <input
                    id="modal-wa-date"
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
                  <label htmlFor="modal-wa-time" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                    <Clock className="w-3.5 h-3.5 text-white shrink-0" />
                    Arrival Time *
                  </label>
                  <input
                    id="modal-wa-time"
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
                  <label htmlFor="modal-wa-guests" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                    <Users className="w-3.5 h-3.5 text-white shrink-0" />
                    Number of Guests *
                  </label>
                  <input
                    id="modal-wa-guests"
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
                  <label htmlFor="modal-wa-phone" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                    <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                    Contact Phone (Optional)
                  </label>
                  <input
                    id="modal-wa-phone"
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
                <label htmlFor="modal-wa-notes" className="block text-xs uppercase tracking-wider text-white font-bold mb-1.5">
                  Special Requests / Dietary Notes (Optional)
                </label>
                <textarea
                  id="modal-wa-notes"
                  rows={2}
                  placeholder="E.g., Swargadeo Thali, family table, celebration, baby chair..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 text-base sm:text-sm font-medium focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* 5. Submit Button */}
              <div className="pt-2">
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
