import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import graphReducer from "./graphSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    city: cityReducer,
    graph: graphReducer,
  },
});
export default appStore;
