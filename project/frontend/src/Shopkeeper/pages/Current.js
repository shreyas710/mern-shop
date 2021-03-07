import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
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
import axios from './../../axios/axios'

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
});

function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history: [
			{ date: "2020-01-05", customerId: "11091700", amount: 3 },
			{ date: "2020-01-02", customerId: "Anonymous", amount: 1 },
		],
	};
}

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
				<TableCell>1</TableCell>
				<TableCell>1-10-2020</TableCell>
				<TableCell className="w-25" component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="left" className="w-25">
					{row.calories}
				</TableCell>
				<TableCell align="right">{row.fat}</TableCell>
				<TableCell align="right" className="border-bottom">
					<button className="btn btn-success">Accept</button>
				</TableCell>
				<TableCell align="right" className="border-bottom">
					<button className="btn btn-danger">Reject</button>
				</TableCell>
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
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell component="th" scope="row">
												{historyRow.date}
											</TableCell>
											<TableCell>{historyRow.customerId}</TableCell>
											<TableCell align="right">{historyRow.amount}</TableCell>
											<TableCell align="right">
												{Math.round(historyRow.amount * row.price * 100) / 100}
											</TableCell>
											<TableCell component="th" scope="row" align="right">
												100
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

Row.propTypes = {
	row: PropTypes.shape({
		calories: PropTypes.string.isRequired,
		carbs: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		history: PropTypes.arrayOf(
			PropTypes.shape({
				amount: PropTypes.number.isRequired,
				customerId: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			})
		).isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		protein: PropTypes.number.isRequired,
	}).isRequired,
};

const rows = [
	createData(
		"Frozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurt",
		"Frozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurtFrozen yoghurt",
		6.0,
		24,
		4.0,
		3.99
	),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
	createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
	createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
	createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

const Current = () => {

	const [orders,setOrders] = useState();

	useEffect( async () => {
		try{
			const data  = await axios('/shops/me');
			setOrders(data);
		}catch(e){
			console.log(e);
		}
		
	}, [orders])

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
						<TableCell align="right">Accept</TableCell>
						<TableCell align="right">Reject</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Current;
