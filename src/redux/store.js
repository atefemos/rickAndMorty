import { configureStore } from "@reduxjs/toolkit";
import landingPage from "./slices/landingPageSlice.js";

const reducer = {
  landingPage: landingPage,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const { dispatch } = store;
