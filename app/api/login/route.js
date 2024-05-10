import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function validateUser(hash) {
  bcrypt
    .compare(password, hash)
    .then((res) => {
      console.log(res); // return true
    })
    .catch((err) => console.error(err.message));
}

export async function POST(request) {
  const body = await request.json();
  const allUsers = await prisma.users.findMany();

  console.log(allUsers);
  return Response.json({ ...body });
}
