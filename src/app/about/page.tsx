//Next
import { Metadata } from "next";

//React
import React from "react";

export const metadata: Metadata = {
	title: "About - Next Crash Course",
	description: "About of mehmetext",
};

export default function About() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<h1 className="font-bold text-5xl">My About Page</h1>
		</div>
	);
}
