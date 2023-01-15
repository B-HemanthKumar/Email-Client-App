import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./slice/emailSlice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});
