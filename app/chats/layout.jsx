import ChatSidebar from "@/components/chatsidebar"

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Chat with Friends",
    description: "",
};

export default function RootLayout({
    children,
}) {
    return (
        <div className="flex justify-between gap-3">
            <ChatSidebar />
            {children}
        </div>
    );
}
