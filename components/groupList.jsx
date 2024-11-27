"use client"
import { useDispatch, useSelector } from "react-redux";
import { setId } from "@/app/redux/openGroup";
import { useRouter } from "next/navigation";



function BoilerTemp() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (

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

    ));
}

function GroupList({ groups }) {
    const router = useRouter()
    const dispatch = useDispatch()


    function openChat(id) {
        router.push("/chats")
        dispatch(setId(id))
    }
    return (
        <div className="chats w-full h-full">
            {groups?.length > 0 ? (<div className="gap-y-5 flex flex-col w-full">

                {groups?.map((group) => (

                    <div key={group?.id} onClick={() => openChat(group?.id)} className="flex select-none cursor-pointer gap-2 items-center w-full p-4 rounded-md">
                        <div className="h-10 w-10 p-4 rounded-full relative bg-pink-600 text-white flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
                        </div>
                        <div className=" w-full">
                            <div className="flex justify-between ">
                                <h1 className="text-sm">{group.groupName}</h1>
                                <p className="text-xs">{new Date().getTime()}</p>
                            </div>
                            <p className="text-xs">{group?.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>) : <BoilerTemp />}


        </div>)
}

export default GroupList