import React from "react";
import { NavLinks } from "../../utils/links";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Cart from "../Cart/Cart";
import Logo from '../Logo/Logo'
import classes from "./NavBar.module.css";
import {useDispatch } from "react-redux";
import { show_sidebar } from "../../store/Action/products/actionCreator";

const NavBar = () => {
  const dispatch = useDispatch();
  // const sidebarOpen = useSelector((state) => state.sidebarOpen);
  return (
    <nav className={`${classes.navbarContainer} container`}>
      <Logo />
      <ul className={classes.links}>
        {NavLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <Cart />
      <div className={classes.bars}>
        <button onClick={() => dispatch(show_sidebar())}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
