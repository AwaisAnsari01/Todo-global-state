import { createSlice, nanoid } from "@reduxjs/toolkit";

export let todoSlice = createSlice({
    name : "Todos" ,
    initialState : {
        todo : []
    },
    reducers : {
        // add todo function 
        addTodo : (state , action) =>{
            state.todo.push(
                {
                    title : action.payload.title,
                    id : nanoid()
                })
        } ,

        // remove todo function 
        removeTodo : (state ,action)=>{
state.todo.splice(action.payload.index , 1)
        },
        editTodo : (state ,action)=>{
           state.todo[action.payload.index].title = action.payload.edit
                    }

    }
})


export const {addTodo , removeTodo ,editTodo} = todoSlice.actions
export default todoSlice.reducer