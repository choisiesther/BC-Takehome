import React from 'react';

const CartContext = React.createContext({
    cartValue: 0, 
    updateCart: () => {},
});

export default CartContext;