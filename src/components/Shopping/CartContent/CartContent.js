import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartColumns from "../CartColumns/CartColumns";
import CartItem from "../CartItems/CartItems";
import CartTotals from "../CartTotals/CartTotal";
import classes from './CartContent.module.css'

const CartContent = ({ cart }) => {
  const dispatch = useDispatch( )    
  const clearCart =()=> { 
    dispatch({type:'CLEAR_CART'});
  }
  return (
    <div>
      <CartColumns />
      <hr />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item}/>;
      })}
      <hr />
      <div className={classes.LinkContainer}>
        <Link to="/products" className={classes.btn}>Continue Shopping</Link>
        <button className={classes.clearbtn} onClick={clearCart}>Clear Shopping Cart</button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
