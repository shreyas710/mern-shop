import axios from "../../axios/axios";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ShopCard from "./shopCard";

const ShopList = (props) => {
	const { items } = useContext(CartContext);
	const [shoplist, setShoplist] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await axios.post("/custs/me/shoplist", { items });
			setShoplist(response.data);
			shoplist.sort((a, b) =>
				a.price > b.price
					? 1
					: a.price === b.price
					? a.rating > b.rating
						? 1
						: -1
					: -1
			);
		})();
	}, []);

	return (
		<div className="content container-fluid">
			<div className="row">
				{shoplist.map((item) => (
					<ShopCard className="card" {...item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default ShopList;
