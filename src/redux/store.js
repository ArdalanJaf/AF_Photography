import { configureStore } from "@reduxjs/toolkit";
import scrollPositionReducer from "./scrollPositionSlice";

export const store = configureStore({
  reducer: {
    scrollPosition: scrollPositionReducer,
  },
});
