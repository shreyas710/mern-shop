import React,{createContext, useState} from 'react';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [items,setItems] = useState([
    ])
    const updateItems = (products) => {
        setItems(products);
    }
    return ( 
        <SearchContext.Provider value={{items,updateItems}}>
            {props.children}
        </SearchContext.Provider>
     );
}
 
export default SearchContextProvider;