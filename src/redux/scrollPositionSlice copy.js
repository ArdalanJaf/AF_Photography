import { createSlice } from "@reduxjs/toolkit";

export const createContentSlice = createSlice({
  name: "contentFeed",
  initialState: {
    new: {
      title: "",
      imageLinks: [],
      dateAdded: "",
    },
    content: [],
  },
  reducers: {
    setNewContent: (state, action) => {
      let newCopy = { ...state.new };
      //   console.log(createContent);

      new
    

      if (createContent.current !== action.payload.current) {
        createContent.prev = createContent.current;
      }
      createContent.current = action.payload.current;

      let maxHeight = document.body.clientHeight;
      //   let maxHeight = window.innerHeight;
      //   console.log(maxHeight);
      createContent.currentPerc = (createContent.current / maxHeight) * 100;
      console.log(createContent.currentPerc);

      return createContent;
    },
  },
});

export const { setNewContent } = createContentSlice.actions;

export default createContentSlice.reducer;
