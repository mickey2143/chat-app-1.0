"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function FloatingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Chats", icon: ChatBubbleLeftRightIcon, page: "/chats" },
    { name: "Groups", icon: UserGroupIcon, page: "/groups" },
    { name: "Settings", icon: Cog6ToothIcon, page: "/settings" },
  ];

  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-white/20 dark:bg-black/20 shadow-xl backdrop-blur-lg transition-all duration-300 hover:shadow-2xl">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Brand */}
         
         
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-800 dark:text-white"
          >
            <div className="w-6 h-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-wide">Incognito</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(({ name, icon: Icon, page }) => {
              const active = pathname.includes(page);
              return (
                <Link
                  key={name}
                  href={page}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "bg-primary/30 text-primary"
                      : "text-slate-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {name}
                </Link>
              );
            })}

            {/* Notification Icon */}
            <button
              title="Notifications"
              className="ml-2 p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10 relative transition-colors"
            >
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-black"></span>
            </button>

            {/* Logout Icon */}
            <button
              title="Logout"
              className="ml-2 p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-800 dark:text-white transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 transform transition-transform ${
                menuOpen ? "rotate-90" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="flex flex-col md:hidden px-6 pb-4 space-y-2 animate-slideDown">
            {navLinks.map(({ name, icon: Icon, page }) => {
              const active = pathname === page;
              return (
                <Link
                  key={name}
                  href={page}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "bg-primary/30 text-primary"
                      : "text-slate-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {name}
                </Link>
              );
            })}

            <button
              title="Notifications"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 relative"
            >
              <BellIcon className="w-5 h-5" />
              Notifications
              <span className="ml-auto h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-black"></span>
            </button>

            <button
              title="Logout"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 rounded-lg hover:bg-black/10 dark:hover:bg-white/10"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
