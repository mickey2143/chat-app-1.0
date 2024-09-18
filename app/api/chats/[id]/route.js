import { NextRequest, NextResponse } from "next/server";

export async function GET(request, Response, params) {
  return NextResponse.json({
    groupName: "Mosiqua",
    admin: [102],
    group_id: "98jhrur",
    data: [
      {
        id: 1,
        user_id: 22,
        username: "Hacker",
        message: "i want rice",
        timeStamp: "2024-09-08T22:14:20.869Z",
      },
      {
        id: 103,
        user_id: 102,
        username: "Food vendor",
        message: "i sell food and anything you love to buy",
        timeStamp: "2024-11-08T22:14:20.869Z",
      },
      {
        id: 11,
        user_id: 220,
        username: "Man",
        message: "i want rice",
        timeStamp: "2024-01-08T22:14:20.869Z",
      },
    ],
  });
}
