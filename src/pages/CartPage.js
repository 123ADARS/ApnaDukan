import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import "./CartPage.css";

const CartPage = () => {
  const cart = useSelector((state) =>  state.cart?.cartItems || []);
  const dispatch = useDispatch();

  return (
    
    <div className="cart-page">
      <h2 className="cart-head">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
