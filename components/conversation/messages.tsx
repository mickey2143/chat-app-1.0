"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

async function Message() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      {users.map((user: any) => (
        <Link
          href={`./chat/${user.id}`}
          className="flex w-full justify-stretch h-20 items-center mb-4  px-5 "
          key={user.id}
        >
          <div className="w-20 text-white flex items-center justify-center rounded-full bg-blue-700 h-full">
            MA
          </div>

          <div className="w-3/4 ml-4">
            <span className="flex justify-between">
              <h3 className="font-bold">{user.userName}</h3>
              <p>10:01</p>
            </span>
            <p>{user.lastMsg}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Message;
