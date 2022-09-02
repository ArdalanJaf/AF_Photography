import { createSlice } from "@reduxjs/toolkit";

export const dynamicContentSlice = createSlice({
  name: "dynamicContent",
  initialState: {
    active: {
      title: "",
      imageLinks: [""],
      slideShow: true, // false = carousel
      entryTimeStamp: null,
      updateTimeStamp: null,
      // hide: false,
    },
    content: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.active.title = action.payload;
    },
    setImageLink: (state, action) => {
      state.active.imageLinks[action.payload.index] = action.payload.value;
    },
    delImageLink: (state, action) => {
      state.active.imageLinks.splice(action.payload, 1);
    },
    addImageLink: (state) => {
      state.active.imageLinks.push("");
    },
    upImageLink: (state, action) => {
      let iL = state.active.imageLinks.splice(action.payload, 1)[0];
      state.active.imageLinks.splice(action.payload - 1, 0, iL);
    },
    downImageLink: (state, action) => {
      let iL = state.active.imageLinks.splice(action.payload, 1)[0];
      state.active.imageLinks.splice(action.payload + 1, 0, iL);
    },
    setSlideShow: (state, action) => {
      state.active.slideShow = action.payload;
    },
    setTimeStamp: (state) => {
      let now = Date.now();
      if (!state.active.entryTimeStamp) {
        state.active.entryTimeStamp = now;
      } else {
        state.active.updateTimeStamp = now;
      }
    },
  },
});

export const {
  setTitle,
  setImageLink,
  delImageLink,
  addImageLink,
  upImageLink,
  downImageLink,
  setSlideShow,
  setTimeStamp,
} = dynamicContentSlice.actions;

export default dynamicContentSlice.reducer;
