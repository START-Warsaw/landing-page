import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    img: "https://ndb.startmunich.de/dltemp/PxeXvy2L7zFjWkCi/1779549000000/noco/pxbzesbs22rjea4/mq62bo82l5r8qo4/cq9ecp4w15ha5cm/Screenshot%202026-05-05%20at%2020.18.05_MSK4f.png",
    tag: "Award",
    title: "Warsaw Hacking Legal",
    excerpt: "Warsaw Hacking Legal congratulated by Ministry of Justice",
  },
  {
    img: "https://ndb.startmunich.de/dltemp/7Q8xHVtrhADQpBzr/1779549000000/noco/pxbzesbs22rjea4/mq62bo82l5r8qo4/cq9ecp4w15ha5cm/Screenshot%202026-05-05%20at%2020.06.42_b6YVd.png",
    tag: "Alumni",
    title: "Cleara raises $3M",
    excerpt: "Huge congratulations to START Warsaw alumni!",
  },
  {
    img: "https://ndb.startmunich.de/dltemp/bEhBEKM2BeI7KS1j/1779549000000/noco/pxbzesbs22rjea4/mq62bo82l5r8qo4/cq9ecp4w15ha5cm/1775043428806-1_R32fr.jpg",
    tag: "Event",
    title: "START Labs: MedTech Edition",
    excerpt: "Something is coming. Block your calendar.",
  },
  {
    img: "https://ndb.startmunich.de/dltemp/4XvqH9jo0l_5C9W_/1779549000000/noco/pxbzesbs22rjea4/mq62bo82l5r8qo4/cq9ecp4w15ha5cm/1776167847102_jU3Gw.jpg",
    tag: "Event",
    title: "Founder Talk",
    excerpt: "Organized a Founder Talk in Warsaw with local partners",
  },
  {
    img: "https://ndb.startmunich.de/dltemp/Cfkh2IZXck5z9GfC/1779549000000/noco/pxbzesbs22rjea4/mq62bo82l5r8qo4/cq9ecp4w15ha5cm/1772726470218_zhFHa.jpg",
    tag: "Community",
    title: "BAY AREA",
    excerpt: "Our STARTies explore the San Francisco startup ecosystem.",
  },
  {
    img: "https://ndb.startmunich.de/dltemp/ZsE1OaZiHEoOdpdc/1779549000000/noco/pxbzesbs22rjea4/mq62bo82l5r8qo4/cq9ecp4w15ha5cm/1774299564315_W4bA7.jpg",
    tag: "Event",
    title: "Warsaw Hacking Legal",
    excerpt: "Apply now for Warsaw Hacking Legal 2026!",
  },
  {
    img: "https://ndb.startmunich.de/dltemp/p-_QFZUaSpywpxqL/1779549000000/noco/pxbzesbs22rjea4/mq62bo82l5r8qo4/cq9ecp4w15ha5cm/Scrhot%202026-04-22%20at%2014.03.42_Zk2_m.png",
    tag: "Alumni",
    title: "Lio raises €30M",
    excerpt: "Huge congratulations to START Warsaw alumni!",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-navy border-t border-white/5 py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Latest News
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] font-black text-white uppercase leading-tight tracking-tight">
              What&apos;s<br />happening
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/company/startwarsaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors inline-flex items-center gap-3 group shrink-0"
          >
            Follow on LinkedIn
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group cursor-pointer bg-navy-dark border border-white/5 hover:border-white/15 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-3 block">
                  {post.tag}
                </span>
                <h3 className="text-white font-bold text-[15px] leading-snug mb-2 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* See events CTA */}
        <div className="text-center mt-14">
          <Link
            href="/events"
            className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all group"
          >
            See our Events
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
