'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';

export default function GalleryHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#05182e] via-[#0C3B73] to-[#00A3C4] pt-32 pb-20 lg:pt-36 lg:pb-24">
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0C3B73]/40 blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-cyan-200 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            <Camera className="w-3.5 h-3.5 text-[#55D8E7]" />
            <span>Visual Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-wide leading-tight mb-6">
            A Glimpse of Island Enchantment
          </h1>

          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore moments from Europe Enchanted — from sun-drenched beachfront bungalows and turquoise waters to serene sunsets and authentic Khmer cuisine.
          </p>
        </motion.div>
      </div>

      {/* Wave bottom transition */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 text-[#f8f9fc] preserve-3d"
        >
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 23L1440 18V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#f8f9fc"
          />
        </svg>
      </div>
    </section>
  );
}
