"use client";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [interests, setInterests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle register logic (Firebase or API)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-blue-950 dark:text-white px-6">
      <div className="w-full max-w-md bg-white/20 dark:bg-black/30 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-blue-900/10">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          Create an Account
        </h1>
        <p className="text-center text-sm opacity-70 mb-8">
          Join the anonymous community — stay real, stay private
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Choose a unique username"
              required
              className="w-full p-3 rounded-lg border border-blue-900/10 bg-white/50 dark:bg-black/40 focus:ring-2 focus:ring-blue-700 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                required
                className="w-full p-3 rounded-lg border border-blue-900/10 bg-white/50 dark:bg-black/40 focus:ring-2 focus:ring-blue-700 outline-none transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600 dark:text-gray-300"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium mb-1">Interests</label>
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g. Tech, Sports, Gaming..."
              className="w-full p-3 rounded-lg border border-blue-900/10 bg-white/50 dark:bg-black/40 focus:ring-2 focus:ring-blue-700 outline-none transition"
            />
            <p className="text-xs opacity-60 mt-1">
              Helps us connect you to similar chats (optional)
            </p>
          </div>

          {/* Sign up button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-800 transition shadow-md"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-3 my-6">
            <span className="h-px w-1/3 bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm opacity-60">or</span>
            <span className="h-px w-1/3 bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Google sign-up */}
          <button
            type="button"
            className="w-full py-3 rounded-xl border border-blue-950/30 dark:border-white/20 bg-white/50 dark:bg-black/30 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Continue with Google
          </button>

          {/* Sign in link */}
          <p className="text-center text-sm mt-5 opacity-80">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-700 dark:text-blue-400 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
