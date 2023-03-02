import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
	const router = useRouter();
	return (
		<div>
			ProductDetail ={">"} {router.query.id}
		</div>
	);
};

export default ProductDetail;
