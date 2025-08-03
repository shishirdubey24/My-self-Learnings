import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    currentFetching: false,
    fetchDone: false,
    fetchFailed: false,
  },
  reducers: {
    fetchStarted: (state) => {
      state.currentFetching = true;
    },
    fetchSuccess: (state) => {
      state.fetchDone = true;
      state.currentFetching = false;
    },
    fetchFailed: (state) => {
      state.fetchFailed = true;
      state.currentFetching = false;
    },
  },
});
export const statusActions = statusSlice.actions;
export default statusSlice;
