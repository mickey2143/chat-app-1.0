"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Get the current path
function Nav() {
  const [currentPage, setCurrentPage] = useState("");
  // setInterval(())
  setInterval(()=>{
    // const url = window?.location?.pathname?.split("/").splice(-1)[0];

    // if (typeof window !== "undefined") {
    //   setCurrentPage(url);
    // }
  },1000)

  const active =
    "text-blue-950 bg-white shadow-md py-2 rounded-3xl px-5 font-bold";
  const unactive = "cursor-pointer select-none text-slate-300";

  return (
    <div className="sticky pb-8 pt-8 bg-gray-50">
      <ul className="flex w-full justify-between items-center py-2 rounded-3xl">
        <Link href={"/chats"}>
          <li className={currentPage === "chats" ? `${active}` : `${unactive}`}>
            Clan
          </li>
        </Link>
        <Link href={"/chats/join"}>
          <li className={currentPage === "join" ? `${active}` : `${unactive}`}>
            Join{" "}
          </li>
        </Link>

        <Link href={"/chats/create"}>
          <li className={currentPage === "create" ? `${active}` : `${unactive}`}>
            Create
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
