import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Redirect } from "react-router-dom";
import axios from "../../../axios/axios";

const Cart = (props) => {
	const { items, deleteItems, increaseQuantity } = useContext(CartContext);

	const handleQuantity = (id, e) => {
		increaseQuantity(id, e.target.value);
	};

	const handleDropDown = () => {
		var obj = document.getElementById("dropdown-name");
		var selectedText = obj.options[obj.selectedIndex].innerHTML;
		obj.innerHTML = selectedText;
	};

	const handleClose = (id, e) => {
		deleteItems(id);
	};

	return (
		<div>
			<div className="card" style={{ width: "19rem" }} key={props._id}>
				<div className="card-body">
					<button
						type="button"
						className="close"
						aria-label="Close"
						onClick={(e) => handleClose(props._id, e)}>
						<span aria-hidden="true">&times;</span>
					</button>
					<h5 className="card-title  d-inline">{props.name}</h5>
					<span>{props.quantity}</span>
				</div>
			</div>
		</div>
	);
};

export default Cart;
