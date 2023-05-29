import getUser from "@/lib/getUser";

export default async function UserPage({
	params: { userID },
}: {
	params: { userID: string };
}) {
	const user: User = await getUser(userID);
	return <div>{user.name}</div>;
}
