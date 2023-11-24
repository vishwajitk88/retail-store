import React from "react";
import Logo from "../Logo/Logo";
import classes from "./SideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { close_sidebar } from "../../store/Action/products/actionCreator";
import { FaShoppingCart, FaUserPlus ,FaTimes,FaUserMinus} from "react-icons/fa";
import { NavLinks } from "../../utils/links";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Sidebar = () => {
  const dispatch = useDispatch();
  const openSidebar = useSelector((state) => state.productsReducer.sidebarOpen);
  // const [showSidebar, setShowSidebar] = useState(open)
  const total_items = useSelector(state => state.cartReducer.total_items);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
  useAuth0();
  return (
    <div
      className={
        openSidebar
          ? `${classes.SideBar} ${classes.show}`
          : `${classes.SideBar}`
      }
    >
      <div className={`${classes.header} container`}>
        <Logo />
        <button onClick={() => dispatch(close_sidebar())}>
          <FaTimes />
        </button>
      </div>
      <ul className={classes.links}  >
        {NavLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path} onClick={() => dispatch(close_sidebar())}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className={classes.cart}>
      <span className={classes.shop}>
      <Link to='/shopping' onClick={() => dispatch(close_sidebar())}>
        <h4>Cart</h4> <FaShoppingCart />
        <span className={classes.mount}>{total_items}</span>
        </Link> 
      </span>
      <span>
        {isAuthenticated ? (
          <>
            {" "}
            <button onClick={() => logout()}>
              logout
            </button> <FaUserMinus />{" "}
          </>
        ) : (
          <>
            {" "}
            <button onClick={() => loginWithRedirect()}>Login</button>{" "}
            <FaUserPlus />
          </>
        )}
      </span>
    </div>
    </div>
  );
};

export default Sidebar;
