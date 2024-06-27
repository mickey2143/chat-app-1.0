import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./redux/Provider"
import NewGroup from "@/components/NewGroup";

export const metadata = {
  title: "Chat with Friends",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <Providers >
      <html lang="en">
        <body className="bg-white text-foreground h-screen w-full">
          {children}
          <ToastContainer className={"w-1/2"} />
          <NewGroup />
        </body>
      </html>
    </Providers>
  );
}
