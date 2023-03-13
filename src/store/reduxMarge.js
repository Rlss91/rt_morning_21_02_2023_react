import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    counterStore: counterReducer,
  },
});
export default store;
