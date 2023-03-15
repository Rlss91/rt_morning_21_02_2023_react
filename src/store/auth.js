import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions) {
      state.userInfo = actions.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.clear();
      return initialState;
    },
  },
});

/*
    export the actions (the functions that will manipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/manipulate the "state".
*/
export const authActions = authSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default authSlice.reducer;
