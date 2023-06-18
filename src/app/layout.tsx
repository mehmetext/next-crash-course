//Components
import Header from "@/components/Header";

//Next
import { Metadata } from "next";

//Styles
import "./globals.css";

//Fonts
import { Inter } from "next/font/google";

//Utils
import cn from "@/lib/utils/cn";
import Profile from "@/components/Profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mehmet K.",
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
			<body
				className={cn(inter.className, "bg-slate-800 text-white space-y-10")}
			>
				<Header />
				<Profile />
				{children}
			</body>
		</html>
	);
}
