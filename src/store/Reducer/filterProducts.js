import {
  GRID,
  LIST,
  NAME_A_Z,
  NAME_Z_A,
  PRICE_HIGHEST,
  PRICE_LOWEST,
} from "../Action/filterProducts/actionTypes";
import { LOAD_PRODUCT } from "../Action/products/actionTypes";

const initialState = {
  filterProducts: [],
  Products: [],
  gridView: true,
  sort: "select option",
  filter: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    max_Price: 0,
    min_Price: 0,
    Price: 0,
    shipping: false,
  },
};

const filterProducts = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCT:
      let max_Price = Math.max(...payload.map((p) => p.price));
      return {
        ...state,
        Products: payload,
        filterProducts: payload,
        filter: {
          ...state.filter,
          Price: max_Price,
          max_Price: max_Price,
        },
      };
    case GRID:
      return { ...state, gridView: true };
    case LIST:
      return { ...state, gridView: false };
    case PRICE_LOWEST:
      return { ...state, sort: payload.value, filterProducts: payload.filter };
    case PRICE_HIGHEST:
      return { ...state, sort: payload.value, filterProducts: payload.filter };
    case NAME_A_Z:
      return { ...state, sort: payload.value, filterProducts: payload.filter };
    case NAME_Z_A:
      return { ...state, sort: payload.value, filterProducts: payload.filter };
    case "updateFilter":
      const { name, value } = payload;
      return { ...state, filter: { ...state.filter, [name]: value } };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filter: {
          ...state.filter,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          shipping: false,
        },
      };
    case "FILTER_PRODUCTS":
      let tempFilter = [...state.Products];
      const { text, category, company, color, Price, shipping } = state.filter;

      if (text) {
        tempFilter = tempFilter.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }
      if (category !== "all") {
        tempFilter = tempFilter.filter((product) => {
          return product.category === category;
        });
      }

      if (company !== "all") {
        tempFilter = tempFilter.filter((product) => {
          return product.company === company;
        });
      }

      if (color !== "all") {
        tempFilter = tempFilter.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      //price
      tempFilter = tempFilter.filter((product) => {
        return product.price <= Price;
      });
      if (shipping) {
        tempFilter = tempFilter.filter((product) => {
          return product.shipping === true;
        });
      }
      return { ...state, filterProducts: tempFilter };
    default:
      return state;
  }
};
export default filterProducts;
