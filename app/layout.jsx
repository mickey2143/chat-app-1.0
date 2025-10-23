import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./redux/Provider"
import { SessionProvider } from "next-auth/react";
import FloatingNavbar from "@/components/floatingBar";

export const metadata = {
  title: "Chat with Friends",
  description: "",
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
