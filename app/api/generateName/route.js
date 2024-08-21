import { NextRequest, NextResponse } from "next/server";
const base = process.env.BASE_URL;

export async function GET(request) {
  try {
    console.log(base);
    let username = generateUsername();
    if (!username) return;
    console.log(username);
    return NextResponse.json({
      success: true,
      username,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: "Unable to Generate Username",
    });
  }
}

async function generateUsername() {
  const url =
    "https://random-username-generate.p.rapidapi.com/?locale=en_US&minAge=18&maxAge=50&domain=ugener.com";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a9b232b5aemsh13fdbd1f88705cap1a7007jsndb9fd6f25d0b",
      "X-RapidAPI-Host": "random-username-generate.p.rapidapi.com",
    },
    cache: "no-store",
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const username = result.items.username;
  try {
    const verify = await fetch(`${base}/api/checkusername`, {
      method: "post",
      body: JSON.stringify({ username }),
    });
    const isVerified = await verify.json();
    console.log(isVerified);
    if (isVerified.user) {
      return username;
    } else {
      generateUsername();
    }
  } catch (error) {
    console.log(error);
  }
}
