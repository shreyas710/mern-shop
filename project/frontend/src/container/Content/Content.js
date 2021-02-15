import React from "react";
import "./Content.css";
import CarouselComp from "./CarouselComponent";
import ProductCard from "./ProductCard.js";

function Content() {
	return (
		<div className="content">
			<CarouselComp className="carousel" />
			
			<ProductCard className="card" />







		</div>
	);
}

export default Content;
