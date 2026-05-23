import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  Megaphone,
  ChartLineUp,
  HandshakeIcon,
  CalendarCheck,
  Users,
  ChalkboardTeacher,
  Buildings,
} from "@phosphor-icons/react/dist/ssr";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = { title: "Partners – START Warsaw" };

const partners = [
  { name: "PKO BP",    src: "/assets/brands/PKO.svg" },
  { name: "Cursor",   src: "/assets/brands/cursor.svg" },
  { name: "Lovable",  src: "/assets/brands/lovable.svg" },
];
const doubled = [...partners, ...partners, ...partners, ...partners];

const whyPillars = [
  {
    Icon: GraduationCap,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    title: "Academic Excellence",
    description:
      "Direct access to Warsaw's top universities. Our network spans WUT, University of Warsaw, SGH, and more — connecting your organization with outstanding talent across engineering, business, and applied sciences.",
  },
  {
    Icon: Megaphone,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.12)",
    title: "Thought Leadership",
    description:
      "Share your expertise through workshops, talks, panels, and hands-on formats. START Warsaw gives your team a credible stage in front of ambitious students, builders, and future founders.",
  },
  {
    Icon: ChartLineUp,
    color: "#ec4899",
    bg: "rgba(236,72,153,0.12)",
    title: "Branding",
    description:
      "Build sustained visibility across our flagship events, communication channels, and partner activations. We help your brand show up in a context that feels relevant and high-signal.",
  },
  {
    Icon: HandshakeIcon,
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.12)",
    title: "Partner Network",
    description:
      "Become part of a strong Warsaw ecosystem of partners, founders, and student operators. The value goes beyond single events and creates long-term relationships across the network.",
  },
];

const collaborationOptions = [
  {
    Icon: CalendarCheck,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    num: "01",
    title: "Event Sponsorship",
    description:
      "Sponsor flagship events like our Annual Pitch Competition, Hackathons, and domain-specific networking events to gain visibility among hundreds of participants.",
  },
  {
    Icon: Users,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.1)",
    num: "02",
    title: "Recruit Top Talent",
    description:
      "Get direct access to our highly motivated member base through personal engagement, and exclusive hiring opportunities.",
  },
  {
    Icon: ChalkboardTeacher,
    color: "#ec4899",
    bg: "rgba(236,72,153,0.1)",
    num: "03",
    title: "Host Workshops",
    description:
      "Share your expertise by hosting workshops, masterclasses, or talks on topics relevant to your industry and our founders.",
  },
  {
    Icon: Buildings,
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.1)",
    num: "04",
    title: "Company Visits",
    description:
      "Invite our members to your offices for tours, info sessions, and networking to build relationships with potential future employees and partners.",
  },
];

const faqs = [
  {
    q: "How long is the timeline to collaboration?",
    a: "We can move fast and sometimes launch within days. Please check our event calendar first. If you want to join a specific event, contact us as early as possible so we can plan it with you.",
  },
  {
    q: "How can we recruit START Warsaw members?",
    a: "Partners get exclusive access to our talent pool through dedicated recruiting events, access of consenting community members and event attendees, and priority placement on our job board. You can also host office tours and info sessions.",
  },
  {
    q: "What events can partners sponsor?",
    a: "Partners can sponsor flagship formats like our Annual Pitch Competition, START Sprint, workshops, networking nights, and more. Reach out and we'll find or build the right format together.",
  },
  {
    q: "What is the partnership duration?",
    a: "Depending on your goals, partnerships can be event-specific or long-term — for example for one semester or a full year.",
  },
  {
    q: "How do we get started?",
    a: "Send us a message anytime. We'll quickly set up a short intro call to understand your goals and propose the best next steps.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <div className="h-[68px]" />

      <main className="bg-navy">

        {/* Hero — Warsaw skyline background */}
        <section className="relative border-b border-white/5 py-36 overflow-hidden">
          <Image
            src="/assets/images/warsaw_skyline.png"
            alt="Warsaw skyline"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
              Partnerships
            </p>
            <h1 className="text-[clamp(52px,9vw,120px)] font-black text-white uppercase leading-[0.9] tracking-tight mb-8 max-w-4xl">
              For Partners
            </h1>
            <p className="text-white/90 text-[clamp(16px,1.5vw,20px)] max-w-2xl leading-relaxed font-semibold">
              Partner with Warsaw&apos;s leading student entrepreneurship community
              and shape the future of innovation.
            </p>
          </div>
        </section>

        {/* Contact — Patryk Ostern */}
        <section className="border-b border-white/5 py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/40 text-[11px] uppercase tracking-[0.25em] font-semibold mb-4">
                  Get in Touch
                </p>
                <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-white uppercase leading-tight mb-4">
                  Let&apos;s Build<br />Something Together
                </h2>
                <p className="text-white/55 text-[15px] leading-relaxed">
                  Interested in partnering with START Warsaw? Reach out and we&apos;ll
                  find the right collaboration format for your goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/assets/members/patryk_ostern.jpg"
                    alt="Patryk Ostern"
                    fill
                    className="object-cover object-center"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-[18px] mb-1">Patryk Ostern</p>
                  <p className="text-white/50 text-[13px] uppercase tracking-[0.15em] mb-6">
                    Head of Partnerships
                  </p>
                  <a
                    href="mailto:contact@startwarsaw.org"
                    className="inline-block bg-pink text-white text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-3 hover:opacity-90 transition-opacity rounded-xl"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by */}
        <section className="bg-navy-dark border-b border-white/5 py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
            <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
              Selected Partners
            </p>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-white uppercase leading-tight">
              Supported Us Leading<br />Organizations
            </h2>
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />
            <div className="marquee-track gap-16 items-center">
              {doubled.map((partner, i) => (
                <div key={i} className="flex items-center justify-center h-16 px-12 shrink-0">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={140}
                    height={56}
                    className="object-contain max-h-12 filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-16">
              <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
                Why Start
              </p>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-black text-white uppercase leading-tight tracking-tight mb-6">
                Why Partner<br />With START Warsaw
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed">
                A practical partnership model built around academic excellence, thought
                leadership, branding, and strong network effects in Warsaw.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {whyPillars.map((pillar) => (
                <div key={pillar.title} className="bg-navy p-10 flex flex-col gap-5">
                  <span
                    className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                    style={{ backgroundColor: pillar.bg }}
                  >
                    <pillar.Icon size={26} weight="duotone" color={pillar.color} />
                  </span>
                  <h3 className="text-white font-bold text-[20px] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration options */}
        <section className="bg-navy-dark border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-16">
              <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
                Collaboration
              </p>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-black text-white uppercase leading-tight tracking-tight mb-6">
                What Partners<br />Can Do With Us
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed">
                Multiple ways to engage with our entrepreneurial community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {collaborationOptions.map((opt) => (
                <div key={opt.title} className="bg-navy-dark p-10 flex flex-col gap-5">
                  <span
                    className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                    style={{ backgroundColor: opt.bg }}
                  >
                    <opt.Icon size={26} weight="duotone" color={opt.color} />
                  </span>
                  <h3 className="text-white font-bold text-[20px] tracking-tight">
                    {opt.title}
                  </h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-16">
              <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
                FAQ
              </p>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-black text-white uppercase leading-tight tracking-tight">
                Frequently Asked<br />Questions
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-28 overflow-hidden">
          <Image
            src="/assets/images/warsaw_skyline.png"
            alt="Warsaw skyline"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/80" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <p className="text-pink text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
              Ready to Partner?
            </p>
            <h2 className="text-[clamp(36px,5vw,72px)] font-black text-white uppercase leading-tight tracking-tight mb-8">
              Ready to<br />Partner?
            </h2>
            <p className="text-white/60 text-[16px] max-w-xl mx-auto leading-relaxed mb-12">
              Join our network of leading companies and get in touch with ambitious
              students from WUT, University of Warsaw, and other Warsaw universities.
            </p>
            <a
              href="mailto:contact@startwarsaw.org"
              className="inline-block bg-white text-black text-[11px] font-bold tracking-[0.18em] uppercase px-12 py-4 hover:bg-white/90 transition-colors rounded-xl"
            >
              Get in Touch
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
