
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy React app', completed: false }
  ]);


  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };
  

  return (
    <div>
      <h1>Todo List</h1>
      {/* Render TodoList component and pass todos and handleComplete function */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;




