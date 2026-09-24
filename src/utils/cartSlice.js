import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const duplicate = state.cartItems.find(
        (item) => item.data.id === action.payload.id,
      );

      if (duplicate) {
        duplicate.quantity += 1;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          data: action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const duplicate = state.cartItems.find(
        (item) => item.data.id === action.payload.id,
      );
      if (duplicate?.quantity === 1) {
        state.cartItems.splice(
          state.cartItems.findIndex((item) => item.id === action.payload.id),
          1,
        );
      } else duplicate.quantity -= 1;
    },
    clearCart: () => ({ cartItems: [] }),
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
