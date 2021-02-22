import React,{useState,useEffect,useContext} from 'react';
import axios from './../../axios/axios'
import { CartContext } from "./../../contexts/CartContext";


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink, CardGroup
} from 'reactstrap';

const ProductCard = (props) => {
    
  const { items,updateItems } = useContext(CartContext);
  const handleClick = () =>{
      const item = {
        _id:"",
        name:""
      }
      item._id = props._id;
      item.name = props.name;
      updateItems(item);
      // console.log(items);
  }

  return (
      <Card>
        <CardImg top width="100%" src={props.url} alt={props.name} />
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.category}</CardSubtitle>
          <CardText>This is a wider card </CardText>
          <Button onClick={handleClick}>Add to Cart</Button>
        </CardBody>
      </Card>
  );
};

export default ProductCard;