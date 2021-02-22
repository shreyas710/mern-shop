const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Cust = require('./cust')

const prodSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	category: {
		type: String,
		trim: true,
		lowercase: true,
	},
	lowestprice: {
		type: String,
		trim: true,
		lowercase: true,
	}

});

prodSchema.virtual('cust', {
    ref: 'Cust',
    localField: '_id',
    foreignField: 'owner'
})

const Product = mongoose.model("products", prodSchema);
module.exports = Product;
