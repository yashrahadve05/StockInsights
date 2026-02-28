import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);

	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
        // '/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|assets).*)', // default matchers
        "/api/(?!auth/sign-in|auth/sign-up|auth/sign-out).*", // Apply middleware to all API routes except auth routes
        "/((?!sign-in|sign-up|sign-out).*)", // Apply middleware to all pages except auth pages
    ], 
};