import React, { createContext, useState } from "react";

export const PendingContext = createContext();

const PendingContextProvider = (props) => {
	const [orders, setOrders] = useState([]);

	const updateOrders = (items) => {
		setOrders(items);
	};

	return (
		<PendingContext.Provider value={{ orders, updateOrders }}>
			{props.children}
		</PendingContext.Provider>
	);
};

export default PendingContextProvider;
