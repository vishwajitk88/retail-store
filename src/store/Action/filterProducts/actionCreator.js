import { GRID, LIST, NAME_A_Z, NAME_Z_A, PRICE_HIGHEST, PRICE_LOWEST } from "../filterProducts/actionTypes";

export const grid = () => {
  return { type: GRID };
};
export const list = () => {
  return { type: LIST };
};
export const priceLowest = (value, filter) => {
  return {
    type: PRICE_LOWEST,
    payload: {
      value,
      filter,
    },
  };
};
export const priceHighest = (value, filter) => {
  return {
    type: PRICE_HIGHEST,
    payload: {
      value,
      filter,
    },
  };
};
export const nameAtoZ = (value, filter) => {
  return {
    type: NAME_A_Z,
    payload: {
      value,
      filter,
    },
  };
};
export const nameZtoA = (value, filter) => {
  return {
    type: NAME_Z_A,
    payload: {
      value,
      filter,
    },
  };
};
