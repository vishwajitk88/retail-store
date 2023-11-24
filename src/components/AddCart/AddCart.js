import React, { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";
import classes from "./AddCart.module.css";
import { useDispatch, useSelector } from "react-redux";
const AddCart = ({ stock, product }) => {
  const mainColor = useSelector((state) => state.singleProduct.mainColor);
  const mainAmount = useSelector((state) => state.singleProduct.amount);

  const [amount, setMount] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "MOUNT", payload: { amount } });
  }, [amount]);

  const increase = () => {
    setMount((oldmount) => {
      let temMount = oldmount + 1;
      if (amount >= stock) {
        temMount = stock;
      }
      return temMount;
    });
  };
  const decrease = () => {
    setMount((oldmount) => {
      let temMount = oldmount - 1;
      if (amount <= 1) {
        temMount = 1;
      }
      return temMount;
    });
  };

  //addtoCart
  const AddToCard = (id, amount, color, product) => {
    dispatch({type:'ADD_CART',payload:{id,amount,color,product}})
  };

  return (
    <div className={classes.AddCart}>
      <div className={classes.mount}>
        <button onClick={() => decrease()}>
          <BiMinus />
        </button>
        <h2>{amount}</h2>
        <button onClick={() => increase()}>
          <BsPlus />
        </button>
      </div>
      <Link
        to="/shopping"
        onClick={() => AddToCard(product.id, mainAmount, mainColor, product)}
      >
        {" "}
        Add to cart{" "}
      </Link>
    </div>
  );
};

export default AddCart;
