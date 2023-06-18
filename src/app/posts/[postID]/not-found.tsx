import Container from "@/components/Container";
import React from "react";

export default function NotFound() {
	return (
		<main>
			<Container className="flex justify-center">
				<h2 className="text-3xl font-bold text-center">
					The requested post does not exist.
				</h2>
			</Container>
		</main>
	);
}
