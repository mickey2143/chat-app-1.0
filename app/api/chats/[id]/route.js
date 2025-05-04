import { NextRequest, NextResponse } from "next/server";
import messages from "../../store"

let msg = [
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
  },{
    id: 113,
    user_id: 220,
    username: "Mchelse",
    message: "i want to eate isood rice",
    timeStamp: "2024-01-08T22:14:20.869Z",
  },
  {
    id: 120,
    user_id: 220,
    username: "Makofn",
    message: "i wanjkfkkfogt rice",
    timeStamp: "2024-01-08T22:14:20.869Z",
  },
  {
    id: 13,
    user_id: 102,
    username: "foodie",
    message: "GO to the market",
    timeStamp: "2023-01-08T22:14:20.869Z",
  },
]

let message = msg.sort((a, b) => a.timeStamp - b.timeStamp);
const dummy = {
  groupName: "Mosiqua",
  admin: [102],
  group_id: "98jhrur",
  data: message,
};
export async function GET(request, Response, params) {
  return NextResponse.json(dummy);
}
export async function POST(request, Response, params) {
  const body = await request.json();

  message = [...message,body]
  return NextResponse.json({
    groupName: "Mosiqua",
    admin: [102],
    group_id: "98jhrur",
    data: message,
  });

}
