"use client"
import Link from "next/link";
import { useState } from "react";
import ChatRoom from "./chatroom";
import ChatSidebar from "./chatsidebar";

function Messages() {
    const [chatOpen, setChatOpen] = useState(false);
    return (
        <>

            {/* {chatOpen ? (<ChatRoom isOpen={chatOpen} />) : ([1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                <div key={id} onClick={() => setChatOpen(true)} className="flex gap-2 items-center w-full ">
                    <div className="h-12 w-12 p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                    </div>
                    <div className=" w-full">
                        <div className="flex justify-between ">
                            <h1 className="text-sm">Michael Ani</h1>
                            <p className="text-xs">11:30am</p>
                        </div>
                        <p className="text-xs">I want to eat bread</p>
                    </div>
                </div>
            )
            )

            )} */}
        </>
    );
}

export default Messages;

