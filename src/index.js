import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import productsReducer from "./store/Reducer/ProductReducer";
import SingleProduct from "./store/Reducer/SingleProduct";
import filterProducts from "./store/Reducer/filterProducts";
import "./index.css";
import cartReducer from "./store/Reducer/cart";
import { Auth0Provider } from "@auth0/auth0-react";
 

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  singleProduct: SingleProduct,
  filterProducts :filterProducts,
  cartReducer: cartReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-wrk708d4.us.auth0.com"
    clientId="6v3OW2xjOQ0K7cyJEzRdGgBPFynCJFxl"
    redirectUri={window.location.origin}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
