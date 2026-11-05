import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 'concept',
    question: 'What style of dining and cuisine does Paradise 27 offer?',
    answer:
      'Paradise 27 is an elevated culinary sanctuary celebrating ancestral wood-fired cooking and modern gastronomy. Every evening, seasoned cherrywood coals are rekindled to sear prime cuts, heirloom regional recipes, fresh river and ocean harvests, and delicate botanical reductions.',
  },
  {
    id: 'reservations',
    question: 'How do table reservations and seating times work?',
    answer:
      'We recommend reserving your table in advance via our direct WhatsApp Concierge (+91 99102 10318) or telephone desk. We seat guests in comfortable dining increments between 7:00 AM and 10:00 PM. Tables are held for 15 minutes past reservation time to preserve the dining cadence.',
  },
  {
    id: 'dietary',
    question: 'Do you accommodate dietary preferences and food allergies?',
    answer:
      'Yes, absolutely. Our culinary team curates exceptional vegetarian, vegan, and gluten-conscious courses. When reserving via WhatsApp, please inform our concierge of any allergies or dietary preferences so our chefs can bespoke-craft your evening.',
  },
  {
    id: 'hours-location',
    question: 'What are your hours of service and location?',
    answer:
      'We welcome guests Monday through Sunday from 7:00 AM until 10:00 PM (open every day, all 7 days for breakfast, lunch, high tea, and dinner). We are conveniently situated on National Highway 27, Nagaon Bypass Road with secure, ample on-site guest parking and attendant assistance.',
  },
  {
    id: 'dress-code',
    question: 'Is there an evening dress code?',
    answer:
      'We embrace an ambiance of relaxed, contemporary elegance. Smart casual or evening attire is welcomed. To maintain an intimate sanctuary for all guests, athletic sportswear and beachwear are politely discouraged in our main dining salon.',
  },
  {
    id: 'private-dining',
    question: 'Can I arrange private dining salons, birthdays, or executive banquets?',
    answer:
      'Yes. Our private dining salon accommodates intimate parties of up to 16 guests with dedicated sommelier service, custom tasting flights, and personalized chef menus. Connect with our concierge via WhatsApp to discuss tailored arrangements.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative z-10 bg-[#090909] text-white pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-3.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#FB6218]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold">
              Frequently Asked Questions
            </p>
          </div>
          
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl font-medium tracking-tight text-white mb-3 leading-[1.15]">
            Everything You Need to Know
          </h2>
          
          <p className="text-xs xs:text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Essential particulars on reservations, wood-fired gastronomy, dietary accommodations, and private salon dining.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                >
                  <h3 className="font-serif text-lg xs:text-xl sm:text-2xl font-medium text-white group-hover:text-white/80 transition-colors tracking-tight">
                    {item.question}
                  </h3>
                  
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-white text-black border-white' : 'bg-white/5 border-white/15 text-white/70 group-hover:border-white/30 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 sm:pt-4 pr-6 sm:pr-12 animate-fadeIn">
                    <p className="text-xs xs:text-sm sm:text-base text-white/70 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Inquiries Card */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-1">
              Have another question?
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light">
              Our Head Concierge is available daily via WhatsApp for bespoke dining inquiries.
            </p>
          </div>

          <a
            href="https://wa.me/919910210318?text=Hello%20Paradise%2027%20Concierge%2C%20I%20have%20a%20question%20regarding%20dining."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-black text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            Chat with Concierge
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>

      </div>
    </section>
  );
}

