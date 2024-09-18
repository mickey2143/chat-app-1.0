import { createSlice } from "@reduxjs/toolkit";

const openGroupSlice = createSlice({
  name: "openGroup",
  initialState: {
    groupId: false,
  },
  reducers: {
    setId(state, actions) {
      state.groupId = actions.payload;
    },
  },
});

export const { setId } = openGroupSlice.actions;
export default openGroupSlice.reducer;
