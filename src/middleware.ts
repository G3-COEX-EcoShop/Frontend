import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt_decode from "jwt-decode";
import { IUserRol } from "./interfaces";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const requestedPage = req.nextUrl.pathname;
  console.log({ token });

  if (!token?.value)
    return NextResponse.redirect(new URL("/auth/login", req.url));

  if (token) {
    const { user } = jwt_decode<{ user: IUserRol }>(token?.value + "");
    if (!user) return NextResponse.redirect(new URL("/auth/login", req.url));

    if (requestedPage.includes("dashboard") && !user.Role?.dashboard) {
      return NextResponse.redirect(new URL("/user", req.url));
    }

    if (requestedPage.includes("user") && !user) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/user"],
};
