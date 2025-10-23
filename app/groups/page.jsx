"use client";
import React from "react";

export default function GroupsPage() {
  const [joinedGroups, setJoinedGroups] = React.useState(["Anonymous Tech Chat"]);

  const groups = [
    {
      name: "Mental Health Support",
      members: 234,
      description: "A safe place to talk about your thoughts and feelings.",
      color: "bg-pink-500/20 text-pink-700 dark:text-pink-300",
    },
    {
      name: "Anonymous Tech Chat",
      members: 502,
      description: "Discuss coding, AI, and tech anonymously.",
      color: "bg-blue-500/20 text-blue-700 dark:text-blue-300",
    },
    {
      name: "Study & Focus Zone",
      members: 187,
      description: "Join quiet sessions to stay accountable while studying.",
      color: "bg-green-500/20 text-green-700 dark:text-green-300",
    },
    {
      name: "Gaming Anonymous",
      members: 413,
      description: "Chat about your favorite games with no identity.",
      color: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300",
    },
    {
      name: "Late Night Talks",
      members: 329,
      description: "For the night owls — deep convos till sunrise.",
      color: "bg-purple-500/20 text-purple-700 dark:text-purple-300",
    },
    {
      name: "Relationship Advice",
      members: 278,
      description: "Share your experiences or seek advice anonymously.",
      color: "bg-red-500/20 text-red-700 dark:text-red-300",
    },
  ];

  const toggleJoin = (groupName) => {
    setJoinedGroups((prev) =>
      prev.includes(groupName)
        ? prev.filter((g) => g !== groupName)
        : [...prev, groupName]
    );
  };

  return (
    <main className="bg-white/20 dark:bg-black/20 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300 h-full md:py-24 py-24 p-5 md:p-10" >
      <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center text-slate-900 dark:text-white">
        Discover Groups
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => {
          const isJoined = joinedGroups.includes(group.name);
          return (
            <div
              key={i}
              className="group border border-white/10 bg-white/10 dark:bg-white/5 p-5 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                    {group.name}
                  </h3>
                  <p
                    className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${group.color} font-medium`}
                  >
                    {group.members} members
                  </p>
                </div>
              </div>

              <p className="text-sm mt-3 text-slate-700 dark:text-slate-300 opacity-80 leading-relaxed">
                {group.description}
              </p>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => toggleJoin(group.name)}
                  className={`text-sm px-4 py-1.5 rounded-lg font-medium transition-all duration-200 shadow-sm ${
                    isJoined
                      ? "bg-green-500/30 text-green-800 dark:text-green-300 hover:bg-green-500/40"
                      : "bg-primary/25 text-primary hover:bg-primary/40"
                  }`}
                >
                  {isJoined ? "Joined" : "Join"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
