import SendMessage from "./sendMessage";
import UserChat from "./userChat";
import Link from "next/link";
function chat({messages}:any) {
  return (
    <div className="w-full  h-full flex items-center flex-col">
      <div className="flex items-center gap-8 top-0 mb-9 sticky shadow-sm px-5 right-0 pb-5 pt-10 z-20 bg-white w-full ">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </Link>
        <div className="flex gap-3">
          <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex justify-center items-center">
            MA
          </div>
          <div>
            <h1>Michael Ani</h1>
            <p className="text-green-300">Online</p>
          </div>
        </div>
      </div>
      <UserChat messages={messages}/>
      <SendMessage />

    </div>
  );
}

export default chat;
