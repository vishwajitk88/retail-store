import { START_FETCH, GET_FETCH, ERROR } from "./ActionTypes";

const start_fetch = () => {
  return {
    type: START_FETCH,
  };
};
const get_fetch = (product) => {
  return {
    type: GET_FETCH,
    payload: product,
  };
};
const get_error = () => {
  return {
    type: ERROR,
  };
};
export { start_fetch, get_fetch, get_error };
