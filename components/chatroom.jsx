function ChatRoom(props) {
    return (
        <main className="w-[73%] h-full fixed left-[26%] bg-white flex flex-col pt-7 rounded-xl gap-10 shadow-xl">
            <div className="flex shadow-md gap-2 items-center w-full py-3 px-5 ">
                <div className="h-12 w-12 p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                </div>
                <div className=" w-full ">
                    <div className="flex justify-between ">
                        <h3 className="text-sm">United Family</h3>
                        <p className="text-xs text-red-500">Report</p>

                    </div>
                </div>
            </div>
            <div className="py-3 px-5 space-y-5 chats overflow-hidden  hover:overflow-auto">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex">
                        <div className="h-11 w-11 p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                        </div>
                        <div className="w-full ml-3">
                            <div className="flex items-center">
                                <h3 className="text-sm">Peter Philip</h3>
                                <p className="ml-3">11:20pm</p>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-slate-100 p-4 mt-3 rounded-2xl w-3/4 shadow-md">
                                    <p>Het, Lad how are you doing, do you want ice cream and capachino</p>
                                </div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
                ))}
                <div className="flex ">
                    <div className="w-full ml-3">
                        <div className="flex items justify-end">
                            <h3 className="text-sm">You</h3>
                            <p className="ml-3">11:20pm</p>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="bg-slate-400 p-4 mt-3 rounded-2xl w-3/4 shadow-md">
                                <p>Het, Lad how are you doing, do you want ice cream and capachino</p>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>
                <div className="flex ">
                    <div className="h-11 w-11 p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                    </div>
                    <div className="w-full ml-3">
                        <div className="flex items-center">
                            <h3 className="text-sm">Peter Philip</h3>
                            <p className="ml-3">11:20pm</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-slate-100 p-4 mt-3 rounded-2xl w-3/4 shadow-md">
                                <p>Het, Lad how are you doing, do you want ice cream and capachino</p>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="relative bottom-0 px-5">

                <textarea
                    className="w-full  placeholder:p-3 bg-slate-100 outline-none px-4 overflow-hidden py-3  my-4  text-base border rounded-3xl focus:outline-none focus:border-blue-950"
                    // style={{ height: height }}
                    // onChange={handleChange}
                    placeholder="Type your message here..."
                // value={message}
                />

                <div className="flex absolute top-[35%]  right-14 gap-5 ">
                    <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>

                    </span>
                    <span className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-950 absolute"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </main>
    )
}


export default ChatRoom
