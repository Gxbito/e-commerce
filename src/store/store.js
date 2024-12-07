// Bibliotecas externas
import { configureStore } from "@reduxjs/toolkit";

// Archivos internos - Funcionalidad
import userReducer from "../features/UserSlice/userSlice";
import cartReducer from "../features/CartSlice/cartSlice";
import checkoutReducer from "../features/CheckoutSlice/checkoutSlice";

const persistCartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.items));
  return result;
};

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistCartMiddleware),
});

export default store;
