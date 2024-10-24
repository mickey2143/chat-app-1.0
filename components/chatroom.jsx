"use client"
import { useSelector, useDispatch } from "react-redux"
import { setId } from "@/app/redux/openGroup"
import MessageBox from "@/components/MessageBox"
import { useEffect, useState } from "react"

function ChatRoom({ page }) {
    let [chats, setChats] = useState()
    const dispatch = useDispatch()
    const openGroup = useSelector((state) => state.updateGroupId.groupId)


    useEffect(() => {

        fetch(`/api/chats/${openGroup}`, { method: "GET" }).then((res) => res.json()).then((data) => {
            console.log(data)
            setChats(data)
        }).catch(error => {
            console.log(error)
        })

    }, [openGroup])
    function handleReturn() {
        dispatch(setId(false))

    }
    return (
        <>
            <div className="flex shadow-md gap-2 items-center w-full py-3 px-5 sticky bg-white top-0 z-10">
                <span onClick={handleReturn} className="select-none cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                </span>
                <div className="h-12 w-12   p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                </div>
                <div className=" w-full ">
                    <div className="flex justify-between ">
                        <h3 className="text-sm">{chats?.groupName}</h3>
                        <p className="text-xs text-red-500">Report</p>

                    </div>
                </div>
            </div>
            <div className="pb-28 pt-3 px-5 space-y-5 chats overflow-hidden  hover:overflow-auto">
                <MessageBox chats={chats?.data} />

            </div>
            <div className="absolute w-full bg-white z-10 bottom-0 px-5">

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
        </>
    )
}


export default ChatRoom
