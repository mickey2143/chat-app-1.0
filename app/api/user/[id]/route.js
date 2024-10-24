import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../../../utils/tokens";

const prisma = new PrismaClient();

export async function GET(req, res) {
  const {id} = res.params
  try {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        username: true,
        id: true,
        profile: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
  const token = req?.headers["Authorisation"]?.split(" ")[1];
  if (token) {
    console.log(verifyToken(token));
  }
  return NextResponse.json(
    verifyToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkVxdWFsQmlnZm9vdEh1bnRlcjEwMCIsImlkIjoiNjcxNzYyNTg3Y2Q3OTk1MjVjMjEyODE3IiwicHJvZmlsZSI6bnVsbCwiaWF0IjoxNzI5Njg4Njg1fQ.j6bSS0rXUzXF0VqwaXCud7g_oJ0wxEzuW8arnseZFks"
    )
  );
}
