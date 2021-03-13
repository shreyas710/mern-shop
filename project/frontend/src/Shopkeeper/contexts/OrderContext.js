import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
	const [orders, setOrders] = useState([]);

	const updateOrders = (items) => {
		setOrders(items);
	};

	return (
		<OrderContext.Provider value={{ orders, updateOrders }}>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;
