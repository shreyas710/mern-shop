import React from "react";

const CustsLoginForm = React.lazy(() =>
	import("../src/Customer/pages/CustsLoginForm")
);
const CustsSignUpForm = React.lazy(() =>
	import("../src/Customer/pages/CustsSignUpForm")
);
const ShopLoginForm = React.lazy(() =>
	import("../src/Customer/pages/ShopLoginForm")
);
const ShopSignUpForm = React.lazy(() =>
	import("../src/Customer/pages/ShopSignUpForm")
);
const dummy = React.lazy(() => import("../src/Shopkeeper/pages/dummy"));
const ShopLayout = React.lazy(() =>
	import("../src/Shopkeeper/container/ShopLayout")
);
const Layout = React.lazy(() => import("../src/Customer/container/Layout"));

const routes = [
	{
		exact: true,
		path: "/shops/signin",
		name: "Shopkeeper Login Page",
		component: ShopLoginForm,
	},
	{
		exact: true,
		path: "/shops/signup",
		name: "Customer Register Page",
		component: ShopSignUpForm,
	},
	{
		exact: true,
		path: "/custs/signin",
		name: "Customer Login Page",
		component: CustsLoginForm,
	},
	{
		exact: true,
		path: "/custs/signup",
		name: "Customer Signup Page",
		component: CustsSignUpForm,
	},
	{
		exact: true,
		path: "/shops/me/history",
		name: "history",
		component: ShopLayout,
	},
	{
		exact: true,
		path: "/shops/me/pending",
		name: "pending",
		component: ShopLayout,
	},
	{
		exact: true,
		path: "/shops/me/addItems",
		name: "Add Items",
		component: dummy,
	},
	{
		exact: true,
		path: "/shops/me/updateItems",
		name: "Update Items",
		component: dummy,
	},
	{
		exact: true,
		path: "/shops/me/reviews",
		name: "reviews",
		component: dummy,
	},
	{
		exact: true,
		path: "/shops/me",
		name: "Shopkeeper Home",
		component: ShopLayout,
		idx: 0,
	},
	{
		exact: true,
		path: "/custs/me",
		name: "Customer Home",
		component: Layout,
	},
	{
		path: "/",
		name: "Customer Home",
		component: Layout,
	},
];

export default routes;
