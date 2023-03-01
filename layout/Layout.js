import React from "react";

export default function Layout({ children }) {
	return (
		<>
			<div>header</div>
			{children}
			<div>footer</div>
		</>
	);
}
