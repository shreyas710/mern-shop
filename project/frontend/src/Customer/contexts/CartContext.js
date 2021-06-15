import React, { createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = (props) => {
	const [items, setItems] = useState([]);

	const insertItems = (products) => {
		let obj = items.find((item) => item._id !== products._id);
		if (!obj) {
			setItems([...items, products]);
		}
		// console.log(items);
	};

	const deleteItems = (owner) => {
		let obj = items.filter((item) => {
			return item.owner !== owner;
		});
		setItems(obj);
		// console.log(items);
	};

	const increaseQuantity = (id, value) => {
		let temp = items;
		let obj = temp.find((item) => item._id === id);
		if (obj) {
			obj.quantity = parseInt(value);
		}
		setItems(temp);
		console.log(items);
	};

	return (
		<CartContext.Provider
			value={{ items, insertItems, deleteItems, increaseQuantity }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
