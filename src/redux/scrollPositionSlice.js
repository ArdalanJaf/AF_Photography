import { createSlice } from "@reduxjs/toolkit";

export const scrollPositionSlice = createSlice({
  name: "scrollPosition",
  initialState: {
    current: 0,
    prev: 0,
    prevPerc: 0,
    currentPerc: 0,
  },
  reducers: {
    setScrollPosition: (state, action) => {
      let scrollPosition = { ...state };
      //   console.log(scrollPosition);

      if (scrollPosition.current !== action.payload.current) {
        scrollPosition.prev = scrollPosition.current;
      }
      scrollPosition.current = action.payload.current;

      let maxHeight = document.body.clientHeight;
      //   let maxHeight = window.innerHeight;
      //   console.log(maxHeight);
      scrollPosition.currentPerc = (scrollPosition.current / maxHeight) * 100;
      console.log(scrollPosition.currentPerc);

      return scrollPosition;
    },
  },
});

export const { setScrollPosition } = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;
