import axios from "../../axios/axios";
import React, { useState, useEffect, useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";

const ShopList = (props) => {
	const [shops, setShops] = useState([]);
	const { items } = useContext(CartContext);

	useEffect(() => {
		(async () => {
			const response = await axios.post("/custs/me/shoplist", { items });
			console.log(response.data);
		})();
	}, [items]);

	return <div className="container-fluid"></div>;
};

export default ShopList;
