import React, { useContext } from "react";
import CartContext from "../store/cartContext";
import styles from "./Cart.module.css"

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce((currPrice, item)=> {
  return currPrice + item.price *  item.cartAmount;
  },0)

  return (
    <div>
    <div className={styles.container}>
      {cartCtx.items && cartCtx.items.map((item) => (
        <div key={item.id} className={styles.cartItemContainer}>
          <img src={item.imageUrl} alt={item.title} className={styles["cart-image"]}/>
              <h3 className={styles["cart-title"]}>{item.title}</h3>
              <p className={styles["cart-price"]}>Price: {item.price}</p>
              <span>{item.cartAmount}</span>
              <button className={styles["cart-action"]} onClick={() => cartCtx.removeItem(item.id)}>Remove</button>
        </div>
      ))}
      
    </div>
    <h2>Total Price: {totalPrice}</h2>
    </div>
  );
};

export default Cart;
