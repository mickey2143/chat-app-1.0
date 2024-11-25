"use client"
import ChatSidebar from "@/components/chatsidebar"
import { useState } from "react"


export default function RootLayout({ children }) {
    const [page, setPage] = useState(0)


    return (
        <div className="flex justify-between gap-3 w-full h-full overflow-hidden">
            <nav className="hidden h-full overflow-hidden  hover:overflow-auto chats bg-white md:flex flex-col px-6 py-7 rounded-xl shadow-xl w-80 flex-shrink-0">
                <ChatSidebar />
            </nav>

            {children}

        </div>

    )

}
