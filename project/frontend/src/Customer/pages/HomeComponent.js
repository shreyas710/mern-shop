import React, { useState, useEffect, useContext } from "react";
import CarouselComp from "./CarouselComponent";
import ProductCard from "./productCard";
import axios from "../../axios/axios";
import { SearchContext } from "../contexts/SearchContext";

function Home() {
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

export default Home;
