import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {


  console.log(request.url)

  // if(request.url === 'http://localhost:3000'){
  //   return NextResponse.rewrite(new URL("/signin",request.url))
  // }
  const user = true;
  if (!user) {
    return NextResponse.redirect(new URL("/signin",request.url))
  }
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

   return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/chat",
    // '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}