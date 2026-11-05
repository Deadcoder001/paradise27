import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MessageCircle, ArrowRight, MapPin, AlertCircle, Navigation } from 'lucide-react';

// Format ISO date "YYYY-MM-DD" into human-friendly date
function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    return d.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// Format 24-hour time "HH:MM" into 12-hour AM/PM
function formatTime(timeStr) {
  if (!timeStr) return '';
  try {
    const parts = timeStr.split(':');
    if (parts.length < 2) return timeStr;
    const h = parseInt(parts[0], 10);
    const m = parts[1];
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${m} ${ampm}`;
  } catch {
    return timeStr;
  }
}

export default function WhatsAppReservation() {
  const today = new Date().toISOString().split('T')[0];

  const [guestName, setGuestName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [seatingTime, setSeatingTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [formError, setFormError] = useState('');

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
    <section
      id="reservation"
      aria-label="Reserve Table via WhatsApp"
      className="relative z-10 bg-gradient-to-b from-[#BF2A2E] via-[#5c1113] to-[#090909] text-white pt-10 xs:pt-14 sm:pt-20 pb-12 xs:pb-16 sm:pb-28 overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(251, 98, 24, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-3.5 xs:px-5 sm:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 py-1 xs:px-3.5 xs:py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] xs:text-xs font-bold uppercase tracking-wider text-white mb-2.5 sm:mb-3">
            <MapPin className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-white" />
            National Highway 27 · Nagaon Bypass, Assam
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 sm:mb-3 leading-[1.15]">
            Table Reservation & Concierge
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-white/85 font-medium max-w-2xl mx-auto leading-relaxed">
            Reserve your table for wood-fired culinary specialties and Assamese cuisine. Open daily Monday to Sunday from 7:00 AM to 10:00 PM.
          </p>
        </div>

        {/* 2-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Hours of Service, Highway Narrative & Direct Desk (Transparent) */}
          <div className="h-full p-2 sm:p-4 lg:p-6 bg-transparent flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-2.5 text-white mb-4 sm:mb-5">
                <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs uppercase tracking-wider font-bold text-white/80">Hours of Service</p>
                  <p className="text-xs xs:text-sm sm:text-base font-bold text-white">Open All 7 Days · 7:00 AM — 10:00 PM</p>
                </div>
              </div>

              {/* Highway Hearth & Hospitality Narrative */}
              <div className="space-y-1.5 xs:space-y-2 mb-5 sm:mb-6">
                <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Highway Hearth & Assamese Hospitality
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                  Located directly on National Highway 27 at the Nagaon Bypass, Paradise 27 offers wood-fired culinary specialties, traditional Assamese thalis, and an inviting highway respite for travellers, families, and private gatherings.
                </p>
              </div>

              {/* Operating Timetable Card */}
              <div className="p-3.5 xs:p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2.5 text-xs sm:text-sm backdrop-blur-sm">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between pb-2 border-b border-white/10 font-medium gap-1">
                  <p className="text-white/80">Monday — Sunday (Daily)</p>
                  <p className="text-white font-bold">7:00 AM — 10:00 PM</p>
                </div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between pb-2 border-b border-white/10 font-medium gap-1">
                  <p className="text-white/80">Breakfast & Morning Fare</p>
                  <p className="text-white font-bold">7:00 AM — 11:30 AM</p>
                </div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between pb-2 border-b border-white/10 font-medium gap-1">
                  <p className="text-white/80">Lunch, High Tea & Dinner</p>
                  <p className="text-white font-bold">12:00 PM — 10:00 PM</p>
                </div>
                <div className="flex items-center justify-between pt-0.5 text-[11px] text-amber-200/90 font-medium">
                  <p>Highway walk-ins welcome</p>
                  <p className="font-bold">Bookings prioritized</p>
                </div>
              </div>
            </div>

            {/* Direct Telephone Desk & Maps Card */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 space-y-2.5 sm:space-y-3">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Direct Telephone Desk</p>
                  <p className="font-serif text-sm xs:text-base sm:text-lg font-bold text-white mt-0.5">+91 99102 10318</p>
                </div>
                <div className="grid grid-cols-2 xs:flex items-center gap-2 w-full xs:w-auto">
                  <a
                    href="tel:+919910210318"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                  <a
                    href="https://maps.google.com/?q=Paradise+27+National+Highway+27+Nagaon+Bypass+Assam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Maps
                  </a>
                </div>
              </div>
              <p className="text-[10px] xs:text-[11px] text-white/60 text-center">
                Convenient highway stop on NH 27 with attendant parking for travellers
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Table Reservation Form (Phone Optimized) */}
          <div className="h-full p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="mb-5 sm:mb-6">
                <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1">
                  Reserve a Table
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-medium leading-relaxed">
                  Enter your reservation details manually below. We confirm all bookings instantly via WhatsApp.
                </p>
              </div>

              {formError && (
                <div className="mb-4 sm:mb-5 p-3 sm:p-3.5 rounded-xl bg-black/50 border border-amber-400/80 text-amber-200 text-xs sm:text-sm font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <p>{formError}</p>
                </div>
              )}

              <form onSubmit={handleWhatsAppInquiry} className="space-y-3.5 sm:space-y-4">
                
                {/* 1. Guest Full Name */}
                <div className="w-full">
                  <label htmlFor="home-wa-name" className="flex items-center h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5">
                    Guest Full Name *
                  </label>
                  <input
                    id="home-wa-name"
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
                    <label htmlFor="home-wa-date" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                      Reservation Date *
                    </label>
                    <input
                      id="home-wa-date"
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
                    <label htmlFor="home-wa-time" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                      <Clock className="w-3.5 h-3.5 text-white shrink-0" />
                      Arrival Time *
                    </label>
                    <input
                      id="home-wa-time"
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
                    <label htmlFor="home-wa-guests" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                      <Users className="w-3.5 h-3.5 text-white shrink-0" />
                      Number of Guests *
                    </label>
                    <input
                      id="home-wa-guests"
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
                    <label htmlFor="home-wa-phone" className="flex items-center gap-1.5 h-5 text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1.5 whitespace-nowrap">
                      <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                      Contact Phone (Optional)
                    </label>
                    <input
                      id="home-wa-phone"
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
                  <label htmlFor="home-wa-notes" className="block text-[11px] xs:text-xs uppercase tracking-wider text-white font-bold mb-1 sm:mb-1.5">
                    Special Requests / Dietary Notes (Optional)
                  </label>
                  <textarea
                    id="home-wa-notes"
                    rows={2}
                    placeholder="E.g., Swargadeo Thali, family table, celebration, baby chair..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/40 text-base sm:text-sm font-medium focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* 5. Submit Button */}
                <div className="pt-1.5 sm:pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-white hover:bg-neutral-100 text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.99] cursor-pointer min-h-[48px] shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                    Send Reservation via WhatsApp
                    <ArrowRight className="w-4 h-4 text-black stroke-[2.5] shrink-0" />
                  </button>
                  <p className="text-[10px] xs:text-[11px] text-white/60 font-medium text-center mt-2">
                    Direct confirmation with Paradise 27 host desk on WhatsApp
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
