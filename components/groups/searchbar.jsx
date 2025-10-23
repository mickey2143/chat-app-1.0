"use client";
import React from "react";

export default function SearchBar() {
  return (
    <div className="px-4 py-3">
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex items-center rounded-2xl h-full bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 pl-4 text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

          </span>
          <input
            type="text"
            placeholder="Search topics, interests..."
            className="flex-1 bg-transparent border-none outline-none h-full px-4 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300"
          />
        </div>
      </label>
    </div>
  );
}
