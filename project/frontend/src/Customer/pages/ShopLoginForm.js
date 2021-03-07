import React, { useState } from "react";
import "./ShopLoginSignUpForm.css";
import axios from "../../axios/axios";
import { useHistory } from "react-router-dom";


const ShopLoginForm = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [isLogged, setIsLogged] = useState(false);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post("/shops/signin", data);
		console.log(response);
		if (response.status === 200) {
			localStorage.setItem("token", response.data);
			history.push("/shops/me");
		}
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit} className="shop">
			<h1 className="shop_text">Shopkeeper Login</h1>

			<label className="shop_label" htmlFor="email">
				Email
			</label>
			<input
				id="email"
				name="email"
				type="text"
				placeholder="Enter your email"
				className="shop_input"
				value={data.email}
				onChange={handleChange}
			/>

			<label className="shop_label" htmlFor="password">
				Password
			</label>
			<input
				id="password"
				name="password"
				type="password"
				value={data.password}
				placeholder="Enter your password"
				className="shop_input"
				onChange={handleChange}
			/>

			<button className="shop_btn" type="submit">
				Login
			</button>

			<p>
				Don't have an account?? <a href="/shops/signup">SignUp </a>Instead
			</p>
		</form>
	);
};

export default ShopLoginForm;
