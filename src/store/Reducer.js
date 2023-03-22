import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const { getAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
