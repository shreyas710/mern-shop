import React, { useState, useEffect, useContext } from "react";
import "./Content.css";
import CarouselComp from "./CarouselComponent";
import ProductCard from "./productCard.js";
import axios from "../../../axios/axios";
import { CardGroup } from "reactstrap";
import { SearchContext } from "../../contexts/SearchContext";

function Content() {
	const [products, setProducts] = useState([]);
	const [carouselDisplay, setcarouselDisplay] = useState("initial");
	const { items } = useContext(SearchContext);

	useEffect(() => {
		async function setData() {
			const response = await axios.get("/custs");
			setProducts(response.data);
		}
		setData();
	}, []);

	useEffect(() => {
		async function setData() {
			setProducts(items);

			if (items.length > 0) {
				setcarouselDisplay("none");
			}
		}
		setData();
	}, [items]);
	return (
		<div className="content container">
			<div style={{ display: carouselDisplay }}>
				<CarouselComp className="carousel" />
			</div>

			<div className="row">
				{products.map((item) => (
					<ProductCard className="card" {...item} key={item._id} />
				))}
			</div>
		</div>
	);
}

export default Content;
