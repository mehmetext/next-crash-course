//Next
import { Metadata } from "next";
import Link from "next/link";

//Styles
import "./globals.css";

//Fonts
import { Inter } from "next/font/google";

//Utils
import cn from "@/lib/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Crash Course",
	description: "Created by mehmetext",
	generator: "mehmetext",
	creator: "mehmetext",
	authors: { name: "mehmetext", url: "https://konukcu.dev" },
	keywords: ["nextjs", "crash", "course", "mehmetext"],
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#000000" },
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
	],
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "flex flex-col")}>
				<header className="bg-slate-500 text-white p-4 flex items-center justify-between gap-4">
					<h2 className="text-2xl font-bold">
						My Nav{" "}
						<span className="text-xs font-normal">(from RootLayout)</span>
					</h2>
					<nav className="flex gap-x-2">
						<Link href="http://localhost:3000/">Home</Link>
						<Link href="/about">About</Link>
					</nav>
				</header>
				<main className="flex-1 flex flex-col">{children}</main>
			</body>
		</html>
	);
}
