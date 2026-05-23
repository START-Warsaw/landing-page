"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "PEOPLE", href: "/people" },
  { label: "PARTNERS", href: "/partners" },
  { label: "EVENTS", href: "/events" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-navy border-b border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.svg" alt="START Warsaw" className="h-14 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-[11px] font-semibold tracking-[0.18em]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/donate"
            className="border border-white/30 text-white text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-2.5 hover:border-white/60 hover:text-white transition-all rounded-xl"
          >
            DONATE
          </Link>
          <Link
            href="/apply"
            className="bg-pink text-white text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-2.5 hover:opacity-90 transition-opacity rounded-xl"
          >
            APPLY NOW
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white/70 hover:text-white text-sm font-semibold tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/donate"
              className="block border border-white/30 text-white text-center text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              DONATE
            </Link>
            <Link
              href="/apply"
              className="block bg-pink text-white text-center text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
