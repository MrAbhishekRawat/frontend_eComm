import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./authContext";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});


export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const authCtx = useContext(AuthContext);


  const cartUrl= `https://ecommcartdata-default-rtdb.asia-southeast1.firebasedatabase.app/${authCtx.userEmail}.json`

  const fetchCartItems = async () => {
    try {
      const res = await axios.get(cartUrl);
      if(res.data !== null) setCartItems(res.data);
      else setCartItems([]);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    if(authCtx.isLoggedIn) fetchCartItems();
    if(authCtx.isLoggedIn === false) setCartItems([]);
  },[authCtx.token])

  const addItemToCart = async (item) => {
    const existingItemIndex = cartItems.findIndex(
      (product) => product.id === item.id
    );

    const existingCartItem = cartItems[existingItemIndex];
    let updatedItems = cartItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        cartAmount: existingCartItem.cartAmount + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
      
    } else {
      updatedItems = [...cartItems, item];
    }
    
    try {
      const res = await axios.put(cartUrl,updatedItems);
      fetchCartItems();
    } catch (error) {console.log(error)}

  };

  const removeItemFromCart = async(itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    try {
      const res = await axios.put(cartUrl,updatedItems);
      console.log(res.data)
      fetchCartItems();
    } catch (error) {console.log(error)}
  };

  const cartContext = {
    items: cartItems,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
