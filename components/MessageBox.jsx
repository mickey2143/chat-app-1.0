export default function MessageBox({ chats }) {


    return (
        <>
            {chats.map((chat) => (
                (chat.user_id == 102) ? (<div className="flex ">
                    <div className="w-full ml-3">
                        <div className="flex items justify-end">
                            <h3 className="text-sm">You</h3>
                            <p className="ml-3"><p className="ml-3">{new Date(chat.timeStamp).toLocaleDateString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })}</p></p>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="bg-slate-400 p-4 mt-3 rounded-2xl w-3/4 shadow-md">
                                <p>{chat.message}</p>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>) : (<div key={chat.id} className="flex">
                    <div className="h-11 w-11 p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                    </div>
                    <div className="w-full ml-3">
                        <div className="flex items-center">
                            <h3 className="text-sm">{chat.username}</h3>
                            <p className="ml-3">{new Date(chat.timeStamp).toLocaleDateString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-slate-100 p-4 mt-3 rounded-2xl w-3/4 shadow-md">
                                <p>{chat.message}</p>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>)


            ))}
        </>
    )


}

