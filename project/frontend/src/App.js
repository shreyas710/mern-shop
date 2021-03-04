import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

function App() {
	return (
		<BrowserRouter>
			<React.Suspense fallback={loading}>
				<Switch>
					{routes.map((route, index) => {
						return (
							route.component && (
								<Route
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
					{/* <Route
						exact
						path="/custs/signin"
						name="Customer Login Page"
						component={CustsLoginForm}
					/>
					<Route
						exact
						path="/shops/signin"
						name="Shopkeeper Login Page"
						component={ShopLoginForm}
					/>
					<Route
						exact
						path="/custs/signup"
						name="Customer Register Page"
						component={CustsSignUpForm}
					/>
					<Route
						exact
						path="/shops/signup"
						name="Customer Register Page"
						component={ShopSignUpForm}
					/>
					<Route
						path="/custs/me"
						name="Customer Home"
						render={(props) => <Layout {...props} />}
					/>
					<Route
						path="/shops/me"
						name="Shopkeeper Home"
						render={(props) => <ShopLayout {...props} />}
					/>
					<Route
						exact
						path="/shops/addItems"
						name="Add items"
						component={dummy}
					/>
					<Route
						exact
						path="/shops/updateItems"
						name="Update items"
						component={dummy}
					/>
					<Route exact path="/shops/pending" name="Pending" component={dummy} />
					<Route exact path="/shops/history" name="History" component={dummy} />
					<Route exact path="/shops/reviews" name="Reviews" component={dummy} />
					<Route
						path="/"
						name="Home"
						render={(props) => <Layout {...props} />}
					/> */}
				</Switch>
			</React.Suspense>
		</BrowserRouter>
	);
}

export default App;
