//Next
import getAllUsers from "@/lib/services/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Users",
};

export default async function UsersPage() {
	const users: User[] = await getAllUsers();

	return (
		<div className="">
			<Link href="/" className="font-bold text-2xl">
				Back to Home
			</Link>
			<div className="flex flex-col items-start">
				{users.map((i) => (
					<Link href={`/users/${i.id}`} key={i.id}>
						{i.name}
					</Link>
				))}
			</div>
		</div>
	);
}
