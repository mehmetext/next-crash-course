"use client";

import { useParams } from "next/navigation";

export default function NotFound() {
	const { userID } = useParams();

	return (
		<h1 className="text-6xl font-bold">
			The requested user ({userID}) does not exist.
		</h1>
	);
}
