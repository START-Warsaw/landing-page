import Image from "next/image";
import Link from "next/link";

const stats = [
  { number: "20", suffix: "+", label: "Active Members" },
  { number: "2026", suffix: "",  label: "Founded In" },
  { number: "30", suffix: "+", label: "Events Per Year" },
  { number: "45", suffix: "%",  label: "STEM" },
];

export default function CommunitySection() {
  return (
    <section className="bg-navy-dark border-t border-white/5">
      {/* Team photo */}
      <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
        <Image
          src="/assets/images/hero-1.jpg"
          alt="START Warsaw Community"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark" />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <h2 className="text-[clamp(32px,4.5vw,60px)] font-black text-white uppercase leading-tight tracking-tight mb-8">
              What Is<br />START Warsaw
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-4">
              With over 20 active members and growing alumni, START Warsaw is one of
              Poland&apos;s leading student-run entrepreneurship initiatives. Founded
              in 2026, our mission is to build{" "}
              <strong className="text-white font-bold">
                a community of students who dare to build, innovate, and lead.
              </strong>
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed mb-10">
              At START Warsaw,{" "}
              <strong className="text-white font-bold">
                aspiring and active entrepreneurs come together
              </strong>{" "}
              to connect, collaborate, and grow. Together with our talented members,
              we host events such as pitch nights and founder talks, connect with
              industry partners and investors, and run hands-on programs that bridge
              academia with entrepreneurship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="bg-pink text-white text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-3 hover:opacity-90 transition-opacity rounded-xl"
              >
                Apply Now
              </Link>
              <Link
                href="/events"
                className="border border-white/30 text-white text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-3 hover:bg-white/10 transition-colors rounded-xl"
              >
                See Our Events
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* University logos */}
            <div className="mb-10 pb-10 border-b border-white/10">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-semibold mb-6">
                Our Members Come From
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
                <Image
                  src="/assets/unis/pw.png"
                  alt="Warsaw University of Technology"
                  width={120}
                  height={48}
                  className="object-contain max-h-10 filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/assets/unis/sgh.png"
                  alt="SGH Warsaw School of Economics"
                  width={120}
                  height={48}
                  className="object-contain max-h-10 filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/assets/unis/kozmin.png"
                  alt="Kozminski University"
                  width={100}
                  height={48}
                  className="object-contain max-h-10 opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/assets/unis/pjatk.svg"
                  alt="PJATK Polish-Japanese Academy of Information Technology"
                  width={48}
                  height={48}
                  className="object-contain max-h-10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
                  unoptimized
                />
              </div>
            </div>

            {/* Stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-[clamp(36px,4vw,60px)] font-black leading-none mb-2">
                    <span className="text-white">{stat.number}</span>
                    {stat.suffix && (
                      <span className="text-pink">{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-white/50 text-[11px] uppercase tracking-[0.2em] font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
