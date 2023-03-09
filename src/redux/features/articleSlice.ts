import { createSlice } from "@reduxjs/toolkit";
import { IArticleState } from "types.ts";

const initialState: IArticleState = {
  articles: [],
};

export const authSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
