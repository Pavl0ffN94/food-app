import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmaunt: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
})

export default CartContext;