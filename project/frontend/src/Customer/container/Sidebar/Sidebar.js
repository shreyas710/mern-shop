import React, { useContext, useEffect } from "react";

import "./Sidebar.css";
import { CartContext } from "../../contexts/CartContext";
import Cart from "./Cart";
import axios from "../../../axios/axios";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
	let text = "No items in list";
	const history = useHistory();

	const { items, increaseQuantity } = useContext(CartContext);
	// useEffect(() => {
	// 	history.push("/custs/me/shoplist");
	// }, []);

	const handleQuantity = (id, e) => {
		increaseQuantity(id, e);
	};

	const handleDropDown = () => {
		var obj = document.getElementById("dropdown-name");
		var selectedText = obj.options[obj.selectedIndex].innerHTML;
		obj.innerHTML = selectedText;
	};

	const saveCart = async () => {
		try {
			const cart = await axios.post("/custs/cart/save", { items });
			console.log(cart);
		} catch (e) {
			console.log(e);
		}
	};

	if (items.length > 0) text = "List of items";

	return (
		<>
			<div className="sidebar">
				<h3 style={{ textAlign: "center" }} className="pt-3">
					{text}
				</h3>
				<hr />
				<div className="overflow-auto" style={{ height: "78%" }}>
					{items.map((item) => (
						<Cart className="card" {...item} key={item._id} />
					))}
				</div>
				<div className="row" style={{ height: "8%", margin: "0px" }}>
					<div className="col-12 col-sm-6 pr-1">
						<button
							className="btn btn-warning btn-block h-100"
							onClick={saveCart}
							style={{
								fontSize: "20px",
							}}>
							Save Cart
						</button>
					</div>
					<div className="col-12 col-sm-6 pl-1">
						<button
							className="btn btn-primary btn-block h-100"
							style={{
								backgroundColor: "#045de9",
								fontSize: "20px",
							}}>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
