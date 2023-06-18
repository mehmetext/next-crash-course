//Next
import Container from "@/components/Container";
import { Metadata } from "next";
import Posts from "@/components/Posts";

export const metadata: Metadata = {
	title: "Home - Next Crash Course",
};

export default function Home() {
	return (
		<main>
			<Container className="flex flex-col gap-y-10">
				<h1 className="self-center text-center text-4xl">
					Hello and Welcome 👋 I'm <span className="font-bold">Mehmet</span>.
				</h1>
				<Posts />
			</Container>
		</main>
	);
}
