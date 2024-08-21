import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import newGroupSlice from "./newGroup";

const store = configureStore({
  reducer: {
    open: newGroupSlice,
  },
});
setupListeners(store.dispatch);
export default store;
