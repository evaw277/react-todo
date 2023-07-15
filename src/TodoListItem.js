import React from "react";

export default function TodoListItem({ todo, removeTodo }) {
  return (
    <li>
      {todo} <button onClick={() => removeTodo(todo)}>Remove</button>
    </li>
  );
}
