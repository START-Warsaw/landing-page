import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <Navbar />
      <div className="h-[68px]" />
      <main className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 pb-24">
        <p className="text-white/30 text-[11px] uppercase tracking-[0.3em] font-semibold mb-6">
          {title}
        </p>
        <h1 className="text-[clamp(48px,8vw,96px)] font-black text-white uppercase leading-none tracking-tight text-center mb-8">
          Coming<br />Soon
        </h1>
        <p className="text-white/40 text-[15px] mb-12 text-center max-w-sm leading-relaxed">
          This page is under construction. Check back soon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
