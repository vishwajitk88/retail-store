import {
  START_GET_PRODUCTS,
  GET_PRODUCTS,
  SHOW_SIDEBAR,
  CLOSE_SIDEBAR,
  Error,
} from "../Action/products/actionTypes";
const initialState = {
  loading: false,
  product: [],
  sidebarOpen: false,
  error: false,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS:
      return { ...state, product: payload, loading: false, error: false };
    case Error:
      return { ...state, error: true, loading: false };
    case SHOW_SIDEBAR:
      return { ...state, sidebarOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, sidebarOpen: false };
    default:
      return state;
  }
};

export default productsReducer;
