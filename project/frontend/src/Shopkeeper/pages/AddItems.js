import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";
import axios from "../../axios/axios";
import "./AddItems.css";

function AddItems() {
	const [products, setProducts] = useState([]);
	const [searchItem, setSearchItem] = useState("");

	useEffect(() => {
		async function setData() {
			const response = await axios.get("/shops/me/addItems");
			setProducts(response.data);
		}
		setData();
	}, []);

	const handleChange = (e) => {
		setSearchItem(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.get(
				`/shops/me/product?search=${searchItem}`
			);
			console.log(response);
			setProducts(response.data);
		} catch (e) {}
	};

	return (
		<div className="container-fluid">
			<div className="row mt-3" style={{ height: "60px", fontSize: "20px" }}>
				<div className="col-12 col-sm-10 d-flex justify-content-center">
					<form className="w-75 rounded" onSubmit={(e) => handleSubmit(e)}>
						<input
							type="text"
							placeholder="Search Product"
							className="w-75 rounded"
							name="searchItem"
							value={searchItem}
							onChange={(e) => handleChange(e)}
						/>
					</form>
				</div>
				<div className="col-12 col-sm-2 d-flex justify-content-center mt-2">
					<button
						className="btn btn-primary"
						style={{ height: "60px", fontSize: "20px" }}>
						Create new product
					</button>
				</div>

				<div
					className="row mt-5"
					style={{ marginLeft: "0px", marginRight: "0px", width: "100%" }}>
					{products.map((item) => (
						<ProductCard className="card" {...item} key={item._id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default AddItems;
