import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  cart: [],
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [expiryTime, setExpiryTime] = useState(null);
  const [cart, setCart] = useState([]);

  const userIsLoggedIn = !!token;

  useEffect(() => {
    if (token && expiryTime) {
      const remainingTime = expiryTime - Date.now();
      if (remainingTime <= 0) {
        logoutHandler();
      } else {
        const logoutTimer = setTimeout(logoutHandler, remainingTime);
        return () => {
          clearTimeout(logoutTimer);
        };
      }
    }
  }, [token, expiryTime]);

  useEffect(() => {
    if (userIsLoggedIn) {
      const fetchCartData = async () => {
        try {
          const response = await axios.get(
            `https://ecommcartdata-default-rtdb.asia-southeast1.firebasedatabase.app/${token}.json`
          );
          const data = response.data;
          if (data) {
            setCart(data);
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };
      fetchCartData();
    }
  }, [token, userIsLoggedIn]);

  const loginHandler = (token) => {
    setToken(token);
    const expiresIn = 3000000;
    const expiryTime = Date.now() + expiresIn;
    setExpiryTime(expiryTime);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    setExpiryTime(null);
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
  };

  const addToCartHandler = async (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      if (userIsLoggedIn) {
        try {
          axios.put(
            `https://ecommcartdata-default-rtdb.asia-southeast1.firebasedatabase.app/${token}.json`,
            updatedCart
          )
            .then(() => {
              console.log("Cart data updated successfully");
            })
            .catch((error) => {
              console.error("Error updating cart data:", error);
            });
        } catch (error) {
          console.error("Error updating cart data:", error);
        }
      }

      return updatedCart;
    });
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    cart,
    login: loginHandler,
    logout: logoutHandler,
    addToCart: addToCartHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
