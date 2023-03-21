import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/products";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
