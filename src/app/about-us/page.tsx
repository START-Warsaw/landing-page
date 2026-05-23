import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalEventsSection from "@/components/InternalEventsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – START Warsaw",
  description:
    "Learn about START Warsaw — our mission, vision, team, and the people driving Warsaw's student entrepreneurship scene.",
};

const board = [
  { name: "Patryk Ostern",    role: "Co-President",       image: "/assets/members/patryk_ostern.jpg",      linkedin: "https://www.linkedin.com/in/patrykostern/" },
  { name: "Adam Pasierski",   role: "Co-President",       image: "/assets/members/adam_pasierski.jpg",     linkedin: "https://www.linkedin.com/in/adam-pasierski/" },
  { name: "Jakub Tybuski",    role: "Head of FinOps",     image: "/assets/members/jakub_tybuski.png",      linkedin: "https://www.linkedin.com/in/jakub-tyburski-417245220/" },
  { name: "Julia Nobis",      role: "Head of Events",     image: "/assets/members/julia_nobis.jpg",        linkedin: "https://www.linkedin.com/in/julia-nobis-906075294/" },
  { name: "Tomasz Brzezinski",role: "Head of Marketing",  image: "/assets/members/tomasz_brzezinski.jpg",  linkedin: "https://www.linkedin.com/in/tomaszbrzezinski142/" },
];


const stats = [
  { value: "21", label: "Total Members" },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className="h-[68px]" />
      <main className="bg-navy text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-[120px] pb-0 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">

              {/* Left */}
              <div className="pb-24">
                <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-6">
                  Who We Are
                </p>
                <h1 className="text-[clamp(48px,7vw,100px)] font-black text-white uppercase leading-none tracking-tight mb-10">
                  A community<br />built on<br />ambition.
                </h1>
                <p className="text-white/90 text-[clamp(15px,1.4vw,18px)] leading-relaxed font-semibold mb-14">
                  A student-led community at the heart of Warsaw&apos;s startup scene —
                  turning bold ideas into real ventures since 2026.
                </p>
                <div className="flex gap-12 flex-wrap">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-[clamp(44px,5vw,72px)] font-black text-white leading-none mb-2">
                        {s.value}
                      </div>
                      <div className="text-white/50 text-[11px] uppercase tracking-[0.2em] font-semibold">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — image flush to section bottom */}
              <div className="relative h-[520px] lg:h-[680px] overflow-hidden">
                <Image
                  src="/assets/images/hero-3.jpg"
                  alt="START Warsaw community"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
              </div>

            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="bg-navy-dark border-t border-white/5 py-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-navy rounded-2xl border border-white/10 p-12 lg:p-16">
                <p className="text-pink text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">
                  Mission
                </p>
                <h2 className="text-[clamp(36px,4vw,58px)] font-black text-white uppercase leading-tight tracking-tight mb-6">
                  Empowering founders of tomorrow.
                </h2>
                <p className="text-white/55 text-[15px] leading-relaxed">
                  A self-driven community where learning happens by doing — and every
                  member gets what is needed to build things that truly matter.
                </p>
              </div>
              <div className="bg-navy rounded-2xl border border-white/10 p-12 lg:p-16">
                <p className="text-pink text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">
                  Vision
                </p>
                <h2 className="text-[clamp(36px,4vw,58px)] font-black text-white uppercase leading-tight tracking-tight mb-6">
                  Being the launchpad for innovation.
                </h2>
                <p className="text-white/55 text-[15px] leading-relaxed">
                  We envision START Warsaw as the place for ambitious students in Warsaw,
                  where ideas are turned into real innovations that shape the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Board ── */}
        <section className="bg-navy-dark border-t border-white/5 py-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
              Leadership
            </p>
            <h2 className="text-[clamp(32px,4vw,56px)] font-black text-white uppercase leading-tight tracking-tight">
              Founders & Board
            </h2>
            <p className="text-white/40 text-[13px] font-semibold tracking-[0.1em] mt-2 mb-16">
              2026 / 2027
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {board.map((member) => (
                <a key={member.name} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group bg-navy rounded-2xl border border-white/10 overflow-hidden hover:border-white/25 transition-colors block">
                  {member.image ? (
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="h-64 w-full bg-navy-dark flex items-center justify-center">
                      <span className="text-white/10 text-[80px] font-black">{member.name[0]}</span>
                    </div>
                  )}
                  <div className="p-8 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-white font-bold text-[17px] mb-1">{member.name}</div>
                      <div className="text-pink text-[11px] uppercase tracking-[0.18em] font-semibold">{member.role}</div>
                    </div>
                    <svg className="shrink-0 text-white/30 group-hover:text-white/70 transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Member Journey ── */}
        <section className="border-t border-white/5 py-24 px-6 lg:px-10">
          <div className="max-w-[1400px] mx-auto mb-14">
            <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">Your Path</p>
            <h2 className="text-[clamp(40px,5vw,72px)] font-black text-white uppercase leading-none tracking-tight">
              Member Journey
            </h2>
            <p className="text-white/50 text-[15px] mt-4">The 5 milestones of your journey at START Warsaw.</p>
          </div>
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Application", intro: "Your entry into START Warsaw.", accent: true,
                bullets: ["Apply in spring or autumn", "Stage 1: Written application", "Stage 2: One interview, 30 min"] },
              { step: "02", title: "Onboarding Sprint", intro: "Your first month. Get to know ambitious people and build something real together.",
                bullets: ["Develop your own idea from concept to MVP", "Get to know key players in Warsaw's startup scene", "Spend an unforgettable weekend with the community"] },
              { step: "03", title: "Pick Department", intro: "Develop yourself and shape START Warsaw. What happens here depends on what you do.",
                bullets: ["Choose one of our departments", "Work on real projects with visible impact", "Learn startup skills in practice", "Initiate new formats"] },
              { step: "04", title: "Active Member", intro: "Enjoy the benefits of START and expand your network with exclusive opportunities.",
                bullets: ["Active for at least 2 semesters", "1 semester break allowed (e.g. Erasmus)", "Join events, speaker nights, and workshops", "Become part of the 4 000+ chapter network", "Find co-founders within the community"] },
              { step: "05", title: "Alumni", intro: "Stay part of the network for life and give back to the next generation.",
                bullets: ["Mentor incoming members", "Access the global START alumni network", "Stay connected to Warsaw's startup scene"] },
            ].map((item) => (
              <div key={item.step} className={`bg-navy-dark rounded-2xl border p-8 lg:p-10 flex flex-col gap-5${item.accent ? " border-pink" : " border-white/10"}`}>
                <span className="text-[clamp(52px,5vw,68px)] font-black text-white/10 leading-none select-none">{item.step}</span>
                <h3 className="text-white font-black text-[15px] uppercase tracking-tight leading-snug">{item.title}</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">{item.intro}</p>
                <ul className="space-y-2.5 pt-2 border-t border-white/8">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-white/45 text-[12px] leading-relaxed">
                      <span className="text-pink shrink-0 mt-0.5">—</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <DepartmentsSection />

        <InternalEventsSection />

        {/* ── CTA ── */}
        <section className="border-t border-white/5 py-28 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-6">
              Get Involved
            </p>
            <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-tight tracking-tight mb-8">
              Want to learn more about us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/people"
                className="bg-pink text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity rounded-xl"
              >
                Meet Our People
              </Link>
              <Link
                href="/apply"
                className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/60 transition-all rounded-xl"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
