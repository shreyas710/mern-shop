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
	Modal,
} from "reactstrap";

// function MyVerticallyCenteredModal(props) {
// 	return (
// 		<Modal
// 			{...props}
// 			size="lg"
// 			aria-labelledby="contained-modal-title-vcenter"
// 			centered>
// 			<Modal.Header closeButton>
// 				<Modal.Title id="contained-modal-title-vcenter">
// 					Modal heading
// 				</Modal.Title>
// 			</Modal.Header>
// 			<Modal.Body>
// 				<h4>Centered Modal</h4>
// 				<p>
// 					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
// 					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
// 					consectetur ac, vestibulum at eros.
// 				</p>
// 			</Modal.Body>
// 			<Modal.Footer>
// 				<Button onClick={props.onHide}>Close</Button>
// 			</Modal.Footer>
// 		</Modal>
// 	);
// }

const ProductCard = (props) => {
	// const [modalShow, setModalShow] = useState(false);

	const handleClick = () => {
		// setModalShow(true);
		alert("hello");
	};

	return (
		<>
			{/* <MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/> */}
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
