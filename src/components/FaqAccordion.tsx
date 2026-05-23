"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl divide-y divide-white/10">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-6 py-7 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-white font-bold text-[17px] leading-snug group-hover:text-white/80 transition-colors">
              {faq.q}
            </span>
            <span
              className={`shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 text-xl font-light transition-all duration-300 ${
                open === i ? "rotate-45 border-pink text-pink" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? "max-h-96 pb-7" : "max-h-0"
            }`}
          >
            <p className="text-white/55 text-[15px] leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
