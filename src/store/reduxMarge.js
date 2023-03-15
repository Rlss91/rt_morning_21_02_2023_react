import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import latterReducer from "./latter";
import authReducer from "./auth";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    latterStore: latterReducer,
    authStore: authReducer,
  },
});
export default store;
