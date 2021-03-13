const Shop = require("../models/shop");
var path = require("path");
const ShopItem = require("../models/shopItem");
const Orders = require("../models/orders");
const Cust = require("../models/cust");

const sign_up_post = async (req, res) => {
	const user = new Shop(req.body);
	try {
		await user.save();
		const shopItem = new ShopItem({ shop_id: user._id });
		await shopItem.save();
		//  const token = await user.generateShopAuthToken()
		res.redirect("/custs/signin");
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const sign_up_get = (req, res) => {
	res.sendFile(path.resolve("views/custSignUp.html"));
};

const sign_in_get = (req, res) => {
	res.sendFile(path.resolve("views/custSignIn.html"));
};

const sign_in_post = async (req, res) => {
	// console.log(req.body)

	try {
		const user = await Shop.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateShopAuthToken();
		res.status(200).send(token);
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const getOrders = async (req, res) => {
	try {
		let orders = await Orders.find({
			$and: [{ shop_id: req.shop._id }, { status: "waiting" }],
		});

		const updatedOrders = await Promise.all(
			orders.map(async (order) => {
				async function fetchData(order) {
					let temp = {
						name: "",
						address: "",
						order,
					};
					try {
						const cust = await Cust.findOne({ _id: order.cust_id });
						temp.address = cust.address;
						temp.name = cust.name;
					} catch (e) {
						console.log(e);
					}
					return Promise.resolve(temp);
				}
				const data = await fetchData(order);
				// console.log(data);
				return data;
			})
		);

		res.status(200).send(updatedOrders);
	} catch (e) {
		console.log(e);
	}
};

const updateOrders = async (req, res) => {
	console.log(req.params, req.query.accepted);
	let status =
		req.query.accepted === "true"
			? "accepted"
			: req.query.rejected === "true"
			? "rejected"
			: req.query.delivered === "true"
			? "delivered"
			: null;
	if (!status) {
		return res.status(200).send();
	}
	const id = Number.parseInt(req.params.order_id);
	try {
		await Orders.updateOne(
			{ order_id: id },
			{
				$set: {
					status: status,
				},
			}
		);
	} catch (e) {
		console.log(e);
	}
	res.status(200).send();
};

const deliverOrders = async (req, res) => {
	try {
		let orders = await Orders.find({
			$and: [{ shop_id: req.shop._id }, { status: "accepted" }],
		});

		const updatedOrders = await Promise.all(
			orders.map(async (order) => {
				async function fetchData(order) {
					let temp = {
						name: "",
						address: "",
						order,
					};
					try {
						const cust = await Cust.findOne({ _id: order.cust_id });
						temp.address = cust.address;
						temp.name = cust.name;
					} catch (e) {
						console.log(e);
					}
					return Promise.resolve(temp);
				}
				const data = await fetchData(order);
				// console.log(data);
				return data;
			})
		);

		res.status(200).send(updatedOrders);
	} catch (e) {
		console.log(e);
	}
};

const historyOrders = async (req, res) => {
	try {
		let orders = await Orders.find({
			$and: [{ shop_id: req.shop._id }, { status: "delivered" }],
		});

		const updatedOrders = await Promise.all(
			orders.map(async (order) => {
				async function fetchData(order) {
					let temp = {
						name: "",
						address: "",
						order,
					};
					try {
						const cust = await Cust.findOne({ _id: order.cust_id });
						temp.address = cust.address;
						temp.name = cust.name;
					} catch (e) {
						console.log(e);
					}
					return Promise.resolve(temp);
				}
				const data = await fetchData(order);
				// console.log(data);
				return data;
			})
		);

		res.status(200).send(updatedOrders);
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	sign_up_post,
	sign_up_get,
	sign_in_get,
	sign_in_post,
	getOrders,
	updateOrders,
	deliverOrders,
	historyOrders,
};
