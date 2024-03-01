import React, { useState } from "react";


function TodoList(todos, buttonChange) {
    const [btn,setbtn]=useState("")
    function handleChange(id){
         
       console.log(id)
      todos. buttonChange(id)
        
    }
    return (
        
      <ul>
        <li>{todos.text}</li>
        <button onClick={(e)=>handleChange(todos.id)}>click</button>
      </ul>
    );
  }

export default TodoList
