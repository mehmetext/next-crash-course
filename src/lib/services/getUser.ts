export default async function getUser(id: string): Promise<User> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

	if (!res.ok) throw new Error("failed to fetch data");

	return await res.json();
}
