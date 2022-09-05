import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    active: {
      title: "",
      imageLinks: [""],
      slideShow: true, // false = carousel
      entryTimeStamp: null,
      updateTimeStamp: null,
      // hide: false,
    },
    library: [
      {
        title: "Title Goes Here",
        imageLinks: [
          "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
          "https://techcrunch.com/wp-content/uploads/2022/06/Weird-Stock-Photography-Haje-Kamps-websize.jpeg",
          "https://static.boredpanda.com/blog/wp-content/uploads/2021/03/funny-weird-wtf-stock-photos-28-5a3a5b135f099__700-603e8e17800ae__700.jpg",
        ],
        slideShow: true, // false = carousel
        entryTimeStamp: null,
        updateTimeStamp: null,
        // hide: false,
      },
      {
        title: "Title Goes Here",
        imageLinks: [
          "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
          "https://techcrunch.com/wp-content/uploads/2022/06/Weird-Stock-Photography-Haje-Kamps-websize.jpeg",
          "https://static.boredpanda.com/blog/wp-content/uploads/2021/03/funny-weird-wtf-stock-photos-28-5a3a5b135f099__700-603e8e17800ae__700.jpg",
        ],
        slideShow: false, // false = carousel
        entryTimeStamp: null,
        updateTimeStamp: null,
        // hide: false,
      },
    ],
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
      console.log(now);
      console.log(state.active.entryTimeStamp === null ? true : false);
      if (state.active.entryTimeStamp === null) {
        state.active.entryTimeStamp = now;
      } else {
        state.active.updateTimeStamp = now;
      }
    },
    cleanImageLinks: (state) => {
      state.active.imageLinks = state.active.imageLinks.filter(
        (iL) => iL.length > 0
      );
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
  cleanImageLinks,
} = contentSlice.actions;

export default contentSlice.reducer;
