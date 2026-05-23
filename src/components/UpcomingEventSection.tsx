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
          <div className="relative min-h-[300px] bg-navy-dark rounded-2xl overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-contain"
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
                <span className="text-pink font-bold text-[15px]">◷</span>
                {event.date} · {event.time}
              </div>
              <div className="flex items-center gap-3 text-white/60 text-[13px]">
                <span className="text-pink font-bold text-[15px]">◎</span>
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
