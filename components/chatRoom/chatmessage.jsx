"use client"
import React, { useState } from "react";
 

export default function ChatMessage(){
    const [messages, setMessages] = useState([
        { id: 1, sender: "User 1", text: "Hey everyone, I'm excited to start this discussion!" },
        { id: 2, sender: "You", text: "Me too! Let's get started." },
        { id: 3, sender: "User 2", text: "Sounds good. Does anyone have the first topic?" },
        { id: 4, sender: "User 1", text: "That’s a great idea. Remote work is evolving fast!" },
    ]);

    return(<div className="flex-1 overflow-y-auto px-7 py-6 space-y-6 md:px-10 md:py-8">
        <div className="flex justify-center">
          <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-slate-800/40 px-4 py-1.5 rounded-full shadow-sm">
            Today
          </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex flex-col ${
                msg.sender === "You" ? "items-end" : "items-start"
              } max-w-[85%] md:max-w-[480px]`}
            >
              <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                {msg.sender}
              </p>
              <p
                className={`text-sm md:text-base px-4 py-3 rounded-2xl shadow-md leading-relaxed ${
                  msg.sender === "You"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white/70 dark:bg-slate-900/50 text-slate-900 dark:text-white rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            </div>
          </div>
        ))}

      </div>)


}

