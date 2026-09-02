'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Waves, Sun, ShieldCheck } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Waves,
      title: 'Prime Koh Toch Location',
      description: 'Steps away from turquoise waters with direct private access to white sandy shores.'
    },
    {
      icon: Compass,
      title: 'Island Elegance',
      description: 'Thoughtfully designed bungalows blending European comfort with Cambodian coastal charm.'
    },
    {
      icon: Sun,
      title: 'Unrivaled Tranquility',
      description: 'Surrounded by lush island greenery, perfect for ultimate relaxation and golden sunsets.'
    },
    {
      icon: ShieldCheck,
      title: 'Seamless Hospitality',
      description: 'Personalized guest services, tour bookings, and island transfers arranged effortlessly.'
    }
  ];

  return (
    <section id="about-us" className="py-24 bg-slate-50 text-slate-800 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00A3C4] text-xs font-semibold tracking-[0.25em] uppercase bg-[#00A3C4]/10 px-3.5 py-1.5 rounded-full border border-[#00A3C4]/20">
            Welcome to Paradise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0C3B73] mt-4 mb-6 leading-tight">
            Where European Elegance Meets Island Charm
          </h2>
          <div className="w-16 h-1 bg-[#00A3C4] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Nestled along the vibrant shores of Koh Toch Beach in Koh Rong, Cambodia, 
            <strong> Europe Enchanted Bungalows & Resort</strong> offers an unforgettable sanctuary. 
            Whether you are seeking peaceful ocean views, tropical adventures, or an exclusive getaway, 
            our resort delivers refined comfort amidst breathtaking natural beauty.
          </p>
        </div>

        {/* Feature Grid with Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Image Mosaic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-white">
                <Image 
                  src="/resort-4.jpg" 
                  alt="Europe Enchanted Resort Beachfront View" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg border border-white">
                <Image 
                  src="/resort-4.jpg" 
                  alt="Luxury Ocean Bungalow" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg border border-white">
                <Image 
                  src="/resort-4.jpg" 
                  alt="Tropical Island Landscape" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-white">
                <Image 
                  src="/resort-4.jpg" 
                  alt="Sunset at Koh Toch Beach" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Decorative Floating Accent */}
            <div className="absolute -bottom-6 -right-6 bg-[#0C3B73] text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-2xl font-serif font-bold text-[#00A3C4] mb-1">Koh Toch</p>
              <p className="text-xs text-white/80">Koh Rong Island, Cambodia</p>
            </div>
          </motion.div>

          {/* Right: Key Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#00A3C4]/10 rounded-xl flex items-center justify-center mb-4 text-[#00A3C4]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-[#0C3B73] text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

// Default export added here to fix the import error
export default AboutSection;