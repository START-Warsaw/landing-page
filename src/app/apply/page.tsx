import Image from "next/image";
import Link from "next/link";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PencilLine,
  PhoneCall,
  RocketLaunch,
  Star,
  Users,
  Lightbulb,
  Globe,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = { title: "Apply Now – START Warsaw" };

const process = [
  {
    step: "01",
    Icon: PencilLine,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    title: "Written Application",
    description:
      "Fill out our application form. Tell us who you are, what drives you, and what you want to build. No CV needed — we care about mindset, not grades.",
  },
  {
    step: "02",
    Icon: PhoneCall,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.12)",
    title: "Interview",
    description:
      "A 30-minute conversation with our team. We want to get to know you — your ideas, your ambitions, and how you think. Casual but real.",
  },
  {
    step: "03",
    Icon: RocketLaunch,
    color: "#ec4899",
    bg: "rgba(236,72,153,0.12)",
    title: "Onboarding Sprint",
    description:
      "Welcome to START Warsaw. Your first month is an intensive sprint — build something real, meet your cohort, and find your place in the community.",
  },
];

const benefits = [
  {
    Icon: Users,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    title: "Tight-Knit Community",
    description: "Join a small, high-quality cohort of builders, thinkers, and founders who push each other forward.",
  },
  {
    Icon: Lightbulb,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.1)",
    title: "Real Projects",
    description: "Work on things that matter. Every department runs live projects with visible impact — no busy work.",
  },
  {
    Icon: Globe,
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.1)",
    title: "Global Network",
    description: "Connect with the wider START network spanning 17+ countries and 4,000+ alumni and members worldwide.",
  },
  {
    Icon: Trophy,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    title: "Exclusive Access",
    description: "VIP entry to events, investor introductions, partner perks, and opportunities you won't find elsewhere.",
  },
];

const faqs = [
  {
    q: "Who can apply?",
    a: "Any student currently enrolled at a Warsaw university — regardless of faculty, year, or background. We value curiosity and drive over grades or pedigree.",
  },
  {
    q: "How competitive is the process?",
    a: "We accept a small cohort each semester to keep the community tight and high-quality. We're not looking for a type — we're looking for people who genuinely want to build.",
  },
  {
    q: "How much time does it require?",
    a: "Expect around 4–6 hours per week. Enough to be meaningfully involved, not enough to crowd out your studies or other commitments.",
  },
  {
    q: "Can I apply if I don't have a startup idea?",
    a: "Absolutely. Most members join without one. What matters is that you're curious, collaborative, and ready to contribute.",
  },
  {
    q: "When is the next application window?",
    a: "Applications open in October 2026 for the spring semester cohort. Drop your email below and we'll notify you the moment they open.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />

      <main className="bg-navy">

        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
          <Image
            src="/assets/images/hero-3.jpg"
            alt="START Warsaw community"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/70" />

          {/* Pink blob */}
          <div
            className="animate-blob absolute right-[10%] top-20 h-[500px] w-[500px] rounded-full blur-[128px] pointer-events-none"
            style={{ backgroundColor: "rgba(128,1,31,0.2)" }}
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-36">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.2em]">
                Next batch opens October 2026
              </span>
            </div>

            <h1 className="text-[clamp(56px,10vw,130px)] font-black text-white uppercase leading-[0.88] tracking-tight mb-8 max-w-5xl">
              Join Bold.<br />Stay Ahead.
            </h1>
            <p className="text-white/90 text-[clamp(16px,1.6vw,20px)] max-w-xl leading-relaxed font-semibold mb-12">
              START Warsaw is selective, ambitious, and built for people who want to
              build things that matter. Applications open every semester.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://startwarsaw.notion.site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors rounded-xl"
              >
                Apply Now
              </a>
              <Link
                href="/about-us"
                className="inline-block border border-white/25 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all rounded-xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Application process */}
        <section className="border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
                The Process
              </p>
              <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-none tracking-tight">
                How to Join
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {process.map((step) => (
                <div key={step.step} className="bg-navy p-10 lg:p-12 flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <span
                      className="w-12 h-12 flex items-center justify-center rounded-xl"
                      style={{ backgroundColor: step.bg }}
                    >
                      <step.Icon size={26} weight="duotone" color={step.color} />
                    </span>
                    <span className="text-white/10 text-[52px] font-black leading-none select-none">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-[20px] uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-navy-dark border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
                Membership
              </p>
              <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-none tracking-tight">
                What You Get
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {benefits.map((b) => (
                <div key={b.title} className="bg-navy-dark p-10 flex flex-col gap-5">
                  <span
                    className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                    style={{ backgroundColor: b.bg }}
                  >
                    <b.Icon size={26} weight="duotone" color={b.color} />
                  </span>
                  <h3 className="text-white font-bold text-[17px] tracking-tight">{b.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-b border-white/5 py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {[
                { value: "2×", label: "Per year" },
                { value: "21", label: "Active members" },
                { value: "17+", label: "Countries in network" },
                { value: "4000+", label: "Alumni worldwide" },
              ].map((s) => (
                <div key={s.label} className="bg-navy px-10 py-10 text-center">
                  <div className="text-[clamp(36px,4vw,56px)] font-black text-white leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-16">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
                FAQ
              </p>
              <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-none tracking-tight">
                Questions
              </h2>
            </div>
            <div className="max-w-3xl divide-y divide-white/10">
              {faqs.map((faq, i) => (
                <div key={i} className="py-8">
                  <p className="text-white font-bold text-[17px] mb-3">{faq.q}</p>
                  <p className="text-white/55 text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-36 overflow-hidden">
          <Image
            src="/assets/images/hero-1.jpg"
            alt="START Warsaw"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/78" />
          <div
            className="animate-blob absolute left-[10%] bottom-0 h-[500px] w-[500px] rounded-full blur-[128px] pointer-events-none"
            style={{ backgroundColor: "rgba(128,1,31,0.25)" }}
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-10">
              <Star size={14} weight="duotone" color="#f59e0b" />
              <span className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.2em]">
                Applications open October 2026
              </span>
            </div>
            <h2 className="text-[clamp(40px,6vw,88px)] font-black text-white uppercase leading-[0.9] tracking-tight mb-8">
              Ready to<br />Dare, Build,<br />Belong?
            </h2>
            <p className="text-white/60 text-[16px] max-w-lg mx-auto leading-relaxed mb-12">
              The next cohort opens in October. Apply early — spots are limited and
              go fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://startwarsaw.notion.site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-12 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors rounded-xl"
              >
                Apply Now
              </a>
              <Link
                href="/events"
                className="inline-block border border-white/25 text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all rounded-xl"
              >
                See Our Events
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
