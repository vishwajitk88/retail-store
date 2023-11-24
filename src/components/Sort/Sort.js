import React  from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { nameAtoZ, nameZtoA, priceHighest, priceLowest } from "../../store/Action/filterProducts/actionCreator";
import {grid,list} from '../../store/Action/filterProducts/actionCreator'
import classes from "./Sort.module.css";

const Sort = ({ products }) => {
  const gridView = useSelector((state) => state.filterProducts.gridView);
  const sort = useSelector((state) => state.filterProducts.sort);
  const dispatch = useDispatch();
  const grid_view = () => {
    dispatch(grid());
  };
  const list_view = () => {
    dispatch(list());
  };
  const updateSort = (e) => {
    let tempFilter = [...products];
    if (e.target.value === "Price-lowest") {
      if (products) {
        tempFilter = tempFilter.sort((a, b) => a.price - b.price);
      }

      dispatch(priceLowest(e.target.value,tempFilter));
    }
    if (e.target.value === "Price-highest") {
      if (products) {
        tempFilter = tempFilter.sort((a, b) => b.price - a.price);
      }

      dispatch(priceHighest(e.target.value,tempFilter));
    }
    if (e.target.value === "Name_A-Z") {
      if (products) {
        tempFilter = tempFilter.sort((a, b) => a.name.localeCompare(b.name));
      }

      dispatch(nameAtoZ(e.target.value,tempFilter));
    }
    if (e.target.value === "Name_Z-A") {
      if (products) {
        tempFilter = tempFilter.sort((a, b) => b.name.localeCompare(a.name));
      }
      dispatch(nameZtoA(e.target.value,tempFilter));
    }
  };
  return (
    <div className={classes.sort}>
      <div className={classes.btnContainer}>
        <button onClick={grid_view} className={gridView ? classes.active : null}>
          <BsFillGridFill />
        </button>
        <button onClick={list_view} className={!gridView ? classes.active : null}>
          <BsList />
        </button>
      </div>
      <p>{products.length} Products Found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select id="sort" value={sort} className={classes.selectsort} onChange={(e) => updateSort(e)}>
          <option>select option</option>
          <option value="Price-lowest">Price(lowest)</option>
          <option value="Price-highest">Price(highest)</option>
          <option value="Name_A-Z">Name(A-Z)</option>
          <option value="Name_Z-A">Name(Z-A)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
