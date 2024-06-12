import SendMessage from "./sendMessage";
import UserChat from "./userChat";
import Link from "next/link";
function chat({ messages }: any) {
  return (
    <div className="w-full  h-full flex items-center flex-col">
      <div className="flex items-center gap-5 top-0 mb-9 sticky shadow-sm px-5 right-0 pb-5 pt-10 z-20 bg-white w-full ">
        <Link href={"/chat"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <div className="flex gap-2">
          <div className="h-14 w-14 rounded-full bg-blue-950 text-white flex justify-center items-center">
            MA
          </div>
          <div>
            <h1>Michael Ani</h1>
            <p className="text-green-300">Online</p>
          </div>
        </div>
      </div>

      <UserChat messages={messages} />

      <SendMessage />
    </div>
  );
}

export default chat;
