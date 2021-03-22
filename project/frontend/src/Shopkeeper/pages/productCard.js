import React, { useState, useEffect, useContext } from "react";
import axios from "../../axios/axios";

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

import {
	Modal,
} from 'react-bootstrap'



const ProductCard = (props) => {
	const [modalShow, setModalShow] = useState(false);

	const handleClick = () => {
		setModalShow(true);
		// alert("hello");
	};

	return (
		<>
		<Modal
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			show={modalShow}
			onHide={() => setModalShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div></div>
				
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
			<Card style={{ width: "30%" }}>
				<CardImg top width="100%" src={props.url} alt={props.name} />
				<CardBody>
					<CardTitle tag="h5">{props.name}</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						{props.category}
					</CardSubtitle>
					<CardText>This is a wider card </CardText>
					<Button onClick={handleClick}>Add Product</Button>
				</CardBody>
			</Card>
		</>
	);
};

export default ProductCard;
