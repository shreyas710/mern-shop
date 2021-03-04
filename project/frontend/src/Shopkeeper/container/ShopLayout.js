import React from "react";
import { Header, Footer, Content } from "./index";

const ShopLayout = (props) => {
	return (
		<div>
			<Header {...props} />
			<div className="main">
				<Content />
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default ShopLayout;
