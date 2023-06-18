//Components
import Container from "@/components/Container";

//Services
import { getPost, getPosts } from "@/lib/services/getPosts";
import formatDate from "@/lib/utils/formatDate";
import { Metadata } from "next";

//Next
import { notFound } from "next/navigation";

interface Props {
	params: {
		postID: string;
	};
}

export async function generateMetadata({
	params: { postID },
}: Props): Promise<Metadata> {
	const posts = getPosts();

	const post = posts.find((post) => post.id === postID);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
	};
}

export default async function PostDetail({ params: { postID } }: Props) {
	const posts = getPosts();

	if (!posts.find((post) => post.id === postID)) {
		return notFound();
	}

	const post = await getPost(postID);

	return (
		<main>
			<Container className="flex flex-col gap-y-10">
				<section className="flex flex-col">
					<h1 className="self-center font-bold text-center text-4xl">
						{post.title}
					</h1>
					<p className="self-center text-slate-500">{formatDate(post.date)}</p>
				</section>
				<article
					className="prose prose-sm md:prose-base prose-invert"
					dangerouslySetInnerHTML={{ __html: post.contentHtml }}
				/>
			</Container>
		</main>
	);
}
