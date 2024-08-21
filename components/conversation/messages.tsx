"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const groups = [
  {
    id: 1,
    topic: "food",
    members: 200,
    createdAt: "2022",
    updatedAt: "2022",
    groupName: "foodie",
    description: "A group we talk about food and latest cuisines",
  },
  {
    id: 2,
    topic: "food",
    members: 200,
    createdAt: "2022",
    updatedAt: "2022",
    groupName: "FootBall",
    description: "A group we talk about food and latest cuisines",
  },
  {
    id: 3,
    topic: "food",
    members: 200,
    createdAt: "2022",
    updatedAt: "2022",
    groupName: "Football",
    description: "A group we talk about food and latest cuisines",
  },
];

function Message() {
  let [users, setUsers] = useState([]);
  let [usersReady, setUsersReady] = useState(false);
  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setUsersReady(true);
        console.log("doen");
      });
  }, []);

  function BoilerTemp() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
      <>
        <div
          key={key}
          className="flex w-full justify-stretch h-20 items-center mb-4  px-5 "
        >
          <div className="w-14 h-14 shimer text-white flex items-center justify-center rounded-full "></div>

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
      </>
    ));
  }

  function UsersTemp() {
    return groups.map((user: any) => (
      <>
        <Link
          href={`./chat/${user.id}`}
          className="flex w-full justify-stretch h-20 items-center mb-4  px-5 "
          key={user.id}
        >
          <div className="w-14 h-14 text-white flex items-center justify-center rounded-full bg-blue-950 ">
            MA
          </div>

          <div className=" ml-4 w-full">
            <span className="flex justify-between">
              <h3 className="font-bold">{user.groupName}</h3>
              <p>10:01</p>
            </span>
            <p>
              {"Michael"}:{"Who is a man"}
            </p>
          </div>
        </Link>
      </>
    ));
  }

  return (
    <div className="relative top-10 bottom-10 h-fit pb-24 pt-20">
      {usersReady ? <UsersTemp /> : <BoilerTemp />}
    </div>
  );
}

export default Message;
