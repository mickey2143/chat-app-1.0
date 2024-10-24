"use client"
import ChatRoom from "@/components/chatroom"
import ChatSidebar from "@/components/chatsidebar"
import { useSelector, useDispatch } from "react-redux"
import bg from "@/lib/images/bg.png"
import Image from "next/image"
import { useState } from "react"


function NotReady() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            {/* <Image src={bg} alt="Chat Image" className="w-full h-full" /> */}
            <p>Start Chatting</p>
        </div>
    )
}
function page() {
    const openGroup = useSelector((state) => state.updateGroupId
        .groupId)
    const [page, setPage] = useState(0)

    return (
        <div className="flex justify-between gap-3 w-full h-full">
            <main className="hidden w-[73%] h-full fixed left-[26%] bg-white md:flex flex-col pt-7 rounded-xl gap-10 shadow-xl">
                {(openGroup) ? <ChatRoom page={page} /> : <NotReady />}
            </main>

            <div className="h-screen md:hidden w-full">
                {(openGroup) ? <ChatRoom page={page} /> : <nav className="w-full h-full fixed top-0 overflow-hidden  hover:overflow-auto chats bg-white flex flex-col px-6 py-7 rounded-xl shadow-xl" ><ChatSidebar /></nav>}
            </div>
        </div>
    )
}

export default page