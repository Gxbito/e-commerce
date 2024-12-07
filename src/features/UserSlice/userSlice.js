// Bibliotecas externas
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      const user = action.payload;
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("currentUser");
      }
      return {
        ...state,
        currentUser: user,
      };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;