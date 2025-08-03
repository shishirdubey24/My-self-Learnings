import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Dataslice";
import statusSlice from "./Statusslice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    status: statusSlice.reducer,
  },
});
export default store;
