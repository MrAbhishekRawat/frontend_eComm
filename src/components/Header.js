import React from "react";
import CartIcon from "./CartIcon";

const Header = (props) => {
  return (
    <div>
      <div>
        <button>HOME</button>
        <button>STORE</button>
        <button>ABOUT</button>
      </div>
      <CartIcon />
    </div>
  );
}

export default Header;
