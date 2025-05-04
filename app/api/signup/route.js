import { NextRequest, NextResponse } from "next/server";
import { Stream } from "stream";
const bip39 = require("bip39");
const bcrypt = require("bcrypt");
import { PrismaClient } from "@prisma/client";
// import { generateKey } from "crypto";
import crypto from "crypto";
import { generateToken } from "@/app/utils/tokens";
import User from "../../../database/model/user"
import connectToDatabase from "../../../database/connection"



async function encryptPassword(password) {
  const hash = await bcrypt.hash(password, 15);
  return hash;
}

function generateKey(password) {
  const seed = bip39.generateMnemonic();
  const b3 = bip39.mnemonicToSeedSync(seed).toString("hex");
  return { seed, b3 };
}

export async function POST(request) {
  let resp
  const body = await request.json();
  const password = body.password;
  const username = body.username
  
  try{
  await connectToDatabase()
  const existUser = await User.findOne({username:username})
  console.log(username)
  console.log(existUser)

  
  
  if (!existUser) {

    const hashPassword = await encryptPassword(password)
    let newUser = await new User({username,password:hashPassword})
    newUser = await newUser.save()
    console.log(newUser)
    console.log(hashPassword)
    
    if (newUser.password) {
      const accessToken = generateToken({
        username: newUser.username,
        id: newUser.id,
      });

    
      resp = {
        success: true,
        user: { username: newUser.username, id: newUser.id },
        accessToken,
      },
      { status: 200, statusText: "success" }
    
    } else {

      resp = {
        success: false,
        error: "Cannot Create Account Try Again Later",
      }
      
    }
  } else {
    resp = { success: false, error: "User already exists" }
  }
  

  }catch(err){
    console.log(err)
    resp = { success: false, error: "unable to Register User" }
  }

  return Response.json(resp);
}
