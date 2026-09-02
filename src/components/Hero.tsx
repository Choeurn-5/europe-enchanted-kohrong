'use client';

import React from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, X } from 'lucide-react';

interface HeroProps {
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
}

function Hero({ isBookingOpen, setIsBookingOpen }: HeroProps) {
  return (
    <>
      {/* Script for Inn-Connect Booking Engine */}
      <Script 
        src="https://app.inn-connect.com/book2/Book/js/iframeResizer.min.js"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).iFrameResize) {
            (window as any).iFrameResize({ log: false }, '#innconnectbookingengine');
          }
        }}
      />

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* YouTube Video Background Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/RjGYlmhO6Rw?autoplay=1&mute=1&loop=1&playlist=RjGYlmhO6Rw&controls=0&showinfo=0&rel=0&enablejsapi=1&modestbranding=1&playsinline=1"
            title="Europe Enchanted Koh Rong Video Background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-[56.25vw] w-[100vw] h-[56.25vw] object-cover scale-125"
            allow="autoplay; encrypted-media"
            aria-hidden="true"
          />
        </div>

        {/* Dark Ocean Gradient Overlay for UI legibility & high contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C3B73]/90 via-black/40 to-black/30 pointer-events-none" />

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00A3C4]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Koh Toch Beach · Koh Rong Island
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-lg"
          >
            Experience Coastal <br />
            <span className="italic text-[#00A3C4] font-normal">Serenity & Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover direct beachfront bungalows, pristine white sand beaches, and unmatched island hospitality at Europe Enchanted Resort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center space-x-3 bg-[#00A3C4] hover:bg-[#0C3B73] text-white px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Accommodation</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Inn-Connect Reservation Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              <div className="flex justify-between items-center bg-[#0C3B73] text-white px-6 py-4 border-b border-[#00A3C4]/30">
                <span className="text-sm font-serif font-bold tracking-wider">
                  Europe Enchanted Resort — Direct Reservations
                </span>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 w-full bg-white relative">
                <iframe
                  id="innconnectbookingengine"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://app.inn-connect.com/book2/?p=Europe%20Enchanted%20Bungalow"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;