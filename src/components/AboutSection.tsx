import Image from "next/image";
import Link from "next/link";

const pillars = ["Education", "Community", "Hands-on experience"];

export default function AboutSection() {
  return (
    <section className="bg-navy-dark border-t border-white/5 py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left – text */}
          <div>
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
              About START Warsaw
            </p>
            <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-tight tracking-tight mb-8">
              Driven by{" "}
              <span className="text-pink">passion.</span>{" "}
              Built by students.
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-4">
              START Warsaw is the largest student-run entrepreneurship initiative
              in Warsaw, empowering the next generation of founders through
              education, networking, and hands-on experience.
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed mb-10">
              We believe in the power of student-driven innovation and provide a
              platform where bold ideas can become reality.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.15em] border border-white/20 px-4 py-2 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 bg-pink text-white text-[11px] font-bold uppercase tracking-[0.18em] px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity group"
            >
              Discover How Our Community Is Run
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right – photo */}
          <div className="relative h-[420px] lg:h-[560px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/images/hero-1.jpg"
              alt="START Warsaw community event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
