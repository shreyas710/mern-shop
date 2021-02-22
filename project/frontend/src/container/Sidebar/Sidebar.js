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
  const { items,updateItems } = useContext(CartContext);
  const products = items.map(item => (
    <h1>{item.name}</h1>
  ))
  console.log(products)
  return (
    <>
      <div className="sidebar">
        <p align="center">List of items in cart</p>
        {products}
      </div>
    </>
  );
};

export default Sidebar;
