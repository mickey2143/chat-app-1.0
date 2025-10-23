"use client"
import React, { useState } from "react";
import {

  PaperAirplaneIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      text: input.trim(),
    };
    setInput("");
  }
  return (
    <footer className="fixed w-full bottom-0 z-10 glassmorphism px-4 py-3 border-t border-white/10 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-white/30 dark:hover:bg-slate-900/30">
            <FaceSmileIcon className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 h-12 rounded-lg border-0 bg-white/60 dark:bg-slate-900/50 placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-sm md:text-base text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md transition"
          >
            <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
          </button>
        </div>
      </footer>
  );
}
