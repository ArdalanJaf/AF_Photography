import { createSlice } from "@reduxjs/toolkit";

export const scrollPositionSlice = createSlice({
  name: "scrollPosition",
  initialState: {
    prev: 0,
    current: 0,
  },
  reducers: {
    setScrollPosition: (state, action) => {
      let scrollPosition = { ...state };

      if (scrollPosition.current !== action.payload.current) {
        scrollPosition.prev = scrollPosition.current;
      }
      scrollPosition.current = action.payload.current;
      return scrollPosition;
    },
  },
});

export const { setScrollPosition } = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;
