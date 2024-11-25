"use client";
import Link from "next/link";

// Get the current path
function Nav() {
  // const currentPage = window?.document?.URL.split("/").splice(-1)[0] ?? "";
  let create = "";
  let join = "";
  let clan = "";
  const active = "text-blue-950 bg-white shadow-md py-2 rounded-3xl px-5";
  // switch (currentPage) {
  //   case "join":
  //     join = active;
  //     break;
  //   case "create":
  //     create = active;
  //     break;
  //   default:
  //     clan = active;
  //     break;
  // }
  return (
    <div className="sticky mb-8 top-20 z-10">
      <ul className="flex w-full justify-between items-center py-2 rounded-3xl">
        <Link href={"/chats"}>
          <li className={`${clan} cursor-pointer select-none`}>Clan</li>
        </Link>
        <Link href={"/chats/join"}>
          <li className={`${join} cursor-pointer select-none`}>Join </li>
        </Link>

        <Link href={"/chats/create"}>
          <li className={`${create} cursor-pointer select-none`}>Create</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
