"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDots,
  UsersThree,
  Hammer,
  Lightbulb,
  MapPin,
  Sparkle,
} from "@phosphor-icons/react";

const events = [
  {
    Icon: CalendarDots,
    color: "#f59e0b",   // amber
    bg: "rgba(245,158,11,0.12)",
    title: "The Monthly",
    cadence: "Monthly",
    description:
      "Each month all active members meet to share updates, pitch their ideas, and connect across the community.",
    image: "/assets/images/hero-3.jpg",
  },
  {
    Icon: UsersThree,
    color: "#6366f1",   // indigo
    bg: "rgba(99,102,241,0.12)",
    title: "Department Work",
    cadence: "Weekly",
    description:
      "Meet with your department to align on projects, share progress, and keep things moving forward.",
    image: "/assets/images/hero-1.jpg",
  },
  {
    Icon: Hammer,
    color: "#ec4899",   // pink (brand)
    bg: "rgba(236,72,153,0.12)",
    title: "Builders Weekend",
    cadence: "Recurring",
    description:
      "Spend the weekend building your own startup. No slides — just execution, prototyping, and raw energy.",
    image: "/assets/images/hero-2.jpg",
  },
  {
    Icon: Lightbulb,
    color: "#22d3ee",   // cyan
    bg: "rgba(34,211,238,0.12)",
    title: "Member Workshops",
    cadence: "Recurring",
    description:
      "Hands-on sessions with VCs, founders, and industry professionals. Practical knowledge you actually use.",
    image: "/assets/images/hero-1.jpg",
  },
  {
    Icon: MapPin,
    color: "#4ade80",   // green
    bg: "rgba(74,222,128,0.12)",
    title: "Startup Visits",
    cadence: "Recurring",
    description:
      "Visit startups and learn from those who've done it. Get behind the scenes of Warsaw's best companies.",
    image: "/assets/images/hero-2.jpg",
  },
  {
    Icon: Sparkle,
    color: "#a78bfa",   // violet
    bg: "rgba(167,139,250,0.12)",
    title: "And a lot more...",
    cadence: null,
    description:
      "Discover many more exciting events and opportunities that come with being part of START Warsaw.",
    image: "/assets/images/hero-3.jpg",
  },
];

export default function InternalEventsSection() {
  const [active, setActive] = useState(0);
  const activeEvent = events[active];

  return (
    <section className="border-t border-white/5 py-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto mb-14">
        <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
          Community Life
        </p>
        <h2 className="text-[clamp(40px,5vw,72px)] font-black text-white uppercase leading-none tracking-tight">
          Internal <span className="text-pink">Events</span>
        </h2>
        <p className="text-white/50 text-[15px] mt-4">
          Regular events and activities of our community.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.2fr] border border-white/10 overflow-hidden">
        {/* Left — event list */}
        <div className="bg-navy-dark divide-y divide-white/5">
          {events.map((event, i) => {
            const { Icon, color, bg } = event;
            const isActive = i === active;
            return (
              <button
                key={event.title}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-start gap-4 px-8 py-6 transition-colors group ${
                  isActive
                    ? "bg-white/5 border-l-2 border-l-pink"
                    : "border-l-2 border-l-transparent hover:bg-white/[0.03]"
                }`}
              >
                {/* Icon */}
                <span
                  className="shrink-0 mt-0.5 w-10 h-10 flex items-center justify-center rounded-xl transition-all"
                  style={{ backgroundColor: isActive ? bg : "rgba(255,255,255,0.05)" }}
                >
                  <Icon
                    size={22}
                    weight="duotone"
                    color={isActive ? color : "rgba(255,255,255,0.3)"}
                  />
                </span>

                {/* Text */}
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span
                      className={`font-bold text-[15px] transition-colors ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white/90"
                      }`}
                    >
                      {event.title}
                    </span>
                    {event.cadence && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-full"
                        style={{
                          color: isActive ? color : "rgba(255,255,255,0.35)",
                          backgroundColor: isActive ? bg : "rgba(255,255,255,0.05)",
                        }}
                      >
                        {event.cadence}
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-[13px] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right — photo */}
        <div className="relative h-[420px] lg:h-auto min-h-[420px] bg-navy-dark">
          {activeEvent.image ? (
            <>
              <Image
                key={activeEvent.image}
                src={activeEvent.image}
                alt={activeEvent.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </>
          ) : null}

          {/* Label */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6 flex items-end justify-between">
            <span className="text-white font-black text-[18px] uppercase tracking-tight drop-shadow">
              {activeEvent.title}
            </span>
            <span className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-semibold">
              {active + 1} / {events.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
