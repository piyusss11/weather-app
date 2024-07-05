import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice"
const appStore = configureStore({
    reducer:{
        city:cityReducer,
    }
})
export default appStore