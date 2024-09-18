import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import newGroupSlice from "./newGroup";
import openGroupSlice from "./openGroup";

const store = configureStore({
  reducer: {
    open: newGroupSlice,
    updateGroupId: openGroupSlice,
  },
});
setupListeners(store.dispatch);
export default store;
