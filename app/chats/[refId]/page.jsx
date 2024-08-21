"use client"
import SendMessage from "@/components/conversation/sendMessage"
import Link from "next/link"
import ChatRoom from "@/components/chatroom"
import { URLSearchParams } from "url";


function page() {
    let open = false;
    indexedDB.open("Chats", 1);
    return (
        <>
            {(open) ? <ChatRoom /> : <div className="w-[73%] h-full fixed left-[26%] bg-white flex justify-center items-center"><h3 className="text-3xl ">Select a group to begin chatting</h3></div>}
        </>
    )
}


export default page
