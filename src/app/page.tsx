//Next
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home - Next Crash Course",
};

export default function Home() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<h1 className="font-bold text-5xl">My Home Page</h1>
		</div>
	);
}
