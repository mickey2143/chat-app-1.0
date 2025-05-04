import { NextRequest, NextResponse } from "next/server";
import User from "../../../database/model/user"
import connectToDatabase from "../../../database/connection"
import { generateRegistrationOptions, verifyRegistrationResponse } from '@simplewebauthn/server';
import { cookies } from "next/headers";


export async function POST(request) {
    const cookie = JSON.parse(cookies().get("regInfo").value)
    let resp
    const body = await request.json();
    try {
        const verify = await verifyRegistrationResponse({
            response:body,
            expectedChallenge:cookie.challenge,
            expectedRPID:"localhost",
            expectedOrigin:"localhost:3000",
            id:cookie.userId
        }
        )

    console.log(verify)

    } catch (err) {
        console.log(err)
        resp = { success: false, error: "unable to Register User" }
    }

    return Response.json(resp);
}
