//Next
import Container from "@/components/Container";
import { Metadata } from "next";
import Link from "next/link";

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
				<section className="flex flex-col gap-y-5">
					<h2 className="text-3xl font-bold">Blog</h2>
					<div className="flex flex-col gap-y-3">
						<article className="flex flex-col items-start">
							<Link href="/" className="font-bold text-2xl">
								Deneme Blog Yazısı
							</Link>
							<p className="text-slate-500">March 16, 2023</p>
						</article>
						<article className="flex flex-col items-start">
							<Link href="/" className="font-bold text-2xl">
								Deneme Blog Yazısı
							</Link>
							<p className="text-slate-500">March 16, 2023</p>
						</article>
					</div>
				</section>
			</Container>
		</main>
	);
}
