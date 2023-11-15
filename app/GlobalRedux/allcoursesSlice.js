

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const fetchProducts = createAsyncThunk("ProductSlice/fetchProducts" , async ()=>{
//     const res = await fetch ( 'https://fakestoreapi.com/products');
//     const data = res.json();
//     console.log(data);
// });
   export const fetchCourses = createAsyncThunk("coursesSlice/fetchCourses",async ()=>{
      const response =  await axios.post(`https://hobby-zone.kirellos.com/api/V1/allCourses`,{});
      console.log(response.status);
      return response.data ;
    })
const CoursesSlice = createSlice({
     name:"coursesSlice",
     initialState: [],
     reducers:{
        
     },
        extraReducers : (builder)=>{
        builder.addCase(fetchCourses.fulfilled , (state,action)=>{
             return action.payload ;
        })
     }
     
});

  export default CoursesSlice.reducer;
