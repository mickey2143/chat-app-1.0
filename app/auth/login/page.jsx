"use client";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-blue-950 dark:text-white px-6">
      <div className="w-full max-w-md bg-white/20 dark:bg-black/30 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-blue-900/10">
        <h1 className="text-3xl font-extrabold text-center mb-6">Welcome Back</h1>
        <p className="text-center text-sm opacity-70 mb-8">
          Sign in to your anonymous chat account
        </p>

        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 rounded-lg border border-blue-900/10 bg-white/50 dark:bg-black/40 focus:ring-2 focus:ring-blue-700 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          {/* Forgot password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-800 transition shadow-md"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-3 my-6">
            <span className="h-px w-1/3 bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm opacity-60">or</span>
            <span className="h-px w-1/3 bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Google sign-in */}
          <button
            type="button"
            className="w-full py-3 rounded-xl border border-blue-950/30 dark:border-white/20 bg-white/50 dark:bg-black/30 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Continue with Google
          </button>

          {/* Signup link */}
          <p className="text-center text-sm mt-5 opacity-80">
            Don’t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-700 dark:text-blue-400 font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
