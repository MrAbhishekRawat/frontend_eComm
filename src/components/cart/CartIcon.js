import React, { useState, useContext } from "react";
import Cart from "./Cart";
import classes from "./CartIcon.module.css";
import cartIconPic from "../../assets/cartIconPic.png";
import ProductList from "../product/ProductList";
import Modal from "./Modal";
import CartContext from "../store/cartContext";

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const handleCartIconClick = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const addToCart = (product) => {
    if (cartCtx.isLoggedIn) {
      cartCtx.addToCart(product);
    }
  };


  return (
    <div>
      <div>
        <button onClick={handleCartIconClick} className={classes.cartbtn}>
          <img src={cartIconPic} alt="cartIconPic" /> 
          <p>({cartCtx.items.length})</p> 
        </button> 
        {isCartOpen && (
          <Modal onClose={handleCartIconClick}>
            <Cart />
          </Modal>
        )}
        <ProductList addToCart={addToCart}/>
      </div>
    </div>
  );
};

export default CartIcon;
