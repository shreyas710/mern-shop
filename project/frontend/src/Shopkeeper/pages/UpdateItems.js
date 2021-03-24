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

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
});

function Row(props) {
	const { row,idx } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();
    const [modalShow, setModalShow] = useState(false);
	const [ orders, setOrders ] = useState([]);

    const [items, setItems] = useState({
		owner: "",
		price: row.item.price,
		availability: row.item.availability,
	});

    const handleChange = (e) => {
		setItems({
			...items,
			[e.target.name]:
				e.target.name === "availability" ? e.target.checked : e.target.value,
		});
	};

	const handleClick = (id) => {
		setModalShow(true);
		setItems({
			...items,
			owner: id,
		});
		console.log(items);
	};

	const handleSubmit = async () => {
        try{
            const data = await axios.post('shops/me/updateItems',items);
            row.item.price = items.price;
            row.item.availability = items.availability;
            setModalShow(false);
        }catch(e){
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
                                        checked={items.availability}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="primary" onClick={handleSubmit}>
                            Update
                        </Button>
                        <Button color="danger" onClick={() => setModalShow(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
			<TableRow className={classes.root}>
				<TableCell align="right">{idx+1}</TableCell>
				<TableCell className="w-25" component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right" className="w-25">
					{row.item.availability === true ? 'Yes' : 'No'}
				</TableCell>
				<TableCell align="right">{row.item.price}</TableCell>
				<TableCell align="right" className="border-bottom">
					<button
						className="btn btn-warning"
						onClick={() => handleClick(row.item.owner)}>
						Update
					</button>
				</TableCell>
			</TableRow>
    </>
	);
}

const UpdateItems = () => {
	const [ orders, setOrders ] = useState([]);
	const [searchItem, setSearchItem] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await axios.get("/shops/me/shopItems");
				setOrders(data.data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

    useEffect(() => {
		async function fetchData() {
			try {
                const data = await axios.get(`/shops/me/shopItems/get?search=${searchItem}`);
                setOrders(data.data);
            } catch (e) {}
		}
		fetchData();
	}, [searchItem]);

    const handleChange = async (e) => {
		setSearchItem(e.target.value);
	};

    const handleClick = async (e) => {
        e.preventDefault();
		try {
			const data = await axios.get(`/shops/me/shopItems/get?search=${searchItem}`);
			setOrders(data.data);
		} catch (e) {}
	};

	return (
        <div>
            <form className="w-100 rounded container-fluid mt-3 mb-3 " onSubmit={(e) => handleClick(e)}>
                    <input
                        type="text"
                        placeholder="Search Product"
                        className="w-50 rounded ml-auto mr-auto"
                        name="searchItem"
                        value={searchItem}
                        onChange={(e) => handleChange(e)}
                    />
			</form>
            <TableContainer component={Paper} className="container-fluid">
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Sr. No.</TableCell>
                            <TableCell align="left" className="w-25">
                                Product Name
                            </TableCell>
                            <TableCell align="right">
                                Availability
                            </TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row, index) => (
                            <Row key={index} row={row} idx={index}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
	);
};

export default UpdateItems;
