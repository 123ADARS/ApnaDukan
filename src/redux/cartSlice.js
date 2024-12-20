import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Holds the items in the cart
  wishlistItems: [], // Holds the items in the wishlist
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Add new item
      }
    },

    // Remove item from cart
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id === action.payload
      );
    },

    // Add item to wishlist
    addToWishlist(state, action) {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.wishlistItems.push(action.payload); // Add item only if it’s not already in the wishlist
      }
    },

    // Remove item from wishlist
    removeFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;

