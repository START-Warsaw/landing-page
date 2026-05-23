import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "404 – START Warsaw" };

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="h-[68px]" />
      <main className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 pb-24 relative overflow-hidden">
        <div
          className="animate-blob absolute right-[15%] top-20 h-[500px] w-[500px] rounded-full blur-[128px] pointer-events-none"
          style={{ backgroundColor: "rgba(128,1,31,0.15)" }}
        />
        <div
          className="animate-blob animation-delay-2000 absolute bottom-20 left-[5%] h-[500px] w-[500px] rounded-full blur-[128px] pointer-events-none"
          style={{ backgroundColor: "rgba(128,1,31,0.1)" }}
        />

        <div className="relative z-10 text-center">
          <p className="text-white/20 text-[clamp(120px,20vw,240px)] font-black leading-none select-none tracking-tight">
            404
          </p>
          <p className="text-white/30 text-[11px] uppercase tracking-[0.3em] font-semibold -mt-4 mb-6">
            Page not found
          </p>
          <h1 className="text-[clamp(32px,5vw,64px)] font-black text-white uppercase leading-none tracking-tight mb-6">
            Lost in the<br />Startup Void
          </h1>
          <p className="text-white/40 text-[15px] mb-12 max-w-sm mx-auto leading-relaxed">
            This page doesn&apos;t exist. But great founders don&apos;t give up — head back and keep building.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-pink text-white px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity rounded-xl"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
