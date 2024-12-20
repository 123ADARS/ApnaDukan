import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductCard.css";
// import { addToWishlist } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
     {/* <button onClick={() => dispatch(addToWishlist(product))}>
        Add to Wishlist
      </button> */}
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
