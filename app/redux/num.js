import { createSlice } from "@reduxjs/toolkit";

const numSlice = createSlice({
  name: "num",
  initialState: {
    num: 32,
  },
  reducers: {
    add(state, action) {
      state.num += action.payload;
      console.log("cliked");
    },
  },
});

export const { add } = numSlice.actions;
export default numSlice.reducer;
