import React, { useState, useEffect, useContext } from "react";
import "./Content.css";
import Home from "../../pages/HomeComponent";
import ShopList from "../../pages/ShopListComponent";

function Content({ path }) {
	let ele;
	if (path === "/") {
		return <Home />;
	}
	let splitPath = path.split("/");
	let component = splitPath[splitPath.length - 1];
	switch (component) {
		case "me":
			ele = <Home />;
			break;
		case "shoplist":
			ele = <ShopList />;
			break;
		default:
			ele = <div>Error</div>;
	}

	return <div className="content w-100">{ele}</div>;
}

export default Content;
