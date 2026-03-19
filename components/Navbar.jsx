"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1a3330]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="HomeSetu — Home Services Vadodara"
            width={160}
            height={52}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#workers" className="hover:text-white transition-colors">Our Workers</Link>
          <Link href="/#reviews" className="hover:text-white transition-colors">Reviews</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="bg-[#4ecca3] text-[#1a3330] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#3ab890] transition-colors"
          >
            Book a Service
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a3330] px-4 pb-4 flex flex-col gap-3 text-sm text-white/80 border-t border-white/10">
          <Link href="/#services" onClick={() => setMenuOpen(false)} className="pt-3 hover:text-white">Services</Link>
          <Link href="/#workers" onClick={() => setMenuOpen(false)} className="hover:text-white">Our Workers</Link>
          <Link href="/#reviews" onClick={() => setMenuOpen(false)} className="hover:text-white">Reviews</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-white">Contact</Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 bg-[#4ecca3] text-[#1a3330] font-semibold px-4 py-2 rounded-lg text-center hover:bg-[#3ab890] transition-colors"
          >
            Book a Service
          </Link>
        </div>
      )}
    </nav>
  );
}