import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "types.ts";

const initialState: IAuthState = {
  isLoggedIn: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("user");
      localStorage.removeItem("userData");
      state.isLoggedIn = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { logout, setIsLoggedIn } = authSlice.actions;

export default authSlice.reducer;
