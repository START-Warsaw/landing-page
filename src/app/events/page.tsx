import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Events – START Warsaw" };

const upcomingEvents = [
  {
    title: "START Warsaw Demo Day — Batch Alpha",
    date: "May 30, 2026",
    time: "12:00 – 15:30",
    location: "Rotunda PKO Bank Polski, Warsaw",
    description:
      "Watch the first-ever START Warsaw cohort present their startups to founders, investors, and the wider Warsaw ecosystem. Batch Alpha's Demo Day is open to all.",
    registered: 58,
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=800,height=450/uploads/jb/edde21b5-ede0-47c2-ba9d-5c3cd73b8331.jpg",
    lumaUrl: "https://luma.com/na2nxob0",
    tag: "Demo Day",
  },
];

const pastEvents = [
  {
    title: "START Warsaw After Hours: No Slides, No Decks, Just People",
    date: "April 2026",
    location: "Alternatywa, Warsaw",
    description:
      "An informal evening for founders, students, and curious minds — conversations over drinks, no pitch decks allowed.",
    image:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=800,height=450/event-covers/o0/3fdca25f-3b62-44a4-8dbc-8345bbbba11e.jpg",
    lumaUrl: "https://luma.com/nj4ycht7",
    tag: "Networking",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <div className="h-[68px]" />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden border-b border-white/5">
        <div
          className="animate-blob absolute right-[10%] top-10 h-[500px] w-[500px] rounded-full blur-[128px] pointer-events-none"
          style={{ backgroundColor: "rgba(128,1,31,0.15)" }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
            Events
          </p>
          <h1 className="text-[clamp(48px,7vw,96px)] font-black text-white uppercase leading-none tracking-tight mb-8">
            Where the<br />Community Meets
          </h1>
          <p className="text-white/60 text-[16px] leading-relaxed max-w-xl">
            From demo days to casual after-hours — every event is a chance to connect,
            learn, and build together.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-14">
            Upcoming
          </p>

          {upcomingEvents.map((event, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Image */}
              <div className="relative aspect-video bg-navy-dark rounded-2xl overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-pink text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg">
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center py-4">
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-black text-white uppercase leading-tight tracking-tight mb-6">
                  {event.title}
                </h2>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/60 text-[13px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {event.date} · {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-[13px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {event.location}
                  </div>
                </div>

                <p className="text-white/55 text-[14px] leading-relaxed mb-10">
                  {event.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={event.lumaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors rounded-xl"
                  >
                    Register on Luma
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-14">
            Past Events
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, i) => (
              <div key={i} className="bg-navy-dark rounded-2xl overflow-hidden group">
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  {event.image ? (
                    <>
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-navy flex items-center justify-center">
                      <span className="text-white/10 text-[80px] font-black uppercase tracking-widest">
                        SW
                      </span>
                    </div>
                  )}
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg">
                      {event.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-white/40 text-[11px] uppercase tracking-[0.15em] font-semibold mb-3">
                    {event.date} · {event.location}
                  </div>
                  <h3 className="text-white font-black text-[18px] uppercase leading-tight tracking-tight mb-4">
                    {event.title}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed mb-6">
                    {event.description}
                  </p>
                  {event.lumaUrl && (
                    <a
                      href={event.lumaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors inline-flex items-center gap-2 group/link"
                    >
                      View on Luma
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark border-t border-white/5 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
            Stay in the loop
          </p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-white uppercase leading-tight tracking-tight mb-4">
            Don&apos;t miss what&apos;s next
          </h2>
          <p className="text-white/55 text-[14px] mb-10 max-w-md mx-auto">
            Follow us on social media or apply to join START Warsaw and get early access to every event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-black px-12 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors rounded-xl"
            >
              Apply Now
            </Link>
            <a
              href="https://www.instagram.com/startwarsaw"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-12 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors rounded-xl"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
