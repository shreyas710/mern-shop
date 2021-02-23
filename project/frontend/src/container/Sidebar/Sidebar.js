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

const Sidebar = () => {
  const { items,updateItems,increaseQuantity } = useContext(CartContext);

  const handleQuantity = (id,e) => {
    console.log(e);
    increaseQuantity(id,e)
    console.log(items);
  }

  const handleDropDown = () =>{
    var obj = document.getElementById("dropdown-name");
    var selectedText = obj.options[obj.selectedIndex].innerHTML;
    obj.innerHTML = selectedText;
  }

  const products = items.map(item => (
    <div className="card" style={{"width": "19rem"}} key={item._id}>
      <div className="card-body">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h5 className="card-title  d-inline">{item.name}</h5>
        <select name="cars" id="cars"className="float-right" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {/* <div className="dropdown float-right">
          <button className="btn border border-dark dropdown-toggle" id="dropdown-name" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"55px"}} onChange={handleDropDown}>
            
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2" >
            <button className="dropdown-item" type="button" value="1" onClick={(e) => handleQuantity(item._id,e)} >1</button>
            <button className="dropdown-item" type="button" value="2" onClick={(e) => handleQuantity(item._id,e)}>2</button>
            <button className="dropdown-item" type="button" value="4" onClick={(e) => handleQuantity(item._id,e)}>3</button>
            <button className="dropdown-item" type="button" value="4" onClick={(e) => handleQuantity(item._id,e)}>4</button>
            <button className="dropdown-item" type="button" value="5" onClick={(e) => handleQuantity(item._id,e)}>5</button>
          </div>
      </div> */}
      </div>
    </div>
  ))
  return (
    <>
      
      <div className="sidebar ">
        <h3>List of cart Items</h3>
      <div className="overflow-auto" style={{"height":"650px"}} >
        {products}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
