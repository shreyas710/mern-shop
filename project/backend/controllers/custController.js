const Cust = require("../models/cust");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Shop = require("../models/shop");
var path = require("path");
const ShopItem = require("../models/shopItem");
const mongoose = require("mongoose");

const sign_up_post = async (req, res) => {
	// console.log(req.body);
	const user = new Cust(req.body);
	try {
		await user.save();
		const cart = new Cart({ cust_id: user._id });
		// console.log(cart);
		await cart.save();
		//  const token = await user.generateCustAuthToken()
		res.status(200);
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
	try {
		const user = await Cust.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateCustAuthToken();
		res.status(200).send(token);
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const get_products = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).send(products);
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const get_products_search = async (req, res) => {
	try {
		const products = await Product.find({ name: new RegExp(req.query.search) });
		res.status(200).send(products);
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const save_cart = async (req, res) => {
	try {
		const cart = await Cart.updateOne(
			{ cust_id: req.cust._id },
			{
				$set: {
					products: req.body.items,
				},
			}
		);
		res.status(200).send();
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const shopList = async (req, res) => {
	try {
		const shops = await Shop.find({ pin: req.cust.pin }).select("_id");
		const shopItem = await ShopItem.find({ shop_id: { $in: shops } });
		let shopList = [];
		shopItem.forEach((item) => {
			var price = 0;
			var shop = {
				products: [],
				price: 0,
				owner: item.shop_id,
			};
			req.body.items.forEach((it) => {
				var x = 0;
				item.products.forEach((prod) => {
					if (JSON.stringify(prod.owner) === JSON.stringify(it.owner)) {
						x = 1;
						price += parseInt(prod.price);
						shop.products.push(prod);
					}
				});
				if (x == 0) {
					return;
				}
			});
			if (price != 0) {
				shop.price = price;
				shopList.push(shop);
			}
		});
		res.status(200).send(shopList);
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	sign_up_post,
	sign_up_get,
	sign_in_get,
	sign_in_post,
	get_products,
	get_products_search,
	save_cart,
	shopList,
};
