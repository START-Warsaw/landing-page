import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const studyFields = [
  { label: "Business", pct: 53 },
  { label: "Computer Science", pct: 32 },
  { label: "Finance", pct: 16 },
  { label: "Others", pct: 11 },
];

const universities = [
  { label: "SGH", pct: 44 },
  { label: "WUT", pct: 11 },
  { label: "PJATK", pct: 11 },
  { label: "Others", pct: 34 },
];

function Bar({ pct, color = "bg-pink" }: { pct: number; color?: string }) {
  return (
    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
    </div>
  );
}

const currentBoard = [
  { name: "Patryk Ostern",     role: "Co-President",      dept: "Executive",    photo: "/assets/members/patryk_ostern.jpg",      linkedin: "https://www.linkedin.com/in/patrykostern/" },
  { name: "Adam Pasierski",    role: "Co-President",      dept: "Executive",    photo: "/assets/members/adam_pasierski.jpg",     linkedin: "https://www.linkedin.com/in/adam-pasierski/" },
  { name: "Jakub Tybuski",     role: "Head of FinOps",    dept: "FinOps",       photo: "/assets/members/jakub_tybuski.png",      linkedin: "https://www.linkedin.com/in/jakub-tyburski-417245220/" },
  { name: "Julia Nobis",       role: "Head of Events",    dept: "Events",       photo: "/assets/members/julia_nobis.jpg",        linkedin: "https://www.linkedin.com/in/julia-nobis-906075294/" },
  { name: "Tomasz Brzezinski", role: "Head of Marketing", dept: "Marketing",    photo: "/assets/members/tomasz_brzezinski.jpg",  linkedin: "https://www.linkedin.com/in/tomaszbrzezinski142/" },
];

const batchAlphaMembers = [
  { id:  1, name: "Adam Pasierski",      photo: "/assets/members/adam_pasierski.jpg",      linkedin: "https://www.linkedin.com/in/adam-pasierski/" },
  { id:  2, name: "Aleksandra Kogowska", photo: "/assets/members/aleksandra_kogowska.jpeg",linkedin: "https://www.linkedin.com/in/aleksandra-kogowska-8395b5156/" },
  { id:  3, name: "Ireneusz Dawidowicz", photo: "/assets/members/ireneusz_dawidowicz.jpeg", linkedin: "https://www.linkedin.com/in/ireneusz-dawidowicz/" },
  { id:  4, name: "Iza Brudzinska",      photo: "/assets/members/iza_brudzinska.jpeg",      linkedin: "https://www.linkedin.com/in/izabelabrudzinska/" },
  { id:  5, name: "Jakub Kapitan",       photo: "/assets/members/jakub_kapitan.jpg",        linkedin: "https://www.linkedin.com/in/jakub-kapitan-135341326/" },
  { id:  6, name: "Jakub Koziel",        photo: "/assets/members/jakub_koziel.jpg",         linkedin: "https://www.linkedin.com/in/jakubkoziel/" },
  { id:  7, name: "Jakub Tybuski",       photo: "/assets/members/jakub_tybuski.png",        linkedin: "https://www.linkedin.com/in/jakub-tyburski-417245220/" },
  { id:  8, name: "Joanna Stolarska",    photo: "/assets/members/joanna_stolarska.jpg",     linkedin: "https://www.linkedin.com/in/joannastolarska/" },
  { id:  9, name: "Julia Nobis",         photo: "/assets/members/julia_nobis.jpg",          linkedin: "https://www.linkedin.com/in/julia-nobis-906075294/" },
  { id: 10, name: "Kacper Warych",       photo: "/assets/members/kacper_warych.jpeg",       linkedin: "https://www.linkedin.com/in/kacperwarych/" },
  { id: 11, name: "Michał Antos",        photo: "/assets/members/michal_antos.jpg",         linkedin: "https://www.linkedin.com/in/michalantos/" },
  { id: 12, name: "Mikołaj Stawicki",    photo: "/assets/members/mikolaj_stawicki.jpg",     linkedin: "https://www.linkedin.com/in/mikolaj-stawicki/" },
  { id: 13, name: "Oskar Kalbarczyk",    photo: "/assets/members/oskar_kalbarczyk.png",     linkedin: "https://www.linkedin.com/in/oskalbarczyk/" },
  { id: 14, name: "Patryk Borkowski",    photo: "/assets/members/patryk_borkowski.jpeg",    linkedin: "https://www.linkedin.com/in/patryk-borkowski-pb/" },
  { id: 15, name: "Patryk Ostern",       photo: "/assets/members/patryk_ostern.jpg",        linkedin: "https://www.linkedin.com/in/patrykostern/" },
  { id: 16, name: "Piotr Czechowski",    photo: "/assets/members/piotr_czechowski.jpg",     linkedin: "https://www.linkedin.com/in/piotr-czechowski4/" },
  { id: 17, name: "Rem Karablin",        photo: "/assets/members/rem_karablin.jpg",         linkedin: "https://www.linkedin.com/in/rem-karablin/" },
  { id: 18, name: "Sebastian Wodecki",   photo: "/assets/members/sebastian_wodecki.jpg",    linkedin: "https://www.linkedin.com/in/sebastian-wodecki/" },
  { id: 19, name: "Tomasz Brzezinski",   photo: "/assets/members/tomasz_brzezinski.jpg",    linkedin: "https://www.linkedin.com/in/tomaszbrzezinski142/" },
  { id: 20, name: "Yauheni Futryn",      photo: "/assets/members/yauheni_futryn.jpeg",      linkedin: "https://www.linkedin.com/in/yauhenifutryn/" },
  { id: 21, name: "Yevhen Maltsev",      photo: "/assets/members/yevhen_maltsev.jpg",       linkedin: "https://www.linkedin.com/in/yevhen-maltsev-990500296/" },
];


export default function PeoplePage() {
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
                  Our People
                </p>
                <h1 className="text-[clamp(48px,7vw,100px)] font-black text-white uppercase leading-none tracking-tight mb-10">
                  The faces<br />behind<br />START Warsaw.
                </h1>
                <p className="text-white/90 text-[clamp(15px,1.4vw,18px)] leading-relaxed font-semibold">
                  Meet the students, founders, and operators who make START Warsaw happen
                  — batch after batch.
                </p>
              </div>

              {/* Right — image flush to section bottom */}
              <div className="relative h-[520px] lg:h-[680px] overflow-hidden">
                <Image
                  src="/assets/images/hero-1.jpg"
                  alt="START Warsaw people"
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

        {/* ── Community Analytics ── */}
        <section className="bg-navy-dark border-t border-white/5 py-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
              Community Analytics
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-black text-white uppercase leading-tight tracking-tight mb-16">
              Who are we?
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {/* Gender */}
              <div className="bg-navy-dark p-10">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">
                  Gender Distribution
                </p>
                <div className="space-y-5">
                  {[{ label: "Male", pct: 80 }, { label: "Female", pct: 20 }].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white text-[13px] font-semibold">{item.label}</span>
                        <span className="text-pink text-[13px] font-bold">{item.pct}%</span>
                      </div>
                      <Bar pct={item.pct} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Study Fields */}
              <div className="bg-navy-dark p-10">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">
                  Top Study Fields
                </p>
                <div className="space-y-5">
                  {studyFields.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white text-[13px] font-semibold">{item.label}</span>
                        <span className="text-pink text-[13px] font-bold">{item.pct}%</span>
                      </div>
                      <Bar pct={item.pct} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Universities */}
              <div className="bg-navy-dark p-10">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">
                  Top Universities
                </p>
                <div className="space-y-5">
                  {universities.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white text-[13px] font-semibold">{item.label}</span>
                        <span className="text-pink text-[13px] font-bold">{item.pct}%</span>
                      </div>
                      <Bar pct={item.pct} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Current Board ── */}
        <section className="border-t border-white/5 py-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
              Board 25–26
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-black text-white uppercase leading-tight tracking-tight mb-16">
              Current Board
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {currentBoard.map((member) => (
                <a
                  key={member.name}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-navy-dark hover:border-white/25 transition-colors block"
                >
                  {/* Photo */}
                  <div className="relative h-72 w-full overflow-hidden">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-white/5 flex items-center justify-center">
                        <span className="text-white/10 text-[80px] font-black">{member.name[0]}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-white font-black text-[16px] mb-1 leading-snug">{member.name}</div>
                      <div className="text-pink text-[10px] uppercase tracking-[0.18em] font-semibold">{member.role}</div>
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

        {/* ── Batch Alpha ── */}
        <section className="bg-navy-dark border-t border-white/5 py-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
                Member Batches
              </p>
              <h2 className="text-[clamp(32px,4vw,52px)] font-black text-white uppercase leading-tight tracking-tight">
                Batch Alpha
              </h2>
              <p className="text-white/40 text-[13px] uppercase tracking-[0.15em] mt-2 font-semibold">
                First Generation · 21 Members
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {batchAlphaMembers.map((m) => (
                <a key={m.id} href={m.linkedin} target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden border border-white/10 bg-navy hover:border-white/25 transition-colors block">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-400"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                    />
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between gap-2">
                    <p className="text-white text-[12px] font-bold leading-snug truncate">{m.name}</p>
                    <svg className="shrink-0 text-white/30 group-hover:text-white/70 transition-colors" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 py-28 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-6">
              Join Us
            </p>
            <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-tight tracking-tight mb-8">
              Ready to become part of the story?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="bg-pink text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity rounded-xl"
              >
                Apply Now
              </Link>
              <Link
                href="/about-us"
                className="border border-white/30 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/60 transition-all rounded-xl"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
