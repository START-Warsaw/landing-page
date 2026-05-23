import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy Policy – START Warsaw" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="h-[68px]" />
      <main className="min-h-screen bg-navy px-6 pt-[140px] pb-24">
        <div className="max-w-[800px] mx-auto">
          <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-semibold mb-6">
            Legal
          </p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black text-white uppercase leading-none tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/30 text-[13px] mb-16">Last updated: March 2026</p>

          <div className="space-y-12 text-white/60 text-[14px] leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">1. Introduction</h2>
              <p>
                START Warsaw (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) describes how it gathers and manages personal data when visitors access www.startwarsaw.org or participate in recruitment activities. The organization follows Regulation (EU) 2016/679 (GDPR) and Polish data protection requirements.
              </p>
              <div className="border-l-2 border-pink/40 pl-5 space-y-1">
                <p><span className="text-white font-semibold">Data Controller:</span> START WARSAW</p>
                <p>Aleja Solidarności 68/121, 00-240 Warszawa, Poland</p>
                <p><span className="text-white font-semibold">KRS:</span> 0001240393</p>
                <p><span className="text-white font-semibold">NIP:</span> 5253089777</p>
                <p><span className="text-white font-semibold">REGON:</span> 544706575</p>
                <p><span className="text-white font-semibold">Email:</span> contact@startwarsaw.org</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">2. Scope and Purpose of Data Processing</h2>

              <div className="space-y-4">
                <h3 className="text-white/80 font-semibold">a) Recruitment Application</h3>
                <p>Information collected through the recruitment form on startwarsaw.notion.site includes:</p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "First and last name",
                    "Email address",
                    "Field of study",
                    "Gender",
                    "Nationality",
                    "Languages spoken",
                    "LinkedIn profile URL and optional shared links",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-pink mt-1 text-[10px]">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p><span className="text-white/80 font-semibold">Purpose:</span> Application evaluation and recruitment management.</p>
                <p><span className="text-white/80 font-semibold">Legal basis:</span> Your consent (Art. 6(1)(a) GDPR), given at the time of submission. Optional separate consents cover receiving activity updates and sharing profiles with partner organizations.</p>
                <p><span className="text-white/80 font-semibold">Retention:</span> Data persists until consent withdrawal or recruitment purpose completion, whichever occurs sooner.</p>
                <p><span className="text-white/80 font-semibold">Third-party processor:</span> Notion Labs, Inc. handles application storage via Notion&apos;s platform.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white/80 font-semibold">b) Website Analytics</h3>
                <p>Google Analytics 4 collects:</p>
                <ul className="list-none space-y-2 pl-4">
                  {[
                    "Anonymised IP address",
                    "Browser and device information",
                    "Pages visited and duration",
                    "Referring website source",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-pink mt-1 text-[10px]">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p><span className="text-white/80 font-semibold">Purpose:</span> Website performance and content enhancement.</p>
                <p><span className="text-white/80 font-semibold">Legal basis:</span> Consent obtained through cookie banner.</p>
                <p><span className="text-white/80 font-semibold">Retention:</span> Analytics data remains for 14 months by default.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">3. Cookies</h2>
              <p>
                The organization uses cookies exclusively for Google Analytics purposes. Users may manage consent preferences through browser settings or by contacting contact@startwarsaw.org. We do not use any tracking, advertising, or profiling cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">4. Links to Third-Party Websites</h2>
              <p>
                External website links lack embedded trackers, and no platform data sharing occurs through the site itself. Third-party privacy policies apply once users follow external links.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">5. Your Rights</h2>
              <p>GDPR grants individuals the ability to:</p>
              <ul className="list-none space-y-2 pl-4">
                {[
                  "Access held personal data",
                  "Correct inaccurate or incomplete information",
                  'Delete personal data ("right to be forgotten")',
                  "Withdraw consent at any time, without affecting the lawfulness of prior processing",
                  "Object to or restrict data processing",
                  "File complaints with UODO (Polish supervisory authority), ul. Stawki 2, 00-193 Warszawa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-pink mt-1 text-[10px]">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>Contact contact@startwarsaw.org to exercise rights, with a 30-day response commitment.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">6. Data Security</h2>
              <p>
                Technical and organizational safeguards protect personal data against unauthorized access, loss, or misuse. Webflow manages waitlist data per its privacy practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">7. Changes to This Policy</h2>
              <p>
                Policy updates appear with revised dates. Regular review is encouraged.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
