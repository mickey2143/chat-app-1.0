const bcrypt = require("bcrypt");
import { generateToken } from "../../utils/tokens";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function validateUser(hash, password) {
  let res = await bcrypt.compare(password, hash);

  // let val;
  // bcrypt
  //   .compare(password, hash)
  //   .then((res) => {
  //     val = res; // return true
  //   })
  //   .catch((err) => false);
  return res;
}

export async function POST(request, res) {
  let resData;

  const body = await request.json();
  try {
    const user = await prisma.users.findUnique({
      where: {
        username: body.username,
      },
      select: {
        username: true,
        id: true,
        profile: true,
        password: true,
      },
    });

    if (user.length > !0) return;
    const isValid = validateUser(user?.password, body.password);

    if (!isValid) {
      resData = { success: false };
    } else {
      const accessToken = generateToken({
        username: user.username,
        id: user.id,
        profile: user.profile,
      });

      resData = {
        success: true,
        data: {
          username: user.username,
          id: user.id,
          profile: user.profile,
          accessToken,
        },
      };
    }
  } catch (error) {
    resData = { success: false, error };
  }

  // Set cookie
  const cookieOptions = {
    maxAge: 60 * 60, // 1 hour (in seconds)
    httpOnly: true, // Prevent access from JavaScript (optional for security)
    secure: process.env.NODE_ENV === "production", // Use secure flag in production
    path: "/", // Cookie path
    sameSite: "strict", // Cookie sameSite option
  };

  const headers = new Headers();
  headers.set(
    "Set-Cookie",
    `mic=myCookieValue; Max-Age=${cookieOptions.maxAge}; Path=${cookieOptions.path}; HttpOnly=${cookieOptions.httpOnly}; Secure=${cookieOptions.secure}; SameSite=${cookieOptions.sameSite}`
  );
  return new Response(JSON.stringify(resData), {
    status: 200,
    headers: Headers,
  });
}
