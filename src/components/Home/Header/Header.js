import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import imgOne from '../../../assets/hero-bcg.jpeg'
import imgTwo from '../../../assets/hero-bcg-2.jpeg'
const Header = () => {
  return (
    <div className={`${classes.header} container`}>
      <div className={classes.content}>
        <h2>
          Design Your <br />
          Comfort Zone
        </h2>
        <p>
        It encourages people to explore interior design, self-care practices, and lifestyle choices that contribute to a sense of comfort, well-being, and individuality. It's a call to curate an environment that fosters relaxation and positivity, tailored to one's own tastes and preferences.
        </p>
        {/* <button>SHOP NOW</button> */}
        {/* <Link
        to="/shopping"
        // onClick={() => AddToCard(product.id, mainAmount, mainColor, product)}
      >
        {" "}
        Add to cart{" "}
      </Link> */}
      <button onClick={() => window.location.href = 'http://localhost:3000/products'}>
        SHOP NOW
      </button>
      </div>

      <div className={classes.images}>
        <img src={imgOne } alt='hero-bcg.jpeg' />
        <img  src={imgTwo} alt='hero-bcg2.jpeg'/>
      </div>
    </div>
  );
};

export default Header;
