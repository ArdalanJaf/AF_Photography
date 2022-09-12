import { createSlice } from "@reduxjs/toolkit";

export const scrollPositionSlice = createSlice({
  name: "scrollPosition",
  initialState: {
    current: 0,
    prev: 0,
    prevPercent: 0,
    currentPercent: 0,
  },
  reducers: {
    setScrollPosition: (state, action) => {
      let scrollPosition = { ...state };
      let maxHeight = document.body.clientHeight;

      // console.log(scrollPosition.current);
      if (scrollPosition.current !== action.payload.current) {
        scrollPosition.prev = scrollPosition.current;
        scrollPosition.prevPercent = (scrollPosition.current / maxHeight) * 100;
      }
      scrollPosition.current = action.payload.current;
      scrollPosition.currentPercent =
        (scrollPosition.current / maxHeight) * 100;

      return scrollPosition;
    },
  },
});

export const { setScrollPosition } = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;
