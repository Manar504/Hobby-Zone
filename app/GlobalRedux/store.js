import { configureStore } from "@reduxjs/toolkit";
import CoursesSlice from "./allcoursesSlice"



export const Store = configureStore({
    reducer :{
        courses : CoursesSlice ,
        // cart : cartSlice.reducer,
    },
});