import { NextRequest, NextResponse } from "next/server";
import { Stream } from "stream";
// import bcrypt from "bcrypt";

const bip39 = require("bip39");
const bcrypt = require("bcrypt");
import { PrismaClient } from "@prisma/client";
// import { generateKey } from "crypto";
import crypto from "crypto";
import { generateToken } from "@/app/utils/tokens";

const prisma = new PrismaClient();
const saltRounds = 15;

async function encryptPassword(password) {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

function generateKey(password) {
  const seed = bip39.generateMnemonic();
  const b3 = bip39.mnemonicToSeedSync(seed).toString("hex");
  return { seed, b3 };
}

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.users.findMany({
    where: {
      OR: [{ username: body.username }],
    },
  });

  if (user.length <= 0) {
    const hashPassword = await encryptPassword(body.password);
    const recovery = crypto.randomUUID();
    const keys = generateKey(hashPassword);
    const newUser = await prisma.users.create({
      data: {
        username: body.username,
        password: hashPassword,
      },
    });

    if (newUser.password) {
      const accessToken = generateToken({
        username: newUser.username,
        id: newUser.id,
      });

      return Response.json(
        {
          success: true,
          user: { username: newUser.username, id: newUser.id },
          recovery,
          keys,
          accessToken,
        },
        { status: 200, statusText: "success" }
      );
    } else {
      return Response.json({
        success: false,
        error: "Cannot Create Account Try Agian Later",
      });
    }
  } else {
    return Response.json({ success: false, error: "User already exists" });
  }
}
