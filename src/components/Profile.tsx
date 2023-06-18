import Container from "./Container";

export default function Profile() {
	return (
		<Container className="flex items-center justify-center">
			<div className="self-center w-60 h-60">
				<img
					src="/images/profile.jpeg"
					alt="Mehmet K."
					className="rounded-full border-4 border-slate-500"
				/>
			</div>
		</Container>
	);
}
