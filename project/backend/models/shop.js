const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Cart = require("./cart");
const ShopItem = require('./shopItem');

const shopSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		shop_name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Email is invalid");
				}
			},
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			trim: true,
		},
		phone: {
			type: String,
			unique: true,
			required: true,
			minlength: 10,
			maxlength: 10,
			trim: true,
			validate(value) {
				if (!validator.isMobilePhone(value)) {
					throw new Error("Phone number is invalid");
				}
			},
		},
		location: {
			type: String,
			lowercase: true,
			trim: true,
		},
		pin: {
			type: String,
			trim: true,
			minLength: 6,
			maxLength: 6,
			required: true,
		},
		address: {
			type: String,
			trim: true,
		},
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ timestamps: true }
);

shopSchema.virtual("shopItem", {
	ref: "ShopItem",
	localField: "_id",
	foreignField: "shop_id",
});

shopSchema.methods.toJSON = function () {
	const shop = this;
	const shopObject = cust.toObject();

	delete shopObject.password;

	return shopObject;
};

shopSchema.methods.generateShopAuthToken = async function () {
	const shop = this;
	const token = jwt.sign({ _id: shop._id.toString() }, "aakashshreyaskunal");

	shop.tokens = shop.tokens.concat({ token });
	await shop.save();
	return token;
};

shopSchema.statics.findByCredentials = async (email, password) => {
	const user = await Shop.findOne({ email });

	if (!user) {
		throw new Error("Unable to login");
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Unable to login");
	}

	return user;
};

shopSchema.pre("save", async function (next) {
	const shop = this;

	if (shop.isModified("password")) {
		shop.password = await bcrypt.hash(shop.password, 8);
	}
	next();
});

const Shop = mongoose.model("shopkeepers", shopSchema);
module.exports = Shop;
