"use client";

import Link from "next/link";

const message =
  "Summer Applications are now closed. Winter applications will open in October";

export default function AnnouncementBanner() {
  const items = Array(12).fill(message);

  return (
    <Link
      href="/apply"
      className="bg-pink py-2 overflow-hidden z-30 relative block transition-colors duration-200 hover:bg-[#a0012a] cursor-pointer"
    >
      <div className="marquee-track">
        {items.map((text, i) => (
          <span
            key={i}
            className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap flex items-center"
          >
            {text}
            <span className="mx-6 text-white/50">◆</span>
          </span>
        ))}
      </div>
    </Link>
  );
}
