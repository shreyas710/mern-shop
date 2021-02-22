import React,{createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [items,setItems] = useState([
    ])
    const updateItems = (products) => {
        setItems([...items,products]);
    }
    return ( 
        <CartContext.Provider value={{items,updateItems}}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;