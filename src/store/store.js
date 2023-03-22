import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Reducer";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
