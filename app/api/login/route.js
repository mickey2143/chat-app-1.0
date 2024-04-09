import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  console.log(request.body);

  NextResponse.json({ users: [1, 2, 3, 4, 5, 6, 7, 7] });

  return Response.json({ users: [1, 2, 3, 4, 5, 6, 7, 7] });
}
