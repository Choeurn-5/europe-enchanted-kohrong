'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* @ts-expect-error Bypass cached dynamic prop mismatch */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero 
        isBookingOpen={isBookingOpen} 
        setIsBookingOpen={setIsBookingOpen} 
      />
      <AboutSection />
    </main>
  );
}