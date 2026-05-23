"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "/assets/images/hero-3.jpg",
  "/assets/images/hero-1.jpg",
  "/assets/images/hero-2.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background images */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Pink ambient blobs */}
      <div
        className="animate-blob absolute right-[15%] top-20 h-[500px] w-[500px] rounded-full blur-[128px] pointer-events-none"
        style={{ backgroundColor: "rgba(128,1,31,0.18)" }}
      />
      <div
        className="animate-blob animation-delay-2000 absolute bottom-20 left-[5%] h-[500px] w-[500px] rounded-full blur-[128px] pointer-events-none"
        style={{ backgroundColor: "rgba(128,1,31,0.12)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-[clamp(60px,11vw,130px)] font-black text-white uppercase leading-none tracking-[-0.025em] mb-8">
          DARE.<br />BUILD.<br />BELONG.
        </h1>
        <p className="text-white/90 text-[clamp(15px,1.5vw,19px)] max-w-2xl mx-auto mb-12 leading-relaxed font-semibold">
          START Warsaw is the largest student-run entrepreneurship community in Warsaw.
          We empower the next generation of founders to dare, build, and belong.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/apply"
            className="bg-white text-black px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors min-w-[180px] text-center rounded-xl"
          >
            APPLY NOW
          </Link>
          <Link
            href="/about-us"
            className="bg-pink text-white px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity min-w-[180px] text-center rounded-xl"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Slide indicators — pink for active */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-10 bg-pink" : "w-4 bg-white/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
