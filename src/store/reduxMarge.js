import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

const store = configureStore({
  reducer: {
    counterStore: counterReducer,
  },
});
export default store;
