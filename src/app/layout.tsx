//Next
import { Metadata } from "next";

//Styles
import "./globals.css";

//Fonts
import { Inter } from "next/font/google";

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
