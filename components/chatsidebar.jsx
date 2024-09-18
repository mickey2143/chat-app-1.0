import Link from 'next/link'
import React from 'react'

function BoilerTemp() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
        <>
            <div
                key={key}
                className="flex w-full justify-stretch h-20 items-center mb-4  px-5 "
            >
                <div className="h-12 w-12 p-4 shimer text-white flex items-center justify-center rounded-full "></div>

                <div className="w-full ml-4 space-y-3">
                    <span className="flex justify-between">
                        <h3 className=" w-28 shimer rounded-3xl h-3 text-transparent">
                            " "
                        </h3>
                        <p className="w-10 shimer rounded-3xl h-3 "></p>
                    </span>
                    <p className="w-48 shimer rounded-3xl h-3 text-transparent"> ""</p>
                    <p className="w-12 shimer rounded-3xl h-3 text-transparent"> ""</p>
                </div>
            </div>
        </>
    ));
}
export default async function ChatSidebar({ handleChatOpen }) {
    let groups;
    try {
        const res = await fetch('/api/groups', {
            method: "GET", headers: {
                user_id: "102"
            }
        });
        const data = await res.json()
        console.log(data)
        groups = data.data
    } catch (error) {
        console.log(error)
    }
    return (
        <>
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
                {/* <BoilerTemp /> */}

                <div className="gap-y-5 flex flex-col w-full">
                    {groups?.map((group) => (

                        <div key={group.id} onClick={() => handleChatOpen(group.id)} className="flex gap-2 items-center w-full ">
                            <div className="h-12 w-12 p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                                <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                            </div>
                            <div className=" w-full">
                                <div className="flex justify-between ">
                                    <h1 className="text-sm">{group.groupName}</h1>
                                    <p className="text-xs">11:30am</p>
                                </div>
                                <p className="text-xs">I want to eat bread</p>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}
