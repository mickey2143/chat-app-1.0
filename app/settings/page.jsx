"use client";
import { useState } from "react";
import {
  ShieldCheckIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  TrashIcon,
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function SettingsPage() {
  const [theme, setTheme] = useState("system");
  const [autoDelete, setAutoDelete] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-24 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-black dark:to-slate-900">
      <div className="w-full max-w-lg bg-white/30 dark:bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl p-6 space-y-6 transition-all duration-300">
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
          Settings
        </h2>

        {/* Anonymity Section */}
        <section className="space-y-3">
          <h3 className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
            <ShieldCheckIcon className="w-5 h-5" /> Privacy & Anonymity
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            You’re chatting anonymously. Your identity is hidden from others.
          </p>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
            Reset Anonymous Identity
          </button>
        </section>

        {/* Theme Section */}
        <section className="space-y-3">
          <h3 className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
            {theme === "dark" ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
            Appearance
          </h3>
          <div className="flex justify-between items-center bg-white/20 dark:bg-black/20 p-3 rounded-lg">
            <label className="text-sm text-slate-700 dark:text-slate-300">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-transparent border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1 text-sm"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </section>

        {/* Messages Section */}
        <section className="space-y-3">
          <h3 className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
            <TrashIcon className="w-5 h-5" /> Messages
          </h3>
          <div className="flex justify-between items-center bg-white/20 dark:bg-black/20 p-3 rounded-lg">
            <label className="text-sm text-slate-700 dark:text-slate-300">
              Auto-delete messages after 24h
            </label>
            <input
              type="checkbox"
              checked={autoDelete}
              onChange={() => setAutoDelete(!autoDelete)}
              className="w-5 h-5 accent-slate-800 dark:accent-white"
            />
          </div>
        </section>

        {/* Notifications Section */}
        <section className="space-y-3">
          <h3 className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
            <BellIcon className="w-5 h-5" /> Notifications
          </h3>
          <div className="flex justify-between items-center bg-white/20 dark:bg-black/20 p-3 rounded-lg">
            <label className="text-sm text-slate-700 dark:text-slate-300">
              Enable sound & push notifications
            </label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 accent-slate-800 dark:accent-white"
            />
          </div>
        </section>

        {/* Blocked Users */}
        <section className="space-y-3">
          <h3 className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
            <UserGroupIcon className="w-5 h-5" /> Blocked Users
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            You haven’t blocked anyone yet.
          </p>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
            Manage Blocked Users
          </button>
        </section>

        {/* Logout */}
        <div className="pt-4 border-t border-white/10 flex justify-center">
          <button className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            <ArrowRightOnRectangleIcon className="w-5 h-5" /> Log Out
          </button>
        </div>
      </div>
    </main>
  );
}
