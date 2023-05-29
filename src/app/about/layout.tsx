//Next

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<nav className="bg-slate-400 text-white p-4">Item from AboutLayout</nav>
			{children}
		</>
	);
}
