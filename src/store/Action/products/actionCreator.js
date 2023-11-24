import {
  START_GET_PRODUCTS,
  GET_PRODUCTS,
  SHOW_SIDEBAR,
  CLOSE_SIDEBAR,
  Error,
  LOAD_PRODUCT,
} from "./actionTypes";

export const start_get_products = () => {
  return {
    type: START_GET_PRODUCTS,
  };
};
export const get_products = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};
export const Get_Error = () => {
  return {
    type: Error,
  };
};
export const show_sidebar = () => {
  return {
    type: SHOW_SIDEBAR,
  };
};
export const close_sidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};
export const load_product = (products) => {
  return {
    type:LOAD_PRODUCT,
    payload:products
  };
};
