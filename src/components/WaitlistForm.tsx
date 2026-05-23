"use client";

import { useActionState, useEffect, useRef } from "react";
import { joinWaitlist } from "@/app/apply/actions";

export default function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state?.success && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [state]);

  if (state?.success) {
    return (
      <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-6 py-4 max-w-md">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p className="text-white text-[13px] font-semibold">
          You&apos;re on the list! We&apos;ll notify you when applications open.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col sm:flex-row gap-3 max-w-md w-full">
      <div className="flex-1 relative">
        <input
          ref={inputRef}
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="w-full bg-white/10 border border-white/20 hover:border-white/35 focus:border-white/60 text-white placeholder-white/35 text-[14px] font-medium px-5 py-3.5 rounded-xl outline-none transition-colors"
        />
        {state?.error && (
          <p className="absolute -bottom-5 left-1 text-red-400 text-[11px] font-medium">
            {state.error}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-pink text-white text-[11px] font-bold uppercase tracking-[0.18em] px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 shrink-0 whitespace-nowrap"
      >
        {pending ? "Joining…" : "Join Waitlist"}
      </button>
    </form>
  );
}
