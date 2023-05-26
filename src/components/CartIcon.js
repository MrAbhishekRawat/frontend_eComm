import React, { useState } from 'react';
import Cart from './Cart';

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div>
      <img src="cart-icon.png" alt="Cart" onClick={handleCartIconClick} />
      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
    </div>
  );
}

export default CartIcon;
