import React, { useEffect } from "react";
import Header from "./Header/Header";
import FeaturedProducts from "./Featured Products/FeaturedProducts";

import { useDispatch } from "react-redux";
import FetchProductsinstance from "../../axios/Products/Productsinstance";
import {
  start_get_products,
  get_products,
  Get_Error,
  load_product
} from "../../store/Action/products/actionCreator";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = () => {
      dispatch(start_get_products());
      FetchProductsinstance.get("")
        .then((res) => {
          const products = res.data;
          dispatch(get_products(products));
          dispatch(load_product(products))
        })
        .catch((err) => dispatch( Get_Error() ));
    };
    fetchProducts();
  },[dispatch]);

  return (
    <>
      <Header />
    <FeaturedProducts />
    </>
  );
};

export default Home;
