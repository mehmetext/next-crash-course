export default async function getUserPosts(id: string): Promise<Post[]> {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${id}`
	);

	if (!res.ok) throw new Error("failed to fetch data");

	return await res.json();
}
