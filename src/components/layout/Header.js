import React from "react";
import {Link, Routes, Route } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import About from "../routePages/About";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/store">STORE</Link>
        <Link to="/about">ABOUT</Link>
      </div>
      <CartIcon />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Header;
