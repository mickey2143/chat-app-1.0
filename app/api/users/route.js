import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  return Response.json([
    {
      id: "f35341d0-c283-4690-a97b-8099f439f486",
      userName: "Michael Ani",
      lastMsg: "Come and eat better food",
    },
    {
      id: "f35343TY9-c283-4690-a97b-8099f439f486",
      userName: "HeartBeat",
      lastMsg: "Exams is tommorrow",
    },
    {
      id: "f35341d0-3y42-4690-a97b-8099f439f486",
      userName: "Moses Bliss",
      lastMsg: "Come and cook",
    },
  ]);
}
