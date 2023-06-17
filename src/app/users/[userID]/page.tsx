import getUser from "@/lib/services/getUser";
import getUserPosts from "@/lib/services/getUserPosts";
import UserPosts from "./components/UserPosts";

import { Suspense } from "react";
import { Metadata } from "next";

interface Props {
	params: { userID: string };
}

export async function generateMetadata({
	params: { userID },
}: Props): Promise<Metadata> {
	const user = await getUser(userID);

	return {
		title: user.name,
		description: `This is the page of ${user.name}`,
	};
}

export default async function UserPage({ params: { userID } }: Props) {
	const [user, posts] = await Promise.all([
		getUser(userID),
		getUserPosts(userID),
	]);

	return (
		<>
			<h1 className="text-5xl font-bold">{user.name}</h1>
			<br />
			<UserPosts posts={posts} />
		</>
	);
}
