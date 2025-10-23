import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./redux/Provider"
import { SessionProvider } from "next-auth/react";
import FloatingNavbar from "@/components/floatingBar";

export const metadata = {
  title: "Incognito — Chat Anonymously with People of Similar Interests",
  description:
    "Join Incognito, the open-source anonymous chat platform where you can meet new people, discuss your passions, and share freely — no tracking, no identity, just real conversation.",
  keywords: [
    "anonymous chat",
    "incognito chat",
    "private chat app",
    "open source chat",
    "anonymous messaging",
    "chat without login",
    "anonymous friends",
    "secure chat app",
  ],
  authors: [{ name: "Mykel Ani", url: "https://yourwebsite.com" }],
  creator: "Mykel Ani",
  publisher: "Incognito",
  metadataBase: new URL("https://chatanoni.netlify.app"), // replace with your actual domain
  openGraph: {
    title: "Incognito — Anonymous Chat for Real Conversations",
    description:
      "Talk freely and meet new people with shared interests. 100% anonymous, open source, and privacy-first.",
    url: "https://chatanoni.netlify.app",
    siteName: "Incognito Chat",
    images: [
      {
        url: "https://chatanoni.netlify.app/twitter-image.png", // optional image for previews
        width: 1200,
        height: 630,
        alt: "Incognito — Anonymous Chat Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Incognito — Chat Anonymously, Stay Real",
    description:
      "An anonymous, open-source chat app where your privacy comes first. Join conversations that matter.",
    creator: "@mykel_ani",
    images: ["https://chatanoni.netlify.app/twitter-image.png"], // optional
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {

  return (
    // <SessionProvider>
    <Providers >
      <html lang="en">
        <body className="bg-gray-50 text-foreground h-screen w-full">
          <FloatingNavbar />
          {children}
          <ToastContainer className={"w-3/2"} />
        </body>
      </html>
    </Providers>
    // </SessionProvider>
  );
}
