import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "./cartSlice";

const WishListPage = () => {
  const wishlist = useSelector((state) => state.cart.wishlist|| []);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist?.map((item) => (
  <div key={item.id}>
    <p>{item.title}</p>
    <button onClick={() => dispatch(removeFromWishlist(item.id))}>
      Remove
    </button>
  </div>
))}
    </div>
  );
};

export default WishListPage;
