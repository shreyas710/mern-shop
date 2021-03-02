const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("./product");
const Cust = require("./cust");
const Shop = require("./shop");

const itemSchema = new Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
	},
	// price: {
	// 	type: Number,
	// 	trim: true,
	// },
	quantity: {
		type: Number,
		trim: true,
	},
});

const cartSchema = new Schema({
	products: {
		type: "array",
		items: {
			type: itemSchema,
		},
	},
	// shop_id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "Shop",
	// },
	cust_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Cust",
	},
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
