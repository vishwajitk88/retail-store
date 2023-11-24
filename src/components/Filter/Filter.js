import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCheck } from "react-icons/bs";
import uniqueValue from "../../utils/uniqueValue";
import formatPrice from "../../utils/formatPrice";
import classes from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterProducts.filter);
  const Products = useSelector((state) => state.filterProducts.Products);

  const {
    text,
    category,
    company,
    color: clr,
    min_Price,
    max_Price,
    Price,
    shipping,
  } = filter;

  const updateFilter = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "Price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: "updateFilter", payload: { name, value } });
  };

  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [dispatch, filter]);

  const categories = uniqueValue(Products, "category");
  const companies = uniqueValue(Products, "company");
  const colors = uniqueValue(Products, "colors");

  return (
    <div>
      {/* search */}
      <div className={classes.search}>
        <input
          type="search"
          name="text"
          placeholder="search"
          value={text}
          onChange={(e) => updateFilter(e)}
        />
      </div>
      {/* Category */}
      <div className={classes.Category}>
        <label>Category</label>
        {categories.map((c, index) => {
          return (
            <p key={index}>
              <button
                name="category"
                className={c === category ? classes.active : null}
                onClick={(e) => updateFilter(e)}
              >
                {c}
              </button>
            </p>
          );
        })}
      </div>
      {/* Company */}
      <div className={classes.Company}>
        <label>Company</label>
        <select
          name="company"
          value={company}
          onChange={(e) => updateFilter(e)}
        >
          {companies.map((company, index) => {
            return (
              <option key={index} value={company}>
                {company}
              </option>
            );
          })}
        </select>
      </div>
      {/* Colors */}
      <div className={classes.Colors}>
        <label>Colors</label>
        {colors.map((color, index) => {
          if (color === "all") {
            return (
              <button
                key={index}
                name="color"
                data-color={color}
                onClick={(e) => updateFilter(e)}
                style={{ background: color, marginRight: "10px" }}
                className={clr === "all" ? classes.active : null}
              >
                All
              </button>
            );
          }
          return (
            <button
              key={index}
              name="color"
              data-color={color}
              onClick={(e) => updateFilter(e)}
              style={{ background: color, marginRight: "10px" }}
              className={classes.btn}
            >
              {clr === color ? <BsCheck /> : null}
            </button>
          );
        })}
      </div>
      {/* Price */}
      <div className={classes.Price}>
        <label>Price</label>
        <label>{formatPrice(Price)}</label>
        <input
          type="range"
          min={min_Price}
          value={Price}
          max={max_Price}
          name="Price"
          onChange={(e) => updateFilter(e)}
        />
      </div>
      {/* Free Shipping */}
      <div className={classes.Shipping}>
        <label>Free Shipping</label>
        <input
          type="checkbox"
          name="shipping"
          value={shipping}
          onChange={(e) => updateFilter(e)}
          checked={shipping}
        />
      </div>
      <div className={classes.clearfilter}>
        <button onClick={clearFilter}>clear filter</button>
      </div>
    </div>
  );
};

export default Filter;
