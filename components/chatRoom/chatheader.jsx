
import React from "react";
import {
  ArrowLeftIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function ChatHeader() {
  return (
    <header className="sticky top-24 z-20 glassmorphism flex items-center justify-between px-4 py-3 shadow-sm border-b border-white/10 backdrop-blur-lg">
    <button className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-900/30">
      <ArrowLeftIcon className="w-6 h-6" />
    </button>

    <div className="flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        Anonymous Chat
      </h2>
      <p className="text-xs text-slate-600 dark:text-slate-400">
        Public Discussion
      </p>
    </div>

    <button className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-900/30">
      <UsersIcon className="w-6 h-6" />
    </button>
  </header>
  );
}
