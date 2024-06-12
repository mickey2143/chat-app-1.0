"use client"
import { useEffect, useState } from "react";

function SendMessage() {
  const [message, setMessage] = useState(null)
  const [height, setHeight] = useState('auto');

  const handleChange = (e) => {
    const input = e.target;
    setMessage(input.value);
    setHeight(input.scrollHeight + 'px');


  };

  function handleMessage() {
    console.log({ userId: 5555, message })
  }

  return (
    <div className="w-full px-5 fixed bottom-28 right-0 bg-white">
      <div className="relative">

        <textarea
          className="w-full  placeholder:bottom-3 bg-slate-100 outline-none px-2 overflow-hidden pr-14 my-4 resize-none py-2 text-base border rounded-md focus:outline-none focus:border-blue-950"
          style={{ height: height }}
          onChange={handleChange}
          placeholder="Type your message here..."
          value={message}
        />

        <span onClick={handleMessage} className="absolute bottom-3 right-3 transform -translate-y-1/2  w-5 h-5  flex p-5 items-center justify-center rounded-full ">
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
  );
}

export default SendMessage;
