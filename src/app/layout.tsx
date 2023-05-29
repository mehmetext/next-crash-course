//Next
import { Metadata } from "next";

//Styles
import "./globals.css";

//Fonts
import { Inter } from "next/font/google";
import Link from "next/link";

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
			<body className={inter.className}>
				<header className="bg-slate-500 text-white p-4">
					<h2 className="text-2xl font-bold">My Nav</h2>
					<nav className="flex gap-x-2">
						<Link href="http://localhost:3000/">Home</Link>
						<Link href="/about">About</Link>
					</nav>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
