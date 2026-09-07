'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function AmenitiesHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/amenities-hero.jpg"
          alt="Resort amenities at Europe Enchanted Koh Rong"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#062B55]/80 via-[#062B55]/60 to-[#f8f9fc]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#55D8E7]" />
            <span className="text-[#55D8E7] text-xs font-bold tracking-[0.35em] uppercase">
              What&apos;s Included
            </span>
            <span className="h-px w-10 bg-[#55D8E7]" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Resort Amenities
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From sunrise swims to candlelit dinners and island adventures — every detail is here to make your stay feel effortless and extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

