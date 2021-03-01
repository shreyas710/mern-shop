import React, { useState } from "react";
import Redirect from "react-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./CustsLoginSignUpForm.css";
import axios from "./../axios/axios";
import { useHistory } from "react-router-dom";

const CustsLoginForm = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const history = useHistory();

	const [isLogged, setIsLogged] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post("/custs/signin", data);
		localStorage.setItem('cust_token',response.data);
		history.push("/custs/me");
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
		// console.log(data);
	};
	return (
		<form onSubmit={handleSubmit} className="cust">
			<h1 className="cust_text">Customer Login</h1>

			<label className="cust_login_label" htmlFor="email">
				Email
			</label>
			<input
				id="email"
				name="email"
				type="text"
				value={data.email}
				placeholder="Enter your email"
				className="cust_input"
				onChange={handleChange}
			/>

			<label className="cust_login_label" htmlFor="password">
				Password
			</label>
			<input
				id="password"
				name="password"
				type="password"
				value={data.password}
				placeholder="Enter your password"
				className="cust_input"
				onChange={handleChange}
			/>

			<button className="cust_btn" type="submit">
				Login
			</button>

			<p>
				Don't have an account?? <a href="/custs/signup">Sign Up </a>Instead
			</p>
		</form>
	);
};

export default CustsLoginForm;
