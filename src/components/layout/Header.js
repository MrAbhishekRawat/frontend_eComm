import React from "react";
import {Link, Routes, Route } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import About from "../routePages/About";
import Home from "../routePages/Home";
import ProductDetail from "../product/ProductDetails";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/home">HOME</Link>
        <Link to="/store">STORE</Link>
        <Link to="/about">ABOUT</Link>
      </div>
      <CartIcon />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ProductDetail" component={ProductDetail} />
      </Routes>
    </div>
  );
};

export default Header;
