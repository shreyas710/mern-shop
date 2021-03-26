import React, { useState, useEffect, useContext } from "react";
import axios from "../../axios/axios";
import { CartContext } from "../contexts/CartContext";
import ShopList from "./ShopListComponent";
import { Redirect } from "react-router-dom";

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	CardLink,
	CardGroup,
} from "reactstrap";

const ProductCard = (props) => {
	const { items, insertItems } = useContext(CartContext);
	const [direct, setDirect] = useState(null);

	const handleClick = (e) => {
		e.preventDefault();
		const item = {
			owner: "",
			name: "",
			quantity: 1,
		};
		item.owner = props._id;
		item.name = props.name;
		insertItems(item);
		console.log(items);
		setDirect("/custs/me/shoplist");
	};

	if (direct) {
		return <Redirect to={direct} />;
	} else {
		return (
			<Card style={{ width: "30%" }}>
				<CardImg top width="100%" src={props.url} alt={props.name} />
				<CardBody>
					<CardTitle tag="h5">{props.name}</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						{props.category}
					</CardSubtitle>
					<CardText>This is a wider card </CardText>
					<Button onClick={(e) => handleClick(e)}>Add to Cart</Button>
				</CardBody>
			</Card>
		);
	}
};

export default ProductCard;
