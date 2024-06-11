import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let id = state.carts.find((item) => item.id === action.payload.id);
      const prod = {
        ...action.payload,
        qty: 1
      }
      if (id) {
        id.qty+=1;
      } else {
        state.carts = [...state.carts, prod];
      }
    },
  },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer