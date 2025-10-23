"use client";
import React from "react";

export default function MyGroups() {
  const groups = [
    { name: "Tech Innovators", color: "red" },
    { name: "Book Club", color: "blue" },
    { name: "Weekend Hikers", color: "green" },
  ];

  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">My Groups</h2>
      <div className="rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 divide-y divide-white/10">
        {groups.map((g, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 md:px-6 min-h-16"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center justify-center size-10 rounded-lg shrink-0 border border-${g.color}-500/30 bg-${g.color}-500/20`}
              >
                <span
                  className={`material-symbols-outlined text-${g.color}-400`}
                >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 text-white text-${g.color}-400`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

                </span>
              </div>
              <p className="truncate text-base text-white">{g.name}</p>
            </div>
            <span className="material-symbols-outlined text-text-dark/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>

            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
