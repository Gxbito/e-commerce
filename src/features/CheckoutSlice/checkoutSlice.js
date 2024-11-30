import { createSlice } from "@reduxjs/toolkit";

// Función para calcular la fecha actual más 3 días y formatearla
const getEstimatedDeliveryDate = () => {
  const currentDate = new Date();
  const estimatedDeliveryDate = new Date(currentDate);
  estimatedDeliveryDate.setDate(currentDate.getDate() + 3);

  // Formatear la fecha al estilo "December 3, 2024"
  const options = { month: "long", day: "numeric", year: "numeric" };
  return `Estimated Delivery by ${estimatedDeliveryDate.toLocaleDateString(
    "en-US",
    options
  )}`;
};

// Estado inicial
const initialState = {
  subtotal: 0,
  discount: 0,
  tax: 0,
  total: 0,
  estimatedDelivery: getEstimatedDeliveryDate(),
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateCheckout: (state, action) => {
      const { subtotal, discount, tax, total } = action.payload;

      // Calcular y formatear la fecha actual más 3 días
      const currentDate = new Date();
      const estimatedDeliveryDate = new Date(currentDate);
      estimatedDeliveryDate.setDate(currentDate.getDate() + 3);

      const options = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = `Estimated Delivery by ${estimatedDeliveryDate.toLocaleDateString(
        "en-US",
        options
      )}`;

      state.subtotal = subtotal;
      state.discount = discount;
      state.tax = tax;
      state.total = total;
      state.estimatedDelivery = formattedDate;
    },
    clearCheckout: (state) => {
      state.subtotal = 0;
      state.discount = 0;
      state.tax = 0;
      state.total = 0;
      state.estimatedDelivery = getEstimatedDeliveryDate();
    },
  },
});

export const { updateCheckout, clearCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
