import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../reducers/todoSlice";


export let store = configureStore({
    reducer : {Todos : todoReducer}
      
    
})