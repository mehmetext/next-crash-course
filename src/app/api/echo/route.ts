import { NextResponse } from "next/server";

export function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const obj = Object.fromEntries(searchParams);

	return NextResponse.json(obj);
}
