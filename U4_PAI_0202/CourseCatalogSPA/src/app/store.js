import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../redux/productSlice"
export const store=configureStore({
    reducer:{
        data:fetchReducer
    }
})