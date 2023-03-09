import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { authApi } from "redux/services/authApi";
import { articleApi } from "redux/services/articleApi";
import counterReducer from "redux/features/counter/counterSlice";
import authReducer from "redux/features/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
