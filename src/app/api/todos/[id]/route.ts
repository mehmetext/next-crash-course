import { NextResponse } from "next/server";

const dataUrl = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request) {
	const id = request.url.slice(request.url.lastIndexOf("/") + 1);

	const res = await fetch(`${dataUrl}/${id}`);

	const todo: Todo = await res.json();

	if (!todo.id)
		return NextResponse.json(
			{
				message: "Todo not found",
			},
			{ status: 404 }
		);

	return NextResponse.json(todo);
}
