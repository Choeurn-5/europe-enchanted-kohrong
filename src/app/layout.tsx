import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyBookButton from "@/app/components/StickyBookButton";
import WhatsAppButton from "@/app/components/WhatsAppButton";


import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Europe Enchanted Bungalows | Koh Rong, Cambodia",
  description: "A private island escape on Koh Rong — bungalows, beach, and enchantment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={poppins.variable}>
  <Header />
  {children}
  <Footer />
  <StickyBookButton />
  <WhatsAppButton />
</body>
    </html>
  );
}