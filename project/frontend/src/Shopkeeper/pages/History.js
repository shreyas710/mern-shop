import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import axios from "./../../axios/axios";

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
});

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{row.order.order_id}</TableCell>
				<TableCell>{row.order.createdAt}</TableCell>
				<TableCell className="w-25" component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="left" className="w-25">
					{row.address}
				</TableCell>
				<TableCell align="right">{row.order.totalPrice}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
									{row.order.products.map((historyRow, index) => (
										<TableRow key={index}>
											<TableCell component="th" scope="row">
												{index + 1}
											</TableCell>
											<TableCell>{historyRow.name}</TableCell>
											<TableCell align="right">{historyRow.quantity}</TableCell>
											<TableCell align="right">{historyRow.price}</TableCell>
											<TableCell align="right">
												{historyRow.quantity * historyRow.price}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

const History = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await axios("/shops/me/history");
				setOrders(data.data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

	return (
		<TableContainer component={Paper} className="container-fluid">
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Order ID</TableCell>
						<TableCell align="left">Order Placed</TableCell>
						<TableCell align="left" className="w-25">
							Customer Name
						</TableCell>
						<TableCell align="left" className="w-25">
							Address
						</TableCell>
						<TableCell align="right">Total Price</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((row, index) => (
						<Row key={index} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default History;
