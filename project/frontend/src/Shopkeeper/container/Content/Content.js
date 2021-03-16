import React, { useState, useEffect, useContext } from "react";
import "./Content.css";
import axios from "../../../axios/axios";
import Current from "../../pages/Current";
import Pending from "../../pages/Pending";
import History from "../../pages/History";
import AddItems from "../../pages/AddItems";

function Content({ path }) {
	let ele;

	let splitPath = path.split("/");
	let component = splitPath[splitPath.length - 1];
	switch (component) {
		case "me":
			ele = <Current />;
			break;
		case "pending":
			ele = <Pending />;
			break;
		case "history":
			ele = <History />;
			break;
		case "addItems":
			ele = <AddItems />;
			break;
		default:
			ele = <Current />;
	}

	return <div className="content w-100">{ele}</div>;
}

export default Content;
