import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Legal Notice – START Warsaw" };

export default function LegalNoticePage() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main className="min-h-screen bg-navy px-6 pt-[140px] pb-24">
        <div className="max-w-[800px] mx-auto">
          <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-semibold mb-6">
            Legal
          </p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black text-white uppercase leading-none tracking-tight mb-16">
            Legal Notice
          </h1>

          <div className="space-y-12 text-white/60 text-[14px] leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">Entity Information</h2>
              <div className="border-l-2 border-pink/40 pl-5 space-y-2">
                <p><span className="text-white font-semibold">Organization:</span> START WARSAW</p>
                <p><span className="text-white font-semibold">Legal Structure:</span> Foundation (fundacja)</p>
                <p><span className="text-white font-semibold">Address:</span> Aleja Solidarności 68/121, 00-240 Warszawa, Poland</p>
                <p><span className="text-white font-semibold">KRS:</span> 0001240393</p>
                <p><span className="text-white font-semibold">NIP:</span> 5253089777</p>
                <p><span className="text-white font-semibold">REGON:</span> 544706575</p>
                <p><span className="text-white font-semibold">Contact:</span> contact@startwarsaw.org</p>
                <p><span className="text-white font-semibold">Website:</span> www.startwarsaw.org</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">Board Representation</h2>
              <ul className="list-none space-y-2 pl-4">
                {[
                  { name: "Patryk Ostern", role: "President" },
                  { name: "Adam Pasierski", role: "Vice-President" },
                  { name: "Jakub Tyburski", role: "Vice-President" },
                ].map((member) => (
                  <li key={member.name} className="flex items-start gap-3">
                    <span className="text-pink mt-1 text-[10px]">◆</span>
                    <span>
                      <span className="text-white font-semibold">{member.name}</span>
                      {" — "}{member.role}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">Liability for Content</h2>
              <p>
                The organization prepared website materials carefully but makes no guarantee regarding the accuracy, completeness, or timeliness of the information provided. Under Polish electronic services law, we take responsibility for our own content and will remove unlawful material upon discovery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">Liability for Links</h2>
              <p>
                External links on this site are beyond our control. Third-party website operators bear responsibility for their own content. The foundation commits to removing illegal links promptly upon notification.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">Copyright Protection</h2>
              <p>
                All published materials including text, graphics, logos, and images receive copyright protection under Polish and international law. Reproduction requires prior written consent from the respective creators.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-[18px] font-bold uppercase tracking-wide">Privacy Compliance</h2>
              <p>
                Personal data processing follows GDPR and Polish data protection regulations. For full details, please refer to our{" "}
                <a href="/privacy-policy" className="text-white hover:text-pink transition-colors underline underline-offset-4">
                  Privacy Policy
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
