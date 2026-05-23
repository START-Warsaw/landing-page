"use client";

import { useEffect, useRef, useState } from "react";

const facts = [
  { prefix: "€", number: "3",    suffix: "B+", label: "Raised by Network Alumni" },
  { prefix: "",  number: "22",   suffix: "+",  label: "Cities Worldwide" },
  { prefix: "",  number: "17",   suffix: "+",  label: "Countries" },
  { prefix: "",  number: "4000", suffix: "+",  label: "Network Members" },
];

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export default function FactsSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="bg-navy border-t border-white/5 py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.25em] mb-16 text-center">
          The Facts
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((fact, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-navy rounded-2xl border border-[rgba(128,1,31,0.3)] px-8 py-12 flex flex-col items-center text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Pink corner accent */}
              <div
                className="absolute right-0 top-0 h-24 w-24 rounded-bl-[60px]"
                style={{ backgroundColor: "rgba(128,1,31,0.12)" }}
              />
              <div
                className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full border-2"
                style={{ borderColor: "rgba(128,1,31,0.3)" }}
              />

              <span className="text-[clamp(44px,5vw,72px)] font-black leading-none tracking-tight mb-3">
                <span className="text-white">{fact.prefix}{fact.number}</span>
                {fact.suffix && (
                  <span className="text-pink">{fact.suffix}</span>
                )}
              </span>
              <span className="text-white/50 text-[11px] uppercase tracking-[0.2em] font-semibold relative z-10">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
