import { getPosts } from "@/lib/services/getPosts";
import formatDate from "@/lib/utils/formatDate";
import Link from "next/link";

export default function Posts() {
	const posts = getPosts();

	return (
		<section className="flex flex-col gap-y-5">
			<h2 className="text-3xl font-bold">Blog</h2>
			<div className="flex flex-col gap-y-3">
				{posts.map((item) => (
					<article className="flex flex-col items-start">
						<Link href={`/posts/${item.id}`} className="font-bold text-2xl">
							{item.title}
						</Link>
						<p className="text-slate-500">{formatDate(item.date)}</p>
					</article>
				))}
			</div>
		</section>
	);
}
