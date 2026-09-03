import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Mail, Globe2, Camera } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Accommodations', href: '/bungalows' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function Footer() {
  return (
    <footer className="bg-[#0C3B73] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center space-x-3 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00A3C4]">
              <Image src="/logo.png" alt="Europe Enchanted Logo" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-wider text-white">
                EUROPE ENCHANTED
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#00A3C4]">
                Bungalows & Resort
              </span>
            </div>
          </Link>
          <p className="text-sm text-white/60 max-w-sm mt-4">
            A private island escape on Koh Rong — enchanted bungalows, warm hospitality,
            and the Cambodian coast at its most peaceful.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A3C4] transition-colors">
              <Globe2 className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A3C4] transition-colors">
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#00A3C4] transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <Phone className="w-4 h-4 mt-0.5 text-[#00A3C4] shrink-0" />
              <a href="tel:+85592748899" className="hover:text-[#00A3C4] transition-colors">
                +855 92 748 899
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#00A3C4] shrink-0" />
              <span>Koh Toch Beach, Koh Rong, Cambodia</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="w-4 h-4 mt-0.5 text-[#00A3C4] shrink-0" />
              <a href="mailto:info@europeenchantedkohrong.com" className="hover:text-[#00A3C4] transition-colors">
                info@europeenchantedkohrong.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-2">
          <span>© {new Date().getFullYear()} Europe Enchanted Bungalows. All rights reserved.</span>
          <span>Koh Rong, Cambodia</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;