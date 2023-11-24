import React from "react";
import classes from "./Logo.module.css";
import Logoimage from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img className={classes.logo} src={Logoimage} alt="comfy sloth" />
    </Link>
  );
};

export default Logo;
