import React, { useState, useEffect, useContext } from "react";
import axios from "../../axios/axios";
import { CartContext } from "../contexts/CartContext";
import ShopList from "./ShopListComponent";
import { Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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
	Badge,
} from "reactstrap";

const ShopCard = (props) => {
	const [direct, setDirect] = useState(null);
	const [open, setOpen] = React.useState(false);

	const handleClick = (e) => {
		e.preventDefault();
	};

	if (direct) {
		return <Redirect to={direct} />;
	} else {
		let rating = "",
			empty = "";
		for (let i = 1; i <= props.rating; ++i) rating += "★";
		for (let i = props.rating + 1; i <= 5; ++i) empty += "★";

		return (
			<>
				<Card
					style={{
						width: "100%",
						height: "20%",
						marginTop: "10px",
						marginBottom: "0px",
					}}>
					<CardBody style={{ padding: "0px" }}>
						<div className="row">
							<div className="col-12 col-md-4">
								<CardImg left src="/img/rice.jpg" alt={props.shop_name} />
							</div>
							<div className="col-12 col-md-6">
								<CardTitle tag="h3" style={{ marginTop: "10px" }}>
									{props.shop_name}
								</CardTitle>
								<CardText tag="h5">
									<span
										style={{
											fontSize: "25px",
											color: "#ffc700",
											margin: "0px",
										}}>
										{rating}
									</span>
									<span
										style={{ fontSize: "25px", color: "#ccc", margin: "0px" }}>
										{empty}
									</span>
								</CardText>
								<CardText>{props.address}</CardText>
								<Button
									style={{
										background: "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
										color: "black",
										marginTop: "10%",
										width: "25%",
									}}
									aria-label="expand row"
									size="small"
									onClick={() => setOpen(!open)}>
									View Details
									{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
								</Button>
							</div>
							<div className="col-12 col-md-2" style={{ backgroundColor: "" }}>
								<Badge
									variant="success"
									style={{ fontSize: "20px", marginTop: "10px" }}>
									Total
								</Badge>{" "}
								<CardText style={{ marginTop: "30px", fontSize: "35px" }}>
									₹ {props.item.price}
								</CardText>
								<Button
									onClick={(e) => handleClick(e)}
									style={{
										background: "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
										color: "black",
										marginTop: "30%",
										width: "70%",
									}}>
									Select shop
								</Button>
							</div>
						</div>
					</CardBody>
					<TableContainer component={Paper}>
						<Table
							size="small"
							aria-label="a dense table"
							style={{ paddingBottom: 0, paddingTop: 0 }}
							colSpan={6}>
							<Collapse in={open} timeout="auto" unmountOnExit>
								<Box margin={1}>
									<Typography variant="h6" gutterBottom component="div">
										Order Details
									</Typography>
									<Table size="small" aria-label="purchases">
										<TableHead>
											<TableRow>
												<TableCell>Sr. No.</TableCell>
												<TableCell>Item Name</TableCell>
												<TableCell align="right">Quantity</TableCell>
												<TableCell align="right">Unit Price</TableCell>

												<TableCell align="right">Item Total price</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{props.item.products.map((historyRow, index) => (
												<TableRow key={index}>
													<TableCell component="th" scope="row">
														{index + 1}
													</TableCell>
													<TableCell>{historyRow.name}</TableCell>
													<TableCell align="right">
														{historyRow.quantity}
													</TableCell>
													<TableCell align="right">
														{historyRow.price}
													</TableCell>
													<TableCell align="right">
														{historyRow.quantity * historyRow.price}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</Box>
							</Collapse>
						</Table>
					</TableContainer>
				</Card>
			</>
		);
	}
};

export default ShopCard;
