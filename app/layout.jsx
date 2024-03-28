import "./globals.css";
export const metadata = {
    title: "Chat with Friends",
    description: "",
  };
  
  export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en" >
        <body className="bg-background text-foreground">
          <main className="h-full w-full">
            {children}
          </main>
        </body>
      </html>
    );
  }
  