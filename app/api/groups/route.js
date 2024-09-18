import { NextRequest, NextResponse } from "next/server";

export async function GET(Request, Response, params) {
  const header = new Headers(Request.headers);
  const user_id = header.get("user_id");
  return NextResponse.json({
    data: [
      {
        id: user_id,
        topic: ["food", "snacks"],
        members: 300,
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
      },
    ],
  });
}
