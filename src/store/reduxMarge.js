import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import latterReducer from "./latter";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    latterStore: latterReducer,
  },
});
export default store;
