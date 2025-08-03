import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
  name: "data",
  initialState: [],

  reducers: {
    addData(state, action) {
      return action.payload;
    },
    removeData(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const dataActions = dataSlice.actions;
export default dataSlice;
