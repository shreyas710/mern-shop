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

import { Modal } from "react-bootstrap";

const ProductCard = (props) => {
	const [modalShow, setModalShow] = useState(false);
	const [items, setItems] = useState({
		owner: "",
		price: "",
		availability: false,
	});

	const handleClick = (id) => {
		setModalShow(true);
		setItems({
			...items,
			owner: id,
		});
		console.log(items);
	};

	const handleChange = (e) => {
		setItems({
			...items,
			[e.target.name]:
				e.target.name === "availability" ? e.target.checked : e.target.value,
		});
	};

	const handleSubmit = async (id) => {
		try {
			const response = await axios.post("shops/me/addItems", items);
			console.log(response.status);
			if (response.status === 201) {
				alert("Item already present");
			}
			setModalShow(false);
		} catch (e) {
			console.log(e);
		}
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
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-3">
								<label htmlFor="price">Price</label>
							</div>
							<div className="col-12 col-md-3">
								<input
									onChange={(e) => handleChange(e)}
									type="number"
									id="price"
									name="price"
									min="1"
									value={items.price}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-3">
								<label htmlFor="availability">Availability</label>
							</div>
							<div className="col-12 col-md-3">
								<input
									onChange={(e) => handleChange(e)}
									type="checkbox"
									id="availability"
									name="availability"
									value={items.availability}
								/>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button color="primary" onClick={handleSubmit}>
						Add
					</Button>
					<Button color="danger" onClick={() => setModalShow(false)}>
						Close
					</Button>
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
					<Button onClick={() => handleClick(props._id)}>Add Product</Button>
				</CardBody>
			</Card>
		</>
	);
};

export default ProductCard;
