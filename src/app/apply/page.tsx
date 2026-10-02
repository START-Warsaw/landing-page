import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Countdown from "@/components/Countdown";
import {
  PencilLine,
  PhoneCall,
  RocketLaunch,
  Flag,
  UsersThree,
  Star,
  Target,
  Compass,
  Confetti,
  Globe,
  Rocket,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = { title: "Apply Now – START Warsaw" };

const NOTION_FORM_URL = "https://startwarsaw.notion.site/bab2e645a48d82df8250015ce308deff?pvs=105";

const process = [
  {
    step: "01",
    date: "Until Oct 18",
    Icon: PencilLine,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    title: "Written Application",
    description:
      "Fill out our application form. Tell us who you are, what drives you, and what you want to build. No CV needed — we care about mindset, not grades.",
  },
  {
    step: "02",
    date: "Oct 19 – 23",
    Icon: PhoneCall,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.12)",
    title: "Interview",
    description:
      "A 30-minute conversation with our team. We want to get to know you — your ideas, your ambitions, and how you think. Casual but real.",
  },
  {
    step: "03",
    date: "Oct 28",
    Icon: RocketLaunch,
    color: "#ec4899",
    bg: "rgba(236,72,153,0.12)",
    title: "Kickoff",
    description:
      "Welcome to START Warsaw. Meet your cohort, the team, and get ready for the sprint ahead.",
  },
  {
    step: "04",
    date: "Nov 5 – 26",
    Icon: Flag,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.12)",
    title: "START Sprint & Demo Day",
    description:
      "Three weeks of building — including the Integration Weekend (Nov 6–7) — wrapping up with Demo Day on Nov 26.",
  },
  {
    step: "05",
    date: "After 2 semesters",
    Icon: UsersThree,
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.12)",
    title: "Join the Core Team",
    description:
      "Stay active for at least two semesters and become part of the core team — joining a department and helping shape where START Warsaw goes next.",
  },
];

const values = [
  {
    Icon: Target,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    title: "Values Over Grades",
    description: "We don't ask for your GPA. We care about mindset, drive, and how you treat the people around you.",
  },
  {
    Icon: Compass,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.1)",
    title: "No Playbook",
    description: "There's no fixed path here. Members shape their own projects and chart their own way forward.",
  },
  {
    Icon: Confetti,
    color: "#ec4899",
    bg: "rgba(236,72,153,0.1)",
    title: "Failure Celebrated",
    description: "We'd rather you try and fail than never try. Our community treats setbacks as fuel, not shame.",
  },
  {
    Icon: Globe,
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.1)",
    title: "A Living Global Network",
    description: "Connect with the wider START network spanning 17+ countries and 4,000+ alumni and members worldwide.",
  },
  {
    Icon: Rocket,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    title: "Jumpstart Into Entrepreneurship",
    description: "Join a department, run real projects from day one, and build things that have visible impact.",
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
    q: "When can I apply?",
    a: "Applications are open now and close on October 18 at 23:59. Interviews run October 19–23, kickoff is October 28, and the START Sprint runs November 5–26, finishing with Demo Day.",
  },
];

function StartApplicationButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={NOTION_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-pink text-white text-[13px] font-bold uppercase tracking-[0.18em] px-9 py-4 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap ${className}`}
    >
      Start Application
      <ArrowRight size={16} weight="bold" />
    </a>
  );
}

function ApplicationCountdownCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl ${className}`}
    >
      <p className="text-white/70 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.3em] text-center mb-8">
        Applications Close In
      </p>
      <Countdown />
      <p className="text-white/60 text-[14px] text-center leading-relaxed mt-8 mb-8">
        Don&apos;t miss your chance to join START Warsaw.
        <br />
        Applications only open once per semester.
      </p>
      <StartApplicationButton className="w-full" />
    </div>
  );
}

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <div className="h-[68px]" />

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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.2em]">
                    Applications Open
                  </span>
                </div>

                <h1 className="text-[clamp(56px,7vw,110px)] font-black text-white uppercase leading-[0.88] tracking-tight mb-8">
                  Join Bold.<br />Stay Ahead.
                </h1>
                <p className="text-white/90 text-[clamp(16px,1.6vw,20px)] max-w-xl leading-relaxed font-semibold">
                  START Warsaw is selective, ambitious, and built for people who want to
                  build things that matter. Applications only open once per semester —
                  don&apos;t miss your chance.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ApplicationCountdownCard />
              </div>
            </div>
          </div>
        </section>

        {/* Why START */}
        <section className="border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
                Why START Warsaw
              </p>
              <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-none tracking-tight">
                What We Stand For
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
              {values.map((v) => (
                <div key={v.title} className="bg-navy p-10 flex flex-col gap-5">
                  <span
                    className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                    style={{ backgroundColor: v.bg }}
                  >
                    <v.Icon size={26} weight="duotone" color={v.color} />
                  </span>
                  <h3 className="text-white font-bold text-[17px] tracking-tight">{v.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application process */}
        <section className="bg-navy-dark border-b border-white/5 py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
                The Process
              </p>
              <h2 className="text-[clamp(36px,5vw,68px)] font-black text-white uppercase leading-none tracking-tight">
                How to Join
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
              {process.map((step) => (
                <div key={step.step} className="bg-navy-dark p-10 lg:p-12 flex flex-col gap-6">
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
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2"
                      style={{ color: step.color }}
                    >
                      {step.date}
                    </p>
                    <h3 className="text-white font-black text-[20px] uppercase tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-[14px] leading-relaxed">
                    {step.description}
                  </p>
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
                Applications Open Now
              </span>
            </div>
            <h2 className="text-[clamp(40px,6vw,88px)] font-black text-white uppercase leading-[0.9] tracking-tight mb-10">
              Ready to<br />Dare, Build,<br />Belong?
            </h2>
            <div className="flex justify-center">
              <ApplicationCountdownCard />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
