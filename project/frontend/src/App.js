import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import OrderContextProvider from "./Shopkeeper/contexts/OrderContext";
import PendingContextProvider from "./Shopkeeper/contexts/PendingContext";
import CartContextProvider from "./Customer/contexts/CartContext";

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

function App() {
	return (
		<OrderContextProvider>
			<PendingContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<React.Suspense fallback={loading}>
							<Switch>
								{routes.map((route, index) => {
									console.log(index);
									return (
										route.component && (
											<Route
												key={index}
												exact={route.exact}
												path={route.path}
												name={route.name}
												render={(props) => (
													<div>
														<route.component {...props} />
													</div>
												)}
											/>
										)
									);
								})}
							</Switch>
						</React.Suspense>
					</BrowserRouter>
				</CartContextProvider>
			</PendingContextProvider>
		</OrderContextProvider>
	);
}

export default App;
