import React from "react";
import classes from "./ProductDetails.module.css";
import formatPrice from "../../utils/formatPrice";
import Stars from "../Stars/Stars";
import Colors from "../Colors/Colors";
import AddCart from "../AddCart/AddCart";
import { useDispatch } from "react-redux";


const ProductDetails = ({ singleProduct }) => {
  const dispatch = useDispatch();
  const {
    name,
    price,
    description,
    stock,
    id: SKU,
    colors,
    company,
    stars,
    reviews,
  } = singleProduct;
 

  return (
    <div className={classes.ProductDetails}>
      <h2>{name}</h2>
      <Stars stars={stars} reviews={reviews} />
      <h5>{formatPrice(price)}</h5>
      <p className={classes.description}>{description}</p>
      <p className={classes.info}>
        <span>Available : </span>{" "}
      {stock >= 1 ? "In Stock" : "Out Stock"}
      </p>
      <p className={classes.info}>
        <span>SKU : </span> {SKU}
      </p>
      <p className={classes.info}>
        <span>Brand : </span> {company}
      </p>
      <hr />
      <Colors colors={colors} />
      {
        stock > 0 ?  <AddCart stock={stock} product={singleProduct} /> : null 
      }
    
    </div>
  );
};

export default ProductDetails;
