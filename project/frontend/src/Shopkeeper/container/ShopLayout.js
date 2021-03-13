import React from "react";
import { Header, Footer, Content } from "./index";

const ShopLayout = (props) => {
	return (
		<div>
			<Header {...props} />
			<div className="main">
				<Content path={props.match.path} />
			</div>
			<Footer />
		</div>
	);
};

export default ShopLayout;
