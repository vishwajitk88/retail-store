import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import NotFound from "./components/404/404NotFound";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Shopping from "./components/Shopping/Shopping";
import PR from "./components/PR/PR";
function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/about" component={About} />
        <PR path="/shopping" component={Shopping} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
