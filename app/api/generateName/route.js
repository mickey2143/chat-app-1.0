import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  let username;
  const url =
    "https://random-username-generate.p.rapidapi.com/?locale=en_US&minAge=18&maxAge=50&domain=ugener.com";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a9b232b5aemsh13fdbd1f88705cap1a7007jsndb9fd6f25d0b",
      "X-RapidAPI-Host": "random-username-generate.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const newData = JSON.parse(result);
    username = newData.items.username;
  } catch (error) {
    console.error(error);
  }

  return Response.json({ username });
}
