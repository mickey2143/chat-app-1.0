"use client";
import React from "react";
import {
  ChatBubbleLeftRightIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ChatsPage() {
  const chats = [
    { name: "Anonymous 21", lastMsg: "Hey, how are you?", time: "2m ago" },
    { name: "Anon42", lastMsg: "Wanna talk about something?", time: "10m ago" },
    { name: "MysteryUser", lastMsg: "That was deep!", time: "25m ago" },
    { name: "Stranger007", lastMsg: "Let’s keep this between us 😶", time: "1h ago" },
  ];

  const groups = [
    { name: "Mental Health Support", members: 234, lastMsg: "Remember, you’re not alone 💙" },
    { name: "Anonymous Tech Chat", members: 502, lastMsg: "React 19 is finally stable!" },
    { name: "Late Night Talks", members: 329, lastMsg: "Who else can’t sleep tonight?" },
    { name: "Mindful Mondays", members: 145, lastMsg: "Let's start the week with gratitude 🙏" },
  ];

  return (
    <main className="py-24 md:py-24 md:p-10 p-6">
      <div className="bg-white/20 dark:bg-black/20 p-6 md:p-8 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300 border border-white/10">
        <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center text-slate-900 dark:text-white">
          Your Conversations
        </h2>

        {/* === Private Chats === */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
              Private Chats
            </h3>
          </div>

          <div className="space-y-4">
            {chats.map((chat, i) => (
              <Link
                href={`chats/${i}`}
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/60 to-primary/30 flex items-center justify-center text-white font-bold text-base shadow-md">
                    {chat.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {chat.name}
                    </p>
                    <p className="text-sm opacity-70 truncate max-w-[220px] md:max-w-[300px]">
                      {chat.lastMsg}
                    </p>
                  </div>
                </div>
                <span className="text-xs opacity-60 whitespace-nowrap">
                  {chat.time}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* === Divider Line === */}
        <div className="h-px bg-white/10 dark:bg-white/5 my-6 md:my-8" />

        {/* === Group Chats === */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <UsersIcon className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
              Group Chats
            </h3>
          </div>

          <div className="space-y-4">
            {groups.map((group, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Group avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/40 to-indigo-500/40 flex items-center justify-center text-white shadow-md">
                    <UsersIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {group.name}
                    </p>
                    <p className="text-sm opacity-70 truncate max-w-[220px] md:max-w-[300px]">
                      {group.lastMsg}
                    </p>
                  </div>
                </div>
                <span className="text-xs opacity-60 whitespace-nowrap">
                  {group.members} members
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
