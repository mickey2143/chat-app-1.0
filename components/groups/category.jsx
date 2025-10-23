"use client";
import React from "react";

export default function CategoryList() {
  const categories = [
    { name: "All", active: true },
    { name: "Late Night Thoughts" },
    { name: "Book Club Readers" },
    { name: "Video Game Enthusiasts" },
  ];

  return (
    <div className="flex gap-3 p-3 overflow-x-auto">
      {categories.map((cat, i) => (
        <div
          key={i}
          className={`flex items-center justify-center gap-x-2 rounded-full ${
            cat.active
              ? "bg-primary/80 text-white border border-primary/20"
              : "glass-bg-light hover:bg-primary/80 hover:text-white cursor-pointer text-gray-800 dark:text-white"
          } pl-4 pr-4 backdrop-blur-sm h-8 shrink-0`}
        >
          <p className="text-sm font-medium">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
