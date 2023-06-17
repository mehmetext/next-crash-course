export default async function getUser(id: string): Promise<User> {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

	return await res.json();
}
