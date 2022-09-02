import { configureStore } from "@reduxjs/toolkit";
import scrollPositionReducer from "./scrollPositionSlice";
import dynamicContentReducer from "./dynamicContentSlice";

export const store = configureStore({
  reducer: {
    scrollPosition: scrollPositionReducer,
    dynamicContent: dynamicContentReducer,
  },
});
