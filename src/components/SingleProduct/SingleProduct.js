import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  start_fetch,
  get_fetch,
  get_error,
} from "../../store/Action/SingleProduct/ActionCreator";
import PageHero from "../PageHero/PageHero";
import fetchSingleProduct from "../../axios/singleProduct/singleProduct";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import ImageContainer from "../ImageContainer/ImageContainer";
import ProductDetails from "../productDetails/ProductDetails";
import classes from './SingleProducts.module.css'


const SingleProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.singleProduct.loading);
  const error = useSelector((state) => state.singleProduct.error);
  const singleProduct = useSelector(
    (state) => state.singleProduct.singleProduct
  );
  useEffect(() => {
    const fetchProduct = () => {
      dispatch(start_fetch());
      fetchSingleProduct
        .get(`react-store-single-product?id=${id}`)
        .then((res) => dispatch(get_fetch(res.data)))
        .catch((error) => dispatch(get_error()));
    };
    fetchProduct();
  }, [dispatch, id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
      return <Error />;
    }
  }, [error, history]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <PageHero url={`/${singleProduct.name}`} products />
      <div className={`${classes.singleProduct} container`}>
        <ImageContainer images={singleProduct.images} />
        <ProductDetails singleProduct={singleProduct} />
      </div>
    </div>
  );
};

export default SingleProduct;
