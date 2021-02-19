import React from "react";
import { Header, Footer, Sidebar, Content } from "./index";
import SearchContextProvider from "./../contexts/SearchContext";
const Layout = (props) => {
	return (
		<div>
			<SearchContextProvider>
				<Header {...props} />
				<div className="main">
					<Sidebar />
					<Content />
					
				</div>
				<Footer />
			</SearchContextProvider>
		</div>
	);
};

export default Layout;



