import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}