const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("./product");
const Shop = require("./shop");

const itemSchema = new Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
	},
	price: {
		type: Number,
		min: 1,
		trim: true,
	},
	availability: {
		type: Boolean,
		trim: true,
	},
});

const shopItemSchema = new Schema({
	products: {
		type: "array",
		items: {
			type: itemSchema,
		},
	},
	shop_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Shop",
	},
});

const ShopItem = mongoose.model("Shop_Item", shopItemSchema);
module.exports = ShopItem;
