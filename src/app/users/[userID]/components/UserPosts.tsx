export default function UserPosts({ posts }: { posts: Post[] }) {
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
