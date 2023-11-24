import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatPrice from "../../../utils/formatPrice";
import classes from "./FeaturedProducts.module.css";
import { FaSearch } from "react-icons/fa";
import Error from "../../Error/Error";
const FeaturedProducts = () => {
  const products = useSelector((state) => state.productsReducer.product);
  const loading = useSelector((state) => state.productsReducer.loading);
  const error = useSelector((state) => state.productsReducer.error);
  if (loading) {
    return (
      <div className={classes.FeaturedProducts}>
        <p className={classes.loading}> loading...</p>{" "}
      </div>
    );
  }

  if (error) {
    return <Error />;
  }
  var Features;
  if (products) {
    Features = products
      .filter((product) => product.featured === true)
      .slice(0, 3);
  }
  return (
    <div className={classes.FeaturedProducts}>
      <div className={classes.title}>
        <h2>Featured Products</h2>
        <div className="underLine"></div>
      </div>
      <div className={`${classes.features} container`}>
        {Features.map((product) => {
          const { id, image, name, price } = product;
          return (
            <section key={id} className={classes.section}>
              <div className={classes.product}>
                <img src={image} alt={name} />
                <Link to={`/products/${id}`}>
                  <FaSearch />
                </Link>
              </div>
              <footer className={classes.footer}>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
              </footer>
            </section>
          );
        })}
      </div>
      <Link to='/products' className={classes.btn}>All Products</Link>
    </div>
  );
};

export default FeaturedProducts;
