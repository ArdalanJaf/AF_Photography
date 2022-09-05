import { configureStore } from "@reduxjs/toolkit";
import scrollPositionReducer from "./scrollPositionSlice";
import contentReducer from "./contentSlice";

export const store = configureStore({
  reducer: {
    scrollPosition: scrollPositionReducer,
    content: contentReducer,
  },
});
