import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css"

const Header = () => {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/product">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
