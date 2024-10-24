"use client"
import ChatSidebar from "@/components/chatsidebar"
import { useState } from "react"


export default function RootLayout({ children }) {
    const [page, setPage] = useState(0)


    return (
        <div className="flex justify-between gap-3 w-full h-full">
            <nav className="hidden h-full fixed top-0 overflow-hidden  hover:overflow-auto chats bg-white md:flex flex-col px-6 py-7 rounded-xl shadow-xl w-1/4">
                <ChatSidebar />
            </nav>

            {children}

        </div>

    )

}
