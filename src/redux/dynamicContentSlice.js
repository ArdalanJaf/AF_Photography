import { createSlice } from "@reduxjs/toolkit";

export const dynamicContentSlice = createSlice({
  name: "dynamicContent",
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

      newCopy[action.payload.label] = [action.payload.value];

      console.log(newCopy);
      return newCopy;
    },
  },
});

export const { setNewContent } = dynamicContentSlice.actions;

export default dynamicContentSlice.reducer;
