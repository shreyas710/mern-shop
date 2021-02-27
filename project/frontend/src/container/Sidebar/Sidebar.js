import React, { useState, useContext } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import "./Sidebar.css";
import {CartContext} from './../../contexts/CartContext'
import Cart from './Cart'

const Sidebar = () => {
  const { items,updateItems,increaseQuantity } = useContext(CartContext);

  const handleQuantity = (id,e) => {
    console.log(e);
    increaseQuantity(id,e)
    console.log(items);
  }

  const handleDropDown = () => {
    var obj = document.getElementById("dropdown-name");
    var selectedText = obj.options[obj.selectedIndex].innerHTML;
    obj.innerHTML = selectedText;
  }
  return (
    <>
      <div className="sidebar ">
        <h3>List of cart Items</h3>
      <div className="overflow-auto" style={{"height":"650px"}} >
          {items.map(item => 
            <Cart className="card" {...item} key={item._id}/>
          )}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
