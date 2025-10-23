import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const BASE_URL = process.env.BASE_URL;

export const config = {
  matcher: ["/chats","/groups","/settings"],
};

export async function middleware(request: NextRequest) {
  console.log("Request intercepted");

  if (request.nextUrl.pathname.startsWith("/chats") || request.nextUrl.pathname.startsWith("/groups") || request.nextUrl.pathname.startsWith("/settings")) {
    // Get the access token from cookies
    const accessToken = request.cookies.get("accessToken")?.value;

    // If no access token is found, redirect to signin
    if (!accessToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    try {
      // Validate the token with your backend API
      const res = await fetch(`${BASE_URL}/api/validateToken/${accessToken}`);
      console.log(accessToken);
      // If the request fails or the server returns an error
      if (!res.ok) {
        console.error("Token validation failed, redirecting to /signin");
        return NextResponse.redirect(new URL("/signin", request.url));
      }

      const value = await res.json();

      // If the token is invalid, redirect to signin
      if (!value.valid) {
        return NextResponse.redirect(new URL("/signin", request.url));
      }
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    // If everything is okay, allow access to the next handler
    return NextResponse.next();
  }

  // If nothing matches, allow access
  return NextResponse.next();
}
