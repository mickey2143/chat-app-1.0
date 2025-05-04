import { NextRequest, NextResponse } from "next/server";
import User from "../../../database/model/user"
import connectToDatabase from "../../../database/connection"
import { generateRegistrationOptions, verifyRegistrationResponse } from '@simplewebauthn/server';
import { serialize } from "v8";
import { cookies } from "next/headers";


export async function POST(request) {
    let resp
    const body = await request.json();
    try {
        const username = await body.username
        await connectToDatabase()
        const existUser = false
        console.log(existUser)

        if (!existUser) {
            const options = await generateRegistrationOptions({
                rpID: "localhost",
                rpName: "chatanoni",
                userName: username,
                
            })
            resp = {
                success: true,
                options
            },

                { status: 200, statusText: "success" }

               let cookieStore = cookies()
               const cookiesDetail = {
                name: 'regInfo',
                value:JSON.stringify({userId:options.user.id,username,challenge:options.challenge}),
                httpOnly: true,
                path: '/',
                maxAge:60000,
                secure:true
              }
               cookieStore.set(cookiesDetail)
        } else {
            resp = { success: false, error: "User already exists" }
        }


    } catch (err) {
        console.log(err)
        resp = { success: false, error: "unable to Register User" }
    }

    
    return Response.json(resp);
}
