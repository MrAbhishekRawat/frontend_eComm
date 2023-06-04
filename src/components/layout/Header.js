import React from "react";
import {Link, Routes, Route } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import About from "../routePages/About";
import Home from "../routePages/Home";
import LoginPage from "../routePages/LoginPage";


const Header = () => {
  return (
    <div>
      <div>
        <Link to="/home">HOME</Link>
        <Link to="/store">STORE</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/login">LOGIN</Link>
      </div>
      <CartIcon />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default Header;
