
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
  let todo=[
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy React app', completed: false }
  ]
  const [todos, setTodos] = useState(todo);

  function buttonChange(id){
     console.log(id,"parent")
     setTodos(todos.filter((item)=>id!==item.id))
  }


  

  return (
    <div>
      <h1>Todo List</h1>
      {/* Render TodoList component and pass to dos and handleComplete function */}
      {todos.map((todo)=><TodoList  key={todo.key} id={todo.id} text={todo.text}
       buttonChange={buttonChange}completeState={todo.completed} />)
        }
      
    </div>
  );
}

export default App;




