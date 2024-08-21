import { createSlice } from "@reduxjs/toolkit";

const newGroupSlice = createSlice({
  name: "newGroup",
  initialState: {
    open: false,
  },
  reducers: {
    open(state) {
      state.open = !state.open;
    },
  },
});

export const { open } = newGroupSlice.actions;
export default newGroupSlice.reducer;
