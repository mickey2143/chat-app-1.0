import Link from "next/link";

function Nav() {
  return (
    <div className="sticky bg-white pb-8 top-20 z-10">
      <ul className="flex w-full justify-between items-center py-2 rounded-3xl">
        <Link href={"/chats"}>
          <li className="text-blue-950 bg-white shadow-md py-2 rounded-3xl px-5 cursor-pointer select-none">
            Clan
          </li>
        </Link>
        <Link href={"/chats/join"}>
          <li className="cursor-pointer select-none">Join </li>
        </Link>

        <Link href={"/chats/create"}>
          <li className="cursor-pointer select-none">Create</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
