import type { Metadata } from 'next';
import ContactHeader from '@/app/components/contact/ContactHeader';
import ContactInfo from '@/app/components/contact/ContactInfo';
import ContactForm from '@/app/components/contact/ContactForm';
import WhatsAppCTA from '@/app/components/contact/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Contact Us & Island Location | Europe Enchanted Koh Rong',
  description:
    'Contact Europe Enchanted Bungalows & Resort on Koh Rong Island, Cambodia. Speedboat transfers, room reservations, arrival assistance, and direct WhatsApp support.',
  openGraph: {
    title: 'Contact Us & Island Location | Europe Enchanted Koh Rong',
    description:
      'Contact Europe Enchanted Bungalows & Resort on Koh Rong Island, Cambodia. Speedboat transfers, room reservations, arrival assistance, and direct WhatsApp support.',
    url: 'https://europeenchantedkohrong.com/contact',
    images: ['/images/resort-4.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Island Location | Europe Enchanted Koh Rong',
    description:
      'Contact Europe Enchanted Bungalows & Resort on Koh Rong Island, Cambodia.',
    images: ['/images/resort-4.jpg'],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] flex flex-col">
      {/* Hero Header */}
      <ContactHeader />

      {/* Contact Content Section: Info & Form */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left: Contact Info & Map (5 cols) */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right: Direct Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Fast Support Banner */}
      <WhatsAppCTA />
    </main>
  );
}
