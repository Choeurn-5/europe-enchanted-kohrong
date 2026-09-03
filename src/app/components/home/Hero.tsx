// src/app/components/home/Hero.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X } from 'lucide-react';

const headline = "Europe Enchanted Bungalows".split(' ');

function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // As the user scrolls past the hero, content fades out and scales/moves slightly
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Video Background with subtle parallax zoom on scroll */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/RjGYlmhO6Rw?autoplay=1&mute=1&loop=1&playlist=RjGYlmhO6Rw&controls=0&showinfo=0&rel=0&enablejsapi=1&modestbranding=1&playsinline=1"
          title="Europe Enchanted Bungalows"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 mb-6 border border-white/25 rounded-full px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3C4] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3C4]" />
          </span>
          <span className="text-white/90 text-xs font-semibold tracking-[0.25em] uppercase">
            Koh Rong, Cambodia
          </span>
        </motion.div>

        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-wide max-w-4xl flex flex-wrap justify-center gap-x-4">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-base sm:text-lg mt-6 max-w-xl"
        >
          A private island escape — enchanted bungalows, warm hospitality, and the
          Cambodian coast at its most peaceful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsBookingOpen(true)}
            className="bg-[#00A3C4] hover:bg-[#0C3B73] text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest shadow-xl transition-colors"
          >
            Book Your Stay
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="/bungalows"
            className="border border-white/40 text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            View Bungalows
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — mouse shape with animated scroll dot */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
        <span className="text-white/60 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>

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
    </section>
  );
}

export default Hero;