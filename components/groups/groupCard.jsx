"use client";
import React from "react";

export default function GroupCard({ title, members, desc, img }) {
  return (
    <div
      className="
        flex flex-col sm:flex-row 
        items-stretch justify-between 
        gap-4 sm:gap-6 
        rounded-3xl p-4 sm:p-6 
        shadow-md backdrop-blur-md 
        bg-white/40 dark:bg-slate-800/40 
        border border-white/20 dark:border-slate-700/40
        hover:bg-white/60 dark:hover:bg-slate-800/60 
        transition-all duration-300
      "
    >
      {/* Left section (text + button) */}
      <div className="flex flex-col gap-4 flex-[2_2_0px] justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-green-800 dark:text-green-400 text-sm font-medium">
            {members}
          </p>
          <p className="text-gray-900 dark:text-white text-lg sm:text-xl font-bold leading-tight">
            {title}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>

        <button
          className="
            flex items-center justify-center 
            rounded-full h-9 sm:h-10 px-5 
            bg-primary/80 text-white text-sm sm:text-base font-medium 
            backdrop-blur-md w-fit mt-2 
            hover:bg-primary transition-colors
          "
        >
          Join
        </button>
      </div>

      {/* Right section (image) */}
      <div
        className="
          w-full sm:w-48 md:w-56 lg:w-64 
          aspect-square bg-center bg-cover rounded-2xl 
          flex-shrink-0
        "
        style={{ backgroundImage: `url(${img})` }}
      />
    </div>
  );
}
