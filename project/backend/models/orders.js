const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("./product");
const Cart = require("./cart");

const itemSchema = new Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
	},
	name:{
		type:String,
		trim:true
	},
	price: {
		type: Number,
		min: 1,
		trim: true,
	},
	quantity: {
		type: Number,
		max: 5,
		min: 1,
		trim: true,
	},
});

const orderSchema = new Schema(
	{
		// orderID: {
		// 	type: Number,
		// 	required: true,
		// },

		shop_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},

		cust_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},

		status: {
			type: String,
			required: true,
			lowercase: true,
		},

		products: {
			type: "array",
			items: {
				type: itemSchema,
			},
		},

		totalPrice: {
			type: Number,
			required: true,
			min: 1,
		},

		deliveryDate: {
			type: Date,
		},
	},
	{ timestamps: true }
);

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
