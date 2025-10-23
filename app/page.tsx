"use client";
import Link from "next/link";
import Image from "next/image";
import chatImage from "./chatting.svg";

export default function Index() {
  return (
    <div className="min-h-screen pt-24 flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-blue-950 dark:text-white">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center">
        <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20 py-16 space-y-10 md:space-y-0">
          {/* Left content */}
          <div className="flex flex-col md:w-1/2 text-center md:text-left space-y-5">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Chat <span className="text-blue-600">Anonymously</span> With People Who Share Your Interests
            </h1>
            <p className="text-base md:text-lg opacity-80">
              Connect freely with others who share your passions — whether it’s sports, gaming, news, or personal growth. 
              Stay completely anonymous, safe, and authentic.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/auth/signup"
                className="bg-blue-950 text-white px-7 py-3 rounded-xl hover:bg-blue-800 transition duration-300 shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/20 shadow-2xl p-4">
              <Image
                src={chatImage}
                alt="Anonymous chat illustration"
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 md:px-20 py-16 text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl mb-2">What It’s All About</h2>
          <p className="text-base opacity-70 mb-10">
            It’s a safe, open-source platform for real anonymous conversations.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-md border border-blue-900/20">
              <h4 className="text-2xl font-bold mb-2">No Tracking</h4>
              <p className="opacity-80">
                We don’t track you with cookies or hidden scripts. Your identity stays 100% private.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-md border border-blue-900/20">
              <h4 className="text-2xl font-bold mb-2">Open Source</h4>
              <p className="opacity-80">
                Transparent and open to everyone. Explore our code — no tricks, no secrets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-md border border-blue-900/20">
              <h4 className="text-2xl font-bold mb-2">Easy to Use</h4>
              <p className="opacity-80">
                Simply register with a unique username and choose your topics of interest — then start chatting instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="bg-blue-950 dark:bg-blue-900 w-full py-12 px-6 md:px-20 text-center rounded-t-3xl">
          <p className="text-white text-lg font-medium mb-3">
            Made With ❤️ by <span className="font-bold">Mykel_ani</span>
          </p>
          <Link
            href="/auth/signup"
            className="inline-block bg-white text-blue-950 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300"
          >
            Join Now
          </Link>
        </section>
      </main>
    </div>
  );
}
