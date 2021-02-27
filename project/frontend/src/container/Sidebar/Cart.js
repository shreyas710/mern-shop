import React,{useContext} from 'react'
import {CartContext} from './../../contexts/CartContext'


const Cart = (props) => {
    const { items,updateItems,increaseQuantity } = useContext(CartContext);

    const handleQuantity = (id,e) => {
        console.log(e);
        increaseQuantity(id,e.target.value)
        console.log(items);
    }

    const handleDropDown = () => {
        var obj = document.getElementById("dropdown-name");
        var selectedText = obj.options[obj.selectedIndex].innerHTML;
        obj.innerHTML = selectedText;
    }
    
    return (
        <div>
            <div className="card" style={{"width": "19rem"}} key={props._id}>
                <div className="card-body">
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title  d-inline">{props.name}</h5>
                    <select name="cars" id="cars"className="float-right" onChange={(e) => handleQuantity(props._id,e)} style={{"width": "3rem"}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Cart
