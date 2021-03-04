import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [items, setItems] = useState([]);
	const insertItems = (products) => {
		let obj = items.find((item) => item._id === products._id);
		if (!obj) {
			setItems([...items, products]);
		}
	};

	const deleteItems = (id) => {
		let obj = items.filter((item) => {
			return item._id !== id;
		});
		setItems(obj);
	};

	const increaseQuantity = (id, value) => {
		let temp = items;
		let obj = temp.find((item) => item._id === id);
		if (obj) {
			obj.quantity = parseInt(value);
		}
		setItems(temp);
	};
	return (
		<CartContext.Provider
			value={{ items, insertItems, deleteItems, increaseQuantity }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
