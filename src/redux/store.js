import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // Ensure this matches your slice name
  },
});

export default store;
