import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/signin" || path === "/signup" || path === "/verifyemail";

  const universalPath = path === "/";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !universalPath && !token) {
    const redirectUrl = new URL("/signin", request.nextUrl);
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
}

// See "Matching Paths" below to learn more

export const config = {
  // for every path above steps will be checked
  matcher: ["/", "/create-task", "/signin", "/signup", "/verifyemail"],
};
