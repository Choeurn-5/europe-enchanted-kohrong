'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header').then((mod) => mod.default), { ssr: false });
const Hero = dynamic(() => import('../components/Hero').then((mod) => mod.default), { ssr: false });

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero 
        isBookingOpen={isBookingOpen} 
        setIsBookingOpen={setIsBookingOpen} 
      />
    </main>
  );
}