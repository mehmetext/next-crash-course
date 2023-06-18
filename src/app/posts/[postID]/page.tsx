import Container from "@/components/Container";

interface Props {
	params: {
		postID: string;
	};
}

export default function PostDetail({ params: { postID } }: Props) {
	return (
		<main>
			<Container>MARKDOWN... {postID}</Container>
		</main>
	);
}
