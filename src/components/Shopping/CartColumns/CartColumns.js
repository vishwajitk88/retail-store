import React from 'react';
import classes from './CartColumns.module.css'
const CartColumns = () => {
    return (
        <div className={classes.cartItems}>
            <div className={classes.content}>
                <h5>item</h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Subtotal</h5>
                <span></span>
            </div>
        </div>
    );
    
};

export default CartColumns;