export default function formatDate(date: string) {
	return Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
		new Date(date)
	);
}
