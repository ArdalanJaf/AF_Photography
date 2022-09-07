import { createSlice } from "@reduxjs/toolkit";
import { getUniqueId } from "../utils";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    active: {
      id: "",
      title: "",
      imageLinks: [""],
      format: 0, // 0 = slideshow 1 = carousel
      sortOrder: 0,
      // hide: false,
      entryTimestamp: 0,
      updateTimestamp: 0,
    },
    activeUtil: {
      readyToPublish: false,
      existingContent: false,
    },
    library: [
      {
        title: "Title Goes Here1",
        imageLinks: [
          "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
          "https://techcrunch.com/wp-content/uploads/2022/06/Weird-Stock-Photography-Haje-Kamps-websize.jpeg",
          "https://static.boredpanda.com/blog/wp-content/uploads/2021/03/funny-weird-wtf-stock-photos-28-5a3a5b135f099__700-603e8e17800ae__700.jpg",
        ],
        format: 0,
        entryTimestamp: 1662487587289,
        updateTimestamp: 0,
        hide: false,
        id: "blalvblalasf",
        sortOrder: 0,
      },
      {
        title: "Title Goes Here2",
        imageLinks: [
          "https://techcrunch.com/wp-content/uploads/2022/06/Weird-Stock-Photography-Haje-Kamps-websize.jpeg",
          "https://static.boredpanda.com/blog/wp-content/uploads/2021/03/funny-weird-wtf-stock-photos-28-5a3a5b135f099__700-603e8e17800ae__700.jpg",
          "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
        ],
        format: 1,
        entryTimestamp: 1662187230491,
        updateTimestamp: 0,
        id: "q1qhqrhqwrhiq",
        hide: false,
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
    setFormat: (state, action) => {
      state.active.format = action.payload;
    },
    // setHide: (state, action) => {
    //   state.active.hide = action.payload;
    // },
    prepForSave: (state) => {
      // apply entry/update time stamp
      let now = Date.now();
      if (!state.active.entryTimestamp) {
        state.active.entryTimestamp = now;
      } else {
        state.active.updateTimestamp = now;
      }
      // clear empty image links
      state.active.imageLinks = state.active.imageLinks.filter(
        (iL) => iL.length > 0
      );
      // add ID if new content
      if (!state.active.id) state.active.id = getUniqueId();
      // initiate save to local db and db
      state.activeUtil.readyToPublish = true;
    },
    resetReadyToPublish: (state) => {
      state.activeUtil.readyToPublish = false;
    },
    setActive: (state, action) => {
      state.active = state.library[action.payload];
      state.activeUtil.existingContent = true;
    },
    resetActive: (state) => {
      state.active = {
        id: "",
        title: "",
        imageLinks: [""],
        format: 0, // 0 = slideshow 1 = carousel
        sortOrder: 0,
        // hide: false,
        entryTimestamp: 0,
        updateTimestamp: 0,
      };
      state.activeUtil.existingContent = false;
    },
    saveToLibrary: (state, action) => {
      // if new content, add to begining of library, else update content in library
      if (state.activeUtil.existingContent) {
        state.library[
          state.library.findIndex((content) => content.id === action.payload.id)
        ] = action.payload;
      } else {
        state.library.unshift(action.payload);
        state.activeUtil.existingContent = true;
      }
    },
    delContent: (state, action) => {
      state.library.splice(
        state.library.findIndex((content) => content.id === action.payload.id),
        1
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
  setFormat,
  setHide,
  prepForSave,
  resetReadyToPublish,
  setActive,
  resetActive,
  saveToLibrary,
  delContent,
} = contentSlice.actions;

export default contentSlice.reducer;
