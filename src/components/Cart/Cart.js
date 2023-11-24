import React, { useEffect } from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const total_items = useSelector((state) => state.cartReducer.total_items);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();


  return (
    <div className={classes.cart}>
      <span className={classes.shop}>
      <Link to='/shopping'>
        <h4>Cart</h4> <FaShoppingCart />
        <span className={classes.mount}>{total_items}</span>
        </Link> 
      </span>
      <span>
        {isAuthenticated ? (
          <>
            {" "}
            <button onClick={() => logout()}>
              logout
            </button> <FaUserMinus />{" "}
          </>
        ) : (
          <>
            {" "}
            <button onClick={() => loginWithRedirect()}>Login</button>{" "}
            <FaUserPlus />
          </>
        )}
      </span>
    </div>
  );
};

export default Cart;
