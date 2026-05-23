import Link from "next/link";

export default function StartupsSection() {
  return (
    <section className="bg-navy border-t border-white/5 py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Our Startups
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-black text-white uppercase leading-tight tracking-tight">
              Founded by<br />our members
            </h2>
          </div>
          <Link
            href="/startups"
            className="text-white/60 hover:text-white text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors inline-flex items-center gap-3 group shrink-0"
          >
            View all our startups
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 border border-white/5 text-center">
        <p className="text-white/30 text-[13px] uppercase tracking-[0.2em]">
          Warsaw startup alumni — coming soon
        </p>
      </div>
    </section>
  );
}
