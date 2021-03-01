import React, { useState, useContext } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import "./Sidebar.css";
import { CartContext } from "./../../contexts/CartContext";
import Cart from "./Cart";
import axios from "./../../axios/axios";


const Sidebar = () => {
	let text = "No items in list";

	const { items, increaseQuantity } = useContext(CartContext);

	const handleQuantity = (id, e) => {
		console.log(e);
		increaseQuantity(id, e);
		console.log(items);
	};

	const handleDropDown = () => {
		var obj = document.getElementById("dropdown-name");
		var selectedText = obj.options[obj.selectedIndex].innerHTML;
		obj.innerHTML = selectedText;
	};

	const saveCart = async () => {
		try{
			  const cart = await axios.post("/custs/cart/save",{items})
			  console.log(cart)
			
		}catch(e){
			console.log(e);
		}
		
	};

	if (items.length > 0) text = "List of items";

	return (
		<>
			<div className="sidebar">
				<h3>{text}</h3>
				<div className="overflow-auto" style={{ height: "86%" }}>
					{items.map((item) => (
						<Cart className="card" {...item} key={item._id} />
					))}
				</div>
				<div className="row" style={{ height: "8%" }}>
					<div className="col-12 col-sm-6 pr-1">
						<button className="btn btn-warning btn-block h-100"
						onClick={saveCart}>
							Save Cart
						</button>
					</div>
					<div className="col-12 col-sm-6 pl-1">
						<button className="btn btn-primary btn-block h-100">
							Checkout
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
