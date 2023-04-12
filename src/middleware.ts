import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt_decode from "jwt-decode";

function toLogin(req: NextRequest) {
  const url = req.nextUrl.clone();
  const requestedPage = req.nextUrl.pathname;

  url.pathname = `/auth/login`;
  url.search = `p=${requestedPage}`;
  return url;
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const requestedPage = req.nextUrl.pathname;

  if (!token) {
    return NextResponse.rewrite(toLogin(req));
  }
  const user = jwt_decode(token?.value + "") as IUserRol;

  if (requestedPage.includes("dashboard") && !user.Role?.dashboard) {
    return NextResponse.rewrite(toLogin(req));
  }

  if (user.Role?.dashboard) {
    NextResponse.next();
  } else {
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/user"],
};
