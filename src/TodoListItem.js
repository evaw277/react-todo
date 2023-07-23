import React from "react";

export default function TodoListItem({ todo, removeTodo }) {
  return (
    <li>
      {todo.title} <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}
