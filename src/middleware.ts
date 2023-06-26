import { NextResponse } from "next/server";

export function middleware(request: Request) {
	console.log("Middleware!");

	console.log("method:", request.method);
	console.log("url:", request.url);

	const origin = request.headers.get("origin");
	console.log("origin:", origin);
	console.log(" ");

	return NextResponse.next();
}

export const config = {
	matcher: "/api/:path*",
};
