import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice"
import graphReducer from "./graphSlice"
const appStore = configureStore({
    reducer:{
        city:cityReducer,
        graph:graphReducer,
    }
})
export default appStore