import React from 'react';

const Cart = ( {cartElements, removeFromCart} ) => {
  return (
    <div>
      {cartElements.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
