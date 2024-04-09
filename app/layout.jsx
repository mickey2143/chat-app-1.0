import "./globals.css";
export const metadata = {
  title: "Chat with Friends",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground h-screen w-full">
        {children}
      </body>
    </html>
  );
}
