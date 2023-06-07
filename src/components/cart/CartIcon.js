import React, { useState, useEffect, useContext } from "react";
import Cart from "./Cart";
import classes from "./CartIcon.module.css";
import cartIconPic from "../../assets/cartIconPic.png";
import ProductList from "../product/ProductList";
import AuthContext from "../store/authContext";
import axios from "axios";

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      axios
        .get(
          `https://ecommcartdata-default-rtdb.asia-southeast1.firebasedatabase.app/${authCtx.token}.json`
        )
        .then((response) => {
          const data = response.data;
          if (data && data.cart) {
            setCartCount(data.cart.length);
          }
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    }
  }, [authCtx.isLoggedIn, authCtx.token]);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    const updatedCartCount = cartCount + 1;
    setCartCount(updatedCartCount);
    if (authCtx.isLoggedIn) {
      const url = `https://ecommcartdata-default-rtdb.asia-southeast1.firebasedatabase.app/${authCtx.token}.json`;
      axios
        .put(url, { cart: [...authCtx.cart, { ...product, quantity: 1 }] })
        .then((response) => {
          console.log("Cart data updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating cart data:", error);
        });
    }
  };

  const removeFromCart = (index) => {
    const updatedCartCount = cartCount - 1;
    setCartCount(updatedCartCount);
    if (authCtx.isLoggedIn) {
      const updatedCart = authCtx.cart.filter((_, i) => i !== index);
      const url = `https://ecommcartdata-default-rtdb.asia-southeast1.firebasedatabase.app/${authCtx.token}.json`;
      axios
        .put(url, { cart: updatedCart })
        .then((response) => {
          console.log("Cart data updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating cart data:", error);
        });
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleCartIconClick} className={classes.cartbtn}>
          <img src={cartIconPic} alt="cartIconPic" />
          <p>({cartCount})</p>
        </button>
        <div className={classes.cartContainer}>
          {isCartOpen && <Cart removeFromCart={removeFromCart} />}
        </div>
        <ProductList addToCart={addToCart} />
      </div>
    </div>
  );
};

export default CartIcon;
