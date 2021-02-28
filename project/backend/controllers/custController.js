const Cust = require("../models/cust");
const Product = require("../models/product");
var path = require("path");

const sign_up_post = async (req, res) => {
	console.log(req.body);
	const user = new Cust(req.body);
	try {
		await user.save();
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
	console.log(req.body);

	try {
		const user = await Cust.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateCustAuthToken();
		res.status(200).redirect("/mart");
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const get_products = async (req, res) => {
	console.log(req.body);

	try {
		const products = await Product.find();
		console.log(products);
		res.status(200).send(products);
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

const get_products_search = async (req, res) => {
	console.log(req.query.search);

	try {
		const products = await Product.find({ name: new RegExp(req.query.search) });
		console.log(products);
		res.status(200).send(products);
	} catch (e) {
		console.log(e);
		res.status(404).sendFile(path.resolve("views/404.html"));
	}
};

module.exports = {
	sign_up_post,
	sign_up_get,
	sign_in_get,
	sign_in_post,
	get_products,
	get_products_search,
};
