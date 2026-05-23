"use client";
import { useState } from "react";

const departments = [
  {
    name: "People",
    icon: "👥",
    iconBg: "bg-indigo-500/20",
    description: "Build and nurture the START Warsaw community from the inside out.",
    responsibilities: [
      "Lead recruitment and onboarding of new members",
      "Drive member engagement and internal culture",
      "Coordinate internal communications and rituals",
      "Support member growth and wellbeing",
    ],
  },
  {
    name: "Marketing",
    icon: "📣",
    iconBg: "bg-pink/20",
    description: "Shape START Warsaw's voice and grow our presence in Warsaw's startup scene.",
    responsibilities: [
      "Manage social media and brand voice",
      "Create content — visuals, copy, video",
      "Build awareness around START Warsaw events",
      "Grow our audience and community online",
    ],
  },
  {
    name: "FinOps",
    icon: "💰",
    iconBg: "bg-yellow-500/20",
    description: "Keep START Warsaw financially healthy and build the tools that power us.",
    responsibilities: [
      "Budget planning and financial reporting",
      "Grant and funding applications",
      "Handle contracts and compliance",
      "Build internal tools like financial dashboards",
    ],
  },
  {
    name: "Partnerships",
    icon: "🤝",
    iconBg: "bg-emerald-500/20",
    description: "Build the relationships that fuel START Warsaw's growth and give members exclusive access.",
    responsibilities: [
      "Source and manage corporate sponsors",
      "Build relationships with investors and VCs",
      "Negotiate deals and perks for members",
      "Represent START Warsaw at external events",
    ],
  },
  {
    name: "Events",
    icon: "🎉",
    iconBg: "bg-purple-500/20",
    description: "Plan and execute START Warsaw's events from first idea to final applause.",
    responsibilities: [
      "Plan and run pitch nights and founder talks",
      "Handle logistics, venues, and vendors",
      "Coordinate internal and external events end-to-end",
      "Own the member experience on the ground",
    ],
  },
];

// Arc geometry — circle center to the right, arc bows left
const CX = 500;
const CY = 300;
const R = 300;
const ANGLES = [-50, -25, 0, 25, 50]; // degrees, top → bottom

function getArcPoint(angleDeg: number) {
  const theta = ((180 - angleDeg) * Math.PI) / 180;
  return { x: CX + R * Math.cos(theta), y: CY + R * Math.sin(theta) };
}

const arcStart = getArcPoint(-50);
const arcEnd   = getArcPoint(50);

export default function DepartmentsSection() {
  const [active, setActive] = useState(2); // FinOps default
  const dept = departments[active];

  return (
    <section className="border-t border-white/5 py-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto mb-16">
        <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
          Where You Fit
        </p>
        <h2 className="text-[clamp(40px,5vw,72px)] font-black text-white uppercase leading-none tracking-tight">
          Our Departments
        </h2>
        <p className="text-white/50 text-[15px] mt-4">
          Choose your department and contribute to our community.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: detail card */}
        <div className="bg-[#08081a] border border-white/10 rounded-2xl p-10 min-h-[360px]">
          <div className={`w-12 h-12 rounded-xl ${dept.iconBg} flex items-center justify-center text-2xl mb-8`}>
            {dept.icon}
          </div>
          <h3 className="text-white font-black text-[26px] uppercase tracking-tight mb-4">
            {dept.name}
          </h3>
          <p className="text-white/50 text-[14px] leading-relaxed mb-8">
            {dept.description}
          </p>
          <p className="text-pink text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
            Responsibilities
          </p>
          <ul className="space-y-3">
            {dept.responsibilities.map((r) => (
              <li key={r} className="flex items-start gap-3 text-white/60 text-[13px] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-pink shrink-0 mt-[5px]" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: arc navigation (desktop) */}
        <div className="relative h-[540px] hidden lg:block">
          <svg
            viewBox="0 0 400 600"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Arc line */}
            <path
              d={`M ${arcStart.x.toFixed(1)} ${arcStart.y.toFixed(1)} A ${R} ${R} 0 0 0 ${arcEnd.x.toFixed(1)} ${arcEnd.y.toFixed(1)}`}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              fill="none"
            />

            {departments.map((d, i) => {
              const pt = getArcPoint(ANGLES[i]);
              const isActive = i === active;
              return (
                <g key={d.name} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
                  {isActive && (
                    <circle cx={pt.x} cy={pt.y} r={14} fill="none" stroke="#80011f" strokeWidth="1" strokeOpacity="0.35" />
                  )}
                  <circle
                    cx={pt.x} cy={pt.y}
                    r={isActive ? 6 : 3}
                    fill={isActive ? "#80011f" : "rgba(255,255,255,0.25)"}
                  />
                  <text
                    x={pt.x + (isActive ? 24 : 18)}
                    y={pt.y + 5}
                    fill={isActive ? "#ffffff" : "rgba(255,255,255,0.28)"}
                    fontSize={isActive ? "13" : "11"}
                    fontWeight={isActive ? "900" : "600"}
                    letterSpacing="2.5"
                    fontFamily="sans-serif"
                  >
                    {d.name.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile: pill buttons */}
        <div className="lg:hidden flex flex-wrap gap-3">
          {departments.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] border rounded-full transition-colors ${
                i === active
                  ? "border-pink text-white bg-pink/10"
                  : "border-white/15 text-white/40 hover:border-white/40 hover:text-white/70"
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
