"use client"
import { useEffect, useState } from "react";

function SendMessage() {
    const [newMessage,setNewMessage] = useState(null)

    function handleMessage(){
        console.log({userId:5555,message:newMessage})
    }

  return (
    <div className="w-full px-5 fixed bottom-16 right-0 bg-white">
      <div className="relative">
        <input
            type="text"
            placeholder="Type Something"
            onChange={(e)=>{setNewMessage(e.target.value)}}
            className="w-full bg-slate-100 outline-none px-2 pr-12 h-12 mt-4 rounded-xl mb-4"
        />
        <span onClick={handleMessage} className="absolute right-3 top-7 bg-blue-700 w-5 h-5 flex p-5 items-center justify-center rounded-full ">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white absolute"
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
  );
}

export default SendMessage;
