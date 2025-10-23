"use client";
import React from "react";

export default function FloatingButton() {
  return (
    <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/80 text-white shadow-lg backdrop-blur-md border border-white/20">
      <span className="material-symbols-outlined text-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</span>
    </button>
  );
}
