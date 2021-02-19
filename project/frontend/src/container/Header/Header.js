import React, { useState, useContext, useEffect } from "react";

import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { IconContext } from "react-icons";
import { Link, Redirect } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { SearchContext } from "../../contexts/SearchContext";
import axios from './../../axios/axios'



import {
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Header = (props) => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { items,updateItems } = useContext(SearchContext);
	const [product,setProduct] = useState("")
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const login = () => {
		this.props.history.push("./login");
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (e) => {
		setProduct(e.target.value);
	}

	const searchProduct = async (e) => {
		e.preventDefault();
		try{
			const response = await axios.get(`/custs/me/product?search=${product}`);
			console.log(response);
			updateItems(response.data);
			setProduct("")
		}catch(e){

		}
	}
	return (
		<>
		
			<div className="navbar" >
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars
						onClick={showSidebar}
						style={{ marginLeft: "30px" }}
					/>
				</Link>
				<form 
					style={{ marginRight: "auto", marginLeft: "auto" }}
					className="search_form"
					onSubmit={searchProduct}
					>
					<div>
						<input
							type="text"
							placeholder="Search a product..."
							name="search"
							className="search_input"
							value={product}
							onChange={handleChange}
						/>
						<SearchIcon className="search_icon" />
					</div>
				</form>

				{/* <button  style={{display:"inline-block",justifyContent:"flex-end"}}><ShoppingCartIcon /></button> */}

				<div className="dropdown" style={{ marginRight: "15px" }}>
					<button className="dropbtn">Customer</button>
					<div className="dropdown-content">
						<Link to="/custs/signin">
							<p style={{ paddingTop: "15px" }}>Login</p>
						</Link>
						<Link to="/custs/signup">
							<p style={{ paddingTop: "15px" }}>SignUp</p>
						</Link>
					</div>
				</div>

				{/* <Button
          style={{ justifyContent: "flex-end" }}
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Shopkeeper
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>SignUp</MenuItem>
          <MenuItem onClick={handleClose} linkButton={true} href="http://localhost:3000/login" primaryText="Login" />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}

				<div className="dropdown">
					<button className="dropbtn">Shopkeeper</button>
					<div className="dropdown-content">
						<Link to="/shops/signin">
							<p style={{ paddingTop: "15px" }}>Login</p>
						</Link>
						<Link to="/shops/signup">
							<p style={{ paddingTop: "15px" }}>SignUp</p>
						</Link>
					</div>
				</div>
			</div>

			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose />
						</Link>
					</li>

					{/* {SidebarData.map((item, index) => {
                return (
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    </Link>
                </li>
                );
            })} */}
				</ul>
			</nav>
		
		</>
	);
};

export default Header;
