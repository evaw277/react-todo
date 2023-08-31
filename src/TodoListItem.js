import React from "react";
import styles from "./TodoListItem.module.css";

export default function TodoListItem({ todo, removeTodo }) {
  return (
    <li className={styles.ListItem}>
      {todo.title} <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}
