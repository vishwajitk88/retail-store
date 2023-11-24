import { START_FETCH, GET_FETCH, ERROR } from "../Action/SingleProduct/ActionTypes";
const initialState = {
    error: false,
    loading: false,
    singleProduct: [],
    mainColor:'',
    amount:1,
}

const singleProductReducer =  (state = initialState, { type, payload }) => {
    switch (type) {
        case START_FETCH:
            return { ...state, loading: true }
        case GET_FETCH:
            return { ...state, loading: false, singleProduct: payload }
        case ERROR:
            return { ...state, error: true }
        case 'COLOR':
            return { ...state, mainColor:payload.color }
        case 'MOUNT':
            return { ...state, amount:payload.amount }
        default:
            return state;
    }
}
export default singleProductReducer