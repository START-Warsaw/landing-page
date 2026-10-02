"use client";

import { useSyncExternalStore } from "react";

const DEADLINE = new Date("2026-10-18T23:59:00+02:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  closed: boolean;
};

function computeTimeLeft(): TimeLeft {
  const diff = DEADLINE - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, closed: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    closed: false,
  };
}

let cachedSnapshot: TimeLeft | null = null;

// useSyncExternalStore requires a stable reference when nothing changed,
// otherwise it treats every render as a new value and throws.
function getSnapshot(): TimeLeft {
  const next = computeTimeLeft();
  if (
    cachedSnapshot &&
    cachedSnapshot.days === next.days &&
    cachedSnapshot.hours === next.hours &&
    cachedSnapshot.minutes === next.minutes &&
    cachedSnapshot.seconds === next.seconds &&
    cachedSnapshot.closed === next.closed
  ) {
    return cachedSnapshot;
  }
  cachedSnapshot = next;
  return next;
}

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

function getServerSnapshot(): TimeLeft | null {
  return null;
}

export default function Countdown() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (time?.closed) {
    return (
      <p className="text-white/80 text-[13px] font-semibold">
        Applications are now closed for this cohort.
      </p>
    );
  }

  const units = [
    { value: time?.days, label: "Days" },
    { value: time?.hours, label: "Hours" },
    { value: time?.minutes, label: "Minutes" },
    { value: time?.seconds, label: "Seconds" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-lg">
      {units.map((u) => (
        <div
          key={u.label}
          className="bg-navy rounded-2xl border border-white/10 px-2 py-5 sm:py-6 text-center"
        >
          <div className="text-white text-[32px] sm:text-[44px] font-black leading-none tabular-nums">
            {u.value === undefined ? "–" : String(u.value).padStart(2, "0")}
          </div>
          <div className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-bold mt-2">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
