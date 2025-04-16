import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "./slices/firebaseSlice";

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
});
