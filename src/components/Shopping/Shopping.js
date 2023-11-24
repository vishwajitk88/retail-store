import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PageHero from "../PageHero/PageHero";
import CartContent from "./CartContent/CartContent";

import classes from "./Shopping.module.css";

const Shopping = ({ match }) => {
  const cart = useSelector((state) => state.cartReducer.cart);
const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:'COUNT_CART_TOTALS'})
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length < 1) {
    return (
      <div className="page-100 ">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <PageHero url={match.url} />
      <div className={`${classes.shopping} page container`}>
        <CartContent cart={cart} />
      </div>
    </div>
  );
};

export default Shopping;
