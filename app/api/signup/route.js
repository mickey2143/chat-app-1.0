import { NextRequest, NextResponse } from "next/server";
import { Stream } from "stream";
// import bcrypt from "bcrypt";

const bcrypt = require("bcrypt");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const saltRounds = 15;

async function encryptPassword(password) {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

export async function POST(request) {
  const body = await request.json();
  console.log(body.username);

  const user = await prisma.users.findMany({
    where: {
      OR: [{ username: body.username }],
    },
  });

  if (user.length <= 0) {
    const hashPassword = await encryptPassword(body.password);
    const recovery = crypto.randomUUID();
    const newUser = await prisma.users.create({
      data: {
        username: body.username,
        password: hashPassword,
      },
    });

    console.log(hashPassword);
    if (newUser.password) {
      return Response.json(
        { success: true, newUser },
        { status: 200, statusText: "success" }
      );
    } else {
      return Response.json({
        success: false,
        error: "Cannot Create Account Try Agian Later",
        recovery,
      });
    }
  } else {
    return Response.json({ success: false, error: "User already exists" });
  }
}
