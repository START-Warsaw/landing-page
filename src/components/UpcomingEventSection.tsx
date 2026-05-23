import Image from "next/image";
import Link from "next/link";

const event = {
  title: "START Warsaw Demo Day — Batch Alpha",
  date: "May 30, 2026",
  time: "12:00 – 15:30",
  location: "Rotunda PKO Bank Polski, Warsaw",
  registered: 58,
  description:
    "Watch the first-ever START Warsaw cohort present their startups to founders, investors, and the wider Warsaw ecosystem. Batch Alpha's Demo Day is open to all.",
  image:
    "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=800,height=450/uploads/jb/edde21b5-ede0-47c2-ba9d-5c3cd73b8331.jpg",
  lumaUrl: "https://luma.com/na2nxob0",
  tag: "Demo Day",
};

export default function UpcomingEventSection() {
  return (
    <section className="bg-navy border-t border-white/5 py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.25em] mb-14">
          Upcoming Event
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
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

            <div className="flex gap-4 flex-wrap">
              <a
                href={event.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors rounded-xl"
              >
                Register on Luma
              </a>
              <Link
                href="/events"
                className="border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors rounded-xl"
              >
                All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
