import React, { useState } from 'react';
import Cart from './Cart';
import classes from './CartIcon.module.css';
import cartIconPic from '../../assets/cartIconPic.png';
import ProductList from '../ProductList';


const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartElements, setCartElements] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    const updatedCartElements = [...cartElements, { ...product, quantity: 1 }];
    setCartElements(updatedCartElements);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (index) => {
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    setCartElements(updatedCartElements);
    setCartCount((prevCount) => prevCount - 1);

    if (updatedCartElements.length === 0) {
      setIsCartOpen(false);
    }
  };

  return (
    <div>
      <img
        src={cartIconPic}
        alt="cartIconPic"
        onClick={handleCartIconClick}
        className={classes.cartIcon}
      />
      {isCartOpen && (
        <Cart cartElements={cartElements} removeFromCart={removeFromCart} />
      )}
      <p className={classes.cartCount}>({cartCount})</p>
      <ProductList addToCart={addToCart}/>
       
    </div>
  );
};

export default CartIcon;
