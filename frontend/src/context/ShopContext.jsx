/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { products } from "../assets/assets";
import React, { useState } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;