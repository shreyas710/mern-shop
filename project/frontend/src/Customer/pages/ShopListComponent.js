import axios from "../../axios/axios";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ShopList = (props) => {
	const { items } = useContext(CartContext);
	console.log(items);

	useEffect(() => {
		async function setData() {
			const response = await axios.post("/custs/me/shoplist", { items });
			console.log(response.data);
		}
		setData();
	}, []);

	return <div className="container">ShopList</div>;
};

export default ShopList;
