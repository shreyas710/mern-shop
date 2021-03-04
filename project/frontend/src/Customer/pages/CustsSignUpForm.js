import React, { useState } from "react";
import "./CustsLoginSignUpForm.css";
// import "./CustsSignUpForm.css";
import axios from "../../axios/axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import validator from "validator";
import { useHistory } from "react-router-dom";

const required = (value) => {
	if (!value.toString().trim().length) {
		// We can return string or jsx as the 'error' prop for the validated Component
		return "require";
	}
};

const email = (value) => {
	if (!validator.isEmail(value)) {
		return `${value} is not a valid email.`;
	}
};

// And now we can use these
const CustsSignUpForm = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		pin: "",
		password: "",
		confirmPassword: "",
	});

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post("/custs/signup", data);
		console.log(response);
		history.push("/custs/signin");
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
		console.log(data);
	};
	return (
		<Form className="cust" onSubmit={handleSubmit}>
			<h1 className="cust_text">Sign Up as a Customer</h1>

			<Input
				label="Name"
				name="name"
				type="text"
				value={data.name}
				placeholder="Enter Your Name"
				className="cust_input"
				validations={[required]}
				onChange={handleChange}
			/>

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

			<input
				label="Phone Number"
				name="phone"
				type="text"
				value={data.phone}
				placeholder="0000000000"
				className="cust_input"
				onChange={handleChange}
			/>
			<input
				label="Pin Code"
				name="pin"
				type="text"
				value={data.pin}
				placeholder="000000"
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

			<label className="cust_login_label" htmlFor="password">
				Confirm Password
			</label>
			<input
				id="confirmPassword"
				name="confirmPassword"
				type="password"
				value={data.confirmPassword}
				placeholder="Enter your password"
				className="cust_input"
				onChange={handleChange}
			/>

			{/* <Checkbox name="acceptedTerms">
             I accept the terms and conditions
          </Checkbox> */}
			<br></br>

			<button type="submit" className="cust_btn">
				Submit
			</button>

			<p>
				Already have an account?? <a href="/custs/signin">Sign In </a>Instead
			</p>
		</Form>
	);
};
export default CustsSignUpForm;
