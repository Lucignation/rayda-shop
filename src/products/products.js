import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      const allProducts = {
        products: action.payload,
      };

      state.push(allProducts);
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
