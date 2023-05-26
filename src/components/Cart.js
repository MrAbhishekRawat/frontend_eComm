import React, { useState } from 'react';

const Cart = ({ setIsCartOpen }) => {
  const [cartElements, setCartElements] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

  const removeFromCart = (index) => {
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    setCartElements(updatedCartElements);

    if (updatedCartElements.length === 0) {
      setIsCartOpen(false);
    }
  }

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
}

export default Cart;
