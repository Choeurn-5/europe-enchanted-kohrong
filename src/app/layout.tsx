import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyBookButton from "@/app/components/StickyBookButton";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://europeenchantedkohrong.com';

export const viewport: Viewport = {
  themeColor: '#0C3B73',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Europe Enchanted Bungalows | Koh Rong, Cambodia",
    template: "%s | Europe Enchanted Koh Rong",
  },
  description: "A private island escape on Koh Rong, Cambodia — luxury wooden bungalows, crystal-clear turquoise waters, infinity pool, and pristine tropical serenity.",
  keywords: [
    "Europe Enchanted Bungalows",
    "Koh Rong resort",
    "Cambodia island bungalows",
    "Koh Rong accommodation",
    "Koh Toch Beach",
    "Koh Rong beachfront bungalows",
    "Cambodia tropical resort",
    "island getaway Cambodia"
  ],
  authors: [{ name: "Europe Enchanted Bungalows" }],
  creator: "Europe Enchanted Resort",
  publisher: "Europe Enchanted Resort",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Europe Enchanted Bungalows",
    title: "Europe Enchanted Bungalows | Koh Rong, Cambodia",
    description: "A private island escape on Koh Rong — luxury bungalows, beachfront tranquility, and untouched nature.",
    images: [
      {
        url: "/images/resort-4.jpg",
        width: 1200,
        height: 630,
        alt: "Europe Enchanted Bungalows on Koh Rong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Europe Enchanted Bungalows | Koh Rong, Cambodia",
    description: "A private island escape on Koh Rong — luxury bungalows, beachfront tranquility, and untouched nature.",
    images: ["/images/resort-4.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-[family-name:var(--font-poppins)] antialiased selection:bg-[#00A3C4] selection:text-white`}>
        <Header />
        {children}
        <Footer />
        <StickyBookButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}