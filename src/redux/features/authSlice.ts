import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "types.ts";

const user = JSON.parse(localStorage.getItem("userData") || "{}");
const initialState: IAuthState = {
  isLoggedIn: user && user.id ? true : false,
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
