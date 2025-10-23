"use client";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5 sticky top-0 bg-background-dark/40 backdrop-blur-xl border-b border-white/10 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <button className="flex size-12 items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-300">
        <span className="material-symbols-outlined text-text-dark text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>

        </span>
      </button>
      <h2 className="text-lg text-white md:text-2xl font-extrabold text-center flex-1 tracking-tight">
        Manage Identity
      </h2>
      <div className="flex size-12 items-center justify-end" />
    </header>
  );
}
