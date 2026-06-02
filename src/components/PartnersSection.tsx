import Image from "next/image";

const partners: { name: string; src?: string; noFilter?: boolean }[] = [
  { name: "Lovable",   src: "/assets/brands/lovable.svg" },
  { name: "Cursor",    src: "/assets/brands/cursor.svg" },
  { name: "PKO BP",    src: "/assets/brands/PKO.svg" },
  { name: "Coca-Cola", src: "/assets/brands/cocacola.svg" },
  { name: "Monster",   src: "/assets/brands/monster.svg" },
  { name: "WSB",       src: "/assets/brands/wsb.svg" },
];

const repeated = Array(8).fill(partners).flat();

export default function PartnersSection() {
  return (
    <section className="bg-navy py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-14">
        <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.25em] text-center">
          Supported by
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-16 items-center">
          {repeated.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 px-10 shrink-0"
            >
              {partner.src ? (
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.name === "Coca-Cola" ? 220 : 160}
                  height={partner.name === "Coca-Cola" ? 88 : 64}
                  className={`object-contain transition-opacity ${
                    partner.name === "Coca-Cola" ? "max-h-20" : "max-h-14"
                  } ${
                    partner.noFilter
                      ? "opacity-70 hover:opacity-100"
                      : "filter brightness-0 invert opacity-60 hover:opacity-100"
                  }`}
                  unoptimized
                />
              ) : (
                <span className="text-white/50 hover:text-white/90 transition-colors text-xl font-semibold tracking-wide whitespace-nowrap">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
