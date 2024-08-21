import Link from 'next/link'
import React from 'react'

export default function ChatSidebar() {
    return (
        <nav className="w-1/4 h-full fixed top-0 overflow-hidden  hover:overflow-auto chats bg-white flex flex-col px-6 py-7 rounded-xl shadow-xl" >
            <div className="flex items-center justify-between z-10 pb-8 bg-white sticky top-0">
                <div className="flex gap-2 items-center">
                    <div className="h-12 w-12 p-3 rounded-full relative bg-blue-950 text-white flex justify-center items-center">
                        MA
                        <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                    </div>
                    <div>
                        <h1>Michael Ani</h1>
                        <p className="text-xs">Info Account</p>
                        {/* <p className="text-green-300">Online</p> */}
                    </div>
                </div>
                <span className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </span>
                {/* <div className="w-full fixed bg-white z-20 px-5 py-3">
                        <div className="relative h-12 my-5">
                            <input
                                type="search"
                                placeholder="Search Your Chats"
                                className="w-full bg-slate-100 outline-none px-2 h-full rounded-xl"
                            />
                            
                        </div>
                    </div> */}
            </div>
            <div className="sticky bg-white pb-8 top-20 z-10">
                <ul className="flex w-full justify-between items-center py-2 rounded-3xl">
                    <li className="text-blue-950 bg-white shadow-md py-2 rounded-3xl px-5 cursor-pointer select-none">All</li>
                    <li className="cursor-pointer select-none">Personal</li>
                    <li className="cursor-pointer select-none" >Clan</li>
                </ul>
            </div>
            <div className="chats w-full h-full">
                <div className="gap-y-5 flex flex-col w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                        <Link href={"/9ejkeo9rkf"}>
                            <div key={id} className="flex gap-2 items-center w-full ">
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
                        </Link>)
                    )}
                </div>
            </div>
        </nav>
    )
}
