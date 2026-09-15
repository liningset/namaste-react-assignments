import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartLength: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartLength += 1;
    },
    removeFromCart: (state, action) => {
      state.cartItems.splice(state.cartItems.indexOf(action.payload), 1);
      state.cartLength -= 1;
    },
    clearCart: (state) => {
      return { cartItems: [], cartLength: 0 };
    },
  },
});

console.log("cartSlice: ", cartSlice);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
