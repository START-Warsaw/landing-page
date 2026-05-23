import Image from "next/image";
import Link from "next/link";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const studyFields = [
  { label: "Computer Science", pct: 40 },
  { label: "Business Administration", pct: 30 },
  { label: "Engineering", pct: 16 },
  { label: "Others", pct: 14 },
];

const universities = [
  { label: "WUT", pct: 65 },
  { label: "UW", pct: 20 },
  { label: "SGH", pct: 7 },
  { label: "Others", pct: 8 },
];

function Bar({ pct, color = "bg-pink" }: { pct: number; color?: string }) {
  return (
    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
    </div>
  );
}

const currentBoard = [
  { name: "Patryk Ostern",     role: "Co-President",      dept: "Executive",    photo: "/assets/members/patryk_ostern.jpg" },
  { name: "Adam Pasierski",    role: "Co-President",      dept: "Executive",    photo: "/assets/members/adam_pasierski.jpg" },
  { name: "Jakub Tybuski",     role: "Head of FinOps",    dept: "FinOps",       photo: "/assets/members/jakub_tybuski.png" },
  { name: "Julia Nobis",       role: "Head of Events",    dept: "Events",       photo: "/assets/members/julia_nobis.jpg" },
  { name: "Tomasz Brzezinski", role: "Head of Marketing", dept: "Marketing",    photo: "/assets/members/tomasz_brzezinski.jpg" },
];

const batchAlphaMembers = [
  { id:  1, name: "Adam Pasierski",      photo: "/assets/members/adam_pasierski.jpg" },
  { id:  2, name: "Aleksandra Kogowska", photo: "/assets/members/aleksandra_kogowska.jpeg" },
  { id:  3, name: "Ireneusz Dawidowicz", photo: "/assets/members/ireneusz_dawidowicz.jpeg" },
  { id:  4, name: "Iza Brudzinska",      photo: "/assets/members/iza_brudzinska.jpeg" },
  { id:  5, name: "Jakub Kapitan",       photo: "/assets/members/jakub_kapitan.jpg" },
  { id:  6, name: "Jakub Koziel",        photo: "/assets/members/jakub_koziel.jpg" },
  { id:  7, name: "Jakub Tybuski",       photo: "/assets/members/jakub_tybuski.png" },
  { id:  8, name: "Joanna Stolarska",    photo: "/assets/members/joanna_stolarska.jpg" },
  { id:  9, name: "Julia Nobis",         photo: "/assets/members/julia_nobis.jpg" },
  { id: 10, name: "Kacper Warych",       photo: "/assets/members/kacper_warych.jpeg" },
  { id: 11, name: "Michał Antos",        photo: "/assets/members/michal_antos.jpg" },
  { id: 12, name: "Mikołaj Stawicki",    photo: "/assets/members/mikolaj_stawicki.jpg" },
  { id: 13, name: "Oskar Kalbarczyk",    photo: "/assets/members/oskar_kalbarczyk.png" },
  { id: 14, name: "Patryk Borkowski",    photo: "/assets/members/patryk_borkowski.jpeg" },
  { id: 15, name: "Patryk Ostern",       photo: "/assets/members/patryk_ostern.jpg" },
  { id: 16, name: "Piotr Czechowski",    photo: "/assets/members/piotr_czechowski.jpg" },
  { id: 17, name: "Rem Karablin",        photo: "/assets/members/rem_karablin.jpg" },
  { id: 18, name: "Sebastian Wodecki",   photo: "/assets/members/sebastian_wodecki.jpg" },
  { id: 19, name: "Tomasz Brzezinski",   photo: "/assets/members/tomasz_brzezinski.jpg" },
  { id: 20, name: "Yauheni Futryn",      photo: "/assets/members/yauheni_futryn.jpeg" },
  { id: 21, name: "Yevhen Maltsev",      photo: "/assets/members/yevhen_maltsev.jpg" },
];


export default function PeoplePage() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main className="bg-navy text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-[120px] pb-24 px-6 overflow-hidden min-h-[620px] flex items-end">
          <Image
            src="/assets/images/hero-2.jpg"
            alt="START Warsaw community"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy" />

          <div className="max-w-[1400px] mx-auto relative z-10 w-full pb-8">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.3em] mb-6">
              Our People
            </p>
            <h1 className="text-[clamp(48px,8vw,110px)] font-black text-white uppercase leading-none tracking-tight mb-8 max-w-4xl">
              The faces<br />behind<br />START Warsaw.
            </h1>
            <p className="text-white/90 text-[clamp(15px,1.5vw,19px)] max-w-xl leading-relaxed font-semibold">
              Meet the students, founders, and operators who make START Warsaw happen
              — batch after batch.
            </p>
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
                  {[{ label: "Male", pct: 59 }, { label: "Female", pct: 41 }].map((item) => (
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
                <div
                  key={member.name}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-navy-dark hover:border-white/25 transition-colors"
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
                  <div className="p-6">
                    <div className="text-white font-black text-[16px] mb-1 leading-snug">{member.name}</div>
                    <div className="text-pink text-[10px] uppercase tracking-[0.18em] font-semibold">{member.role}</div>
                  </div>
                </div>
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
                <div key={m.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-navy hover:border-white/25 transition-colors">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-400"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-white text-[12px] font-bold leading-snug truncate">{m.name}</p>
                  </div>
                </div>
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
