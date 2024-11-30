import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  items: savedCart,
  recentlyRemoved: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        state.items.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        state.recentlyRemoved = [item];
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.recentlyRemoved = [...state.items];
      state.items = [];
    },
    undoRemove: (state) => {
      if (state.recentlyRemoved && state.recentlyRemoved.length > 0) {
        state.items = [...state.items, ...state.recentlyRemoved];
        state.recentlyRemoved = null;
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, undoRemove, clearCart, } = cartSlice.actions;

export default cartSlice.reducer;
