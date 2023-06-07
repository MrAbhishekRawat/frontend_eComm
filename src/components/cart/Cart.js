import React, { useContext } from "react";
import AuthContext from "../store/authContext";

const Cart = ({ removeFromCart }) => {
const authCtx = useContext(AuthContext);

return (
<div>
{authCtx.cart.map((item, index) => (
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

