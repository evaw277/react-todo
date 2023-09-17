import React from "react";
import styles from "../TodoListItem.module.css";
import PropTypes from "prop-types";

export default function TodoListItem({ todo, removeTodo }) {
  return (
    <li className={styles.ListItem}>
      <button
        className={styles.RemoveButton}
        onClick={() => removeTodo(todo.id)}
      >
        Remove
      </button>{" "}
      {todo.title}
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
};
