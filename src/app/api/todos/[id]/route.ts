import { NextResponse } from "next/server";

const dataUrl = "https://jsonplaceholder.typicode.com/todos";

interface Params {
	id: string;
}

export async function GET(
	request: Request,
	{
		params: { id },
	}: {
		params: Params;
	}
) {
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
