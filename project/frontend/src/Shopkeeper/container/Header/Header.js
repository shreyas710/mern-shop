import React, { useState, useContext } from "react";

import "./Header.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import axios from "../../../axios/axios";
import SidebarData from "./SidebarData";
import Icon from "@material-ui/core/Icon";

const Header = (props) => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [product, setProduct] = useState("");
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (e) => {
		setProduct(e.target.value);
	};

	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars ml-3">
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
			</div>

			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items list-group" onClick={showSidebar}>
					<li className="navbar-toggle ml-4 mb-3">
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose />
						</Link>
					</li>

					{SidebarData.map((item, index) => {
						return (
							<li className="list-group-item mb-3 p-3 ml-3 mr-3 h5" key={index}>
								<Icon className="icon">{item.icon}</Icon>
								<Link to={item.path} className="text-decoration-none">
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Header;
