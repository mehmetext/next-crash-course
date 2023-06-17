export default async function UserPosts({
	promise,
}: {
	promise: Promise<Post[]>;
}) {
	const posts = await promise;

	return (
		<section className="space-y-2">
			{posts.map((item) => (
				<article>
					<h2 className="text-4xl font-bold">{item.title}</h2>
					<p>{item.body}</p>
				</article>
			))}
		</section>
	);
}
