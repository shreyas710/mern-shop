import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./productCard";
import axios from "../../axios/axios";
import "./AddItems.css";

function AddItems() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function setData() {
			const response = await axios.get("/custs");
			setProducts(response.data);
		}
		setData();
	}, []);

	return (
		<div className="container-fluid">
			<div className="row mt-3" style={{ height: "60px", fontSize: "20px" }}>
				<div className="col-12 col-sm-10 d-flex justify-content-center">
					<input
						type="text"
						className="w-75 rounded"
						placeholder="Search Product"
					/>
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
					style={{ marginLeft: "0px", marginRight: "0px" }}>
					{products.map((item) => (
						<ProductCard className="card" {...item} key={item._id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default AddItems;
