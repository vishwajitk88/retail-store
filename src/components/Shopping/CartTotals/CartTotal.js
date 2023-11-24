import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import formatPrice from "../../../utils/formatPrice";
import classes from "./CartTotals.module.css";
const CartTotal = () => {
  const { total_amount, shipping_fee } = useSelector(
    (state) => state.cartReducer
  );
  return (
    <div className={` ${classes.totalSection}`}>
        <article className={classes.articleSection}>
          <h5>
            Subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping Fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
          Order Total  : <span>{formatPrice(shipping_fee + total_amount)}</span>
          </h4>
        </article>
        <Link to="/" className="btn">
          Proceed to checkout
        </Link>
    </div>
  );
};

export default CartTotal;
