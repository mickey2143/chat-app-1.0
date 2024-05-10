import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import numSlice from "./num";

const store = configureStore({
  reducer: {
    num: numSlice,
  },
});
setupListeners(store.dispatch);
export default store;
