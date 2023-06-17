export default async function getUserPosts(id: string): Promise<Post[]> {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${id}`
	);

	return await res.json();
}
