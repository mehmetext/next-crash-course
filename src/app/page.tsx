//Next
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home - Next Crash Course",
};

export default function Home() {
	return (
		<div className="">
			<Link href="/users">Go to Users</Link>
		</div>
	);
}
