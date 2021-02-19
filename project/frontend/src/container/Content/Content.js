import React,{useState,useEffect,useContext} from "react";
import "./Content.css";
import CarouselComp from "./CarouselComponent";
import ProductCard from "./ProductCard.js";
import axios from './../../axios/axios'
import {CardGroup} from 'reactstrap'
import {SearchContext} from './../../contexts/SearchContext'

function Content() {
	const [products,setProducts] = useState([]); 
	const [carouselDisplay,setcarouselDisplay] = useState('initial');
	const {items} = useContext(SearchContext);
  useEffect(async () => {
    const response = await axios.get('/custs');
    console.log(response);
    setProducts(response.data)
  },[]);

  useEffect(async () => {
	setProducts(items)
	
	if(items.length > 0){
		setcarouselDisplay('none')
	}
  },[items]);
  console.log(carouselDisplay)
	return (
		<div className="content">
			<div  style={{display:carouselDisplay}}>
				<CarouselComp className="carousel" />
			</div>
			

			<div>
				{products.map(item => 
					<ProductCard className="card" {...item} key={item._id}/>
				)}
			</div>
			
		</div>
	);
}

export default Content;
