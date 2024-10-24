import { NextResponse } from "next/server";

import { auth } from "@/auth";

export async function GET(request, res) {
  // const session = await auth();
  const session = true;
  let resp;
  const header = new Headers(request.headers);
  const user_id = header.get("user_id");

  if (session) {
    resp = {
      data: [
        {
          id: user_id,
          topic: ["food", "snacks"],
          members: 300,
          description: "We look to talk about Food",
          createdAt: "2024-09-08T22:14:20.869Z",
          updatedAt: "2024-09-08T22:14:20.869Z",
          admin: [102],
          groupName: "Manki",
          public: true,
        },
        {
          id: 20,
          topic: ["money", "snacks"],
          members: 300,
          description: "We look to talk about Food",
          createdAt: "2024-09-08T22:14:20.869Z",
          updatedAt: "2024-09-08T22:14:20.869Z",
          admin: [102],
          groupName: "Airdrop",
          public: true,
        },
        {
          topic: ["food", "snacks"],
          members: 300,
          createdAt: "2024-09-08T22:14:20.869Z",
          updatedAt: "2024-09-08T22:14:20.869Z",
          admin: [102],
          id: 21,
          groupName: "Mosiqua",
          public: true,
          description: "We look to talk about Food",
        },
        {
          topic: ["food", "snacks"],
          members: 300,
          createdAt: "2024-09-08T22:14:20.869Z",
          updatedAt: "2024-09-08T22:14:20.869Z",
          admin: [102],
          id: 122,
          groupName: "Eximus",
          public: false,
          description: "We look to talk about Food",
        },
      ],
    };
  } else {
    resp = { status: 401, message: "Access Denied" };
  }
  return NextResponse.json(resp);
}
