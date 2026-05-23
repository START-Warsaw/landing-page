"use client";

const cities = [
  "Berlin", "Barcelona", "Hamburg", "Helsinki", "Lausanne",
  "London", "Lima", "Lisbon", "Maastricht", "Mexico City",
  "Milano", "Munich", "Paris", "Nuremberg", "Quito",
  "São Paulo", "Stuttgart", "Vaduz", "Vienna", "Warsaw",
  "St. Gallen",
];

const networkStats = [
  { value: "22", label: "Cities" },
  { value: "17", label: "Countries" },
  { value: "4000+", label: "Members" },
];

export default function NetworkSection() {
  const doubled = [...cities, ...cities];

  return (
    <section className="bg-navy-dark border-t border-white/5 py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">
              Global Community
            </p>
            <h2 className="text-[clamp(36px,4.5vw,60px)] font-black text-white uppercase leading-tight tracking-tight mb-8">
              START<br />Network
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-12">
              We&apos;re a part of the sprawling START Network. This interconnection
              multiplies our potential across the world, allowing us to draw inspiration
              from diverse cultures, share insights, and create an ecosystem that
              nurtures collective progress.
            </p>
            <div className="flex gap-12">
              {networkStats.map((s, i) => (
                <div key={i}>
                  <div className="text-[clamp(32px,3.5vw,52px)] font-black text-white leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-white/50 text-[11px] uppercase tracking-[0.15em] font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – vertically scrolling city list */}
          <div
            className="relative h-[360px] overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            }}
          >
            <div className="marquee-vertical-down">
              {doubled.map((city, i) => (
                <div
                  key={i}
                  className={`text-right font-black uppercase leading-tight tracking-tight text-[clamp(36px,4.5vw,68px)] ${
                    city === "Warsaw" ? "text-pink" : "text-white/20"
                  }`}
                >
                  {city.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
