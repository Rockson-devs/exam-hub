// /app/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = false; // Replace with your actual login check

  console.log(`Request URL: ${req.nextUrl.pathname}`);

  // Redirect to login if not logged in and not already on the login page
  if (!isLoggedIn && req.nextUrl.pathname !== "/") {
    // Changed this line
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
