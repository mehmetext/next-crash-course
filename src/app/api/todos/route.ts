import { NextRequest, NextResponse } from "next/server";

const dataUrl = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
	const res = await fetch(dataUrl);

	const todos: Todo[] = await res.json();

	return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
	const { title, userId }: Partial<Todo> = await request.json();

	if (!userId || !title) {
		return NextResponse.json(
			{ message: `Missing required data` },
			{
				status: 402,
			}
		);
	}

	const res = await fetch(`${dataUrl}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"API-Key": process.env.DATA_API_KEY as string,
		},
		body: JSON.stringify({
			userId,
			title,
			completed: false,
		}),
	});

	const newTodo: Todo = await res.json();

	return NextResponse.json(newTodo);
}

export async function PUT(request: NextRequest) {
	const { title, userId, id, completed }: Partial<Todo> = await request.json();

	if (!userId || !title || !id || typeof completed !== "boolean") {
		return NextResponse.json(
			{ message: `Missing required data` },
			{
				status: 402,
			}
		);
	}

	const res = await fetch(`${dataUrl}/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"API-Key": process.env.DATA_API_KEY as string,
		},
		body: JSON.stringify({
			userId,
			title,
			completed,
		}),
	});

	const newTodo: Todo = await res.json();

	return NextResponse.json(newTodo);
}
