import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHero from "../PageHero/PageHero";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import FetchProductsinstance from "../../axios/Products/Productsinstance";
import {
  start_get_products,
  get_products,
  Get_Error,
  load_product,
} from "../../store/Action/products/actionCreator";
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";

const Products = ({ match }) => {
  const filterProducts = useSelector(
    (state) => state.filterProducts.filterProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (filterProducts.length === 0) {
      dispatch(start_get_products());
      FetchProductsinstance.get("")
        .then((res) => {
          const products = res.data;
          dispatch(get_products(products));
          dispatch(load_product(products));
        })
        .catch((err) => dispatch(Get_Error()));
    }
  }, [dispatch,filterProducts.length]);

  const gridView = useSelector((state) => state.filterProducts.gridView);

  return (
    <div>
      <PageHero url={match.url} />
      <div className={`page container ${classes.Products} `}>
        <Filter />
        <div>
          <Sort products={filterProducts} />
          {gridView ? (
            <div className={classes.ProductContainer}>
              {filterProducts.length > 0 ? (
                filterProducts.map((product) => {
                  return <Product key={product.id} product={product} />;
                })
              ) : (
                <p>Sorry, no products matched your search.</p>
              )}
            </div>
          ) : (
            <div className={classes.listContainer}>
              {filterProducts.length > 0 ? (
                filterProducts.map((product) => {
                  const { id, name, price, image, description } = product;
                  return (
                    <div className={classes.list} key={id}>
                      <img src={image} alt={name} />
                      <article className={classes.content}>
                        <h5>{name}</h5>
                        <p className={classes.price}>{formatPrice(price)}</p>
                        <p className={classes.description}>
                          {description.slice(0, 150)}...
                        </p>
                        <Link to={`/products/${id}`} className="btn">
                          Details
                        </Link>
                      </article>
                    </div>
                  );
                })
              ) : (
                <p>Sorry, no products matched your search.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
