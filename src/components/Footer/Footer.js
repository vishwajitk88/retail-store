import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Retailstore </span>
      </h5>
      <h5>
        Developed by <span> Ryan</span>
      </h5>
    </div>
  );
};

export default Footer;
