import React,{useState,useEffect} from 'react';
import axios from './../../axios/axios'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink, CardGroup
} from 'reactstrap';

const ProductCard = (props) => {
    
  return (
      <Card>
        <CardImg top width="100%" src={props.url} alt={props.name} />
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.category}</CardSubtitle>
          <CardText>This is a wider card </CardText>
          <Button>Display Shops</Button>
        </CardBody>
      </Card>
  );
};

export default ProductCard;