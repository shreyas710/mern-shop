import React from "react";
import { Header, Footer, Sidebar, Content } from "./index";
import SearchContextProvider from "./../contexts/SearchContext";
import CartContextProvider from "./../contexts/CartContext";

const Layout = (props) => {
	return (
		<div>
			<SearchContextProvider>
				<Header {...props} />
				<div className="main">
					<CartContextProvider>
						<Sidebar />
						<Content />
					</CartContextProvider>
				</div>
				{/* <Footer /> */}
			</SearchContextProvider>
		</div>
	);
};

export default Layout;
