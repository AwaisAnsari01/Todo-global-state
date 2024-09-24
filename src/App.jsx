import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo  } from './config/reducers/todoSlice'

function App() {
let inpVal = useRef()
const selector = useSelector((state) => state.Todos.todo)
console.log(selector);

// console.log(selector);

let dispatch = useDispatch()

function addTodoInRedux(event){
  event.preventDefault()
  dispatch(addTodo({
    title: inpVal.current.value
    
  }))

  inpVal.current.value = ""
  
}

function deleteTodoFromRedux(index){
  
  dispatch(removeTodo({
    index : index
  }))
  
}

function editTodoFromRedux(index) {
  let updatedTitle = prompt('Enter updated value');
  
  if (updatedTitle) { // Check if the user provided a new value
    dispatch(editTodo({
      index: index,
      edit: updatedTitle
    }));
  }
}



  return (
    <>
     <form > 
<input type="text" ref={inpVal} />
<button onClick={addTodoInRedux}>add</button>
    </form>

{selector.length > 0 ? selector.map((item ,index)=>{
return <div key={index}>
  <p >{item.title}  </p>
  <button onClick={()=>deleteTodoFromRedux(index)}>remove</button>
  <button onClick={()=>editTodoFromRedux(index)}>edit</button>

</div>
}): <h2>!no data found</h2>}



    </>
   
  )
}

export default App