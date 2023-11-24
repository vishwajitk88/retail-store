import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageHero.module.css";
const PageHero = ({ url, products }) => {
  return (
    <div className={classes.PageHero}>
      <div className="container">
        <h3>
          <Link to="/">Home</Link>
          {products ? <Link to="/products"> / Products</Link> : null} /{" "}
          {url.substr(1)}
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
