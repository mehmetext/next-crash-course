import cn from "@/lib/utils/cn";

export default function Container({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("max-w-3xl mx-auto px-4 lg:px-0", className)}>
			{children}
		</div>
	);
}
