import { NextResponse } from "next/server";

interface Feedback {
	name?: string;
	surname?: string;
}

export async function POST(request: Request) {
	const formData = await request.formData();
	const feedback: Feedback = {
		name: formData.get("name")?.toString(),
		surname: formData.get("surname")?.toString(),
	};

	return NextResponse.json({
		feedback,
	});
}
