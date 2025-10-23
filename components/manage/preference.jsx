"use client";
import React from "react";

export default function Preferences() {
  const preferences = [
    { label: "Push Notifications", checked: true },
    { label: "Sound Alerts", checked: false },
  ];

  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold mb-5 text-white">Preferences</h2>
      <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] divide-y divide-white/10">
        {preferences.map((pref, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-5 md:px-8 min-h-16 py-3 hover:bg-white/5 transition-colors"
          >
            <p className="truncate text-base md:text-lg text-white">{pref.label}</p>
            <label className="relative flex h-[32px] w-[54px] cursor-pointer items-center rounded-full border border-white/20 bg-black/20 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary/70 transition-all duration-300">
              <div className="h-full w-[27px] rounded-full bg-white shadow-md transition-transform" />
              <input
                type="checkbox"
                defaultChecked={pref.checked}
                className="absolute invisible"
              />
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}
