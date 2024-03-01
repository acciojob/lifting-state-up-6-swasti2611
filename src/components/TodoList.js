import React from "react";
function TodoList({ todos, handleComplete }) {
    return (
      <ul>
        {/* Map through todos and render each todo item */}
        {todos.map(todo => (
          <li key={todo.id}>
            {/* Display todo text */}
            {todo.text}
            {/* Render Complete button for incomplete todos */}
          {
            !todo.completed && <button onClick={() => handleComplete(todo.id)}>Complete</button>
          }
              
           
          </li>
        ))}
      </ul>
    );
  }

export default TodoList
